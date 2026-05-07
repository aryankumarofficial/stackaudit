# StackAudit

[![CI](https://github.com/aryankumarofficial/stackaudit/actions/workflows/ci.yml/badge.svg)](https://github.com/aryankumarofficial/stackaudit/actions/workflows/ci.yml)

StackAudit is an AI spend auditing platform built for startups and engineering teams to identify wasted spend across tools like Cursor, Claude, ChatGPT, GitHub Copilot, Gemini, and more. It analyzes current subscriptions, recommends cheaper or better-fit alternatives, estimates savings, and generates a shareable audit report optimized for lead generation and viral distribution.

This project was built as part of the Credex Web Development Internship Assignment focused on shipping a production-quality product instead of a coding exercise.

---

## Features

- AI tool spend audit engine
- Multi-tool pricing analysis
- Personalized AI-generated audit summaries
- Shareable public audit reports
- Lead capture with backend storage
- Transactional email support
- Responsive UI with accessibility considerations
- CI pipeline with automated linting and tests
- Persistent form state across reloads

---

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **UI:** Tailwind CSS + shadcn/ui
- **State Management:** Zustand
- **Email:** Resend
- **Testing:** Vitest + Testing Library
- **Package Manager:** Bun

---

## Getting Started

### Clone the repository

```bash
git clone https://github.com/aryankumarofficial/stackaudit.git
cd stackaudit
```

### Install dependencies

```bash
bun install
```

### Setup environment variables

Create a `.env.local` file:

```env
ANTHROPIC_API_KEY=
RESEND_API_KEY=
DATABASE_URL=
```

### Run locally

```bash
bun dev
```

Open:

```txt
http://localhost:3000
```

---

## Available Scripts

```bash
bun dev       # start development server
bun build     # production build
bun start     # run production build
bun lint      # run eslint
bun test      # run tests
```

---

## Project Structure

```txt
src/
 ├── app/
 ├── components/
 ├── lib/
 ├── services/
 ├── hooks/
 ├── types/
 └── tests/
```

---

## Testing

Run all tests:

```bash
bun test
```

Run lint checks:

```bash
bun lint
```

CI automatically runs linting and tests on every push to `main`.

---

## Deployment

Recommended platforms:

- Vercel
- Netlify
- Cloudflare Pages

Production deployment should include:

- Environment variables configured securely
- HTTPS enabled
- Proper Open Graph metadata
- Rate limiting enabled

---

## Decisions

1. Used rule-based audit logic instead of AI for pricing recommendations because deterministic financial logic is more reliable and explainable.
2. Chose Next.js App Router for server actions, metadata handling, and shareable dynamic routes.
3. Used shadcn/ui instead of a prebuilt dashboard template to retain full design control.
4. Prioritized public shareable reports because distribution and virality are core to the product strategy.

---

## Screenshots

- Landing page
- Audit results page
- Shareable report page

---

## Live Demo

_comming soon_

```txt
https://stackaudit.aryankumarofficial.dev
```
