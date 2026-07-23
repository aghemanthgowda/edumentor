# EduMentor

**EduMentor** is a premium mentorship & learning platform that connects students with expert mentors for personalized 1:1 sessions. Browse vetted engineers, designers, and data scientists, filter by domain, and book a session in minutes.

> A **Nexum Projects** build.

![Next.js](https://img.shields.io/badge/Next.js-14-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8)

## Features

- **Sticky navbar** with an inline SVG logo, smooth-scroll nav links, and a primary CTA (plus a mobile menu).
- **Hero** with a compelling headline, subcopy, dual CTAs, and animated gradient background accents.
- **Trust stats** row — 200+ mentors, 5,000+ sessions, 4.9 average rating, 30+ domains.
- **Browse mentors** — a responsive grid of 10 mentor cards (colored-initial avatars, expertise tag, star rating, hourly price, bio) with a **live search** input and **category filter chips** (Web Dev, Data Science, AI/ML, Design, Cloud, Career).
- **Booking flow** — a fully client-side **modal** with inline field validation, time-slot selection, and a polished success state. Closes on ESC and overlay click.
- **Courses catalog** — 6 course cards with level badges, duration, and lesson counts.
- **How it works** — a clear 4-step section.
- **Testimonials** — 4 learner quotes with names and roles.
- **Footer** — quick links, social icons, and copyright.
- Dark, premium theme with a violet accent, glassmorphism touches, fully responsive (mobile → desktop), no horizontal scroll, and accessible markup (semantic HTML, focus states, aria labels, alt text).

## Tech stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v3](https://tailwindcss.com/)
- [lucide-react](https://lucide.dev/) icons
- `next/font` (Poppins + Inter)

## Getting started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Build for production:

```bash
npm run build
npm run start
```

## Project structure

```
src/
  app/
    layout.tsx      # Root layout, fonts, metadata, theme-color
    page.tsx        # Landing page composition
    globals.css     # Tailwind layers + theme utilities
  components/        # Navbar, Hero, Stats, Mentors, BookingModal, Courses, HowItWorks, Testimonials, Footer, Logo
  lib/
    data.ts          # Mentors, courses, stats, steps, testimonials
public/
  favicon.svg        # Brand mark
```

## License

© 2026 EduMentor · A Nexum Projects build.
