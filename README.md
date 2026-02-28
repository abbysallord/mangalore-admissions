# EduPath Mangalore

A modern, responsive website for **EduPath Mangalore** — a college admissions consulting firm based in Mangalore, Karnataka. Helps students navigate admissions to top institutions across engineering, medical, management, law, and science streams.

## Tech Stack

- **React 18** with Vite 5
- **Tailwind CSS** for utility-first styling
- **Framer Motion** for animations and interactions
- **Lucide React** for icons

## Features

- Animated aurora hero with text reveal effects
- Interactive 3D tilt course cards
- Bento grid layout for features
- Infinite scrolling testimonial marquee
- Masonry gallery with lightbox
- Glassmorphism navigation with mobile menu
- Floating label contact form with animated border beams
- Fully responsive across all breakpoints

## Getting Started

```bash
# install dependencies
npm install

# start dev server
npm run dev

# build for production
npm run build

# preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── layout/        # Navbar, Footer
│   ├── sections/      # Hero, Stats, Features, Gallery, Courses, etc.
│   └── ui/            # Reusable animated components
├── constants/         # Navigation links
├── data/              # Static data (courses, testimonials, etc.)
└── hooks/             # Custom React hooks
```

## Color Palette

| Color      | Hex       | Usage                      |
| ---------- | --------- | -------------------------- |
| Navy       | `#0B1628` | Primary background         |
| Navy Mid   | `#142040` | Card backgrounds, surfaces |
| Gold       | `#D4A853` | Accents, CTAs, highlights  |
| Gold Light | `#F0C97A` | Hover states, gradients    |
| Cream      | `#FAF7F0` | Text, light sections       |

## Fonts

- **DM Serif Display** — headings and display text
- **Plus Jakarta Sans** — body text, UI elements

## License

All rights reserved. This project is proprietary software for EduPath Mangalore.
