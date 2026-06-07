export const luxuryEase = [0.22, 1, 0.36, 1] as const;

export const luxuryRevealTransition = {
    duration: 1.2,
    ease: luxuryEase,
} as const;

export const revealViewport = {
    once: true,
    amount: 0.15,
} as const;
