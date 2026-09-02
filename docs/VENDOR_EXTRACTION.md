# Vendor Extraction Guide

## Principle

Every line of vendor-specific code lives in exactly one place: the adapter layer. The utility layer, the port layer, and the test layer are 100% vendor-neutral. This makes the codebase portable across any BaaS or self-hosted runtime.

## Extraction Process

### Step 1: Audit
```bash
# Find all vendor imports outside adapters/
grep -rn "@base44\|firebase\|@supabase\|aws-sdk" reference/ src/ --exclude-dir=adapters
# Expected: zero matches
```

### Step 2: Define Ports
For each vendor capability the utility uses, define a port (interface) in `ports.ts`. Ports are the only thing the utility imports.

### Step 3: Implement Adapters
Create one adapter file per vendor in `adapters/`. Each adapter implements all ports for that vendor.

### Step 4: Wire at Runtime
```typescript
// runtime.ts — the only file that knows which adapter is active
import { base44Data } from "./adapters/base44";
import { selfHostedData } from "./adapters/self-hosted";
export const data: DataPort = process.env.UTILITY_ADAPTER === "self-hosted" ? selfHostedData : base44Data;
```

### Step 5: Verify Portability
Run the full acceptance test suite against each adapter. All must pass:
```bash
UTILITY_ADAPTER=base44 npm test
UTILITY_ADAPTER=self-hosted npm test
```

## Vendor Config Extraction

All vendor-specific configuration moves to environment variables:

| Vendor Config | Environment Variable |
|---|---|
| Base44 API key | `BASE44_API_KEY` |
| Supabase URL + key | `SUPABASE_URL`, `SUPABASE_KEY` |
| Firebase config | `FIREBASE_CONFIG` (JSON) |
| Self-hosted API URL | `SELF_HOSTED_API_URL` |

No config is hardcoded. The adapter reads its own env vars; the utility never touches them.

## Decoupling Verification

The build is considered fully decoupled when:
1. `npm test` passes with `UTILITY_ADAPTER=self-hosted` and zero vendor packages installed.
2. The Docker image builds without any vendor SDK in `package.json` dependencies.
3. Switching vendors requires changing only one environment variable.
