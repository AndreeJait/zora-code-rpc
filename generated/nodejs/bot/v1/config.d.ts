import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { type CallOptions, type ChannelCredentials, Client, type ClientOptions, type ClientUnaryCall, type handleUnaryCall, type Metadata, type ServiceError, type UntypedServiceImplementation } from "@grpc/grpc-js";
export declare const protobufPackage = "bot.v1";
export interface BotConfig {
    commandPrefix: string;
    /** Deprecated: use per-capacity fields below. */
    defaultModel: string;
    /** Deprecated: use tts_voice below. */
    defaultVoice: string;
    /** Deprecated: use chat_provider_id / image_provider_id / tts_provider_id. */
    providerId: string;
    chatProviderId: string;
    chatModel: string;
    chatMaxTokens: number;
    imageProviderId: string;
    imageModel: string;
    imageMaxTokens: number;
    ttsProviderId: string;
    ttsModel: string;
    ttsVoice: string;
    ttsMaxTokens: number;
}
export interface GetConfigRequest {
}
export interface UpdateConfigRequest {
    commandPrefix: string;
    defaultModel: string;
    defaultVoice: string;
    providerId: string;
    chatProviderId: string;
    chatModel: string;
    chatMaxTokens: number;
    imageProviderId: string;
    imageModel: string;
    imageMaxTokens: number;
    ttsProviderId: string;
    ttsModel: string;
    ttsVoice: string;
    ttsMaxTokens: number;
}
export declare const BotConfig: MessageFns<BotConfig>;
export declare const GetConfigRequest: MessageFns<GetConfigRequest>;
export declare const UpdateConfigRequest: MessageFns<UpdateConfigRequest>;
export type BotConfigServiceService = typeof BotConfigServiceService;
export declare const BotConfigServiceService: {
    readonly getConfig: {
        readonly path: "/bot.v1.BotConfigService/GetConfig";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetConfigRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetConfigRequest;
        readonly responseSerialize: (value: BotConfig) => Buffer;
        readonly responseDeserialize: (value: Buffer) => BotConfig;
    };
    readonly updateConfig: {
        readonly path: "/bot.v1.BotConfigService/UpdateConfig";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateConfigRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateConfigRequest;
        readonly responseSerialize: (value: BotConfig) => Buffer;
        readonly responseDeserialize: (value: Buffer) => BotConfig;
    };
};
export interface BotConfigServiceServer extends UntypedServiceImplementation {
    getConfig: handleUnaryCall<GetConfigRequest, BotConfig>;
    updateConfig: handleUnaryCall<UpdateConfigRequest, BotConfig>;
}
export interface BotConfigServiceClient extends Client {
    getConfig(request: GetConfigRequest, callback: (error: ServiceError | null, response: BotConfig) => void): ClientUnaryCall;
    getConfig(request: GetConfigRequest, metadata: Metadata, callback: (error: ServiceError | null, response: BotConfig) => void): ClientUnaryCall;
    getConfig(request: GetConfigRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: BotConfig) => void): ClientUnaryCall;
    updateConfig(request: UpdateConfigRequest, callback: (error: ServiceError | null, response: BotConfig) => void): ClientUnaryCall;
    updateConfig(request: UpdateConfigRequest, metadata: Metadata, callback: (error: ServiceError | null, response: BotConfig) => void): ClientUnaryCall;
    updateConfig(request: UpdateConfigRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: BotConfig) => void): ClientUnaryCall;
}
export declare const BotConfigServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): BotConfigServiceClient;
    service: typeof BotConfigServiceService;
    serviceName: string;
};
export interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
}
//# sourceMappingURL=config.d.ts.map