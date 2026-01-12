import { PersonalInfo, Project, Experience, Education, Tools } from '@/types';

export const personalInfo: PersonalInfo = {
  name: 'Miguel Ferreira',
  title: 'Frontend Developer',
  age: 29,
  location: 'Porto, Portugal',
  bio: 'A Front-end developer passionate about creating solutions for every day problems.',
  tagline: "I'm a Frontend Developer & skilled in",
  photo: '/images/photo.png',
  socialLinks: [
    {
      name: 'GitHub',
      url: 'https://github.com/QWin13PT',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/miguelantf/',
    },
    {
      name: 'Twitter',
      url: 'https://x.com/QWinPT',
    },
    // Add more social links as needed
  ],
};

export const projects: Project[] = [
  {
    id: 'svelta',
    title: 'Svelta',
    smallDescription: 'A wellness app for women',
    description:
      'Svelta is a comprehensive wellness application designed specifically for women, focusing on holistic health tracking, personalized workout routines, and nutrition guidance. The app features an intuitive dashboard for tracking daily progress, goal setting, and community engagement. Built with a mobile-first approach using React Native and Expo, it delivers a seamless experience across iOS and Android platforms.',
    background: '/projects/svelta/background.jpg',
    images: [],
    technologies: ['React Native', 'Expo', 'Supabase', 'Next.js', 'Figma'],
    category: ['App', 'Dashboard'],
    liveUrl: 'https://www.svelta.app',
    featured: true,
  },
  {
    id: 'forge',
    title: 'Forge',
    smallDescription: 'A fitness and workout app',
    description:
      'Forge is a powerful fitness application that helps users build and maintain their workout routines. It features customizable workout plans, exercise libraries with video demonstrations, progress tracking with detailed analytics, and social features for motivation. The app includes an admin dashboard for content management and user analytics, built with Next.js and Supabase for real-time data synchronization.',
    background: '/projects/forge/background.jpg',
    images: [],
    technologies: ['React Native', 'Expo', 'Supabase', 'Next.js', 'Figma'],
    category: ['App', 'Dashboard'],
    liveUrl: 'https://www.getforge.app',
    featured: true,
  },
  {
    id: 'otlyn',
    title: 'Otyln',
    smallDescription: 'A Drag&Drop dashboard to manage BASE tokens',
    description:
      'Otlyn is an innovative drag-and-drop dashboard designed for managing BASE blockchain tokens. Users can create custom layouts to monitor their portfolio, track token prices, and execute transactions. The interface features smooth animations powered by Framer Motion, real-time data updates, and a modular widget system that allows users to personalize their dashboard experience.',
    background: '/projects/otlyn/background.jpg',
    images: [],
    technologies: ['Next.js', 'Tailwind CSS', 'Node.js', 'Framer Motion'],
    category: ['Dashboard'],
    liveUrl: 'https://otlyn.xyz',
    featured: true,
  },
  {
    id: 'xrpldash',
    title: 'XRPLDash',
    smallDescription: 'A dashboard to manage XRPL assets',
    description:
      'XRPLDash is a comprehensive dashboard for managing assets on the XRP Ledger. It provides users with real-time portfolio tracking, transaction history, NFT management, and trust line configuration. The dashboard features an elegant dark theme design, interactive charts for asset visualization, and seamless wallet integration for secure asset management.',
    background: '/projects/xrpldash/background.jpg',
    images: [],
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Figma'],
    category: ['Dashboard'],
    featured: true,
  },
  {
    id: 'greyhound-staking',
    title: 'Greyhound Staking',
    smallDescription: 'A NFT Staking platform for the $GREYHOUND token',
    description:
      'Greyhound Staking is a decentralized NFT staking platform built for the $GREYHOUND token ecosystem. Users can stake their NFTs to earn rewards, view their staking positions, and claim accumulated tokens. The platform features a secure smart contract integration, real-time reward calculations, and a user-friendly interface with detailed staking analytics.',
    background: '/projects/greyhound-staking/background.jpg',
    images: [],
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    category: ['Dashboard'],
    liveUrl: 'https://staking.greyhoundcoin.net/',
    featured: true,
  },
  {
    id: 'greyhound',
    title: 'Greyhound',
    smallDescription: 'A landing page for the $GREYHOUND token',
    description:
      'Greyhound is a modern landing page designed for the $GREYHOUND cryptocurrency token. The page showcases the token\'s features, roadmap, team information, and community links. Built with performance in mind, it features smooth scroll animations, responsive design, and optimized loading times to provide visitors with an engaging first impression of the project.',
    background: '/projects/greyhound/background.jpg',
    images: [],
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    category: ['Landing Page'],
    liveUrl: 'https://greyhoundcoin.net/',
    featured: true,
  },
];

export const experience: Experience[] = [
  {
    id: 'exp-1',
    company: 'Escola Artística e Profissional Árvore',
    position: 'IT Manager',
    description:
      'Provided first-line technical support and rapid problem-solving across the school. Designed and deployed interactive digital kiosks and real-time information displays. Managed technology infrastructure, diagnosing and resolving technical issues to restore equipment functionality.',
    startDate: '2018-01',
    location: 'Porto, Portugal',
  },
  {
    id: 'exp-2',
    company: 'Freelancer',
    position: 'Frontend Developer',
    description:
      'Designed and developed responsive websites and web applications with seamless cross-device performance. Optimized user experience through front-end best practices and UI/UX design, driving increased engagement. Managed diverse client relationships, delivering tailored solutions and custom branding materials that enhanced visual identity.',
    startDate: '2017-01',
    endDate: '2020-12',
    location: 'Porto, Portugal',
    technologies: ['React', 'Next.js', 'JavaScript', 'HTML5', 'CSS3', 'Figma'],
  },
];

export const education: Education[] = [
  {
    id: 'edu-1',
    institution: 'Instituto Politécnico de Bragança',
    degree: 'IT Specialization Course (CET)',
    startDate: '2014-01',
    endDate: '2015-12',
    location: 'Bragança',
  },
  {
    id: 'edu-2',
    institution: 'Escola Secundária de Penafiel',
    degree: 'Professional Course in Computer Systems and Programming',
    startDate: '2011-01',
    endDate: '2014-12',
    location: 'Penafiel',
  },
];

export const tools: Tools = {
  categories: [
    {
      name: 'Front-End Development',
      skills: [
        'HTML5',
        'CSS3',
        'Javascript',
        'React',
        'Next.js',
        'Bootstrap',
        'Tailwind',
        'Sass/SCSS',
        'Jekyll',
        'Responsive Design',
        'Performance Optimization',
      ],
    },
    {
      name: 'Content Management Systems (CMS)',
      skills: ['Wordpress', 'Shopify', 'Prestashop', 'Joomla'],
    },
    {
      name: 'Project Management and Methodology',
      skills: ['Agile Methodologies', 'Git'],
    },
    {
      name: 'Design',
      skills: [
        'UX/UI Design',
        'Figma',
        'Photoshop',
        'InDesign',
        'Lightroom',
        'Gimp',
      ],
    },
    {
      name: 'Other Skills',
      skills: ['Photography', 'Graphic Design'],
    },
  ],
};

