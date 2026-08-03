import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { type CallOptions, type ChannelCredentials, Client, type ClientOptions, type ClientUnaryCall, type handleUnaryCall, type Metadata, type ServiceError, type UntypedServiceImplementation } from "@grpc/grpc-js";
import { Timestamps } from "../../common/v1/types.js";
export declare const protobufPackage = "core.v1";
export declare enum SecretProvider {
    SECRET_PROVIDER_UNSPECIFIED = 0,
    SECRET_PROVIDER_GITHUB = 1,
    SECRET_PROVIDER_CLOUDFLARE = 2,
    UNRECOGNIZED = -1
}
export declare function secretProviderFromJSON(object: any): SecretProvider;
export declare function secretProviderToJSON(object: SecretProvider): string;
/** Global key/value configuration. */
export interface SystemConfig {
    id: string;
    key: string;
    value: string;
    category: string;
    description: string;
    timestamps?: Timestamps | undefined;
}
/** Encrypted integration secret. */
export interface Secret {
    id: string;
    provider: SecretProvider;
    username?: string | undefined;
    /** encrypted at rest */
    token?: string | undefined;
    /** Cloudflare zone id used for DNS records */
    zoneId?: string | undefined;
    /** Cloudflare account id used to list tunnels/zones */
    accountId?: string | undefined;
    timestamps?: Timestamps | undefined;
}
export interface ListConfigsRequest {
}
export interface ListConfigsResponse {
    configs: SystemConfig[];
}
export interface UpdateConfigRequest {
    id: string;
    value: string;
}
export interface ListSecretsRequest {
}
export interface ListSecretsResponse {
    secrets: Secret[];
}
export interface GetSecretRequest {
    provider: SecretProvider;
}
export interface UpdateSecretRequest {
    provider: SecretProvider;
    username?: string | undefined;
    token?: string | undefined;
    zoneId?: string | undefined;
    accountId?: string | undefined;
}
export interface CloudflareTunnel {
    id: string;
    name: string;
    accountId: string;
    status: string;
}
export interface ListCloudflareTunnelsRequest {
}
export interface ListCloudflareTunnelsResponse {
    tunnels: CloudflareTunnel[];
}
export interface CloudflareZone {
    id: string;
    name: string;
}
export interface ListCloudflareZonesRequest {
}
export interface ListCloudflareZonesResponse {
    zones: CloudflareZone[];
}
export declare const SystemConfig: MessageFns<SystemConfig>;
export declare const Secret: MessageFns<Secret>;
export declare const ListConfigsRequest: MessageFns<ListConfigsRequest>;
export declare const ListConfigsResponse: MessageFns<ListConfigsResponse>;
export declare const UpdateConfigRequest: MessageFns<UpdateConfigRequest>;
export declare const ListSecretsRequest: MessageFns<ListSecretsRequest>;
export declare const ListSecretsResponse: MessageFns<ListSecretsResponse>;
export declare const GetSecretRequest: MessageFns<GetSecretRequest>;
export declare const UpdateSecretRequest: MessageFns<UpdateSecretRequest>;
export declare const CloudflareTunnel: MessageFns<CloudflareTunnel>;
export declare const ListCloudflareTunnelsRequest: MessageFns<ListCloudflareTunnelsRequest>;
export declare const ListCloudflareTunnelsResponse: MessageFns<ListCloudflareTunnelsResponse>;
export declare const CloudflareZone: MessageFns<CloudflareZone>;
export declare const ListCloudflareZonesRequest: MessageFns<ListCloudflareZonesRequest>;
export declare const ListCloudflareZonesResponse: MessageFns<ListCloudflareZonesResponse>;
export type SystemConfigServiceService = typeof SystemConfigServiceService;
export declare const SystemConfigServiceService: {
    readonly listConfigs: {
        readonly path: "/core.v1.SystemConfigService/ListConfigs";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListConfigsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListConfigsRequest;
        readonly responseSerialize: (value: ListConfigsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListConfigsResponse;
    };
    readonly updateConfig: {
        readonly path: "/core.v1.SystemConfigService/UpdateConfig";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateConfigRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateConfigRequest;
        readonly responseSerialize: (value: SystemConfig) => Buffer;
        readonly responseDeserialize: (value: Buffer) => SystemConfig;
    };
    readonly listSecrets: {
        readonly path: "/core.v1.SystemConfigService/ListSecrets";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListSecretsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListSecretsRequest;
        readonly responseSerialize: (value: ListSecretsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListSecretsResponse;
    };
    readonly getSecret: {
        readonly path: "/core.v1.SystemConfigService/GetSecret";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetSecretRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetSecretRequest;
        readonly responseSerialize: (value: Secret) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Secret;
    };
    readonly updateSecret: {
        readonly path: "/core.v1.SystemConfigService/UpdateSecret";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateSecretRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateSecretRequest;
        readonly responseSerialize: (value: Secret) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Secret;
    };
    readonly listCloudflareTunnels: {
        readonly path: "/core.v1.SystemConfigService/ListCloudflareTunnels";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListCloudflareTunnelsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListCloudflareTunnelsRequest;
        readonly responseSerialize: (value: ListCloudflareTunnelsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListCloudflareTunnelsResponse;
    };
    readonly listCloudflareZones: {
        readonly path: "/core.v1.SystemConfigService/ListCloudflareZones";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListCloudflareZonesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListCloudflareZonesRequest;
        readonly responseSerialize: (value: ListCloudflareZonesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListCloudflareZonesResponse;
    };
};
export interface SystemConfigServiceServer extends UntypedServiceImplementation {
    listConfigs: handleUnaryCall<ListConfigsRequest, ListConfigsResponse>;
    updateConfig: handleUnaryCall<UpdateConfigRequest, SystemConfig>;
    listSecrets: handleUnaryCall<ListSecretsRequest, ListSecretsResponse>;
    getSecret: handleUnaryCall<GetSecretRequest, Secret>;
    updateSecret: handleUnaryCall<UpdateSecretRequest, Secret>;
    listCloudflareTunnels: handleUnaryCall<ListCloudflareTunnelsRequest, ListCloudflareTunnelsResponse>;
    listCloudflareZones: handleUnaryCall<ListCloudflareZonesRequest, ListCloudflareZonesResponse>;
}
export interface SystemConfigServiceClient extends Client {
    listConfigs(request: ListConfigsRequest, callback: (error: ServiceError | null, response: ListConfigsResponse) => void): ClientUnaryCall;
    listConfigs(request: ListConfigsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListConfigsResponse) => void): ClientUnaryCall;
    listConfigs(request: ListConfigsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListConfigsResponse) => void): ClientUnaryCall;
    updateConfig(request: UpdateConfigRequest, callback: (error: ServiceError | null, response: SystemConfig) => void): ClientUnaryCall;
    updateConfig(request: UpdateConfigRequest, metadata: Metadata, callback: (error: ServiceError | null, response: SystemConfig) => void): ClientUnaryCall;
    updateConfig(request: UpdateConfigRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: SystemConfig) => void): ClientUnaryCall;
    listSecrets(request: ListSecretsRequest, callback: (error: ServiceError | null, response: ListSecretsResponse) => void): ClientUnaryCall;
    listSecrets(request: ListSecretsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListSecretsResponse) => void): ClientUnaryCall;
    listSecrets(request: ListSecretsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListSecretsResponse) => void): ClientUnaryCall;
    getSecret(request: GetSecretRequest, callback: (error: ServiceError | null, response: Secret) => void): ClientUnaryCall;
    getSecret(request: GetSecretRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Secret) => void): ClientUnaryCall;
    getSecret(request: GetSecretRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Secret) => void): ClientUnaryCall;
    updateSecret(request: UpdateSecretRequest, callback: (error: ServiceError | null, response: Secret) => void): ClientUnaryCall;
    updateSecret(request: UpdateSecretRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Secret) => void): ClientUnaryCall;
    updateSecret(request: UpdateSecretRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Secret) => void): ClientUnaryCall;
    listCloudflareTunnels(request: ListCloudflareTunnelsRequest, callback: (error: ServiceError | null, response: ListCloudflareTunnelsResponse) => void): ClientUnaryCall;
    listCloudflareTunnels(request: ListCloudflareTunnelsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListCloudflareTunnelsResponse) => void): ClientUnaryCall;
    listCloudflareTunnels(request: ListCloudflareTunnelsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListCloudflareTunnelsResponse) => void): ClientUnaryCall;
    listCloudflareZones(request: ListCloudflareZonesRequest, callback: (error: ServiceError | null, response: ListCloudflareZonesResponse) => void): ClientUnaryCall;
    listCloudflareZones(request: ListCloudflareZonesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListCloudflareZonesResponse) => void): ClientUnaryCall;
    listCloudflareZones(request: ListCloudflareZonesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListCloudflareZonesResponse) => void): ClientUnaryCall;
}
export declare const SystemConfigServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): SystemConfigServiceClient;
    service: typeof SystemConfigServiceService;
    serviceName: string;
};
export interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
}
//# sourceMappingURL=system_config.d.ts.map