# Contributing to Omega Utilities

Thank you for contributing. These utilities are meant to last — across civilizations, across paradigms. Contributions must meet a high bar.

## Core Rules

1. **Pure math/physics only.** Every utility must cite its founding theorem. No heuristics. No LLM wrappers. No "it works in practice" without a proof sketch.
2. **Civilian-safe.** This is the public repo. Do not commit classified construction details, adversarial parameter ranges, or omega-tier constructions. Those belong in the restricted repository.
3. **Zero-dependency reference implementations.** TypeScript, no npm packages. Each file must run standalone via `npx tsx`.
4. **One utility per PR.** Keep changes focused. A PR touching multiple utilities will be split.

## Adding a New Utility

1. Open an issue proposing the utility with its founding theorem and civilian use case.
2. After discussion, add:
   - `specs/civilian/<id>.md` — civilian-tier spec (theorem, construction, civilian use, limitations).
   - `reference/<id>.ts` — zero-dependency TypeScript reference implementation.
   - An entry in the README table.
3. CI must pass (type-check + theorem sanity assertions).
4. A maintainer reviews. Restricted-tier details are handled offline.

## Spec Format

Each `specs/civilian/<id>.md` follows:

```markdown
# <Utility Name>

## Theorem
<Founding theorem + citation>

## Construction (Civilian Tier)
<How it is built — public-safe level>

## Civilian Use Cases
<Concrete civilian applications>

## Limitations
<What this tier does NOT cover — pointer to restricted repo>
```

## Security

If you find a construction flaw that breaks a theorem-grounded guarantee, do NOT open a public issue. Email the maintainers privately. Public disclosure happens after a fix lands in both repos.

## License

By contributing you agree your contributions are licensed Apache-2.0.
