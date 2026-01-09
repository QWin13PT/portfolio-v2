# Portfolio Website

A modern, responsive portfolio website built with Next.js showcasing projects, experience, skills, and education.

## 🚀 Features

- **Projects Section** - Showcase of featured projects with descriptions, technologies, and live links
- **Experience Section** - Professional work history and achievements
- **Skills Section** - Categorized technical skills and tools
- **Education Section** - Academic background and qualifications
- **Responsive Design** - Optimized for all device sizes
- **Modern UI** - Clean, professional design with smooth animations

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org) 16.1.1
- **React:** 19.2.3
- **Styling:** [Tailwind CSS](https://tailwindcss.com) v4
- **Animations:** [Motion](https://motion.dev)
- **Icons:** [HugeIcons](https://hugeicons.com)
- **Language:** TypeScript

## 📦 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── layout.js          # Root layout with Header and Sidebar
│   ├── page.js            # Main page with all sections
│   └── globals.css        # Global styles
├── components/
│   ├── cards/             # Card components (Project, Experience, etc.)
│   ├── layout/            # Layout components (Header, Sidebar, Footer)
│   ├── sections/          # Section components (Projects, Experience, etc.)
│   └── ui/                # Reusable UI components (Button, Accordion)
├── lib/
│   ├── constants.ts       # Portfolio data (projects, experience, skills)
│   └── theme.ts           # Theme configuration
├── public/                # Static assets
│   └── projects/          # Project images
└── types/                 # TypeScript type definitions
```

## 🎨 Customization

To customize the portfolio content, edit the data in `lib/constants.ts`:

- **Personal Info:** Update `personalInfo` object with your details
- **Projects:** Modify the `projects` array with your projects
- **Experience:** Update the `experience` array with your work history
- **Education:** Edit the `education` array with your qualifications
- **Skills:** Customize the `tools` object with your skills and categories

## 🚢 Deployment

### Deploy on Vercel

The easiest way to deploy this Next.js app is using the [Vercel Platform](https://vercel.com/new):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

For more details, see the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

This project is private and personal.
