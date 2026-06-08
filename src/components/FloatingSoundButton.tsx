import { motion } from 'framer-motion';
import { Pause, Volume2 } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import { portfolioBackgroundTrackUrl } from '../bases/me.constant';

export default function FloatingSoundButton() {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const audio = new Audio(portfolioBackgroundTrackUrl);

        audio.loop = true;
        audio.preload = 'none';
        audio.volume = 0.42;

        const syncPlayingState = () => setIsPlaying(!audio.paused);

        audio.addEventListener('play', syncPlayingState);
        audio.addEventListener('pause', syncPlayingState);
        audio.addEventListener('ended', syncPlayingState);

        audioRef.current = audio;

        return () => {
            audio.pause();
            audio.currentTime = 0;
            audio.removeEventListener('play', syncPlayingState);
            audio.removeEventListener('pause', syncPlayingState);
            audio.removeEventListener('ended', syncPlayingState);
            audioRef.current = null;
        };
    }, []);

    const handleToggleAudio = async () => {
        const audio = audioRef.current;

        if (!audio) {
            return;
        }

        if (audio.paused) {
            try {
                await audio.play();
            } catch (error) {
                setIsPlaying(false);
                console.error('Unable to start playback.', error);
            }
            return;
        }

        audio.pause();
    };

    return (
        <motion.button
            type="button"
            onClick={handleToggleAudio}
            whileHover={{ y: -3, scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            aria-pressed={isPlaying}
            aria-label={isPlaying ? 'Pause background music' : 'Play background music'}
            className="fixed right-5 bottom-5 z-[70] flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.16),rgba(255,255,255,0.03)_58%,rgba(0,0,0,0.34)_100%)] text-white shadow-[0_18px_45px_rgba(0,0,0,0.38)] backdrop-blur-xl transition-colors duration-300 hover:border-white/30 sm:right-7 sm:bottom-7 sm:h-16 sm:w-16"
        >
            <motion.span
                animate={
                    isPlaying
                        ? {
                              scale: [1, 1.1, 1],
                              opacity: [0.88, 1, 0.88],
                          }
                        : { scale: 1, opacity: 0.9 }
                }
                transition={
                    isPlaying
                        ? {
                              duration: 1.8,
                              repeat: Infinity,
                              ease: 'easeInOut',
                          }
                        : { duration: 0.2 }
                }
                className="absolute inset-0 rounded-full border border-white/10"
            />
            <span className="relative flex items-center justify-center">
                {isPlaying ? (
                    <Pause className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.1} />
                ) : (
                    <Volume2 className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.1} />
                )}
            </span>
        </motion.button>
    );
}
