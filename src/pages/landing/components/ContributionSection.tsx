import { motion } from 'framer-motion';
import {
    ArrowUpRight,
    Code2,
    GitFork,
    SquareTerminal,
    Star,
    TrendingUp,
} from 'lucide-react';

import { openSourceSection } from '../../../bases/me.constant';
import Section from '../../../layouts/Section';
import AnimatedCounter from './AnimatedCounter';

type StatItem = (typeof openSourceSection.stats)[number];
type RepositoryItem = (typeof openSourceSection.repositories)[number];

const technicalEase = [0.22, 1, 0.36, 1] as const;

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

function StatisticCard({ stat }: { stat: StatItem }) {
    return (
        <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.38, ease: technicalEase }}
            className="border border-border bg-[linear-gradient(180deg,rgba(255,255,255,0.025)_0%,rgba(255,255,255,0.01)_100%)] px-7 py-7"
        >
            <StatIcon icon={stat.icon} />
            <div className="mt-8">
                <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    className="font-sans text-[2.15rem] leading-none tracking-tight text-text"
                />
                <p className="mt-3 font-space text-sm font-medium tracking-[0.12em] text-text-secondary uppercase">
                    {stat.label}
                </p>
            </div>
        </motion.div>
    );
}

function RepositoryCard({ repository }: { repository: RepositoryItem }) {
    return (
        <motion.a
            href={repository.url}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.38, ease: technicalEase }}
            className="group flex min-h-64 flex-col border border-border px-7 py-7"
        >
            <div className="flex items-start justify-between gap-6">
                <h3 className="font-space text-[1.45rem] tracking-tight text-text">
                    {repository.name}
                </h3>
                <span className="flex items-center gap-2 font-space text-sm tracking-wide text-text-secondary">
                    <Star className="h-4 w-4 transition-colors duration-300 group-hover:text-text" />
                    {repository.stars}
                </span>
            </div>
            <p className="mt-8 max-w-[30ch] font-sans text-[1.15rem] leading-relaxed tracking-tight text-text-secondary">
                {repository.description}
            </p>
            <div className="mt-auto flex items-center justify-between pt-10">
                <span className="flex items-center gap-3 font-space text-sm tracking-wide text-text-secondary">
                    <span
                        className="h-2.5 w-2.5 rounded-full"
                        style={{ backgroundColor: repository.languageColor }}
                    />
                    {repository.language}
                </span>
                <ArrowUpRight className="h-5 w-5 text-text-secondary transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-text" />
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
                        <p className="flex items-center gap-2 font-space text-sm font-semibold tracking-[0.16em] text-text-secondary uppercase">
                            <SquareTerminal className="h-4 w-4" />
                            <span>{openSourceSection.eyebrow}</span>
                        </p>
                        <h1 className="mt-4 font-syne text-[3rem] font-bold tracking-tight text-text lg:text-[4rem]">
                            {openSourceSection.title}
                        </h1>
                    </div>
                    <a
                        href={openSourceSection.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-full border border-border px-8 py-3 font-space text-sm font-medium tracking-[0.12em] text-text uppercase transition-colors duration-300 hover:border-white/25 hover:bg-white/4"
                    >
                        {openSourceSection.githubLabel}
                    </a>
                </div>
            }
        >
            <div className="mt-10">
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                    {openSourceSection.stats.map((stat) => (
                        <StatisticCard key={stat.label} stat={stat} />
                    ))}
                </div>

                <div className="flex items-center justify-center py-7">
                    <span className="h-2 w-2 rounded-full bg-white" />
                </div>

                <div className="flex items-center gap-5">
                    <span className="shrink-0 font-space text-sm font-semibold tracking-[0.16em] text-text-secondary uppercase">
                        {openSourceSection.featuredRepositoriesLabel}
                    </span>
                    <span className="h-px w-full bg-border" />
                </div>

                <div className="mt-8 grid gap-5 lg:grid-cols-3">
                    {openSourceSection.repositories.map((repository) => (
                        <RepositoryCard key={repository.name} repository={repository} />
                    ))}
                </div>
            </div>
        </Section>
    );
}
