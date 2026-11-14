# Developer Portfolio

Personal portfolio of Manas Dutt: a single-page React site with an animated
hero, experience timeline, featured projects and contact section.

**Live:** https://developer-portfolio-cyan-delta.vercel.app

## Features

- Bento-grid showcase of featured projects, driven by `src/data/projects.json`
- Entry "puzzle gate": two short statistics questions unlock the site, and the
  result is remembered in the browser
- Scroll and hover animations with Framer Motion
- Lazy-loaded sections to keep the first paint small
- Resume download

## Tech stack

React 19, Vite 7, Tailwind CSS 3, Framer Motion, Lucide icons.

## Development

```bash
npm install
npm run dev        # http://localhost:5173
npm run lint
npm run build      # output in dist/
npm run preview    # serve the production build locally
```

## Project layout

- `src/App.jsx` wraps the page in `PuzzleGate`, renders `Navbar` and `Hero`
  immediately, and lazy-loads `Experience`, `Projects` and `Contact`.
- `src/components/` holds one component per section.
- `src/data/projects.json` holds the project list.
- `public/` holds static assets such as `resume.pdf`.

The puzzle gate runs entirely in the browser. It is a UX element, not an access
control, and it does not protect any content.

## Editing content

| What | Where |
| --- | --- |
| Projects | `src/data/projects.json` (the first six are featured) |
| Experience | `src/components/Experience.jsx` |
| Hero text | `src/components/Hero.jsx` |
| Contact email and footer text | `src/components/Contact.jsx` |
| Puzzle questions | `src/components/PuzzleGate.jsx` |
| Theme colours | `tailwind.config.js` (`theme.extend.colors`) |
| Resume | `public/resume.pdf` |

## Deployment

- **Vercel**: import the repository; `vercel.json` sets the Vite framework and
  the single-page rewrite.
- **Docker**: `docker build -t portfolio . && docker run -p 3000:3000 portfolio`
- **GitHub Pages**: `npm run deploy` publishes `dist/` with `gh-pages`.
