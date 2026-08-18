import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { type CallOptions, type ChannelCredentials, Client, type ClientOptions, type ClientUnaryCall, type handleUnaryCall, type Metadata, type ServiceError, type UntypedServiceImplementation } from "@grpc/grpc-js";
import { DeleteResponse, Timestamps } from "../../common/v1/types.js";
export declare const protobufPackage = "bot.v1";
export interface BotProfile {
    id: string;
    participantId: string;
    displayName: string;
    systemPrompt: string;
    preferredModel: string;
    preferredVoice: string;
    timestamps?: Timestamps | undefined;
}
export interface ListProfilesRequest {
}
export interface ListProfilesResponse {
    profiles: BotProfile[];
}
export interface GetProfileRequest {
    id: string;
}
export interface GetProfileByParticipantRequest {
    participantId: string;
}
export interface CreateProfileRequest {
    participantId: string;
    displayName: string;
    systemPrompt: string;
    preferredModel: string;
    preferredVoice: string;
}
export interface UpdateProfileRequest {
    id: string;
    displayName: string;
    systemPrompt: string;
    preferredModel: string;
    preferredVoice: string;
}
export interface DeleteProfileRequest {
    id: string;
}
export declare const BotProfile: MessageFns<BotProfile>;
export declare const ListProfilesRequest: MessageFns<ListProfilesRequest>;
export declare const ListProfilesResponse: MessageFns<ListProfilesResponse>;
export declare const GetProfileRequest: MessageFns<GetProfileRequest>;
export declare const GetProfileByParticipantRequest: MessageFns<GetProfileByParticipantRequest>;
export declare const CreateProfileRequest: MessageFns<CreateProfileRequest>;
export declare const UpdateProfileRequest: MessageFns<UpdateProfileRequest>;
export declare const DeleteProfileRequest: MessageFns<DeleteProfileRequest>;
export type ProfileServiceService = typeof ProfileServiceService;
export declare const ProfileServiceService: {
    readonly listProfiles: {
        readonly path: "/bot.v1.ProfileService/ListProfiles";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListProfilesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListProfilesRequest;
        readonly responseSerialize: (value: ListProfilesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListProfilesResponse;
    };
    readonly getProfile: {
        readonly path: "/bot.v1.ProfileService/GetProfile";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetProfileRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetProfileRequest;
        readonly responseSerialize: (value: BotProfile) => Buffer;
        readonly responseDeserialize: (value: Buffer) => BotProfile;
    };
    readonly getProfileByParticipant: {
        readonly path: "/bot.v1.ProfileService/GetProfileByParticipant";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetProfileByParticipantRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetProfileByParticipantRequest;
        readonly responseSerialize: (value: BotProfile) => Buffer;
        readonly responseDeserialize: (value: Buffer) => BotProfile;
    };
    readonly createProfile: {
        readonly path: "/bot.v1.ProfileService/CreateProfile";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateProfileRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateProfileRequest;
        readonly responseSerialize: (value: BotProfile) => Buffer;
        readonly responseDeserialize: (value: Buffer) => BotProfile;
    };
    readonly updateProfile: {
        readonly path: "/bot.v1.ProfileService/UpdateProfile";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateProfileRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateProfileRequest;
        readonly responseSerialize: (value: BotProfile) => Buffer;
        readonly responseDeserialize: (value: Buffer) => BotProfile;
    };
    readonly deleteProfile: {
        readonly path: "/bot.v1.ProfileService/DeleteProfile";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteProfileRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteProfileRequest;
        readonly responseSerialize: (value: DeleteResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => DeleteResponse;
    };
};
export interface ProfileServiceServer extends UntypedServiceImplementation {
    listProfiles: handleUnaryCall<ListProfilesRequest, ListProfilesResponse>;
    getProfile: handleUnaryCall<GetProfileRequest, BotProfile>;
    getProfileByParticipant: handleUnaryCall<GetProfileByParticipantRequest, BotProfile>;
    createProfile: handleUnaryCall<CreateProfileRequest, BotProfile>;
    updateProfile: handleUnaryCall<UpdateProfileRequest, BotProfile>;
    deleteProfile: handleUnaryCall<DeleteProfileRequest, DeleteResponse>;
}
export interface ProfileServiceClient extends Client {
    listProfiles(request: ListProfilesRequest, callback: (error: ServiceError | null, response: ListProfilesResponse) => void): ClientUnaryCall;
    listProfiles(request: ListProfilesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListProfilesResponse) => void): ClientUnaryCall;
    listProfiles(request: ListProfilesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListProfilesResponse) => void): ClientUnaryCall;
    getProfile(request: GetProfileRequest, callback: (error: ServiceError | null, response: BotProfile) => void): ClientUnaryCall;
    getProfile(request: GetProfileRequest, metadata: Metadata, callback: (error: ServiceError | null, response: BotProfile) => void): ClientUnaryCall;
    getProfile(request: GetProfileRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: BotProfile) => void): ClientUnaryCall;
    getProfileByParticipant(request: GetProfileByParticipantRequest, callback: (error: ServiceError | null, response: BotProfile) => void): ClientUnaryCall;
    getProfileByParticipant(request: GetProfileByParticipantRequest, metadata: Metadata, callback: (error: ServiceError | null, response: BotProfile) => void): ClientUnaryCall;
    getProfileByParticipant(request: GetProfileByParticipantRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: BotProfile) => void): ClientUnaryCall;
    createProfile(request: CreateProfileRequest, callback: (error: ServiceError | null, response: BotProfile) => void): ClientUnaryCall;
    createProfile(request: CreateProfileRequest, metadata: Metadata, callback: (error: ServiceError | null, response: BotProfile) => void): ClientUnaryCall;
    createProfile(request: CreateProfileRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: BotProfile) => void): ClientUnaryCall;
    updateProfile(request: UpdateProfileRequest, callback: (error: ServiceError | null, response: BotProfile) => void): ClientUnaryCall;
    updateProfile(request: UpdateProfileRequest, metadata: Metadata, callback: (error: ServiceError | null, response: BotProfile) => void): ClientUnaryCall;
    updateProfile(request: UpdateProfileRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: BotProfile) => void): ClientUnaryCall;
    deleteProfile(request: DeleteProfileRequest, callback: (error: ServiceError | null, response: DeleteResponse) => void): ClientUnaryCall;
    deleteProfile(request: DeleteProfileRequest, metadata: Metadata, callback: (error: ServiceError | null, response: DeleteResponse) => void): ClientUnaryCall;
    deleteProfile(request: DeleteProfileRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: DeleteResponse) => void): ClientUnaryCall;
}
export declare const ProfileServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): ProfileServiceClient;
    service: typeof ProfileServiceService;
    serviceName: string;
};
export interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
}
//# sourceMappingURL=profile.d.ts.map