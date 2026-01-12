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
  stats: [
    {
      value: 6,
      suffix: '+',
      label: 'Years Coding',
    },
    {
      value: 9,
      suffix: '+',
      label: 'Projects Built',
    },
    {
      value: 32,
      suffix: '',
      label: 'Tabs Open',
    },
  ],
};

export const projects: Project[] = [
  {
    id: 'otlyn',
    title: 'Otyln',
    smallDescription: 'A Drag&Drop dashboard to manage BASE tokens',
    description:
      'Otlyn is an innovative drag-and-drop dashboard designed for managing BASE blockchain tokens. Users can create custom layouts to monitor their portfolio, track token prices, and execute transactions. The interface features smooth animations powered by Framer Motion, real-time data updates, and a modular widget system that allows users to personalize their dashboard experience.',
    story:
      'I started Otlyn as a way to replicate XRPLDash, applying all the skills I\'ve acquired since 2022 and leveraging new AI technologies. This time, I\'m building it for another Layer 2 network called Base.\n\nOtlyn represents my evolution as a developer—taking the lessons learned from XRPLDash and applying them to create an even better dashboard experience. With the help of AI technologies, I\'ve been able to accelerate development while maintaining high code quality. \n\nCurrently a work in progress, I\'m applying to the Base Grants Program to help bring this project to completion.',
    releaseDate: '2024-06',
    workInProgress: true,
    background: '/projects/otlyn/background.jpg',
    images: [],
    technologies: ['Next.js', 'Tailwind CSS', 'Node.js', 'Motion'],
    category: ['Dashboard'],
    liveUrl: 'https://otlyn.xyz',
    githubUrl: 'https://github.com/QWin13PT/otlyn',
    featured: true,
  },
  {
    id: 'svelta',
    title: 'Svelta',
    smallDescription: 'A wellness app for women',
    description:
      'Svelta is a comprehensive wellness application designed specifically for women, focusing on holistic health tracking, personalized workout routines, and nutrition guidance. The app features an intuitive dashboard for tracking daily progress, goal setting, and community engagement. Built with a mobile-first approach using React Native and Expo, it delivers a seamless experience across iOS and Android platforms.',
    story:
      'I built Svelta from the ground up a few months after launching Forge. After seeing my girlfriend using Forge, I decided to build a more tailored experience for female users that adds cycle tracking and adapts workouts and diet to the phase. This project allowed me to apply everything I learned from Forge while exploring new challenges like hormonal cycle tracking, phase-based workout adaptation, and creating a more personalized wellness experience. Working on Svelta deepened my understanding of user-centered design and how to build features that truly address specific user needs.',
    releaseDate: '2025-10',
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
      'Forge is a powerful fitness application that helps users build and maintain their workout routines. It features customizable workout plans, exercise libraries, diet tracking, progress tracking with detailed analytics, and much more. The app includes an admin dashboard for content management and user analytics, built with Next.js and Supabase for real-time data synchronization.',
    story:
      'Forge started as a personal solution to a problem I was facing: I wanted to track my workouts in a simple and fast way, without clutter. I decided to build a solution for my own needs and take the chance to learn React Native. I quickly found it fulfilling, and decided to scale the original scope and publish the app. This journey taught me so much about the world of app development. I created this app from a simple draw on a note to Figma, to the final published app. I learned everything from UI/UX design, performance optimization, and even ASO (App Store Optimization) optimization.',
    releaseDate: '2024-09',
    background: '/projects/forge/background.jpg',
    images: [],
    technologies: ['React Native', 'Expo', 'Supabase', 'Next.js', 'Figma'],
    category: ['App', 'Dashboard'],
    liveUrl: 'https://www.getforge.app',
    featured: true,
  },
  {
    id: 'xrpldash',
    title: 'XRPLDash',
    smallDescription: 'A drag & drop dashboard to manage XRPL assets',
    description:
      'XRPLDash is a drag-and-drop dashboard that allows users to add, edit, and move modules—small cards, each with its own function—for the purpose of managing XRPL assets. The dashboard features modules for real-time charts, transaction history, portfolio tracking, NFT management, trust line configuration, and more. Users can customize their dashboard layout by dragging and repositioning modules to create a personalized asset management experience.',
    story:
      'XRPLDash was originally built as a small dashboard for the Greyhound project. However, we decided to scale the idea and apply for an XRPL Grant, which we won. This was an exciting opportunity to expand the concept into a comprehensive tool for the XRPL ecosystem.\n\nThis was my first "bigger" project, working on a team with 5 members from 5 different continents. The experience taught me invaluable lessons about remote collaboration and dealing with different timezones—coordinating meetings, managing asynchronous communication, and ensuring everyone stayed aligned despite the geographical challenges.\n\nFrom a technical perspective, XRPLDash significantly deepened my React knowledge, especially in modular architecture. I learned how to build flexible, reusable components and handle complex state management for dynamic drag-and-drop layouts. The project also expanded my understanding of blockchain integration, working with the XRPL API, wallet connections, and creating intuitive interfaces for managing different asset types.\n\nUnfortunately, the project had to be ended due to some key members leaving, but the experience working on a distributed international team was incredibly valuable for my growth as a developer.',
    releaseDate: '2022',
    awards: ['Winner of Wave 4 XRPL Grant from Ripple'],
    background: '/projects/xrpldash/background.jpg',
    images: [],
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Figma'],
    category: ['Dashboard'],
    githubUrl: 'https://github.com/QWin13PT/xrpldash',
    featured: true,
  },
  {
    id: 'greyhound',
    title: 'Greyhound',
    smallDescription: 'A landing page, blog, and staking platform for the $GREYHOUND token',
    description:
      'Greyhound is a comprehensive platform for the $GREYHOUND XRPL token, featuring a modern landing page, a blog for community updates, and a decentralized NFT staking platform.\n\nUsers can stake their NFTs to earn tokens, view their staking positions, and claim accumulated rewards. The platform features smooth scroll animations, responsive design, secure smart contract integration, real-time reward calculations, and a user-friendly interface with detailed staking analytics.',
    story:
      'I joined the Greyhound project, an XRPL token, during mid-2021 in COVID, since I was practicing my React skills and was looking to use them on projects. They took me in, and there, between 2021 and 2025, I built the landing page with several new iterations- each version evolving based on user feedback, market trends, and the project\'s growing needs. The website has been continuously updated and refined ever since, reflecting my commitment to iterative improvement and staying current with design trends.\n\nI also developed a blog for community updates and, most importantly, a staking platform where users could stake their NFTs and win tokens. This was my first experience working directly with smart contracts and Web3 integration. I learned how to interact with blockchain smart contracts, handle wallet connections, and manage transaction states.\n\n This project significantly deepened my understanding of the Web3 ecosystem and smart contract interactions, while also teaching me the art of storytelling through web design and how to create compelling visual narratives.',
    releaseDate: '2021-06',
    background: '/projects/greyhound/background.jpg',
    images: [],
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    category: ['Landing Page', 'Dashboard'],
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
        'JavaScript',
        'TypeScript (currently learning)',
        'React',
        'Next.js',
        'Tailwind CSS',
        'Sass/SCSS',
        'Bootstrap',
        'Motion',
        'Responsive Design',
        'Performance Optimization',
      ],
    },
    {
      name: 'Mobile Development',
      skills: [
        'React Native',
        'Expo',
        'iOS Development',
        'Android Development',
        'Mobile UI/UX',
      ],
    },
    {
      name: 'Backend & Database',
      skills: [
        'Node.js',
        'Supabase',
        'RESTful APIs',
        'Real-time Data',
        '',
      ],
    },
    {
      name: 'Content Management Systems',
      skills: ['WordPress', 'Shopify'],
    },
    {
      name: 'Version Control & DevOps',
      skills: [
        'Git',
        'GitHub',
        'CI/CD',
        'Vercel',
        'Deployment',
      ],
    },
    {
      name: 'Design & Prototyping',
      skills: [
        'UX/UI Design',
        'Figma',
        'User Research',
        'Wireframing',
        'Design Systems',
      ],
    },
    {
      name: 'Methodology & Tools',
      skills: [
        'Agile Methodologies',
        'Scrum',
        'Project Management',
        'ASO (App Store Optimization)',
      ],
    },
    {
      name: 'Creative Skills',
      skills: [
        'Photography',
        'Graphic Design',
        'Photo Editing',
        'Adobe Photoshop',
        'Adobe Lightroom',
      ],
    },
  ],
};

