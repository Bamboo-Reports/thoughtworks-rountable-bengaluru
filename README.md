# Thoughtworks Roundtable — Bengaluru

Standalone site for the **Agentic Supply Chain Control Tower** executive
roundtable (10 September 2026, Bengaluru), extracted from `bamboo-reports-web`
so it can be hosted on its own domain.

## Routes

| Path         | Page                                  |
| ------------ | ------------------------------------- |
| `/`          | Event page with the JotForm registration form |
| `/thank-you` | Post-registration confirmation        |

The old `bamboo-reports-web` paths (`/events/agentic-supply-chain-control-tower`
and its `/thank-you`) redirect to the new roots client-side.

## Stack

Vite + React 18 + TypeScript + Tailwind CSS 3, with the same design tokens as
the parent repo so the pages render identically. The registration form is a
JotForm embed (form ID `262230503743448`).

## Develop and deploy

```sh
npm install
npm run dev        # local dev server on :8080
npm run typecheck
npm run build      # outputs to dist/
```

`netlify.toml` is included (SPA fallback redirect); connecting the repo to
Netlify and deploying with defaults is enough. Any static host works — serve
`dist/` and rewrite all paths to `index.html`.

## After deploying

- **JotForm thank-you redirect**: the form is configured to redirect to the
  thank-you page on the old domain. Update the redirect URL in JotForm to
  `https://<new-domain>/thank-you`.
- The parent repo still serves the same event at
  `/events/agentic-supply-chain-control-tower`; add a redirect there to the new
  domain once this site is live, so the page exists in exactly one place.
