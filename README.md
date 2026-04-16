# Thesis Pro — Landing Page

A landing page for **Thesis Pro**, an AI-powered thesis formatting tool built for Indonesian university students. The page is designed to convert visitors by showcasing the product's core value: turning messy, error-filled thesis drafts into clean, campus-standard documents in seconds.

---

## Tech Stack

- **React** — UI library
- **Vite** — build tool and dev server
- **Tailwind CSS** — utility-first styling
- **Framer Motion** — animations and micro-interactions
- **Lucide React** — icons
- **Wouter** — lightweight client-side routing
- **TypeScript** — type safety

---

## Project Structure

```
artifacts/thesis-pro/
├── src/
│   ├── pages/
│   │   └── LandingPage.tsx   # All landing page sections
│   ├── App.tsx                # Router setup
│   ├── index.css              # Global styles and CSS theme variables
│   └── main.tsx               # App entry point
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## Sections

| Section | Description |
|---|---|
| **Navbar** | Sticky top bar with logo, nav links, login, and CTA button. Collapses to hamburger on mobile. |
| **Hero** | Main headline, subheadline, CTA buttons, and a before/after visual comparison of thesis documents. |
| **Trust Bar** | List of supported Indonesian universities (UI, UGM, ITB, UNPAD, ITS, UB, UNDIP, UNAIR, +50 more). |
| **Pain Points** | Three cards highlighting common thesis formatting problems. |
| **How It Works** | Three-step process: Paste, Magic Wash, Download. |
| **Features** | Dark navy section with feature highlights and a live before/after text correction demo. |
| **Pricing** | Single "Panic Pass" plan at Rp 29.000/week. |
| **FAQ** | Accordion with three frequently asked questions. |
| **CTA Section** | Final conversion section with primary and secondary action buttons. |
| **Footer** | Copyright line. |

---

## Getting Started

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm --filter @workspace/thesis-pro run dev
```

Build for production:

```bash
pnpm --filter @workspace/thesis-pro run build
```

---

## Brand

| Element | Value |
|---|---|
| Primary color | Navy blue (`#1e3a8a` / `blue-900`) |
| Accent color | Orange (`#f97316` / `orange-500`) |
| Font | Inter (sans-serif) |
| Target audience | Indonesian university students writing their thesis (skripsi) |

---

## Notes

- The app is a static frontend — no backend is required.
- All content is in Indonesian (Bahasa Indonesia).
- The page is fully responsive (mobile, tablet, desktop).
