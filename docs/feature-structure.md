# Feature Structure

## Standard Feature Layout

Each portfolio section lives in `src/features/[feature-name]` and owns the logic for that section.

```text
src/features/[feature-name]
├── api/
├── components/
├── pages/
├── queries/
├── [feature].routes.ts
└── [feature].types.ts
```

## Directory Responsibilities

| Directory / File | Purpose |
|---|---|
| `api/` | Section-specific API calls using the shared axios client. |
| `components/` | Section-isolated UI components that are not exported globally. |
| `pages/` | Page-level components that connect queries and layout. |
| `queries/` | Data fetching hooks for fetching, caching, and mutation handling. |
| `[feature].routes.ts` | Route definitions for that section. |
| `[feature].types.ts` | Section-specific TypeScript types to avoid global pollution. |

## Example Feature Tree

```text
src/features/portfolio
├── api/
│   └── portfolio.api.ts
├── components/
│   ├── project-card.tsx
│   └── portfolio-filter.tsx
├── pages/
│   ├── client/
│   │   └── portfolio-page.tsx
│   └── admin/
│       └── portfolio-admin-page.tsx
├── queries/
│   ├── usePortfolioQuery.ts
│   └── useUpdatePortfolioMutation.ts
├── portfolio.routes.ts
└── portfolio.types.ts
```

## Pages Folder Guidance

If a feature has separate audiences, split pages by context:

| Folder | When to Use |
|---|---|
| `pages/client/` | Public or customer-facing screens. |
| `pages/admin/` | Admin-only screens, dashboards, and management tools. |

## API Pattern

Feature APIs should use the shared axios instance from `src/api/` and stay focused on the domain.

```ts
// src/features/portfolio/api/portfolio.api.ts
import { apiClient } from '@/api/client';

export const getPortfolioItems = () => apiClient.get('/portfolio-items');
```

## Query Pattern

Queries belong to the feature because they describe how that section loads and mutates data.

| Query Concern | What It Handles |
|---|---|
| Fetching | Loading server data for the feature. |
| Caching | Reusing query results efficiently. |
| Mutation | Create, update, and delete flows. |
| Invalidation | Refreshing stale data after changes. |

Example:

```ts
// src/features/portfolio/queries/usePortfolioQuery.ts
export function usePortfolioQuery() {
  return useQuery({ queryKey: ['portfolio'], queryFn: getPortfolio });
}
```

## Route Rule

Feature routes must live inside the feature directory so the feature remains self-contained.

```ts
// src/features/portfolio/portfolio.routes.ts
export const portfolioRoutes = [
  { path: '/portfolio', element: <PortfolioPage /> },
];
```

## Dependency Rule

Features cannot depend directly on other features.

| Allowed Imports | Not Allowed |
|---|---|
| `api` | Another feature's `components` or `queries` |
| `components/ui` | Cross-feature coupling |
| `lib` | Importing business logic from unrelated modules |

This rule keeps portfolio sections portable and reduces hidden coupling across the app.
