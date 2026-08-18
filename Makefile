.PHONY: generate-go generate-node verify-generate build-go build-node tidy test

PROTO_FILES := \
	proto/common/v1/types.proto \
	proto/core/v1/runtime.proto \
	proto/core/v1/project.proto \
	proto/core/v1/task.proto \
	proto/core/v1/deployment.proto \
	proto/core/v1/system_config.proto \
	proto/core/v1/auth.proto \
	proto/core/v1/plan.proto \
	proto/runtime/v1/execution.proto \
	proto/model/v1/provider.proto \
	proto/model/v1/inference.proto \
	proto/bot/v1/rule.proto \
	proto/bot/v1/profile.proto \
	proto/bot/v1/media.proto \
	proto/bot/v1/config.proto

# Generate Go protobuf stubs under generated/go/.
generate-go:
	mkdir -p generated/go
	protoc \
		--go_out=./generated/go \
		--go_opt=paths=source_relative \
		--go-grpc_out=./generated/go \
		--go-grpc_opt=paths=source_relative \
		-I proto \
		$(PROTO_FILES)

# Generate Node.js protobuf stubs (existing script).
generate-node:
	npm run generate:proto

# Regenerate both Go and Node.js stubs, then fail if proto-derived files differ from the
# committed state. The generated/nodejs/index.* barrel is hand-maintained, so it is excluded.
verify-generate: generate-go generate-node
	@if git diff --quiet -- ':!generated/nodejs/index.*' generated/; then \
		echo "Generated stubs are up to date."; \
	else \
		echo "Generated stubs are out of date. Run 'make generate-go generate-node' and commit the changes."; \
		git diff --stat -- ':!generated/nodejs/index.*' generated/; \
		exit 1; \
	fi

build-go:
	go build ./...

build-node:
	npm run build

tidy:
	go mod tidy

test:
	go test ./...
