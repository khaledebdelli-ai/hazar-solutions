# Khaled Ebdelli Portfolio

Personal portfolio website showcasing expertise as a Lead Full Stack JavaScript Developer with 10+ years of experience.

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

## Project Structure

```
src/
├── app/                    # Next.js app router
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/
│   ├── sections/          # Page sections
│   │   ├── hero.tsx       # Hero/header section
│   │   ├── about.tsx      # About section
│   │   ├── skills.tsx     # Skills & expertise
│   │   ├── experience.tsx # Work experience
│   │   ├── projects.tsx   # Featured projects
│   │   ├── education.tsx  # Education section
│   │   ├── languages.tsx  # Languages section
│   │   └── footer.tsx     # Footer
│   └── ui/                # Reusable UI components
│       ├── button.tsx
│       ├── card.tsx
│       ├── badge.tsx
│       ├── section.tsx
│       └── link.tsx
├── data/                  # Static data files
│   ├── profile.ts
│   ├── projects.ts
│   ├── skills.ts
│   ├── experience.ts
│   └── education.ts
├── lib/
│   └── utils.ts           # Utility functions
└── types/
    └── index.ts           # TypeScript interfaces
```

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/portfolio.git
cd portfolio

# Install dependencies
npm install
# or
bun install
```

### Development

```bash
# Start development server
npm run dev
# or
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
# Production build
npm run build

# Start production server
npm run start
```

## Customization

Update the data files in `src/data/` to personalize:

- `profile.ts` - Personal information, contact details
- `projects.ts` - Project showcase
- `skills.ts` - Technical skills
- `experience.ts` - Work history
- `education.ts` - Education and languages

## Scripts

| Command       | Description                |
|---------------|----------------------------|
| `npm run dev` | Start development server   |
| `npm run build`| Create production build    |
| `npm run start`| Start production server    |
| `npm run lint` | Run ESLint                 |

## Features

- Responsive design (mobile, tablet, desktop)
- Dark theme with modern aesthetic
- Smooth scroll navigation
- Fade-in animations
- TypeScript for type safety
- Modular component architecture

---

Built with Next.js & Tailwind CSS
