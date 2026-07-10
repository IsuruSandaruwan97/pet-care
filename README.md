# Happy Paws Pet Care

A polished veterinary clinic website built with Next.js, React, TypeScript, Tailwind CSS, Motion, and Swiper. The app presents Happy Paws as a warm, professional pet care provider with service details, facilities, veterinarian profiles, pricing, pet care tips, testimonials, FAQs, and an appointment request flow.

## Features

- Responsive marketing site for a veterinary clinic.
- Full home page with hero video, trust chips, service sections, team profiles, pricing cards, testimonials, FAQs, and contact form.
- Standalone pages for About Us, Services, Facilities, Our Vets, Pet Care Tips, and Pricing.
- Local image and video delivery through a Next.js API route at `/api/media/[asset]`.
- Custom UI interactions including preloader, scroll progress, scroll-to-top, custom cursor, reveal animations, carousels, dropdowns, and date/time picker.
- Locally hosted Inter and Fraunces fonts, plus Material Symbols from Google Fonts.

## Tech Stack

- Next.js 14 App Router
- React 18
- TypeScript
- Tailwind CSS
- Motion
- Swiper
- pnpm

## Getting Started

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Open the app at:

```text
http://localhost:3000
```

Create a production build:

```bash
pnpm build
```

Run the production build:

```bash
pnpm start
```

Run linting:

```bash
pnpm lint
```

## Available Routes

| Route | Purpose |
| --- | --- |
| `/` | Main landing page with all primary sections |
| `/about-us` | Clinic story, values, and background |
| `/services` | Veterinary services overview |
| `/facilities` | Clinic spaces and equipment |
| `/our-vets` | Veterinarian team profiles |
| `/pet-care` | Pet care tips and article-style cards |
| `/pricing` | Care package and visit pricing |
| `/api/media/[asset]` | Serves local images and videos from `media/` |

## Project Structure

```text
src/
  app/                 Next.js routes, layout, error pages, and API routes
  components/
    atoms/             Small reusable UI primitives
    molecules/         Mid-level UI pieces
    organisms/         Header, footer, preloader, and larger layout pieces
  constants/           Shared navigation, media paths, and animation constants
  data/                Site content such as services, pricing, team, FAQs, tips
  hooks/               Reusable client-side hooks
  screens/             Page-level screen implementations and page CSS
  utils/               Shared utility helpers
media/
  images/              Local page and card imagery
  videos/              Hero and clinic videos
public/
  assets/fonts/        Local font files
```

## Content Management

Most editable site content lives in `src/data/index.ts`, including:

- trust chips and stats
- service cards
- facilities
- veterinarian profiles
- pricing plans
- testimonials
- pet care tips
- FAQs
- appointment reason options

Navigation labels and page targets live in `src/constants/index.ts`.

## Media Assets

Images and videos are stored under `media/` and exposed through `src/app/api/media/[asset]/route.ts`. To add a new local asset:

1. Place the file in `media/images` or `media/videos`.
2. Add a new entry to the `mediaAssets` map in `src/app/api/media/[asset]/route.ts`.
3. Reference it in components or data with `/api/media/your-asset-key`.

Video assets support HTTP range requests, which helps browser playback and seeking.

## Environment

The app checks `NEXT_PUBLIC_APP_ENV` in `src/app/layout.tsx`.

```env
NEXT_PUBLIC_APP_ENV=production
```

When this value is `production`, the right-click guard is enabled. For local development, you can omit it or use another value.

## Development Notes

- Use the `@/*` alias for imports from `src/`.
- Global styling is in `src/app/globals.css`, with extra per-screen CSS files inside `src/screens/*/styles.css`.
- Tailwind theme tokens are defined in `tailwind.config.ts`.
- The contact form currently shows an in-page success state only; it does not submit to a backend.
- Contact details, placeholder address, and embedded map settings should be updated before using the site for a real clinic.

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the local development server |
| `pnpm build` | Build the production app |
| `pnpm start` | Start the production server |
| `pnpm lint` | Run Next.js linting |
