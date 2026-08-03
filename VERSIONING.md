# Versioning Guide for `zora-code-rpc`

`zora-code-rpc` is a shared gRPC contract repository. It is consumed by both **Go** services (via Go module tags) and **Node.js** services (via the GitHub Packages npm registry). This document explains how to version it correctly.

## Single source of truth

The version lives in [`package.json`](package.json) as the `version` field. Everything else is derived from it:

- The Go module tag: `v{version}` (e.g., `v0.2.0`).
- The npm package version: `{version}` (e.g., `0.2.0`).

## When to bump

Follow [Semantic Versioning](https://semver.org/):

| Bump | Triggering change |
|------|-------------------|
| **Major** (`X.0.0`) | Breaking `.proto` change: renamed/removed fields or messages, changed types, removed services, renumbered fields. |
| **Minor** (`0.X.0`) | Additive `.proto` change: new services, new messages, new fields, new enum values. |
| **Patch** (`0.0.X`) | Non-contract changes: regeneration with newer generators, tooling updates, documentation fixes, dependency updates. |

> If you are not sure whether a change is breaking, treat it as breaking. It is cheaper to bump a major version than to coordinate a breaking fix across four services.

## How to bump and release

1. Edit `package.json` and set the new version:
   ```bash
   npm version patch   # or minor / major
   ```
   Or edit the field manually.

2. Regenerate both Go and Node.js stubs so they match the `.proto` files:
   ```bash
   make generate-go
   make generate-node
   ```

3. Verify the committed stubs are in sync:
   ```bash
   make verify-generate
   ```

4. Commit the changes:
   ```bash
   git add package.json package-lock.json generated/ proto/
   git commit -m "chore: bump zora-code-rpc to v0.X.Y"
   ```

5. Push to `master`:
   ```bash
   git push origin master
   ```

The [`.github/workflows/release.yml`](.github/workflows/release.yml) workflow will:

- Detect the new `package.json` version.
- Create and push the `vX.Y.Z` git tag (required for Go module resolution).
- Publish `@AndreeJait/zora-code-rpc@X.Y.Z` to `https://npm.pkg.github.com`.
- Create a GitHub Release with auto-generated notes.

## Consuming the new version

### Go services

In `zora-code-runtime` or `zora-code-model`:

```bash
go get github.com/AndreeJait/zora-code-rpc@v0.X.Y
go mod tidy
```

If you want the latest tagged version:

```bash
go get github.com/AndreeJait/zora-code-rpc@latest
```

### Node.js services

In `zora-code-core` or `zora-code-gql`:

```bash
npm install @AndreeJait/zora-code-rpc@^0.X.Y
```

The `.npmrc` in those repositories already points the `@AndreeJait` scope to `https://npm.pkg.github.com`. You must set a `NODE_AUTH_TOKEN` environment variable with a GitHub personal access token that has `read:packages` scope (and `write:packages` for publishing from CI).

## Major version Go module path

Go module versioning requires the import path to include the major version for versions `>= v2`. Before releasing `v2.0.0`:

1. Update the module path in `go.mod`:
   ```
   module github.com/AndreeJait/zora-code-rpc/v2
   ```
2. Update all `option go_package` lines in `proto/**/*.proto` to use `/v2`.
3. Update every consumer import path to include `/v2`.
4. Update `package.json` to `2.0.0`.

The npm package does **not** need a scope or path change for major versions.

## Pre-release versions

For work-in-progress contracts, use pre-release tags such as `v0.3.0-beta.1`:

- In `package.json`: `"version": "0.3.0-beta.1"`
- The workflow will create `v0.3.0-beta.1` and publish `0.3.0-beta.1`.

Go consumers can pin pre-releases explicitly; `go get ...@latest` will skip them.
npm consumers can install with `npm install @AndreeJait/zora-code-rpc@0.3.0-beta.1`.
