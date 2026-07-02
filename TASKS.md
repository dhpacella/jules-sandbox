# Task backlog for Jules

Starter tasks, roughly in order. Each is sized for one async session / one PR.

1. **Add a visit counter API** — `GET /api/visits` increments and returns a JSON
   count (in-memory is fine). Show the count on the home page via fetch.
2. **Add tests** — `node --test` coverage for `/healthz` and `/api/visits`
   (use supertest or plain http). Wire into `npm test`.
3. **Add a `/api/quote` endpoint** — returns a random quote from a JSON file of
   20 quotes about robots and automation. Display one on the home page with a
   "new quote" button.
4. **Dark/light theme toggle** — persist choice in localStorage, default dark.
5. **Add a status page** — `/status` renders uptime, version (from package.json),
   Node version, and last-deploy time in the site's existing visual style.
6. **CI** — GitHub Action that runs `npm test` on every PR.
