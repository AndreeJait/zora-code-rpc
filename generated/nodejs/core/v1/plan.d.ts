import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { type CallOptions, type ChannelCredentials, Client, type ClientOptions, type ClientUnaryCall, type handleUnaryCall, type Metadata, type ServiceError, type UntypedServiceImplementation } from "@grpc/grpc-js";
import { DeleteResponse, Status, Timestamps } from "../../common/v1/types.js";
import { Project } from "./project.js";
export declare const protobufPackage = "core.v1";
/**
 * Plan is a lightweight planning conversation that produces specs under a
 * workspace and can be promoted into a real Project.
 */
export interface Plan {
    id: string;
    name: string;
    description: string;
    providerId: string;
    runtimeId: string;
    projectId: string;
    workspaceFolder: string;
    prompt: string;
    generatedSummary: string;
    status: Status;
    timestamps?: Timestamps | undefined;
}
/** PlanMessage is a single turn inside a Plan thread. */
export interface PlanMessage {
    id: string;
    planId: string;
    role: string;
    content: string;
    taskId: string;
    timestamps?: Timestamps | undefined;
}
/**
 * Model is a provider-bound model registry entry managed independently of
 * Provider.allowedModels for backwards compatibility.
 */
export interface Model {
    id: string;
    providerId: string;
    name: string;
    description: string;
    isActive: boolean;
    timestamps?: Timestamps | undefined;
}
export interface CreatePlanRequest {
    name: string;
    description: string;
    providerId: string;
    prompt: string;
    projectId: string;
}
export interface UpdatePlanRequest {
    id: string;
    name?: string | undefined;
    description?: string | undefined;
    prompt?: string | undefined;
}
export interface GetPlanRequest {
    id: string;
}
export interface ListPlansRequest {
}
export interface ListPlansResponse {
    plans: Plan[];
}
export interface SendPlanMessageRequest {
    planId: string;
    content: string;
}
export interface CreateProjectFromPlanRequest {
    planId: string;
    runtimeId: string;
    name: string;
    description: string;
}
export interface ListModelsRequest {
    providerId: string;
}
export interface ListModelsResponse {
    models: Model[];
}
export interface GetModelRequest {
    id: string;
}
export interface CreateModelRequest {
    providerId: string;
    name: string;
    description: string;
}
export interface UpdateModelRequest {
    id: string;
    name?: string | undefined;
    description?: string | undefined;
    isActive?: boolean | undefined;
}
export interface DeleteModelRequest {
    id: string;
}
export declare const Plan: MessageFns<Plan>;
export declare const PlanMessage: MessageFns<PlanMessage>;
export declare const Model: MessageFns<Model>;
export declare const CreatePlanRequest: MessageFns<CreatePlanRequest>;
export declare const UpdatePlanRequest: MessageFns<UpdatePlanRequest>;
export declare const GetPlanRequest: MessageFns<GetPlanRequest>;
export declare const ListPlansRequest: MessageFns<ListPlansRequest>;
export declare const ListPlansResponse: MessageFns<ListPlansResponse>;
export declare const SendPlanMessageRequest: MessageFns<SendPlanMessageRequest>;
export declare const CreateProjectFromPlanRequest: MessageFns<CreateProjectFromPlanRequest>;
export declare const ListModelsRequest: MessageFns<ListModelsRequest>;
export declare const ListModelsResponse: MessageFns<ListModelsResponse>;
export declare const GetModelRequest: MessageFns<GetModelRequest>;
export declare const CreateModelRequest: MessageFns<CreateModelRequest>;
export declare const UpdateModelRequest: MessageFns<UpdateModelRequest>;
export declare const DeleteModelRequest: MessageFns<DeleteModelRequest>;
export type PlanServiceService = typeof PlanServiceService;
export declare const PlanServiceService: {
    readonly createPlan: {
        readonly path: "/core.v1.PlanService/CreatePlan";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreatePlanRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreatePlanRequest;
        readonly responseSerialize: (value: Plan) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Plan;
    };
    readonly updatePlan: {
        readonly path: "/core.v1.PlanService/UpdatePlan";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdatePlanRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdatePlanRequest;
        readonly responseSerialize: (value: Plan) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Plan;
    };
    readonly deletePlan: {
        readonly path: "/core.v1.PlanService/DeletePlan";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetPlanRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetPlanRequest;
        readonly responseSerialize: (value: DeleteResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => DeleteResponse;
    };
    readonly getPlan: {
        readonly path: "/core.v1.PlanService/GetPlan";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetPlanRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetPlanRequest;
        readonly responseSerialize: (value: Plan) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Plan;
    };
    readonly listPlans: {
        readonly path: "/core.v1.PlanService/ListPlans";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListPlansRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListPlansRequest;
        readonly responseSerialize: (value: ListPlansResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListPlansResponse;
    };
    readonly sendPlanMessage: {
        readonly path: "/core.v1.PlanService/SendPlanMessage";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SendPlanMessageRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => SendPlanMessageRequest;
        readonly responseSerialize: (value: PlanMessage) => Buffer;
        readonly responseDeserialize: (value: Buffer) => PlanMessage;
    };
    readonly createProjectFromPlan: {
        readonly path: "/core.v1.PlanService/CreateProjectFromPlan";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateProjectFromPlanRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateProjectFromPlanRequest;
        readonly responseSerialize: (value: Project) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Project;
    };
};
export interface PlanServiceServer extends UntypedServiceImplementation {
    createPlan: handleUnaryCall<CreatePlanRequest, Plan>;
    updatePlan: handleUnaryCall<UpdatePlanRequest, Plan>;
    deletePlan: handleUnaryCall<GetPlanRequest, DeleteResponse>;
    getPlan: handleUnaryCall<GetPlanRequest, Plan>;
    listPlans: handleUnaryCall<ListPlansRequest, ListPlansResponse>;
    sendPlanMessage: handleUnaryCall<SendPlanMessageRequest, PlanMessage>;
    createProjectFromPlan: handleUnaryCall<CreateProjectFromPlanRequest, Project>;
}
export interface PlanServiceClient extends Client {
    createPlan(request: CreatePlanRequest, callback: (error: ServiceError | null, response: Plan) => void): ClientUnaryCall;
    createPlan(request: CreatePlanRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Plan) => void): ClientUnaryCall;
    createPlan(request: CreatePlanRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Plan) => void): ClientUnaryCall;
    updatePlan(request: UpdatePlanRequest, callback: (error: ServiceError | null, response: Plan) => void): ClientUnaryCall;
    updatePlan(request: UpdatePlanRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Plan) => void): ClientUnaryCall;
    updatePlan(request: UpdatePlanRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Plan) => void): ClientUnaryCall;
    deletePlan(request: GetPlanRequest, callback: (error: ServiceError | null, response: DeleteResponse) => void): ClientUnaryCall;
    deletePlan(request: GetPlanRequest, metadata: Metadata, callback: (error: ServiceError | null, response: DeleteResponse) => void): ClientUnaryCall;
    deletePlan(request: GetPlanRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: DeleteResponse) => void): ClientUnaryCall;
    getPlan(request: GetPlanRequest, callback: (error: ServiceError | null, response: Plan) => void): ClientUnaryCall;
    getPlan(request: GetPlanRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Plan) => void): ClientUnaryCall;
    getPlan(request: GetPlanRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Plan) => void): ClientUnaryCall;
    listPlans(request: ListPlansRequest, callback: (error: ServiceError | null, response: ListPlansResponse) => void): ClientUnaryCall;
    listPlans(request: ListPlansRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListPlansResponse) => void): ClientUnaryCall;
    listPlans(request: ListPlansRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListPlansResponse) => void): ClientUnaryCall;
    sendPlanMessage(request: SendPlanMessageRequest, callback: (error: ServiceError | null, response: PlanMessage) => void): ClientUnaryCall;
    sendPlanMessage(request: SendPlanMessageRequest, metadata: Metadata, callback: (error: ServiceError | null, response: PlanMessage) => void): ClientUnaryCall;
    sendPlanMessage(request: SendPlanMessageRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: PlanMessage) => void): ClientUnaryCall;
    createProjectFromPlan(request: CreateProjectFromPlanRequest, callback: (error: ServiceError | null, response: Project) => void): ClientUnaryCall;
    createProjectFromPlan(request: CreateProjectFromPlanRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Project) => void): ClientUnaryCall;
    createProjectFromPlan(request: CreateProjectFromPlanRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Project) => void): ClientUnaryCall;
}
export declare const PlanServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): PlanServiceClient;
    service: typeof PlanServiceService;
    serviceName: string;
};
export type ModelServiceService = typeof ModelServiceService;
export declare const ModelServiceService: {
    readonly createModel: {
        readonly path: "/core.v1.ModelService/CreateModel";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateModelRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateModelRequest;
        readonly responseSerialize: (value: Model) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Model;
    };
    readonly updateModel: {
        readonly path: "/core.v1.ModelService/UpdateModel";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateModelRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateModelRequest;
        readonly responseSerialize: (value: Model) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Model;
    };
    readonly deleteModel: {
        readonly path: "/core.v1.ModelService/DeleteModel";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteModelRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteModelRequest;
        readonly responseSerialize: (value: DeleteResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => DeleteResponse;
    };
    readonly getModel: {
        readonly path: "/core.v1.ModelService/GetModel";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetModelRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetModelRequest;
        readonly responseSerialize: (value: Model) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Model;
    };
    readonly listModels: {
        readonly path: "/core.v1.ModelService/ListModels";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListModelsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListModelsRequest;
        readonly responseSerialize: (value: ListModelsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListModelsResponse;
    };
};
export interface ModelServiceServer extends UntypedServiceImplementation {
    createModel: handleUnaryCall<CreateModelRequest, Model>;
    updateModel: handleUnaryCall<UpdateModelRequest, Model>;
    deleteModel: handleUnaryCall<DeleteModelRequest, DeleteResponse>;
    getModel: handleUnaryCall<GetModelRequest, Model>;
    listModels: handleUnaryCall<ListModelsRequest, ListModelsResponse>;
}
export interface ModelServiceClient extends Client {
    createModel(request: CreateModelRequest, callback: (error: ServiceError | null, response: Model) => void): ClientUnaryCall;
    createModel(request: CreateModelRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Model) => void): ClientUnaryCall;
    createModel(request: CreateModelRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Model) => void): ClientUnaryCall;
    updateModel(request: UpdateModelRequest, callback: (error: ServiceError | null, response: Model) => void): ClientUnaryCall;
    updateModel(request: UpdateModelRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Model) => void): ClientUnaryCall;
    updateModel(request: UpdateModelRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Model) => void): ClientUnaryCall;
    deleteModel(request: DeleteModelRequest, callback: (error: ServiceError | null, response: DeleteResponse) => void): ClientUnaryCall;
    deleteModel(request: DeleteModelRequest, metadata: Metadata, callback: (error: ServiceError | null, response: DeleteResponse) => void): ClientUnaryCall;
    deleteModel(request: DeleteModelRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: DeleteResponse) => void): ClientUnaryCall;
    getModel(request: GetModelRequest, callback: (error: ServiceError | null, response: Model) => void): ClientUnaryCall;
    getModel(request: GetModelRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Model) => void): ClientUnaryCall;
    getModel(request: GetModelRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Model) => void): ClientUnaryCall;
    listModels(request: ListModelsRequest, callback: (error: ServiceError | null, response: ListModelsResponse) => void): ClientUnaryCall;
    listModels(request: ListModelsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListModelsResponse) => void): ClientUnaryCall;
    listModels(request: ListModelsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListModelsResponse) => void): ClientUnaryCall;
}
export declare const ModelServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): ModelServiceClient;
    service: typeof ModelServiceService;
    serviceName: string;
};
export interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
}
//# sourceMappingURL=plan.d.ts.map