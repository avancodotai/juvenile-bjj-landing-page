# BJJ for Kids Landing Page - Next School

A beautiful, animated landing page for promoting the Brazilian Jiu-Jitsu program at Next School. Built with Next.js 16, Tailwind CSS, and Framer Motion.

## Overview

This landing page is designed to educate parents about the benefits of BJJ for children and facilitate enrollment through an integrated form. The site emphasizes:

- Building confidence in children
- Developing discipline and respect
- Improving fitness and coordination
- Safe, expert instruction
- Age-appropriate training programs (Ages 4-18)

## Tech Stack

- **Next.js 16** - React framework with App Router
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Animation library for smooth, engaging interactions
- **TypeScript** - Type-safe development

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
app/
├── components/          # Modular, reusable components
│   ├── Hero.tsx        # Hero section with main CTA
│   ├── WhatIsBJJ.tsx   # Introduction to BJJ
│   ├── Benefits.tsx    # Three key benefits for children
│   ├── ProgramStructure.tsx  # Age groups and class details
│   ├── SafetyAndInstructors.tsx  # Safety protocols and instructors
│   ├── ProgressionAndCompetition.tsx  # Belt system and competitions
│   ├── CTA.tsx         # Call-to-action section
│   ├── EnrollmentForm.tsx  # Tally form integration
│   └── Footer.tsx      # Footer section
├── layout.tsx          # Root layout with metadata
├── page.tsx            # Main page composition
└── globals.css         # Global styles
```

## Integrating Tally Form

The enrollment form section is set up to integrate with Tally (tally.so). Follow these steps:

### Step 1: Create Your Tally Form

1. Go to [tally.so](https://tally.so)
2. Create a new form with fields like:
   - Parent's Name
   - Parent's Email
   - Parent's Phone
   - Child's Name
   - Child's Age
   - Interested Age Group (4-7, 8-12, 13-18)
   - Any questions or special requirements
   - Demo class interest (Yes/No)

### Step 2: Get Embed Code

1. In Tally, click "Share" on your form
2. Select "Embed"
3. Choose the embed style (we recommend "Inline" or "Standard")
4. Copy the iframe code

### Step 3: Update EnrollmentForm Component

Open `app/components/EnrollmentForm.tsx` and replace the placeholder content (lines 49-78) with your Tally iframe:

```tsx
<iframe
  src="https://tally.so/embed/YOUR_FORM_ID?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
  width="100%"
  height="600"
  frameBorder="0"
  marginHeight={0}
  marginWidth={0}
  title="BJJ Enrollment Form"
  className="w-full"
/>
```

**Tally URL Parameters Explained:**
- `alignLeft=1` - Aligns form content to the left
- `hideTitle=1` - Hides the form title (since we have our own heading)
- `transparentBackground=1` - Makes background transparent
- `dynamicHeight=1` - Adjusts iframe height automatically

## Customization

### Colors

The color scheme uses Tailwind's default palette. Main colors:
- **Primary Blue**: `blue-600` to `indigo-900` (gradients)
- **Accent Yellow**: `yellow-300`, `yellow-400`
- **Safety/Success**: `green-500`
- **Secondary**: `purple-100` to `purple-700`

To customize, update the Tailwind classes in components or modify `tailwind.config.ts`.

### Content

All content is component-based. To update:

1. **Hero Text**: Edit `app/components/Hero.tsx`
2. **Benefits**: Edit `app/components/Benefits.tsx`
3. **Schedule**: Edit `app/components/ProgramStructure.tsx`
4. **Safety Info**: Edit `app/components/SafetyAndInstructors.tsx`

### Animations

Framer Motion animations are configured in each component. Key animation variants:

- **fadeInUp**: Fades in with upward motion
- **slideInLeft/Right**: Slides in from sides
- **scaleIn**: Scales up from center
- **hover effects**: Interactive hover states on cards

To adjust animation timing, modify the `transition` objects in each component.

## Sections

### 1. Hero
Eye-catching introduction with main value proposition and CTA buttons.

### 2. What is BJJ?
Brief introduction to Brazilian Jiu-Jitsu with three key points.

### 3. Benefits
Three major benefits for children:
- Build Unshakeable Confidence
- Develop Discipline & Respect
- Boost Fitness & Coordination

### 4. Program Structure
Details on age groups (4-7, 8-12, 13-18) and class logistics.

### 5. Safety & Instructors
Emphasizes safety protocols and qualified instruction.

### 6. Progression & Competition
Information on belt progression and competition opportunities.

### 7. Call-to-Action
Prominent CTA encouraging parents to enroll.

### 8. Enrollment Form
Tally form integration for lead capture.

### 9. Footer
Simple footer with program information.

## SEO

The page includes optimized metadata in `app/layout.tsx`:
- **Title**: "BJJ for Kids at Next School | Brazilian Jiu-Jitsu Program"
- **Description**: SEO-optimized description highlighting key benefits

To update metadata, edit `app/layout.tsx`.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project to [Vercel](https://vercel.com)
3. Vercel will auto-detect Next.js and deploy

### Other Platforms

This is a standard Next.js app and can be deployed to:
- Netlify
- AWS Amplify
- Digital Ocean App Platform
- Any Node.js hosting

## Performance

- **Animations**: Optimized with Framer Motion
- **Images**: Use Next.js Image component for optimization
- **Fonts**: Google Fonts (Geist) with automatic optimization
- **Code Splitting**: Automatic via Next.js App Router

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

Potential additions:
- Image gallery of classes
- Video testimonials from parents
- FAQ section
- Blog/news section
- Multi-language support (English/Hindi/Marathi)

## Support

For questions or issues:
1. Check the code comments in each component
2. Review [Next.js documentation](https://nextjs.org/docs)
3. Review [Framer Motion documentation](https://www.framer.com/motion/)
4. Review [Tally documentation](https://tally.so/help)

## License

© 2024 Next School BJJ Program. All rights reserved.

---

Built with care for the Next School community 🥋
