import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { type CallOptions, type ChannelCredentials, Client, type ClientOptions, type ClientUnaryCall, type handleUnaryCall, type Metadata, type ServiceError, type UntypedServiceImplementation } from "@grpc/grpc-js";
import { Timestamps } from "../../common/v1/types.js";
export declare const protobufPackage = "core.v1";
/** UserRole defines authorization level in the dashboard. */
export declare enum UserRole {
    USER_ROLE_UNSPECIFIED = 0,
    USER_ROLE_ADMIN = 1,
    USER_ROLE_VIEWER = 2,
    UNRECOGNIZED = -1
}
export declare function userRoleFromJSON(object: any): UserRole;
export declare function userRoleToJSON(object: UserRole): string;
/** User is the authenticated identity returned by AuthService. */
export interface User {
    id: string;
    username: string;
    role: UserRole;
    timestamps?: Timestamps | undefined;
}
export interface LoginRequest {
    username: string;
    password: string;
}
export interface LoginResponse {
    token: string;
    user?: User | undefined;
}
export interface LogoutRequest {
    token: string;
}
export interface LogoutResponse {
}
export interface VerifyTokenRequest {
    token: string;
}
export interface VerifyTokenResponse {
    valid: boolean;
    user?: User | undefined;
}
export interface MeRequest {
}
export interface MeResponse {
    user?: User | undefined;
}
export declare const User: MessageFns<User>;
export declare const LoginRequest: MessageFns<LoginRequest>;
export declare const LoginResponse: MessageFns<LoginResponse>;
export declare const LogoutRequest: MessageFns<LogoutRequest>;
export declare const LogoutResponse: MessageFns<LogoutResponse>;
export declare const VerifyTokenRequest: MessageFns<VerifyTokenRequest>;
export declare const VerifyTokenResponse: MessageFns<VerifyTokenResponse>;
export declare const MeRequest: MessageFns<MeRequest>;
export declare const MeResponse: MessageFns<MeResponse>;
export type AuthServiceService = typeof AuthServiceService;
export declare const AuthServiceService: {
    readonly login: {
        readonly path: "/core.v1.AuthService/Login";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: LoginRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => LoginRequest;
        readonly responseSerialize: (value: LoginResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => LoginResponse;
    };
    readonly logout: {
        readonly path: "/core.v1.AuthService/Logout";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: LogoutRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => LogoutRequest;
        readonly responseSerialize: (value: LogoutResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => LogoutResponse;
    };
    readonly verifyToken: {
        readonly path: "/core.v1.AuthService/VerifyToken";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: VerifyTokenRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => VerifyTokenRequest;
        readonly responseSerialize: (value: VerifyTokenResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => VerifyTokenResponse;
    };
    readonly me: {
        readonly path: "/core.v1.AuthService/Me";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: MeRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => MeRequest;
        readonly responseSerialize: (value: MeResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => MeResponse;
    };
};
export interface AuthServiceServer extends UntypedServiceImplementation {
    login: handleUnaryCall<LoginRequest, LoginResponse>;
    logout: handleUnaryCall<LogoutRequest, LogoutResponse>;
    verifyToken: handleUnaryCall<VerifyTokenRequest, VerifyTokenResponse>;
    me: handleUnaryCall<MeRequest, MeResponse>;
}
export interface AuthServiceClient extends Client {
    login(request: LoginRequest, callback: (error: ServiceError | null, response: LoginResponse) => void): ClientUnaryCall;
    login(request: LoginRequest, metadata: Metadata, callback: (error: ServiceError | null, response: LoginResponse) => void): ClientUnaryCall;
    login(request: LoginRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: LoginResponse) => void): ClientUnaryCall;
    logout(request: LogoutRequest, callback: (error: ServiceError | null, response: LogoutResponse) => void): ClientUnaryCall;
    logout(request: LogoutRequest, metadata: Metadata, callback: (error: ServiceError | null, response: LogoutResponse) => void): ClientUnaryCall;
    logout(request: LogoutRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: LogoutResponse) => void): ClientUnaryCall;
    verifyToken(request: VerifyTokenRequest, callback: (error: ServiceError | null, response: VerifyTokenResponse) => void): ClientUnaryCall;
    verifyToken(request: VerifyTokenRequest, metadata: Metadata, callback: (error: ServiceError | null, response: VerifyTokenResponse) => void): ClientUnaryCall;
    verifyToken(request: VerifyTokenRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: VerifyTokenResponse) => void): ClientUnaryCall;
    me(request: MeRequest, callback: (error: ServiceError | null, response: MeResponse) => void): ClientUnaryCall;
    me(request: MeRequest, metadata: Metadata, callback: (error: ServiceError | null, response: MeResponse) => void): ClientUnaryCall;
    me(request: MeRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: MeResponse) => void): ClientUnaryCall;
}
export declare const AuthServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): AuthServiceClient;
    service: typeof AuthServiceService;
    serviceName: string;
};
export interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
}
//# sourceMappingURL=auth.d.ts.map