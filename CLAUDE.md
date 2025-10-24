# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A Next.js landing page for Next School's Brazilian Jiu-Jitsu (BJJ) program for children ages 4-18. The site is designed to educate parents about BJJ benefits and facilitate enrollment through an integrated Tally form.

## Commands

### Development
```bash
npm run dev        # Start development server on http://localhost:3000
npm run build      # Build for production
npm start          # Run production build
npm run lint       # Run ESLint
```

## Architecture

### Tech Stack
- **Next.js 16** with App Router (NOT Pages Router)
- **React 19** - Latest React version
- **Tailwind CSS 4** - Utility-first styling
- **Framer Motion** - Animation library for all scroll animations and interactions
- **TypeScript** - Strict typing throughout

### Page Structure
The landing page is a single-page application composed of sequential sections in `app/page.tsx`:

```
Hero → WhatIsBJJ → Benefits → PedagogyAndCurriculum → SafetyAndInstructors
→ MeetTheCoaches → Competitions → EnrollmentForm → Footer
```

Each section is a standalone component in `app/components/` with its own:
- Framer Motion animations (fadeInUp, slideIn, etc.)
- Responsive design (mobile-first approach)
- Gradient backgrounds and decorative elements

### Component Pattern
All components follow this structure:
1. **"use client"** directive (required for Framer Motion)
2. Import `motion` from "framer-motion"
3. Self-contained styling with Tailwind classes
4. Animation variants using `initial`, `whileInView`, `viewport`, and `transition` props

### Key Implementation Details

**Tally Form Integration:**
- Tally widget script loaded in `app/layout.tsx` head
- EnrollmentForm component uses `data-tally-open="wzpyaa"` attribute on button
- Form opens as a modal overlay when button is clicked

**Animation Strategy:**
- Uses `whileInView` with `viewport={{ once: true }}` to trigger animations on scroll
- Consistent animation timing: 0.6-0.7s duration
- Stagger delays (0.2s increments) for sequential element animations

**Styling Approach:**
- Tailwind CSS with inline utility classes (no custom CSS modules)
- Gradient backgrounds: violet/fuchsia/pink palettes for CTA sections
- Responsive breakpoints: mobile-first, then `sm:`, `md:`, `lg:` prefixes

**Layout Patterns:**
- Horizontal cards on desktop that stack vertically on mobile
- Consistent padding: `py-16` or `py-24` for sections
- Max-width containers: `max-w-4xl` to `max-w-7xl` depending on content

## Important Notes

- All components MUST include "use client" directive due to Framer Motion
- Avoid excessive whitespace - recent refactoring reduced padding to make sections more compact
- When creating new sections, follow the existing animation patterns for consistency
- The page has no navigation header - it's designed as a linear scroll experience
- EnrollmentForm is the only CTA component (a duplicate CTA component was removed)
