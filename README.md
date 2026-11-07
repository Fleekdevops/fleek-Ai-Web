# Fleektech

Fleektech website and business platform built with Next.js. We deliver websites, mobile apps, custom software, portals, and IT support & maintenance in Nairobi, Kenya.

## Services

- Websites and web applications
- Mobile apps
- Custom software and portals
- IT support and maintenance
- Affordable, custom, on-time delivery

## Team

- **Nelson Maina** — Chief Executive Officer (CEO)
- **Carlos Koilai** — CTO & Lead Software Engineer
- **James Odhiambo** — Managing Director (MD)

## Contact

- **Office:** Moi Avenue, Stanbank Building, 3rd Floor, Room 10, Nairobi, Kenya
- **Phone:** +254 758 175 057
- **Email:** fleektechinc@gmail.com / FleekTechInc@proton.me / Fleektechinc@outlook.com

## Tech Stack

- **Frontend:** Next.js 14 (App Router), React, TypeScript, Tailwind CSS
- **Backend:** Next.js API Routes
- **Database:** Prisma with SQLite (dev; switchable to PostgreSQL)
- **State:** TanStack React Query
- **Animations:** Framer Motion

## Getting Started

```bash
npm install
npm run db:generate
npm run db:push
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Commands

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run db:generate
npm run db:push
npm run db:studio
```

## Environment Variables

Create `.env` (see `.env.example`):

```env
DATABASE_URL="file:./dev.db"
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"
OPENAI_API_KEY="your-openai-api-key" # optional, for chat assistant
```

## API Endpoints

- `POST /api/contact` — submit consultation request
- `GET /api/contact` — list contacts
- `POST /api/chat` — Fleektech Assistant
- `GET/POST /api/blog` — blog

## Notes

- Production build: `prisma generate && next build` (configured in `package.json`).
- This repo uses `output: 'export'` in `next.config.js`; verify deployment/runtime requirements for API routes in your target environment.

## License

© 2026 Fleektech. All rights reserved.
