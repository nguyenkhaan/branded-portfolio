//work sections
import jobportal from '../assets/work/jobportal.jpeg';
import rainyword from '../assets/work/rainywordcoder.png';
import portfolio from '../assets/work/portfolio.png';
import dtit from '../assets/work/dtit.png'
export const works = [
    {
        name: 'Cloudian The Dev',
        description: 'Personal Portfolio',
        year: 2026,
        image: portfolio,
        link: 'https://me.cloudian.io.vn',
    },
    {
        name: 'Rainy Word Adventure',
        description: 'English learning website',
        year: 2025,
        image: rainyword,
        link: 'https://rainywords.uit.edu.vn/hcm-linhxuan',
    },
    {
        name: 'ĐTIT 2026',
        description: 'Competition Portal',
        year: 2026,
        image: dtit,
        link: 'https://dtit2026.bhtcnpm.com/',
    },
    {
        name: 'My Job',
        description: 'Job Portal Service',
        year: 2026,
        image: jobportal,
        link: 'https://github.com/nguyenkhaan/JobPortalBE',
    },
];
import sound from '../assets/sound.mp3'
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
export const CONTACT_EMAIL: string = 'mailto:nguyenkhaan2006@gmail.com';

export const openSourceSection = {
    eyebrow: 'Open Source',
    title: 'Building in Public',
    githubLabel: 'View GitHub Profile',
    githubUrl: 'https://github.com/nguyenkhaan',
    featuredRepositoriesLabel: 'Featured Repositories',
    stats: [
        {
            icon: 'repositories',
            value: 50,
            suffix: '+',
            label: 'Repositories',
        },
        {
            icon: 'stars',
            value: 10,
            suffix: '+',
            label: 'Stars Earned',
        },
        {
            icon: 'forks',
            value: 10,
            suffix: '+',
            label: 'Forks',
        },
        {
            icon: 'contributions',
            value: 1500,
            suffix: '+',
            label: 'Commits',
        },
    ],
    repositories: [
        {
            name: 'JobPortalBE',
            description:
                'A job portal connecting employers with qualified candidates and helping job seekers discover career opportunities.',
            stars: 5,
            language: 'Java',
            languageColor: '#b07219',
            url: 'https://github.com/nguyenkhaan/JobPortalBE',
        },
        {
            name: 'BookstoreBE',
            description:
                'A bookstore management platform that helps companies manage book inventory, categories, orders, customers, and sales operations efficiently.',
            stars: 8,
            language: 'TypeScript',
            languageColor: '#3b82f6',
            url: 'https://github.com/',
        },
        {
            name: '-HomedAI-',
            description:
                'An open-source healthcare platform designed to support personal and family health management.',
            stars: 10,
            language: 'Python',
            languageColor: '#3572A5',
            url: 'https://github.com/nguyenkhaan/-HomeMedAI-',
        },
    ],
} as const;

export const contacts = [
    {
        name: 'github',
        link: 'https://github.com/nguyenkhaan',
    },
    {
        name: 'linkedln',
        link: 'https://www.linkedin.com/in/kha-nguyen-10515120b/',
    },
    {
        name: 'facebook',
        link: 'https://www.facebook.com/kha.an.907155?locale=vi_VN',
    },
    {
        name: 'read cv',
        link: 'https://drive.google.com/file/d/1bNODeFiAk1-YuFQ_m7PBQVgy6nIbR2M9/view?usp=sharing',
    },
];

export const portfolioBackgroundTrackUrl = sound 
