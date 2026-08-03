import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { type CallOptions, type ChannelCredentials, Client, type ClientOptions, type ClientUnaryCall, type handleUnaryCall, type Metadata, type ServiceError, type UntypedServiceImplementation } from "@grpc/grpc-js";
import { DeleteResponse, EnvVar, Timestamps } from "../../common/v1/types.js";
export declare const protobufPackage = "core.v1";
/** Runtime defines an execution environment for the claude-code agent. */
export interface Runtime {
    id: string;
    name: string;
    description: string;
    providerId: string;
    allowedModels: string[];
    defaultModel: string;
    containerImage: string;
    installCommand: string;
    envVars: EnvVar[];
    /** "claude-code" in MVP B */
    agent: string;
    timestamps?: Timestamps | undefined;
    /** verbatim Dockerfile instructions inserted after base setup */
    dockerfile: string;
}
export interface ListRuntimesRequest {
}
export interface ListRuntimesResponse {
    runtimes: Runtime[];
}
export interface GetRuntimeRequest {
    id: string;
}
export interface CreateRuntimeRequest {
    name: string;
    description: string;
    providerId: string;
    allowedModels: string[];
    defaultModel: string;
    containerImage: string;
    installCommand: string;
    envVars: EnvVar[];
    dockerfile: string;
}
export interface UpdateRuntimeRequest {
    id: string;
    name?: string | undefined;
    description?: string | undefined;
    providerId?: string | undefined;
    allowedModels: string[];
    defaultModel?: string | undefined;
    containerImage?: string | undefined;
    installCommand?: string | undefined;
    envVars: EnvVar[];
    dockerfile?: string | undefined;
}
export interface DeleteRuntimeRequest {
    id: string;
}
export declare const Runtime: MessageFns<Runtime>;
export declare const ListRuntimesRequest: MessageFns<ListRuntimesRequest>;
export declare const ListRuntimesResponse: MessageFns<ListRuntimesResponse>;
export declare const GetRuntimeRequest: MessageFns<GetRuntimeRequest>;
export declare const CreateRuntimeRequest: MessageFns<CreateRuntimeRequest>;
export declare const UpdateRuntimeRequest: MessageFns<UpdateRuntimeRequest>;
export declare const DeleteRuntimeRequest: MessageFns<DeleteRuntimeRequest>;
export type RuntimeServiceService = typeof RuntimeServiceService;
export declare const RuntimeServiceService: {
    readonly listRuntimes: {
        readonly path: "/core.v1.RuntimeService/ListRuntimes";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListRuntimesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListRuntimesRequest;
        readonly responseSerialize: (value: ListRuntimesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListRuntimesResponse;
    };
    readonly getRuntime: {
        readonly path: "/core.v1.RuntimeService/GetRuntime";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetRuntimeRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetRuntimeRequest;
        readonly responseSerialize: (value: Runtime) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Runtime;
    };
    readonly createRuntime: {
        readonly path: "/core.v1.RuntimeService/CreateRuntime";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateRuntimeRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateRuntimeRequest;
        readonly responseSerialize: (value: Runtime) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Runtime;
    };
    readonly updateRuntime: {
        readonly path: "/core.v1.RuntimeService/UpdateRuntime";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateRuntimeRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateRuntimeRequest;
        readonly responseSerialize: (value: Runtime) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Runtime;
    };
    readonly deleteRuntime: {
        readonly path: "/core.v1.RuntimeService/DeleteRuntime";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteRuntimeRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteRuntimeRequest;
        readonly responseSerialize: (value: DeleteResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => DeleteResponse;
    };
};
export interface RuntimeServiceServer extends UntypedServiceImplementation {
    listRuntimes: handleUnaryCall<ListRuntimesRequest, ListRuntimesResponse>;
    getRuntime: handleUnaryCall<GetRuntimeRequest, Runtime>;
    createRuntime: handleUnaryCall<CreateRuntimeRequest, Runtime>;
    updateRuntime: handleUnaryCall<UpdateRuntimeRequest, Runtime>;
    deleteRuntime: handleUnaryCall<DeleteRuntimeRequest, DeleteResponse>;
}
export interface RuntimeServiceClient extends Client {
    listRuntimes(request: ListRuntimesRequest, callback: (error: ServiceError | null, response: ListRuntimesResponse) => void): ClientUnaryCall;
    listRuntimes(request: ListRuntimesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListRuntimesResponse) => void): ClientUnaryCall;
    listRuntimes(request: ListRuntimesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListRuntimesResponse) => void): ClientUnaryCall;
    getRuntime(request: GetRuntimeRequest, callback: (error: ServiceError | null, response: Runtime) => void): ClientUnaryCall;
    getRuntime(request: GetRuntimeRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Runtime) => void): ClientUnaryCall;
    getRuntime(request: GetRuntimeRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Runtime) => void): ClientUnaryCall;
    createRuntime(request: CreateRuntimeRequest, callback: (error: ServiceError | null, response: Runtime) => void): ClientUnaryCall;
    createRuntime(request: CreateRuntimeRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Runtime) => void): ClientUnaryCall;
    createRuntime(request: CreateRuntimeRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Runtime) => void): ClientUnaryCall;
    updateRuntime(request: UpdateRuntimeRequest, callback: (error: ServiceError | null, response: Runtime) => void): ClientUnaryCall;
    updateRuntime(request: UpdateRuntimeRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Runtime) => void): ClientUnaryCall;
    updateRuntime(request: UpdateRuntimeRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Runtime) => void): ClientUnaryCall;
    deleteRuntime(request: DeleteRuntimeRequest, callback: (error: ServiceError | null, response: DeleteResponse) => void): ClientUnaryCall;
    deleteRuntime(request: DeleteRuntimeRequest, metadata: Metadata, callback: (error: ServiceError | null, response: DeleteResponse) => void): ClientUnaryCall;
    deleteRuntime(request: DeleteRuntimeRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: DeleteResponse) => void): ClientUnaryCall;
}
export declare const RuntimeServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): RuntimeServiceClient;
    service: typeof RuntimeServiceService;
    serviceName: string;
};
export interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
}
//# sourceMappingURL=runtime.d.ts.map