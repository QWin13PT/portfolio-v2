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
    description:
      'A wellness app for women',
    image: '/projects/svelta/background.jpg',
    technologies: ['React Native', 'Expo', 'Supabase', 'Next.js, Figma'],
    category: ['App', 'Dashboard'],
    liveUrl: 'https://www.svelta.app',
    featured: true,
  },
  {
    id: 'forge',
    title: 'Forge',
    description:
      'A fitness and workout app',
    image: '/projects/forge/background.jpg',
    technologies: ['React Native', 'Expo', 'Supabase', 'Next.js, Figma'],
    category: ['App', 'Dashboard'],
    liveUrl: 'https://www.getforge.app',
    featured: true,
  },
  {
    id: 'otlyn',
    title: 'Otyln',
    description: 'A Drag&Drop dashboard to manage BASE tokens',
    image: '/projects/otlyn/background.jpg',
    technologies: ['Next.js', 'Tailwind CSS', 'Node.js', 'Framer Motion'],
    category: ['Dashboard'],
    liveUrl: 'https://otlyn.xyz',
    featured: true,
  },
  
  {
    id: 'xrpldash',
    title: 'XRPLDash',
    description:
      'A dashboard to manage XRPL assets',
    image: '/projects/xrpldash/background.jpg',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Figma'],
    category: ['Dashboard'],
    featured: true,
  },
  {
    id: 'greyhound-staking',
    title: 'Greyhound Staking',
    description:
      'A NFT Staking platform for the $GREYHOUND token',
    image: '/projects/greyhound-staking/background.jpg',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    category: ['Dashboard'],
    liveUrl: 'https://staking.greyhoundcoin.net/',
    featured: true,
  },
  {
    id: 'greyhound',
    title: 'Greyhound',
    description:
      'A landing page for the $GREYHOUND token',
    image: '/projects/greyhound/background.jpg',
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

