import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { type CallOptions, type ChannelCredentials, Client, type ClientOptions, type ClientUnaryCall, type handleUnaryCall, type Metadata, type ServiceError, type UntypedServiceImplementation } from "@grpc/grpc-js";
import { DeleteResponse } from "../../common/v1/types.js";
export declare const protobufPackage = "bot.v1";
export interface BotIncomingMedia {
    id: string;
    messageId: string;
    chatId: string;
    participantId: string;
    objectKey: string;
    mimetype: string;
    sizeBytes: number;
    createdAt?: Date | undefined;
    expiresAt?: Date | undefined;
}
export interface ListIncomingMediaRequest {
    chatId: string;
    participantId: string;
}
export interface ListIncomingMediaResponse {
    media: BotIncomingMedia[];
}
export interface GetIncomingMediaRequest {
    id: string;
}
export interface DeleteIncomingMediaRequest {
    id: string;
}
export declare const BotIncomingMedia: MessageFns<BotIncomingMedia>;
export declare const ListIncomingMediaRequest: MessageFns<ListIncomingMediaRequest>;
export declare const ListIncomingMediaResponse: MessageFns<ListIncomingMediaResponse>;
export declare const GetIncomingMediaRequest: MessageFns<GetIncomingMediaRequest>;
export declare const DeleteIncomingMediaRequest: MessageFns<DeleteIncomingMediaRequest>;
export type MediaServiceService = typeof MediaServiceService;
export declare const MediaServiceService: {
    readonly listIncomingMedia: {
        readonly path: "/bot.v1.MediaService/ListIncomingMedia";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListIncomingMediaRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListIncomingMediaRequest;
        readonly responseSerialize: (value: ListIncomingMediaResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListIncomingMediaResponse;
    };
    readonly getIncomingMedia: {
        readonly path: "/bot.v1.MediaService/GetIncomingMedia";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetIncomingMediaRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetIncomingMediaRequest;
        readonly responseSerialize: (value: BotIncomingMedia) => Buffer;
        readonly responseDeserialize: (value: Buffer) => BotIncomingMedia;
    };
    readonly deleteIncomingMedia: {
        readonly path: "/bot.v1.MediaService/DeleteIncomingMedia";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteIncomingMediaRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteIncomingMediaRequest;
        readonly responseSerialize: (value: DeleteResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => DeleteResponse;
    };
};
export interface MediaServiceServer extends UntypedServiceImplementation {
    listIncomingMedia: handleUnaryCall<ListIncomingMediaRequest, ListIncomingMediaResponse>;
    getIncomingMedia: handleUnaryCall<GetIncomingMediaRequest, BotIncomingMedia>;
    deleteIncomingMedia: handleUnaryCall<DeleteIncomingMediaRequest, DeleteResponse>;
}
export interface MediaServiceClient extends Client {
    listIncomingMedia(request: ListIncomingMediaRequest, callback: (error: ServiceError | null, response: ListIncomingMediaResponse) => void): ClientUnaryCall;
    listIncomingMedia(request: ListIncomingMediaRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListIncomingMediaResponse) => void): ClientUnaryCall;
    listIncomingMedia(request: ListIncomingMediaRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListIncomingMediaResponse) => void): ClientUnaryCall;
    getIncomingMedia(request: GetIncomingMediaRequest, callback: (error: ServiceError | null, response: BotIncomingMedia) => void): ClientUnaryCall;
    getIncomingMedia(request: GetIncomingMediaRequest, metadata: Metadata, callback: (error: ServiceError | null, response: BotIncomingMedia) => void): ClientUnaryCall;
    getIncomingMedia(request: GetIncomingMediaRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: BotIncomingMedia) => void): ClientUnaryCall;
    deleteIncomingMedia(request: DeleteIncomingMediaRequest, callback: (error: ServiceError | null, response: DeleteResponse) => void): ClientUnaryCall;
    deleteIncomingMedia(request: DeleteIncomingMediaRequest, metadata: Metadata, callback: (error: ServiceError | null, response: DeleteResponse) => void): ClientUnaryCall;
    deleteIncomingMedia(request: DeleteIncomingMediaRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: DeleteResponse) => void): ClientUnaryCall;
}
export declare const MediaServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): MediaServiceClient;
    service: typeof MediaServiceService;
    serviceName: string;
};
export interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
}
//# sourceMappingURL=media.d.ts.map