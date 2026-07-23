import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { type CallOptions, type ChannelCredentials, Client, type ClientOptions, type ClientUnaryCall, type handleUnaryCall, type Metadata, type ServiceError, type UntypedServiceImplementation } from "@grpc/grpc-js";
import { DeleteResponse, Timestamps } from "../../common/v1/types.js";
export declare const protobufPackage = "core.v1";
/** Provider connects Zora Code to an AI model host. */
export interface Provider {
    id: string;
    name: string;
    description: string;
    url: string;
    /** encrypted at rest */
    apiKey: string;
    allowedModels: string[];
    isHealthy: boolean;
    timestamps?: Timestamps | undefined;
}
export interface ListProvidersRequest {
}
export interface ListProvidersResponse {
    providers: Provider[];
}
export interface GetProviderRequest {
    id: string;
}
export interface CreateProviderRequest {
    name: string;
    description: string;
    url: string;
    apiKey: string;
    allowedModels: string[];
}
export interface UpdateProviderRequest {
    id: string;
    name?: string | undefined;
    description?: string | undefined;
    url?: string | undefined;
    apiKey?: string | undefined;
    allowedModels: string[];
}
export interface DeleteProviderRequest {
    id: string;
}
export declare const Provider: MessageFns<Provider>;
export declare const ListProvidersRequest: MessageFns<ListProvidersRequest>;
export declare const ListProvidersResponse: MessageFns<ListProvidersResponse>;
export declare const GetProviderRequest: MessageFns<GetProviderRequest>;
export declare const CreateProviderRequest: MessageFns<CreateProviderRequest>;
export declare const UpdateProviderRequest: MessageFns<UpdateProviderRequest>;
export declare const DeleteProviderRequest: MessageFns<DeleteProviderRequest>;
export type ProviderServiceService = typeof ProviderServiceService;
export declare const ProviderServiceService: {
    readonly listProviders: {
        readonly path: "/core.v1.ProviderService/ListProviders";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListProvidersRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListProvidersRequest;
        readonly responseSerialize: (value: ListProvidersResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListProvidersResponse;
    };
    readonly getProvider: {
        readonly path: "/core.v1.ProviderService/GetProvider";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetProviderRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetProviderRequest;
        readonly responseSerialize: (value: Provider) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Provider;
    };
    readonly createProvider: {
        readonly path: "/core.v1.ProviderService/CreateProvider";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateProviderRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateProviderRequest;
        readonly responseSerialize: (value: Provider) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Provider;
    };
    readonly updateProvider: {
        readonly path: "/core.v1.ProviderService/UpdateProvider";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateProviderRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateProviderRequest;
        readonly responseSerialize: (value: Provider) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Provider;
    };
    readonly deleteProvider: {
        readonly path: "/core.v1.ProviderService/DeleteProvider";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteProviderRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteProviderRequest;
        readonly responseSerialize: (value: DeleteResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => DeleteResponse;
    };
};
export interface ProviderServiceServer extends UntypedServiceImplementation {
    listProviders: handleUnaryCall<ListProvidersRequest, ListProvidersResponse>;
    getProvider: handleUnaryCall<GetProviderRequest, Provider>;
    createProvider: handleUnaryCall<CreateProviderRequest, Provider>;
    updateProvider: handleUnaryCall<UpdateProviderRequest, Provider>;
    deleteProvider: handleUnaryCall<DeleteProviderRequest, DeleteResponse>;
}
export interface ProviderServiceClient extends Client {
    listProviders(request: ListProvidersRequest, callback: (error: ServiceError | null, response: ListProvidersResponse) => void): ClientUnaryCall;
    listProviders(request: ListProvidersRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListProvidersResponse) => void): ClientUnaryCall;
    listProviders(request: ListProvidersRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListProvidersResponse) => void): ClientUnaryCall;
    getProvider(request: GetProviderRequest, callback: (error: ServiceError | null, response: Provider) => void): ClientUnaryCall;
    getProvider(request: GetProviderRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Provider) => void): ClientUnaryCall;
    getProvider(request: GetProviderRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Provider) => void): ClientUnaryCall;
    createProvider(request: CreateProviderRequest, callback: (error: ServiceError | null, response: Provider) => void): ClientUnaryCall;
    createProvider(request: CreateProviderRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Provider) => void): ClientUnaryCall;
    createProvider(request: CreateProviderRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Provider) => void): ClientUnaryCall;
    updateProvider(request: UpdateProviderRequest, callback: (error: ServiceError | null, response: Provider) => void): ClientUnaryCall;
    updateProvider(request: UpdateProviderRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Provider) => void): ClientUnaryCall;
    updateProvider(request: UpdateProviderRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Provider) => void): ClientUnaryCall;
    deleteProvider(request: DeleteProviderRequest, callback: (error: ServiceError | null, response: DeleteResponse) => void): ClientUnaryCall;
    deleteProvider(request: DeleteProviderRequest, metadata: Metadata, callback: (error: ServiceError | null, response: DeleteResponse) => void): ClientUnaryCall;
    deleteProvider(request: DeleteProviderRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: DeleteResponse) => void): ClientUnaryCall;
}
export declare const ProviderServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): ProviderServiceClient;
    service: typeof ProviderServiceService;
    serviceName: string;
};
export interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
}
//# sourceMappingURL=provider.d.ts.map