# Operations

## Branching

Use GitFlow-style branches:

- `main` holds released portfolio versions.
- `develop` receives integrated work.
- `feature/*`, `fix/*`, and `hotfix/*` branches are merged through pull requests.

## Required checks

The repository includes automated checks for:

- Python tests.
- Static frontend lint, build, and `npm audit`.
- CodeQL for Python and JavaScript.
- Trivy filesystem vulnerability scanning.
- Gitleaks secret scanning.
- Dependency review on pull requests.

## Vercel deployment

The frontend is in `frontend/` and builds to `frontend/dist`.

Configure these GitHub Actions secrets to enable real Vercel deployments:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

Without those secrets, the Vercel workflow stays green and reports a skip notice.
