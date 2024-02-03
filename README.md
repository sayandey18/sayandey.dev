![cover](https://raw.githubusercontent.com/sayandey18/sayandey.dev/production/public/static/images/github-banner.png)


# sayandey.dev

- **Framework**: [Next.js](https://nextjs.org/)
- **Database**: [PlanetScale](https://planetscale.com)
- **ORM**: [Prisma](https://prisma.io/)
- **Authentication**: [NextAuth.js](https://next-auth.js.org/)
- **Deployment**: [Vercel](https://vercel.com)
- **CMS**: [Sanity](https://www.sanity.io/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Analytics**: [Umami](https://umami.is)

## Overview

- `lib/*` - Short for "library", a collection of helpful utilities or code for external services.
- `pages/api/*` - [API routes](https://nextjs.org/docs/api-routes/introduction). Health check, spotify, guestbook and blog post views.
- `pages/blog/*` - Static pre-rendered blog pages using MDX
- `pages/dashboard` - Containing metrics from health api
- `pages/projects` - Showcase of my current projects on GitHub
- `pages/about` - General information about me
- `pages/sitemap.xml.tsx` - Automatically generated sitemap
- `pages/*` - All other static pages.
- `public/*` - Static assets including fonts and images.
- `prisma/*` - My Prisma schema, which uses a PlanetScale MySQL database.
- `styles/*` - A small amount of global styles. I'm mostly using vanilla Tailwind CSS.

## Running Locally

This application requires Node.js v16.13+.

```bash
git clone https://github.com/sayandey18/sayandey.dev.git
cd sayandey.dev
yarn
yarn dev
```

Create a `.env` file similar to [`.env.example`](https://github.com/ayandey18/sayandey.dev/blob/main/.env.example).

## Cloning / Forking

Please review the [license](https://github.com/sayandey18/sayandey.dev/blob/main/LICENSE.txt) and remove all of my personal information (resume, blog posts, images, etc.).