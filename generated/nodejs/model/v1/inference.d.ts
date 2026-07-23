import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { type CallOptions, type ChannelCredentials, Client, type ClientOptions, type ClientUnaryCall, type handleUnaryCall, type Metadata, type ServiceError, type UntypedServiceImplementation } from "@grpc/grpc-js";
export declare const protobufPackage = "model.v1";
/** Request to list models available on a provider. */
export interface ListModelsRequest {
    providerId: string;
}
export interface ListModelsResponse {
    models: string[];
}
/** Health check for a provider endpoint. */
export interface HealthCheckRequest {
    providerId: string;
}
export interface HealthCheckResponse {
    providerId: string;
    healthy: boolean;
    latencyMs: number;
    error: string;
}
export declare const ListModelsRequest: MessageFns<ListModelsRequest>;
export declare const ListModelsResponse: MessageFns<ListModelsResponse>;
export declare const HealthCheckRequest: MessageFns<HealthCheckRequest>;
export declare const HealthCheckResponse: MessageFns<HealthCheckResponse>;
export type InferenceServiceService = typeof InferenceServiceService;
export declare const InferenceServiceService: {
    readonly listModels: {
        readonly path: "/model.v1.InferenceService/ListModels";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListModelsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListModelsRequest;
        readonly responseSerialize: (value: ListModelsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListModelsResponse;
    };
    readonly healthCheck: {
        readonly path: "/model.v1.InferenceService/HealthCheck";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: HealthCheckRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => HealthCheckRequest;
        readonly responseSerialize: (value: HealthCheckResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => HealthCheckResponse;
    };
};
export interface InferenceServiceServer extends UntypedServiceImplementation {
    listModels: handleUnaryCall<ListModelsRequest, ListModelsResponse>;
    healthCheck: handleUnaryCall<HealthCheckRequest, HealthCheckResponse>;
}
export interface InferenceServiceClient extends Client {
    listModels(request: ListModelsRequest, callback: (error: ServiceError | null, response: ListModelsResponse) => void): ClientUnaryCall;
    listModels(request: ListModelsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListModelsResponse) => void): ClientUnaryCall;
    listModels(request: ListModelsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListModelsResponse) => void): ClientUnaryCall;
    healthCheck(request: HealthCheckRequest, callback: (error: ServiceError | null, response: HealthCheckResponse) => void): ClientUnaryCall;
    healthCheck(request: HealthCheckRequest, metadata: Metadata, callback: (error: ServiceError | null, response: HealthCheckResponse) => void): ClientUnaryCall;
    healthCheck(request: HealthCheckRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: HealthCheckResponse) => void): ClientUnaryCall;
}
export declare const InferenceServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): InferenceServiceClient;
    service: typeof InferenceServiceService;
    serviceName: string;
};
export interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
}
//# sourceMappingURL=inference.d.ts.map