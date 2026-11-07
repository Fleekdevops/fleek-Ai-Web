# FleekTech Development Guidelines

This document provides essential information for AI agents working in this repository.

## Project Overview

FleekTech is a **software development company** website (not AI-specific) built with:
- **Framework**: Next.js 14.2.35 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **ORM**: Prisma with SQLite (dev) / PostgreSQL (prod)
- **State Management**: React Query (TanStack)
- **Authentication**: NextAuth.js
- **Animations**: Motion (formerly Framer Motion)

## Development Commands

```bash
# Development server
npm run dev

# Production build (runs prisma generate + next build)
npm run build

# Start production server
npm run start

# Linting
npm run lint

# Database
npm run db:generate   # Prisma generate
npm run db:push       # Prisma db push
npm run db:studio     # Prisma studio
```

## Key Architecture Notes

### Layout System (Critical)
All page sections use **full-width sections with inner containers** — NOT a single max-width wrapper:
```tsx
// Correct pattern (used throughout)
<section className="w-full">
  <div className="container">
    {/* content */}
  </div>
</section>

// Wrong pattern (avoid)
<main className="max-w-7xl mx-auto">
  {/* everything */}
</main>
```

The `.container` utility (in `src/styles/globals.css`) provides responsive max-width:
- Desktop: 1440px
- 1920px+: 1600px  
- 2560px+: 1800px
- Tablet: 20px padding
- Mobile: 16px padding

### Path Aliases
- `@/*` → `./src/*`

### Component Structure
```
src/
├── app/                 # Next.js App Router (pages, layouts, API routes)
│   ├── api/             # Route handlers
│   └── admin/           # Admin dashboard
├── components/          # Reusable UI components (all client-side with "use client")
├── lib/                 # Prisma client singleton (@/lib/db)
├── styles/              # globals.css (Tailwind + .container utility)
├── types/               # TypeScript definitions
└── hooks/               # Custom React hooks
```

## Current Company Info (Updated)

- **Team**: 3 members only — James Odhiambo (MD), Nelson Maina (CEO), Carlos Koilai (CTO)
- **Office**: Stan Bank Building, 3rd Floor, Room 10, Moi Avenue, Nairobi, Kenya
- **Contact**: +254 700 000 000 / hello@fleektech.co.ke
- **Services**: Custom Software, Web Apps, Mobile Apps, CRM/ERP, Cloud/DevOps, DB Design, Legacy Modernization, Security

## Environment Variables

Required (check `.env.example`):
- `DATABASE_URL` - SQLite for dev (`file:./dev.db`)
- `NEXTAUTH_SECRET` / `NEXTAUTH_URL`
- `OPENAI_API_KEY` (for chat widget)
- `NEXT_PUBLIC_SITE_URL` (configured in vercel.json)

## Deployment

- **Platform**: Vercel (see `vercel.json`)
- **Build**: `prisma generate && next build`
- **Regions**: iad1
- **Static export**: `npm run deploy` (gh-pages to `out` dir)

## Database

- Prisma with SQLite (dev) — switch provider in `schema.prisma` for PostgreSQL
- Models: Contact, BlogPost, AIService, AITool, ChatMessage, Analytics, TeamMember, Testimonial, SiteSettings
- Run `npm run db:push` after schema changes

## Lint/TypeScript

- ESLint via `next lint` (Next.js config)
- TypeScript strict mode enabled
- No test framework configured (recommend Vitest + Playwright)

## Gotchas

1. **All components are client components** (`"use client"`) — no server components in this codebase
2. **No test framework** — manual verification via `npm run dev`
3. **Admin components have pre-existing lint errors** (unrelated to main site)
4. **Chat widget** at `/api/chat` uses OpenAI — requires API key
5. **Contact form** posts to `/api/contact` — stores in Prisma Contact model

## Quick Start for Agents

1. `npm install`
2. `npm run db:generate`
3. `npm run db:push`
4. `npm run dev` → verify at localhost:3000
5. Check existing component patterns before adding new ones