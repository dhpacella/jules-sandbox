# Jules Sandbox

A deliberately small Express app that exists so an async coding agent (Google Jules)
can work real tasks against a real deploy loop:

**Jules writes code → opens a PR on GitHub → merge → Render auto-deploys → live site.**

- `server.js` — Express, serves `public/` + `/healthz`
- `render.yaml` — Render Blueprint (free plan, auto-deploy on merge)
- `TASKS.md` — the backlog Jules pulls from

## Run locally

```bash
npm install
npm start   # http://localhost:3000
```

## Ground rules for agents working this repo

1. Keep the app runnable with `npm install && npm start` — no build step.
2. Every change ships with a test when one is feasible (`node --test`).
3. Never add secrets, keys, or references to other repositories.
4. Bump the version badge in `public/index.html` on user-visible changes.
