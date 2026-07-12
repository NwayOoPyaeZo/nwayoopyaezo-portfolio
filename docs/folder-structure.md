# Folder Structure

## Root Structure

The root directory for this portfolio should stay small and predictable.

```text
src/
├── api/
├── components/
│   └── ui/
├── features/
├── layouts/
├── lib/
├── App.tsx
└── main.tsx
```

## Root Directory Map

| Path | Purpose |
|---|---|
| `src/api/` | Global axios client and shared endpoints for the portfolio app. |
| `src/components/ui/` | Reusable, stateless UI components with no business logic. |
| `src/features/` | Self-contained portfolio sections grouped by page/domain. |
| `src/layouts/` | App layouts such as the portfolio navbar, footer, and guard wrappers. |
| `src/lib/` | Framework-agnostic utility functions and constants. |
| `src/App.tsx` | Routing, global providers, and app composition. |
| `src/main.tsx` | React mounting and global CSS import. |

## Example Project Tree

```text
src/
├── api/
│   ├── client.ts
│   └── endpoints.ts
├── components/
│   └── ui/
│       ├── button.tsx
│       ├── input.tsx
│       └── card.tsx
├── features/
│   ├── about/
│   ├── contact/
│   ├── home/
│   ├── portfolio/
│   ├── services/
│   └── testimonials/
├── layouts/
│   ├── portfolio-layout.tsx
│   └── section-shell.tsx
├── lib/
│   ├── formatters.ts
│   └── constants.ts
├── App.tsx
└── main.tsx
```

## Shared Module Rules

| Folder | Rule |
|---|---|
| `api` | Keep request setup, interceptors, and shared endpoints here. |
| `components/ui` | Keep components presentation-only and reusable. |
| `layouts` | Keep shell-level composition and route wrappers here. |
| `lib` | Keep pure helpers, constants, and formatters here. |

## Feature Module Examples

Feature names should reflect the portfolio section rather than the implementation detail.

| Domain Example | Suggested Feature Folder |
|---|---|
| Home section | `src/features/home/` |
| About section | `src/features/about/` |
| Services section | `src/features/services/` |
| Portfolio section | `src/features/portfolio/` |
| Testimonials section | `src/features/testimonials/` |
| Contact section | `src/features/contact/` |

## File Placement Rules

| File Type | Where It Belongs |
|---|---|
| Shared button or input | `src/components/ui/` |
| Feature-specific page | `src/features/[feature]/pages/` |
| Feature API call | `src/features/[feature]/api/` |
| Global axios client | `src/api/` |
| App shell | `src/layouts/` |
| Pure utility | `src/lib/` |

## App Entry Files

```tsx
// App.tsx
// Handles routing, providers, and top-level composition.

// main.tsx
// Mounts React and imports global CSS.
```

## Practical Rule

If a file is used by only one portfolio section, it belongs inside that section. If a file is used across multiple sections, move it to a shared root folder only when it is truly generic.
