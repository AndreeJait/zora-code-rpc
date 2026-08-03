# zora-code-rpc

Shared gRPC contract definitions for the Zora Code platform.

This repository contains the `.proto` files that define how `zora-code-gql`, `zora-code-core`, `zora-code-runtime`, and `zora-code-model` communicate. It is the source of truth for cross-service RPC boundaries.

## Layout

```
proto/
├── common/v1/types.proto      # Shared enums, messages, and primitives
├── core/v1/*.proto            # zora-code-core service contracts
├── runtime/v1/*.proto         # zora-code-runtime execution contracts
└── model/v1/*.proto           # zora-code-model inference contracts
```

## Services

| Package | Owner | Purpose |
|---------|-------|---------|
| `core.v1` | `zora-code-core` (Node.js) | Provider, runtime, project, task metadata, deployment, system config, and secret CRUD. |
| `runtime.v1` | `zora-code-runtime` (Go) | Task execution, container lifecycle, log streams, and interactive terminal. |
| `model.v1` | `zora-code-model` (Go) | Model listing and provider health checks. |

## Package Plan

- **Go:** tag releases as `github.com/AndreeJait/zora-code-rpc@vX.Y.Z`; generated clients import `proto/`.
- **Node.js:** generated TypeScript gRPC stubs are published to `https://npm.pkg.github.com/@AndreeJait/zora-code-rpc`. Sibling services still consume the package locally as `file:../zora-code-rpc` during active development and can switch to a pinned version after publishing.

## Generating Clients

Run the generators from the repository root:

```bash
# Generate both Go and Node.js stubs
make generate-go
make generate-node

# Verify committed stubs match the current .proto files
make verify-generate
```

### Node.js

The Node.js generator is driven by `scripts/generate-proto.js` and produces TypeScript stubs under `generated/nodejs/`:

```bash
npm run generate:proto
npm run build
npm run typecheck
```

### Go

The Go generator produces `.pb.go` and `_grpc.pb.go` files under `generated/go/`:

```bash
make generate-go
go build ./...
```

## Continuous Integration

| Workflow | Trigger | Purpose |
|----------|---------|---------|
| `proto-generate.yml` | Every push and PR | Regenerates Go and Node.js stubs, runs builds and type checks, and fails if `generated/` is out of sync. |
| `release.yml` | Push to `master` | Detects a `package.json` version bump, creates a `vX.Y.Z` git tag, publishes `@AndreeJait/zora-code-rpc` to `npm.pkg.github.com`, and creates a GitHub Release. |

## Versioning

This repository follows [Semantic Versioning](https://semver.org/):

- **Major** — breaking `.proto` changes (renamed fields, removed services, changed types).
- **Minor** — additive changes (new services, new messages, new fields).
- **Patch** — fixes, regenerations, or non-breaking tooling updates.

The version in `package.json` is the single source of truth. The `release.yml` workflow converts it into a `v{version}` git tag, which is required for Go module resolution and also drives the npm publish step.

Before publishing a **major** version, update the Go module path to include the major suffix (e.g., `github.com/AndreeJait/zora-code-rpc/v2`) and update all import paths accordingly.
