# Contributing

## Branch Naming

Use one of the following prefixes for every branch:

| Type | Example |
|---|---|
| Feature | `feat/product-listing` |
| Fix | `fix/cart-total` |
| Hotfix | `hotfix/payment-timeout` |
| Chore | `chore/deps-update` |
| Release | `release/v1.0.0` |
| Test | `test/api-contracts` |

## Commit Messages

Commit messages must use one of these prefixes:

| Prefix | Use For |
|---|---|
| `feat:` | New user-facing functionality |
| `fix:` | Bug fixes |
| `hotfix:` | Urgent production fixes |
| `chore:` | Maintenance tasks |
| `docs:` | Documentation only changes |
| `style:` | Formatting or non-functional style changes |
| `refactor:` | Code structure changes without behavior changes |
| `test:` | Tests only |

Examples:

```text
feat: add product search filters
fix: correct checkout validation
docs: update feature architecture guide
```

## File Naming Conventions

| Item | Rule | Example |
|---|---|---|
| Files | Strict `kebab-case` | `user-card.tsx` |
| React component file | `kebab-case` | `product-table.tsx` |
| Component name | `PascalCase` inside the file | `export function ProductTable()` |
| Hooks | `camelCase` starting with `use` | `useCartTotals` |
| Utils / Helpers | `camelCase` | `formatCurrency` |

## React Component Rules

| Rule | Requirement |
|---|---|
| File name | Use `kebab-case`. |
| Export name | Use `PascalCase` for the React component. |
| Scope | Keep components focused on one job. |
| Placement | Put reusable shared UI in `src/components/ui/`. |

Example:

```tsx
// user-card.tsx
export function UserCard() {
  return <div>User card</div>;
}
```

## Pull Request Rules

Every PR must follow these rules:

| Rule | Description |
|---|---|
| Small and focused | One logical change per PR. |
| Linked issue | Reference the related issue or ticket. |
| Review required | At least 1 reviewer must approve. |
| Build passes | The PR must pass the build before merge. |

## Recommended Workflow

```text
1. Create a branch using the correct prefix.
2. Make a focused change.
3. Keep commits small and descriptive.
4. Open a PR that links the issue.
5. Request at least one review.
6. Merge only after the build passes.
```

## Good Practices

| Do | Avoid |
|---|---|
| Keep feature code isolated | Mixing business logic into shared UI |
| Use clear, descriptive names | Vague names like `stuff.ts` or `temp.tsx` |
| Prefer reusable helpers in `lib` | Duplicating utility logic across features |
| Add tests for critical flows | Shipping unverified behavior changes |
