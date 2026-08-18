import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { type CallOptions, type ChannelCredentials, Client, type ClientOptions, type ClientUnaryCall, type handleUnaryCall, type Metadata, type ServiceError, type UntypedServiceImplementation } from "@grpc/grpc-js";
import { DeleteResponse, Timestamps } from "../../common/v1/types.js";
export declare const protobufPackage = "bot.v1";
export declare enum RuleScope {
    RULE_SCOPE_UNSPECIFIED = 0,
    RULE_SCOPE_GLOBAL_PARTICIPANT = 1,
    RULE_SCOPE_CHAT = 2,
    RULE_SCOPE_PARTICIPANT_IN_CHAT = 3,
    UNRECOGNIZED = -1
}
export declare function ruleScopeFromJSON(object: any): RuleScope;
export declare function ruleScopeToJSON(object: RuleScope): string;
export declare enum RuleAction {
    RULE_ACTION_UNSPECIFIED = 0,
    RULE_ACTION_ALLOW = 1,
    RULE_ACTION_DENY = 2,
    UNRECOGNIZED = -1
}
export declare function ruleActionFromJSON(object: any): RuleAction;
export declare function ruleActionToJSON(object: RuleAction): string;
export interface BotRule {
    id: string;
    scope: RuleScope;
    chatId: string;
    participantId: string;
    action: RuleAction;
    timestamps?: Timestamps | undefined;
}
export interface ListRulesRequest {
}
export interface ListRulesResponse {
    rules: BotRule[];
}
export interface GetRuleRequest {
    id: string;
}
export interface CreateRuleRequest {
    scope: RuleScope;
    chatId: string;
    participantId: string;
    action: RuleAction;
}
export interface UpdateRuleRequest {
    id: string;
    scope: RuleScope;
    chatId: string;
    participantId: string;
    action: RuleAction;
}
export interface DeleteRuleRequest {
    id: string;
}
export declare const BotRule: MessageFns<BotRule>;
export declare const ListRulesRequest: MessageFns<ListRulesRequest>;
export declare const ListRulesResponse: MessageFns<ListRulesResponse>;
export declare const GetRuleRequest: MessageFns<GetRuleRequest>;
export declare const CreateRuleRequest: MessageFns<CreateRuleRequest>;
export declare const UpdateRuleRequest: MessageFns<UpdateRuleRequest>;
export declare const DeleteRuleRequest: MessageFns<DeleteRuleRequest>;
export type RuleServiceService = typeof RuleServiceService;
export declare const RuleServiceService: {
    readonly listRules: {
        readonly path: "/bot.v1.RuleService/ListRules";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListRulesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListRulesRequest;
        readonly responseSerialize: (value: ListRulesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListRulesResponse;
    };
    readonly getRule: {
        readonly path: "/bot.v1.RuleService/GetRule";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetRuleRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetRuleRequest;
        readonly responseSerialize: (value: BotRule) => Buffer;
        readonly responseDeserialize: (value: Buffer) => BotRule;
    };
    readonly createRule: {
        readonly path: "/bot.v1.RuleService/CreateRule";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateRuleRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateRuleRequest;
        readonly responseSerialize: (value: BotRule) => Buffer;
        readonly responseDeserialize: (value: Buffer) => BotRule;
    };
    readonly updateRule: {
        readonly path: "/bot.v1.RuleService/UpdateRule";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateRuleRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateRuleRequest;
        readonly responseSerialize: (value: BotRule) => Buffer;
        readonly responseDeserialize: (value: Buffer) => BotRule;
    };
    readonly deleteRule: {
        readonly path: "/bot.v1.RuleService/DeleteRule";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteRuleRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteRuleRequest;
        readonly responseSerialize: (value: DeleteResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => DeleteResponse;
    };
};
export interface RuleServiceServer extends UntypedServiceImplementation {
    listRules: handleUnaryCall<ListRulesRequest, ListRulesResponse>;
    getRule: handleUnaryCall<GetRuleRequest, BotRule>;
    createRule: handleUnaryCall<CreateRuleRequest, BotRule>;
    updateRule: handleUnaryCall<UpdateRuleRequest, BotRule>;
    deleteRule: handleUnaryCall<DeleteRuleRequest, DeleteResponse>;
}
export interface RuleServiceClient extends Client {
    listRules(request: ListRulesRequest, callback: (error: ServiceError | null, response: ListRulesResponse) => void): ClientUnaryCall;
    listRules(request: ListRulesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListRulesResponse) => void): ClientUnaryCall;
    listRules(request: ListRulesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListRulesResponse) => void): ClientUnaryCall;
    getRule(request: GetRuleRequest, callback: (error: ServiceError | null, response: BotRule) => void): ClientUnaryCall;
    getRule(request: GetRuleRequest, metadata: Metadata, callback: (error: ServiceError | null, response: BotRule) => void): ClientUnaryCall;
    getRule(request: GetRuleRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: BotRule) => void): ClientUnaryCall;
    createRule(request: CreateRuleRequest, callback: (error: ServiceError | null, response: BotRule) => void): ClientUnaryCall;
    createRule(request: CreateRuleRequest, metadata: Metadata, callback: (error: ServiceError | null, response: BotRule) => void): ClientUnaryCall;
    createRule(request: CreateRuleRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: BotRule) => void): ClientUnaryCall;
    updateRule(request: UpdateRuleRequest, callback: (error: ServiceError | null, response: BotRule) => void): ClientUnaryCall;
    updateRule(request: UpdateRuleRequest, metadata: Metadata, callback: (error: ServiceError | null, response: BotRule) => void): ClientUnaryCall;
    updateRule(request: UpdateRuleRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: BotRule) => void): ClientUnaryCall;
    deleteRule(request: DeleteRuleRequest, callback: (error: ServiceError | null, response: DeleteResponse) => void): ClientUnaryCall;
    deleteRule(request: DeleteRuleRequest, metadata: Metadata, callback: (error: ServiceError | null, response: DeleteResponse) => void): ClientUnaryCall;
    deleteRule(request: DeleteRuleRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: DeleteResponse) => void): ClientUnaryCall;
}
export declare const RuleServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): RuleServiceClient;
    service: typeof RuleServiceService;
    serviceName: string;
};
export interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
}
//# sourceMappingURL=rule.d.ts.map