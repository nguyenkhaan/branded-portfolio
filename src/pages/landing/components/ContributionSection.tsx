import { motion, useReducedMotion } from 'framer-motion';
import {
    ArrowUpRight,
    Code2,
    GitFork,
    SquareTerminal,
    Star,
    TrendingUp,
} from 'lucide-react';

import { openSourceSection } from '../../../bases/me.constant';
import { luxuryEase, luxuryRevealTransition, revealViewport } from '../../../lib/animation';
import Section from '../../../layouts/Section';
import AnimatedCounter from './AnimatedCounter';

type StatItem = (typeof openSourceSection.stats)[number];
type RepositoryItem = (typeof openSourceSection.repositories)[number];

const hoverTransition = {
    duration: 0.46,
    ease: luxuryEase,
} as const;

function StatIcon({ icon }: { icon: StatItem['icon'] }) {
    const iconClassName = 'h-5 w-5 text-text-secondary';

    switch (icon) {
        case 'repositories':
            return <Code2 className={iconClassName} />;
        case 'stars':
            return <Star className={iconClassName} />;
        case 'forks':
            return <GitFork className={iconClassName} />;
        case 'contributions':
            return <TrendingUp className={iconClassName} />;
        default:
            return null;
    }
}

function StatisticCard({
    stat,
    delay,
}: {
    stat: StatItem;
    delay: number;
}) {
    const prefersReducedMotion = useReducedMotion();

    return (
        <motion.div
            whileHover={{ y: -4, transition: hoverTransition }}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={revealViewport}
            transition={{ ...luxuryRevealTransition, delay }}
            className="border border-border bg-[linear-gradient(180deg,rgba(255,255,255,0.025)_0%,rgba(255,255,255,0.01)_100%)] px-5 py-6 sm:px-6 sm:py-7"
        >
            <StatIcon icon={stat.icon} />
            <div className="mt-6 sm:mt-8">
                <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    className="font-sans text-[2rem] leading-none tracking-tight text-text sm:text-[2.15rem]"
                />
                <p className="mt-3 font-space text-xs font-medium tracking-[0.12em] text-text-secondary uppercase sm:text-sm">
                    {stat.label}
                </p>
            </div>
        </motion.div>
    );
}

function RepositoryCard({
    repository,
    delay,
}: {
    repository: RepositoryItem;
    delay: number;
}) {
    const prefersReducedMotion = useReducedMotion();

    return (
        <motion.a
            href={repository.url}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -4, transition: hoverTransition }}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={revealViewport}
            transition={{ ...luxuryRevealTransition, delay }}
            className="group flex min-h-56 flex-col border border-border px-5 py-6 sm:min-h-64 sm:px-6 sm:py-7"
        >
            <div className="flex items-start justify-between gap-6">
                <h3 className="font-space text-[1.25rem] tracking-tight text-text sm:text-[1.45rem]">
                    {repository.name}
                </h3>
                    <span className="flex items-center gap-2 font-space text-xs tracking-wide text-text-secondary sm:text-sm">
                        <Star className="h-4 w-4 transition-colors duration-300 lg:group-hover:text-text" />
                        {repository.stars}
                </span>
            </div>
            <p className="mt-6 max-w-[30ch] font-sans text-base leading-relaxed tracking-tight text-text-secondary sm:mt-8 sm:text-[1.08rem]">
                {repository.description}
            </p>
            <div className="mt-auto flex items-center justify-between pt-8 sm:pt-10">
                <span className="flex items-center gap-3 font-space text-xs tracking-wide text-text-secondary sm:text-sm">
                    <span
                        className="h-2.5 w-2.5 rounded-full"
                        style={{ backgroundColor: repository.languageColor }}
                    />
                    {repository.language}
                </span>
                <ArrowUpRight className="h-5 w-5 text-text-secondary transition-all duration-300 lg:group-hover:-translate-y-0.5 lg:group-hover:translate-x-0.5 lg:group-hover:text-text" />
            </div>
        </motion.a>
    );
}

export default function ContributionSection() {
    return (
        <Section
            header={
                <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                        <p className="flex items-center gap-2 font-space text-xs font-semibold tracking-[0.16em] text-text-secondary uppercase sm:text-sm">
                            <SquareTerminal className="h-4 w-4" />
                            <span>{openSourceSection.eyebrow}</span>
                        </p>
                        <h1 className="mt-4 font-syne text-[2.5rem] font-bold tracking-tight text-text sm:text-[3rem] lg:text-[4rem]">
                            {openSourceSection.title}
                        </h1>
                    </div>
                    <a
                        href={openSourceSection.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-h-11 items-center justify-center self-start rounded-full border border-border px-6 py-3 font-space text-xs font-medium tracking-[0.12em] text-text uppercase transition-colors duration-300 sm:px-8 sm:text-sm lg:hover:border-white/25 lg:hover:bg-white/4"
                    >
                        {openSourceSection.githubLabel}
                    </a>
                </div>
            }
        >
            <div className="mt-8 sm:mt-10">
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    {openSourceSection.stats.map((stat, index) => (
                        <StatisticCard key={stat.label} stat={stat} delay={index * 0.1} />
                    ))}
                </div>

                <div className="flex items-center justify-center py-6 sm:py-7">
                    <span className="h-2 w-2 rounded-full bg-white" />
                </div>

                <div className="flex items-center gap-4 sm:gap-5">
                    <span className="shrink-0 font-space text-xs font-semibold tracking-[0.16em] text-text-secondary uppercase sm:text-sm">
                        {openSourceSection.featuredRepositoriesLabel}
                    </span>
                    <span className="h-px w-full bg-border" />
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2 lg:mt-8 lg:grid-cols-3 lg:gap-5">
                    {openSourceSection.repositories.map((repository, index) => (
                        <RepositoryCard
                            key={repository.name}
                            repository={repository}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </div>
        </Section>
    );
}
