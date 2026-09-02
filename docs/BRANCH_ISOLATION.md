# Branch Isolation Strategy

## Pipeline Model

```
feature/* ──► staging ──► uat ──► main (production)
              │           │         │
              │           │         └─ production.yml (release + SLSA + tag)
              │           └─ uat.yml (acceptance + promote gate)
              └─ staging.yml (integration + auto-promote)
```

## Branch Roles

| Branch | Environment | Trigger | Auto-promote | Protection |
|---|---|---|---|---|
| `staging` | staging | push / PR | → uat on green | require CI pass |
| `uat` | uat | push (from promote) | → main on manual gate | require CI + 1 review |
| `main` | production | push (from promote) | release tag | require CI + 2 reviews + signed commits |

## Promotion Flow

1. **Feature → Staging:** Open a PR against `staging`. CI runs type-check + reference impl + SBOM. On merge, auto-promote to `uat`.
2. **Staging → UAT:** The staging pipeline fast-forwards `uat` with `--no-ff`. UAT runs acceptance tests + theorem sanity. A manual `uat-gate` environment approval is required before promoting to `main`.
3. **UAT → Production:** The UAT pipeline merges `uat` into `main` with `--no-ff`. The production pipeline runs final verification, generates SLSA Level 3 provenance, tags a release, and uploads SBOM.

## Branch Protection (apply via GitHub API or UI)

```json
{
  "staging": { "required_status_checks": ["integration"], "enforce_admins": true, "required_pull_request_reviews": 0 },
  "uat":     { "required_status_checks": ["acceptance"], "enforce_admins": true, "required_pull_request_reviews": 1 },
  "main":    { "required_status_checks": ["release"], "enforce_admins": true, "required_pull_request_reviews": 2, "required_signatures": true }
}
```

## Infinite Infrastructure

Each environment is a self-contained, reproducible target. The pipeline is infinitely reproducible — the same three-stage promotion runs identically on GitHub Actions, a self-hosted runner, or an air-gapped CI. No vendor lock-in in the pipeline itself.
