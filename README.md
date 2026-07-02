# Mario Shots Foundation

The official website of the **Mario Shots Foundation** — a community-driven initiative honoring the life and legacy of Mario, a visionary storyteller and photographer. The foundation empowers youth in photography, promotes mental wellness, and preserves cultural memory through storytelling.

**Live site:** [marioshotsfoundation.vercel.app](https://marioshotsfoundation.vercel.app)

## Features

- **Home** — hero, featured programs, impact stats, testimonials carousel, and upcoming events
- **Programs** — photography workshops, mental wellness resources, and the Mario archive
- **Gallery** — categorized photography showcase
- **Events** — upcoming workshops, exhibitions, and community gatherings
- **Stories** — posts and voices from the community
- **Donate** — supported payment methods and giving information
- **Contact** — working contact form (delivers via FormSubmit)
- **RIO Assistant** — an interactive chat guide for visitors (rule-based, no external API)
- Dark/light theme, responsive layout, SEO metadata with Open Graph cards, sitemap, and robots.txt

## Tech Stack

| Layer | Choice |
| --- | --- |
| Framework | [Next.js 15](https://nextjs.org) (App Router, static prerendering) |
| Language | TypeScript |
| Styling | Tailwind CSS + [shadcn/ui](https://ui.shadcn.com) (Radix primitives) |
| Icons | lucide-react |
| Linting | Biome + ESLint (`eslint-config-next`) |
| Analytics | Vercel Analytics |
| Hosting | Vercel (auto-deploys from `main`) |

## Getting Started

```bash
# install dependencies
npm install

# start the dev server (http://localhost:3001)
npm run dev

# production build
npm run build

# lint + type-check
npm run lint
```

## Project Structure

```
src/
  app/           # routes: /, about, programs, gallery, events, stories, donate, contact
    sitemap.ts   # generated sitemap.xml
    robots.ts    # generated robots.txt
  components/
    home/        # hero, featured programs, impact stats, testimonials, events
    layout/      # header, footer, page-header, section-container
    rio/         # RIO chat assistant (flows, hooks, UI)
    theme/       # dark/light theme provider + toggle
    ui/          # shadcn/ui primitives
  lib/
    constants.ts # site config, navigation, programs, events, posts, testimonials
    home-data.ts # homepage content
  types/
public/
  images/        # logos and photos
  patterns/      # background patterns
```

Most site content (programs, events, posts, testimonials, contact details) lives in [`src/lib/constants.ts`](src/lib/constants.ts) — edit that file to update what the site displays.

## Deployment

Pushes to `main` deploy automatically to production via the Vercel GitHub integration. Pull request branches get preview deployments.

## Contributing

Issues and pull requests are welcome — especially real photography to replace the remaining stock placeholder images.

---

Made with ❤️ for Mario's legacy.
