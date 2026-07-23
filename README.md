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

- **Go:** tag releases as `github.com/zora-code/zora-code-rpc@vX.Y.Z`; generated clients import `proto/`.
- **Node.js:** publish generated types to `https://npm.pkg.github.com/@zora-code/zora-code-rpc`.

## Generating Clients

### Node.js

```bash
npx grpc_tools_node_protoc \
  --js_out=import_style=commonjs,binary:./generated/nodejs \
  --grpc_out=grpc_js:./generated/nodejs \
  --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin \
  proto/**/*.proto
```

### Go

```bash
protoc \
  --go_out=./generated/golang \
  --go_opt=paths=source_relative \
  --go-grpc_out=./generated/golang \
  --go-grpc_opt=paths=source_relative \
  proto/**/*.proto
```

> Code generation is intentionally not committed to this repository in MVP B. Each service generates clients from these `.proto` files during its own build.

## Versioning

This repository follows [Semantic Versioning](https://semver.org/). Breaking changes to `.proto` definitions require a major version bump and coordinated migration across services.
