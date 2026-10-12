# Portfolio

Source for my portfolio site at <https://madniabdulwahab.github.io/portfolio/>.

A single page built with React, TypeScript and Vite. All text lives in
[`src/content.ts`](src/content.ts), so updating a project or a role does not touch the layout.
Pushing to `main` builds the site and deploys it to GitHub Pages.

```sh
npm ci
npm run dev      # local development server
npm run build    # type-check and production build
npm run lint
```
