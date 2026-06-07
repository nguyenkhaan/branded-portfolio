import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const DESKTOP_CURSOR_QUERY = '(min-width: 1024px) and (pointer: fine)';
const CURSOR_RADIUS = 37.8;
const CURSOR_SIZE = CURSOR_RADIUS * 2;
const PARTICLE_LIFETIME = 800;
const PARTICLE_OPACITY = 0.4;
const LEAD_LERP = 0.16;
const PARTICLE_SPAWN_INTERVAL = 20;
const MAX_PARTICLES = 24;

interface Particle {
    bornAt: number;
    driftX: number;
    driftY: number;
    follow: number;
    size: number;
    vx: number;
    vy: number;
    x: number;
    y: number;
}

function randomBetween(min: number, max: number) {
    return min + Math.random() * (max - min);
}

export default function DustCursor() {
    const prefersReducedMotion = useReducedMotion();
    const [isEnabled, setIsEnabled] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const isVisibleRef = useRef(false);
    const pointerRef = useRef({
        x: 0,
        y: 0,
    });
    const leaderRef = useRef({
        x: 0,
        y: 0,
    });
    const particlesRef = useRef<Particle[]>([]);
    const animationFrameRef = useRef<number | null>(null);
    const lastSpawnRef = useRef(0);

    const leadX = useMotionValue(-100);
    const leadY = useMotionValue(-100);
    const smoothLeadX = useSpring(leadX, {
        stiffness: 210,
        damping: 28,
        mass: 0.35,
    });
    const smoothLeadY = useSpring(leadY, {
        stiffness: 210,
        damping: 28,
        mass: 0.35,
    });

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }

        const mediaQuery = window.matchMedia(DESKTOP_CURSOR_QUERY);
        const syncAvailability = () => {
            setIsEnabled(mediaQuery.matches && !prefersReducedMotion);
        };

        syncAvailability();
        mediaQuery.addEventListener('change', syncAvailability);

        return () => mediaQuery.removeEventListener('change', syncAvailability);
    }, [prefersReducedMotion]);

    useEffect(() => {
        if (!isEnabled || typeof window === 'undefined') {
            document.documentElement.classList.remove('has-dust-cursor');
            return;
        }

        document.documentElement.classList.add('has-dust-cursor');
        pointerRef.current = {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
        };
        leaderRef.current = {
            x: pointerRef.current.x,
            y: pointerRef.current.y,
        };

        const canvas = canvasRef.current;
        const context = canvas?.getContext('2d');

        if (!canvas || !context) {
            return;
        }

        const canvasElement = canvas;
        const canvasContext = context;

        function resizeCanvas() {
            const pixelRatio = window.devicePixelRatio || 1;
            canvasElement.width = window.innerWidth * pixelRatio;
            canvasElement.height = window.innerHeight * pixelRatio;
            canvasElement.style.width = `${window.innerWidth}px`;
            canvasElement.style.height = `${window.innerHeight}px`;
            canvasContext.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
        }

        function spawnParticle(now: number) {
            const pointer = pointerRef.current;

            particlesRef.current.push({
                bornAt: now,
                driftX: randomBetween(-0.02, 0.02),
                driftY: randomBetween(-0.03, 0.03),
                follow: randomBetween(0.1, 0.18),
                size: randomBetween(2.4, 4.8),
                vx: randomBetween(-0.35, 0.35),
                vy: randomBetween(-0.45, 0.45),
                x: pointer.x + randomBetween(-6, 6),
                y: pointer.y + randomBetween(-6, 6),
            });

            if (particlesRef.current.length > MAX_PARTICLES) {
                particlesRef.current.shift();
            }
        }

        function drawFrame(now: number) {
            const leader = leaderRef.current;
            const pointer = pointerRef.current;

            leader.x += (pointer.x - leader.x) * LEAD_LERP;
            leader.y += (pointer.y - leader.y) * LEAD_LERP;

            leadX.set(leader.x - CURSOR_SIZE / 2);
            leadY.set(leader.y - CURSOR_SIZE / 2);

            canvasContext.clearRect(0, 0, window.innerWidth, window.innerHeight);

            if (
                isVisibleRef.current &&
                now - lastSpawnRef.current >= PARTICLE_SPAWN_INTERVAL
            ) {
                spawnParticle(now);
                lastSpawnRef.current = now;
            }

            particlesRef.current = particlesRef.current.filter((particle) => {
                const age = now - particle.bornAt;

                if (age > PARTICLE_LIFETIME) {
                    return false;
                }

                const progress = age / PARTICLE_LIFETIME;
                const scale = 1 - progress;

                particle.x += (leader.x - particle.x) * particle.follow + particle.vx;
                particle.y += (leader.y - particle.y) * particle.follow + particle.vy;
                particle.vx = (particle.vx + particle.driftX) * 0.94;
                particle.vy = (particle.vy + particle.driftY) * 0.94;

                canvasContext.beginPath();
                canvasContext.arc(
                    particle.x,
                    particle.y,
                    Math.max(0.1, particle.size * scale),
                    0,
                    Math.PI * 2,
                );
                canvasContext.fillStyle = `rgba(255, 255, 255, ${
                    PARTICLE_OPACITY * (1 - progress)
                })`;
                canvasContext.fill();

                return true;
            });

            animationFrameRef.current = window.requestAnimationFrame(drawFrame);
        }

        function handlePointerMove(event: PointerEvent) {
            pointerRef.current = {
                x: event.clientX,
                y: event.clientY,
            };
            isVisibleRef.current = true;
            setIsVisible(true);
        }

        function handlePointerLeave() {
            isVisibleRef.current = false;
            setIsVisible(false);
        }

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('pointermove', handlePointerMove);
        window.addEventListener('pointerleave', handlePointerLeave);
        animationFrameRef.current = window.requestAnimationFrame(drawFrame);

        return () => {
            document.documentElement.classList.remove('has-dust-cursor');
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('pointermove', handlePointerMove);
            window.removeEventListener('pointerleave', handlePointerLeave);

            if (animationFrameRef.current !== null) {
                window.cancelAnimationFrame(animationFrameRef.current);
            }

            canvasContext.clearRect(0, 0, window.innerWidth, window.innerHeight);
            particlesRef.current = [];
        };
    }, [isEnabled, leadX, leadY]);

    if (!isEnabled) {
        return null;
    }

    return (
        <>
            <canvas
                ref={canvasRef}
                className="pointer-events-none fixed inset-0 z-[90]"
                aria-hidden="true"
            />
            <motion.div
                aria-hidden="true"
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                style={{
                    x: smoothLeadX,
                    y: smoothLeadY,
                    width: CURSOR_SIZE,
                    height: CURSOR_SIZE,
                }}
                className="pointer-events-none fixed left-0 top-0 z-[100] rounded-full bg-white mix-blend-difference"
            />
        </>
    );
}
