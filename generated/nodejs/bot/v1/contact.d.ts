import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { type CallOptions, type ChannelCredentials, Client, type ClientOptions, type ClientUnaryCall, type handleUnaryCall, type Metadata, type ServiceError, type UntypedServiceImplementation } from "@grpc/grpc-js";
export declare const protobufPackage = "bot.v1";
export interface BotContact {
    id: string;
    number: string;
    name: string;
    pushName: string;
    shortName: string;
    isGroup: boolean;
}
export interface SearchContactsRequest {
    query: string;
    limit: number;
}
export interface SearchContactsResponse {
    contacts: BotContact[];
}
export declare const BotContact: MessageFns<BotContact>;
export declare const SearchContactsRequest: MessageFns<SearchContactsRequest>;
export declare const SearchContactsResponse: MessageFns<SearchContactsResponse>;
export type ContactServiceService = typeof ContactServiceService;
export declare const ContactServiceService: {
    readonly searchContacts: {
        readonly path: "/bot.v1.ContactService/SearchContacts";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SearchContactsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => SearchContactsRequest;
        readonly responseSerialize: (value: SearchContactsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => SearchContactsResponse;
    };
};
export interface ContactServiceServer extends UntypedServiceImplementation {
    searchContacts: handleUnaryCall<SearchContactsRequest, SearchContactsResponse>;
}
export interface ContactServiceClient extends Client {
    searchContacts(request: SearchContactsRequest, callback: (error: ServiceError | null, response: SearchContactsResponse) => void): ClientUnaryCall;
    searchContacts(request: SearchContactsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: SearchContactsResponse) => void): ClientUnaryCall;
    searchContacts(request: SearchContactsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: SearchContactsResponse) => void): ClientUnaryCall;
}
export declare const ContactServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): ContactServiceClient;
    service: typeof ContactServiceService;
    serviceName: string;
};
export interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
}
//# sourceMappingURL=contact.d.ts.map