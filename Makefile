.PHONY: generate-go generate-node build-go build-node tidy test

PROTO_FILES := \
	proto/common/v1/types.proto \
	proto/core/v1/provider.proto \
	proto/core/v1/runtime.proto \
	proto/core/v1/project.proto \
	proto/core/v1/task.proto \
	proto/core/v1/deployment.proto \
	proto/core/v1/system_config.proto \
	proto/core/v1/auth.proto \
	proto/runtime/v1/execution.proto \
	proto/model/v1/inference.proto

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

build-go:
	go build ./...

build-node:
	npm run build

tidy:
	go mod tidy

test:
	go test ./...
