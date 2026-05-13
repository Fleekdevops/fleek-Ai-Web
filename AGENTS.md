# Fleek AI Development Guidelines for Agentic Coding Agents

This document provides essential information for AI agents working in this repository. It covers build/test/lint commands, code style guidelines, and project-specific conventions.

## 📦 Project Overview

Fleek AI is an AI-powered technology services platform built with:
- **Framework**: Next.js 14.2.35 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **ORM**: Prisma
- **State Management**: React Query (TanStack)
- **Authentication**: NextAuth.js
- **AI Integration**: OpenAI

## 🔧 Development Commands

### Core Scripts (from package.json)
```bash
# Development server
npm run dev

# Production build
npm run build  # Runs: prisma generate && next build

# Start production server
npm run start

# Linting
npm run lint     # Runs: next lint (ESLint with Next.js config)

# Database operations
npm run db:generate   # Prisma generate
npm run db:push       # Prisma db push
npm run db:studio     # Prisma studio
```

### Testing Status
⚠️ **No testing framework is currently configured**. The project lacks:
- Unit tests
- Integration tests
- End-to-end tests
- Test runners (Jest, Vitest, etc.)

**Recommendation for agents**: When adding features, consider implementing tests alongside code. Suggested testing setup:
- Vitest for unit/integration tests
- Playwright for E2E tests
- Testing Library for React component tests

### Running a Single Test
Since no test framework exists, this section will be applicable once testing is added:
```bash
# Example patterns (to be implemented)
npm test -- --testNamePattern="specific test name"
npx vitest run test/file.test.ts -t "test name"
npx jest -t "specific test"
```

## 📝 Code Style Guidelines

### TypeScript Standards
- **Strict mode**: Enabled in tsconfig.json (`"strict": true`)
- **Module resolution**: Bundler (Next.js default)
- **Path aliases**: `@/*` maps to `./src/*`
- **JSX**: Preserved for Next.js compatibility
- **No emit**: True during development (Next.js handles compilation)

### File Organization
```
src/
├── app/                 # Next.js app router (pages, layouts, route handlers)
├── components/          # Reusable UI components
├── lib/                 # Utilities, API clients, shared logic
├── styles/              # Global styles, Tailwind configuration
├── types/               # TypeScript type definitions
├── hooks/               # Custom React hooks
└── context/             # React context providers
```

### Import Order
Follow this import order convention:
1. **Framework & third-party imports**
   ```typescript
   import next from 'next';
   import React from 'react';
   import { useQuery } from '@tanstack/react-query';
   ```
2. **Absolute path imports (using @ alias)**
   ```typescript
   import { db } from '@/lib/db';
   import { useAuth } from '@/context/auth-context';
   import { Button } from '@/components/ui/button';
   ```
3. **Relative imports** (avoid when possible, use @ alias instead)
   ```typescript
   import { helper } from '../utils/helper';
   ```
4. **Type imports** (separate when possible)
   ```typescript
   import type { User } from '@/types/user';
   import type { APIResponse } from '@/lib/api';
   ```

### Formatting
- **Formatter**: Prettier (implied by Next.js/Tailwind setup)
- **Line length**: 80-100 characters (flexible based on readability)
- **Semicolons**: Required
- **Quotes**: Single quotes for strings, template literals for interpolation
- **Trailing commas**: Multi-line objects/arrays only
- **Arrow functions**: Prefer implicit return for simple functions
- **Function vs Arrow**: Use function declarations for exports, arrows for callbacks

### Naming Conventions
- **Components**: PascalCase (e.g., `UserProfile.tsx`)
- **Functions & variables**: camelCase
- **Types & interfaces**: PascalCase (prefer interfaces for object shapes)
- **Constants**: UPPER_SNAKE_CASE
- **Files**: kebab-case (e.g., `user-profile.tsx`)
- **Directories**: kebab-case
- **Booleans**: Prefix with `is`, `has`, `should`, `can` (e.g., `isLoading`, `hasError`)
- **Event handlers**: Prefix with `handle` (e.g., `handleSubmit`, `handleClick`)
- **Setters**: From useState, use `set` prefix (e.g., `[count, setCount]`)

### TypeScript Usage
- **Prefer interfaces** over types for object shapes (allows declaration merging)
- **Use type** for unions, tuples, primitives, mapped types
- **Explicit return types** for exported functions
- **Avoid any**: Use `unknown` with type guards when type is truly unknown
- **Nullable types**: Explicitly mark with `| null` when applicable
- **Generics**: Use descriptive names (`T`, `U` for generics; `TItem`, `TKey` for specific)
- **Enum preference**: Prefer `const enum` or union types over numeric/string enums

### Error Handling
- **Server errors**: Use try/catch in route handlers and server components
- **Client errors**: Use error boundaries and react-query's error states
- **Validation**: Use Zod or Yup for schema validation (recommend adding if not present)
- **Logging**: Server-side: console.error with context; Client-side: toast/react-hot-toast for user feedback
- **Custom errors**: Extend Error class for domain-specific errors when needed
- **API routes**: Return appropriate HTTP status codes (400, 401, 404, 500) with JSON error bodies

### React Specific
- **Component structure**: 
  - Props destructuring at top level
  - Early returns for loading/error states
  - Custom hooks for complex logic
  - Separate presentational/container concerns when beneficial
- **Hooks rules**: 
  - Only call hooks at top level
  - Only call hooks in React functions/custom hooks
- **Keys**: Always use stable, predictable keys in lists (avoid array indices)
- **Accessibility**: 
  - Use semantic HTML elements
  - Add alt text to images
  - Ensure proper contrast (Tailwind helps)
  - Use aria-label/labelledby when needed
- **Performance**:
  - Use React.memo for expensive components with stable props
  - Use useCallback/useMemo judiciously (measure first)
  - Lazy load components with dynamic imports when appropriate
  - Leverage Next.js automatic code splitting

### Styling (Tailwind CSS)
- **Utility-first**: Apply styles directly in className
- **Custom classes**: Extract to components when reused
- **Responsive prefixes**: Use mobile-first breakpoints (sm:, md:, lg:, xl:, 2xl:)
- **State variants**: Use hover:, focus:, active:, disabled:, etc.
- **Arbitrary values**: Use sparingly (e.g., `[width:23rem]`)
- **CSS variables**: Define in :root for theme colors, use via `hsl(var(--color))`
- **Dark mode**: Use `dark:` variant (configured in tailwind.config.ts)
- **Component organization**: 
  - Base styles first (layout, positioning)
  - Then variants (states, responsiveness)
  - End with customizations

### Next.js Specific (App Router)
- **File conventions**:
  - `page.tsx` = route component
  - `layout.tsx` = layout (nested)
  - `loading.tsx` = Suspense fallback
  - `error.tsx` = error boundary
  - `not-found.tsx` = 404 page
  - `route.ts` = API route handler
- **Server vs Client**: 
  - By default: Server Components
  - Add `"use client"` at top for Client Components
  - Keep server components as default when possible
- **Data fetching**:
  - Server Components: Direct async/await or fetch
  - Client Components: React Query or useEffect + state
  - Avoid prop drilling - use context or React Query
- **Metadata**: Export `metadata` or `generateMetadata` from page/layout
- **Route groups**: Use `(folderName)` for organization without URL impact
- **Parallel routes**: Use `@slot` notation for complex layouts
- **Intercepting routes**: Use `(..)(.)` syntax for modal-like navigation

### Prisma Usage
- **Schema**: Keep prisma/schema.prisma as single source of truth
- **Client**: Import from `@/lib/db` (singleton instance pattern)
- **Transactions**: Use `$transaction` for atomic operations
- **Query optimization**: 
  - Select only needed fields
  - Use include/select wisely
  - Consider pagination for large datasets
- **Migrations**: 
  - Prefer `prisma migrate dev` for development
  - Use `prisma migrate deploy` for production
  - Never commit `.lock` files to git (they're generated)

### Security Considerations
- **Environment variables**: 
  - Prefix client-exposed vars with `NEXT_PUBLIC_`
  - Never expose secrets to client
  - Validate all env vars at startup
- **Input validation**: Validate/sanitize all user inputs
- **Authentication**: 
  - Use NextAuth.js best practices
  - Secure session handling
  - Protect API routes with proper auth checks
- **Data protection**: 
  - Encrypt sensitive data at rest
  - Use HTTPS in production
  - Implement rate limiting on API routes
- **Dependencies**: 
  - Keep updated
  - Monitor for vulnerabilities (npm audit)

## 📁 Directory Structure Highlights

```
/src
  /app
    /(dashboard)          # Route group for dashboard
    /api                  # Route handlers (API endpoints)
    layout.tsx            # Root layout
    page.tsx              # Home page
  /components
    /ui                   # Shadcn/UI or custom base components
    /layout               # Layout components (header, footer, sidebar)
  /lib
    db.ts                 # Prisma client singleton
    api.ts                # API client utilities
    utils.ts              # Helper functions
  /types
    index.ts              # Global type exports
    db.types.ts           # Prisma-generated types (if exported)
  /hooks
    use-auth.ts           # Authentication hook
    use-query.ts          # Query wrapper
  /context
    AuthContext.tsx       # Auth provider
```

## 🛠️ Recommended Tooling

### VS Code Settings (if applicable)
```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.preferences.importModuleSpecifier": "non-relative",
  "typescript.preferences.importModuleSpecifierEnding": "minimal"
}
```

### Pre-commit Hooks (recommend adding)
- **lint-staged**: Run linter on staged files
- **Type checking**: Run tsc --noEmit on prepush
- **Test running**: Run relevant tests on prepush (when tests exist)

## 🔄 Contributing Guidelines

### Making Changes
1. Create feature branch from main: `git checkout -b feature/your-feature-name`
2. Make changes following these guidelines
3. Ensure linting passes: `npm run lint`
4. Test thoroughly (manual until automated tests exist)
5. Submit pull request with clear description

### Code Review Focus
- Adherence to TypeScript strictness
- Proper error handling
- Performance considerations
- Accessibility compliance
- Security best practices
- Testability of code

### Documentation
- Update README.md for significant feature changes
- Add JSDoc comments for complex functions
- Document environment variables in .env.example
- Update API documentation if endpoints change

## ⚠️ Important Notes

### Environment Variables
Required variables (check .env.example):
- `NEXT_PUBLIC_SITE_URL` - Site URL for client-side usage
- Database connection string (Prisma)
- NextAuth secrets and provider keys
- OpenAI API key
- Other service-specific keys

### Deployment
- Currently deployed on Vercel (see vercel.json)
- Build command: `prisma generate && next build`
- Output directory: `.vercel/output` (Next.js standard)
- Environment variables configured in Vercel dashboard

### Database
- Prisma ORM with PostgreSQL/MySQL/SQLite (check schema.prisma for provider)
- Migrations managed through Prisma Migrate
- Studio available via `npm run db:studio`

### State Management
- React Query for server state
- Context API for global UI state (theme, auth, etc.)
- Local component state for UI interactions
- Avoid over-engineering state solutions

## 🚀 Getting Started for Agents

When beginning work in this repository:

1. **Understand the stack**: Review this document and key files
2. **Check existing patterns**: Look at similar components/hooks for consistency
3. **Run linting**: `npm run lint` to ensure code quality
4. **Test changes**: Verify in development (`npm run dev`)
5. **Consider testing**: Think about how to test your changes
6. **Follow conventions**: Match existing code style and architecture

This repository follows modern Next.js 14 practices with TypeScript strictness. When in doubt, examine existing code for patterns and consult the Next.js, React, and TypeScript documentation.

---
*Generated for agentic coding agents working in the Fleek AI repository. Last updated: 2026-05-02*