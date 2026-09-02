# Open BaaS Migration & Full Code Decoupling

## Goal

Migrate the Omega Utilities from any single BaaS vendor (Base44, Firebase, Supabase, etc.) to an **open BaaS** model where the codebase is fully decoupled and portable across providers, self-hosted runtimes, and bare metal.

## Decoupling Layers

```
┌─────────────────────────────────────────────┐
│  Application Layer (utility logic)           │  ← vendor-neutral, pure TS
├─────────────────────────────────────────────┤
│  Interface Layer (ports)                     │  ← defined contracts
├─────────────────────────────────────────────┤
│  Adapter Layer (vendor implementations)      │  ← swappable
├─────────────────────────────────────────────┤
│  BaaS Provider (Base44 / Supabase / self)    │  ← any
└─────────────────────────────────────────────┘
```

## Ports (Interfaces)

Each utility depends on four ports, not on any vendor SDK:

```typescript
// ports.ts — vendor-neutral contracts
export interface DataPort    { save(key: string, val: unknown): Promise<void>; load<T>(key: string): Promise<T | null>; }
export interface AuthPort    { verify(token: string): Promise<{ id: string; role: string } | null>; }
export interface ComputePort { invoke(fn: string, input: unknown): Promise<unknown>; }
export interface EmitPort    { log(event: string, data: unknown): Promise<void>; }
```

## Adapters (Vendor Implementations)

```typescript
// adapters/base44.ts
import { base44 } from "@base44/sdk";  // only in adapter, never in utility
export const base44Data: DataPort = {
  async save(k, v) { await base44.entities.UtilityResult.create({ key: k, value: v }); },
  async load(k)    { const r = await base44.entities.UtilityResult.filter({ key: k }); return r[0]?.value ?? null; },
};

// adapters/self-hosted.ts — zero vendor dependency
export const selfHostedData: DataPort = {
  async save(k, v) { /* POST to your own API */ },
  async load(k)    { /* GET from your own API */ return null; },
};
```

## Vendor Extraction Checklist

- [ ] No vendor SDK import in `reference/*.ts` — only in `adapters/*.ts`.
- [ ] No vendor-specific config hardcoded — all via `process.env`.
- [ ] No vendor entity names in utility logic — use port interfaces.
- [ ] Each adapter is independently testable with a mock port.
- [ ] A self-hosted adapter exists and passes the same acceptance tests.

## Migration Path

1. **Extract:** Wrap all vendor calls behind ports. Utility code imports only ports.
2. **Abstract:** Define adapters for current vendor + self-hosted target.
3. **Verify:** Run acceptance tests against both adapters. Both must pass.
4. **Switch:** Change the adapter wiring at deployment time via `process.env.UTILITY_ADAPTER`.
5. **Extract vendor config:** Move all vendor-specific settings to environment variables.

## Self-Hostable Runtime

The utilities run on any Node.js 20+ runtime. No BaaS is required:

```bash
# Run with zero vendor dependencies
UTILITY_ADAPTER=self-hosted tsx reference/cwp.ts

# Run with Base44 adapter (current)
UTILITY_ADAPTER=base44 BASE44_API_KEY=xxx tsx reference/cwp.ts
```

The `Dockerfile` in this repo builds a vendor-neutral image. Override `UTILITY_ADAPTER` at deploy time.
