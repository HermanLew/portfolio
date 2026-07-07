# Herman Lewandowsky Portfolio

Portfolio website for Herman Lewandowsky, built with Next.js, React, TypeScript, and next-intl.

## Requirements

- Node.js 20 or newer
- pnpm

## Getting Started

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000 in your browser.

## Available Scripts

```bash
pnpm dev        # Start the local development server
pnpm build      # Create a production build
pnpm start      # Start the production server after build
pnpm typecheck  # Run TypeScript checks
pnpm check      # Run typecheck and production build
```

## Environment

Copy `.env.example` to `.env.local` when you need to override the public site URL:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Browser Support

The project uses standard modern web APIs and is intended for current versions of Chrome, Firefox, Safari, and Edge.

Before publishing, run:

```bash
pnpm check
```
