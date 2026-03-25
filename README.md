# Khaled Ebdelli - Hazar Solutions Portfolio

Personal portfolio website showcasing expertise as a Lead Full Stack JavaScript Developer with 10+ years of experience at Hazar Solutions.

## ✨ Recent Updates

- **Hazar Solutions Branding**: Added custom logo component with modern gradient design
- **Interactive Links**: Projects and experience sections now feature clickable company links
- **Improved UX**: Enhanced hover effects and visual feedback
- **Repository Cleanup**: Optimized for GitHub deployment with proper .gitignore

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Package Manager**: npm/bun

## Project Structure

```
src/
├── app/                    # Next.js app router
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/
│   ├── sections/          # Page sections
│   │   ├── hero.tsx       # Hero/header with Hazar Solutions logo
│   │   ├── about.tsx      # About section
│   │   ├── skills.tsx     # Skills & expertise
│   │   ├── experience.tsx # Work experience with clickable links
│   │   ├── projects.tsx   # Featured projects with external links
│   │   ├── education.tsx  # Education section
│   │   ├── languages.tsx  # Languages section
│   │   └── footer.tsx     # Footer
│   └── ui/                # Reusable UI components
│       ├── button.tsx
│       ├── card.tsx
│       ├── badge.tsx
│       ├── section.tsx
│       ├── link.tsx
│       └── logo.tsx       # Hazar Solutions logo component
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
git clone https://github.com/khaledebdelli-ai/hazar-solutions.git
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

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark Theme**: Modern dark theme optimized for developer portfolios
- **Interactive Elements**: Hover effects, smooth transitions, and clickable links
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Performance**: Optimized with Next.js 15 and modern web standards
- **TypeScript**: Full type safety throughout the application

## Customization

Update the data files in `src/data/` to personalize:

- `profile.ts` - Personal information, contact details, and company branding
- `projects.ts` - Project showcase with external links
- `skills.ts` - Technical skills and competencies
- `experience.ts` - Work history with company links
- `education.ts` - Education and language proficiencies

### Logo Customization

The Hazar Solutions logo can be customized in `src/components/ui/logo.tsx`:

```typescript
export function HazarSolutionsLogo({ size = 64 }: { size?: number }) {
  // Customize colors, size, and styling here
}
```

## Deployment

This project is optimized for deployment on:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **GitHub Pages**
- Any Node.js hosting platform

### Environment Variables

Create a `.env.local` file for any environment-specific configurations:

```env
# Add your environment variables here
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is private and proprietary to Hazar Solutions.

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
