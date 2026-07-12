# Architecture

## Overview

This repository is the **Nway Oo Pyae Zo Portfolio** and it follows a **Feature-Based Architecture** for a React + TypeScript + Vite + Tailwind CSS + TanStack Query stack.

The rule is simple: every portfolio section stays close to the code that powers it. Home, About, Services, Portfolio, Testimonials, and Contact should each own their own UI, data, and routing details.

## Core Principles

| Principle | Description |
|---|---|
| Feature isolation | Each portfolio feature owns its API calls, UI components, pages, queries, types, and routes. |
| Shared code separation | Global code lives in `components/ui`, `api`, `layouts`, and `lib`. |
| Layer boundaries | Strict flow: **UI Layer -> Feature Components -> Queries -> API Layer -> Backend**. |
| Reusability | Shared UI components are stateless and framework-agnostic. |
| Predictability | Feature code should be easy to find, refactor, and test without cross-feature coupling. |

## Layer Flow

```text
UI Layer
  -> Feature Components
    -> Queries
      -> API Layer
        -> Backend
```

### Responsibilities by Layer

| Layer | Responsibility |
|---|---|
| UI Layer | Displays section state, handles interaction, and renders the current portfolio page. |
| Feature Components | Encapsulate section-specific composition and view logic. |
| Queries | Use TanStack Query for fetching, caching, invalidation, and mutations. |
| API Layer | Centralizes HTTP communication through a shared axios instance. |
| Backend | Source of truth for contact submissions, CMS data, or future dynamic content. |

## Shared Code Separation

Shared modules are global by design and should not contain portfolio-section-specific behavior.

| Directory | Purpose |
|---|---|
| `src/components/ui/` | Stateless reusable UI primitives such as buttons, inputs, dialogs, and cards. |
| `src/api/` | Shared axios client, base endpoints, and global request helpers. |
| `src/layouts/` | Application shells such as the portfolio navbar, footer, and page wrappers. |
| `src/lib/` | Framework-agnostic utilities, constants, formatters, and pure helper functions. |

## Design System

The design system used by this portfolio should live in `components/ui` and remain:

| Rule | Meaning |
|---|---|
| Stateless | Components receive props and do not own business logic. |
| Framework-agnostic | Components should not depend on a specific feature or page. |
| Composable | UI primitives should be easy to combine into feature views. |
| Consistent | Shared variants, spacing, and tokens should be reused across the app. |

Example:

```tsx
// src/components/ui/button.tsx
export function Button({ children, ...props }) {
  return <button {...props}>{children}</button>;
}
```

## Global API Layer

The shared API layer is responsible for configuring a single axios instance used across the portfolio app.

| Capability | Purpose |
|---|---|
| Base URL | Centralizes backend host configuration. |
| Tokens | Attaches auth tokens or session headers. |
| Interceptors | Normalizes request and response handling. |
| Errors | Provides consistent API error formatting. |

Example layout:

```ts
// src/api/client.ts
import axios from 'axios';

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});
```

## Routing

Routes for each feature live inside the feature directory, not in a global routing dump.

| Rule | Description |
|---|---|
| Feature routes | Each portfolio section owns its route definitions in its own directory. |
| Route composition | The app root combines section routes into the final router. |
| Lazy loading | Features can be loaded lazily to keep bundles focused. |

Example:

```ts
// src/features/portfolio/portfolio.routes.ts
export const portfolioRoutes = [
  {
    path: '/portfolio',
    element: <PortfolioPage />,
  },
];
```

## Dependency Rules

| Allowed | Not Allowed |
|---|---|
| Feature -> `api` | Feature importing another feature directly |
| Feature -> `components/ui` | Global utilities depending on feature code |
| Feature -> `lib` | Shared UI containing business rules |
| Feature -> own internal files | Cross-feature hidden coupling |

## Practical Outcome

This architecture keeps the project scalable as the codebase grows. New features can be added without rewriting the app shell, and shared code stays reusable instead of becoming a second source of business logic.
