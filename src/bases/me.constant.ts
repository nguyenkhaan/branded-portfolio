//work sections
import jobportal from '../assets/work/jobportal.jpeg';
import rainyword from '../assets/work/rainywordcoder.png';
import portfolio from '../assets/work/portfolio.png';

export const works = [
    {
        name: 'My Job',
        description: 'Job Portal Website',
        year: 2026,
        image: jobportal,
        link: 'http://localhost:3000',
    },
    {
        name: 'Rainy Word Adventure',
        description: 'English learning website',
        year: 2025,
        image: rainyword,
        link: 'https://rainywords.uit.edu.vn/hcm-linhxuan',
    },
    {
        name: 'Cloudian',
        description: 'Personal Portfolio',
        year: 2026,
        image: portfolio,
        link: 'http://localhost:3000',
    },
];

export const technologies = [
    // Programming Languages
    {
        name: 'Python',
        icon: 'python',
    },
    {
        name: 'JavaScript',
        icon: 'js',
    },
    {
        name: 'TypeScript',
        icon: 'typescript',
    },
    {
        name: 'Java',
        icon: 'java',
    },

    // Frontend
    {
        name: 'React',
        icon: 'react',
    },
    {
        name: 'Tailwind CSS',
        icon: 'tailwindcss',
    },

    // Backend
    {
        name: 'FastAPI',
        icon: 'fastgpt',
    },
    {
        name: 'ExpressJS',
        icon: 'expressjs',
    },
    {
        name: 'NestJS',
        icon: 'nestjs',
    },
    {
        name: 'Spring',
        icon: 'spring',
    },
    {
        name: 'PostgreSQL',
        icon: 'postgresql',
    },

    // DevOps & Infrastructure
    {
        name: 'Linux',
        icon: 'linux',
    },
    {
        name: 'Docker',
        icon: 'docker',
    },

    // Tools & Platforms
    {
        name: 'BunJS',
        icon: 'bunjs',
    },
    {
        name: 'GitHub',
        icon: 'github',
    },
    {
        name: 'Google Colab',
        icon: 'colab',
    },
];
export const CONTACT_EMAIL : string = 'mailto:nguyenkhaan2006@gmail.com'

export const openSourceSection = {
    eyebrow: 'Open Source',
    title: 'Building in Public',
    githubLabel: 'View GitHub Profile',
    githubUrl: 'https://github.com/',
    featuredRepositoriesLabel: 'Featured Repositories',
    stats: [
        {
            icon: 'repositories',
            value: 10,
            suffix: '+',
            label: 'Repositories',
        },
        {
            icon: 'stars',
            value: 50,
            suffix: '+',
            label: 'Stars Earned',
        },
        {
            icon: 'forks',
            value: 15,
            suffix: '+',
            label: 'Forks',
        },
        {
            icon: 'contributions',
            value: 500,
            suffix: '+',
            label: 'Contributions',
        },
    ],
    repositories: [
        {
            name: 'habitquest',
            description:
                'Gamified habit tracker with social squads, boss battles & achievements.',
            stars: 25,
            language: 'TypeScript',
            languageColor: '#3b82f6',
            url: 'https://github.com/',
        },
        {
            name: 'emoji-kit',
            description:
                'Premium animated emoji library for React applications with smooth framer-motion interactions.',
            stars: 15,
            language: 'TypeScript',
            languageColor: '#3b82f6',
            url: 'https://github.com/',
        },
        {
            name: 'insta-p8',
            description:
                'Open source platform architecture and modular implementation patterns.',
            stars: 32,
            language: 'TypeScript',
            languageColor: '#3b82f6',
            url: 'https://github.com/',
        },
    ],
} as const;

export const contacts = [
    {
        name: 'github',
        link: 'https://github.com',
    },
    {
        name: 'linkedln',
        link: 'https://github.com',
    },
    {
        name: 'facebook',
        link: 'https://github.com',
    },
    {
        name: 'read cv',
        link: 'https://github.com',
    },
];
