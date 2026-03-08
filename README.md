# Moulatay Abdelilah - DevOps & Full Stack Portfolio

Modern developer portfolio built with React, Vite, TailwindCSS, and Framer Motion.

## Features

- Dark futuristic DevOps UI with terminal-inspired visual language
- Responsive one-page layout with smooth scroll and animations
- DevOps CI/CD pipeline visualization
- Microservices architecture diagram
- DevOps and Full Stack project cards
- Simulated DevOps dashboard metrics
- Experience timeline
- CV download section (PDF)
- Contact form section
- SEO-ready meta tags in `index.html`

## Tech Stack

- React + JavaScript
- Vite
- TailwindCSS
- Framer Motion
- Lucide React icons

## Project Structure

```text
portfolio/
  public/
    Moulatay-Abdelilah-CV.pdf
  src/
    components/
      Footer.jsx
      Navbar.jsx
      ProjectCard.jsx
      SectionHeading.jsx
    data/
      portfolioData.js
    sections/
      AboutSection.jsx
      ContactSection.jsx
      CVSection.jsx
      DashboardSection.jsx
      DevopsProjectsSection.jsx
      FullStackProjectsSection.jsx
      HeroSection.jsx
      MicroservicesSection.jsx
      PipelineSection.jsx
      TechStackSection.jsx
      TimelineSection.jsx
    App.jsx
    index.css
    main.jsx
  .gitignore
  index.html
  package.json
  postcss.config.js
  tailwind.config.js
  vite.config.js
```

## Installation

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## TailwindCSS Setup (already configured)

1. Install dependencies:

```bash
npm install -D tailwindcss postcss autoprefixer
```

2. Config files:
- `tailwind.config.js`
- `postcss.config.js`

3. Tailwind directives are in `src/index.css`.

## Deployment Guide

### Vercel

1. Push repository to GitHub.
2. Import project in Vercel.
3. Framework preset: `Vite`
4. Build command: `npm run build`
5. Output directory: `dist`
6. Deploy.

### Netlify

1. Push repository to GitHub.
2. New site from Git in Netlify.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy site.

### GitHub Pages

1. Install deploy helper:

```bash
npm install -D gh-pages
```

2. Add scripts in `package.json`:

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

3. If repository is not root domain, set `base` in `vite.config.js`:

```js
export default defineConfig({
  base: "/your-repo-name/",
  plugins: [react()],
});
```

4. Deploy:

```bash
npm run deploy
```

5. Enable GitHub Pages from branch `gh-pages` in repo settings.

## Notes

- Replace placeholder project links in `src/data/portfolioData.js` with your real GitHub and live demo URLs.
- Replace `public/Moulatay-Abdelilah-CV.pdf` with your full professional CV.
- For contact form handling, replace the Formspree endpoint in `src/sections/ContactSection.jsx`.
