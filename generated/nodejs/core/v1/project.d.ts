import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { type CallOptions, type ChannelCredentials, Client, type ClientOptions, type ClientUnaryCall, type handleUnaryCall, type Metadata, type ServiceError, type UntypedServiceImplementation } from "@grpc/grpc-js";
import { DeleteResponse, EnvVar, PageInfo, Pagination, Sort, Status, Timestamps } from "../../common/v1/types.js";
export declare const protobufPackage = "core.v1";
/** Project is a workspace that groups tasks, environment variables, and deployment configs. */
export interface Project {
    id: string;
    name: string;
    description: string;
    runtimeId: string;
    envVars: EnvVar[];
    prompt: string;
    initPrompt: string;
    status: Status;
    lastTaskId: string;
    timestamps?: Timestamps | undefined;
    workspaceFolder: string;
    gitRemoteUrl: string;
}
export interface ListProjectsRequest {
    pagination?: Pagination | undefined;
    sort?: Sort | undefined;
}
export interface ListProjectsResponse {
    projects: Project[];
    pageInfo?: PageInfo | undefined;
}
export interface GetProjectRequest {
    id: string;
}
export interface CreateProjectRequest {
    name: string;
    description: string;
    runtimeId: string;
    envVars: EnvVar[];
    prompt: string;
    initPrompt: string;
    workspaceFolder: string;
    gitRemoteUrl: string;
}
export interface UpdateProjectRequest {
    id: string;
    name?: string | undefined;
    description?: string | undefined;
    runtimeId?: string | undefined;
    envVars: EnvVar[];
    prompt?: string | undefined;
    initPrompt?: string | undefined;
    workspaceFolder?: string | undefined;
    gitRemoteUrl?: string | undefined;
}
export interface DeleteProjectRequest {
    id: string;
}
export interface RunProjectInitRequest {
    id: string;
}
export declare const Project: MessageFns<Project>;
export declare const ListProjectsRequest: MessageFns<ListProjectsRequest>;
export declare const ListProjectsResponse: MessageFns<ListProjectsResponse>;
export declare const GetProjectRequest: MessageFns<GetProjectRequest>;
export declare const CreateProjectRequest: MessageFns<CreateProjectRequest>;
export declare const UpdateProjectRequest: MessageFns<UpdateProjectRequest>;
export declare const DeleteProjectRequest: MessageFns<DeleteProjectRequest>;
export declare const RunProjectInitRequest: MessageFns<RunProjectInitRequest>;
export type ProjectServiceService = typeof ProjectServiceService;
export declare const ProjectServiceService: {
    readonly listProjects: {
        readonly path: "/core.v1.ProjectService/ListProjects";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListProjectsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListProjectsRequest;
        readonly responseSerialize: (value: ListProjectsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListProjectsResponse;
    };
    readonly getProject: {
        readonly path: "/core.v1.ProjectService/GetProject";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetProjectRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetProjectRequest;
        readonly responseSerialize: (value: Project) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Project;
    };
    readonly createProject: {
        readonly path: "/core.v1.ProjectService/CreateProject";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateProjectRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateProjectRequest;
        readonly responseSerialize: (value: Project) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Project;
    };
    readonly updateProject: {
        readonly path: "/core.v1.ProjectService/UpdateProject";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateProjectRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateProjectRequest;
        readonly responseSerialize: (value: Project) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Project;
    };
    readonly deleteProject: {
        readonly path: "/core.v1.ProjectService/DeleteProject";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteProjectRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteProjectRequest;
        readonly responseSerialize: (value: DeleteResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => DeleteResponse;
    };
    readonly runProjectInit: {
        readonly path: "/core.v1.ProjectService/RunProjectInit";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RunProjectInitRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RunProjectInitRequest;
        readonly responseSerialize: (value: Project) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Project;
    };
};
export interface ProjectServiceServer extends UntypedServiceImplementation {
    listProjects: handleUnaryCall<ListProjectsRequest, ListProjectsResponse>;
    getProject: handleUnaryCall<GetProjectRequest, Project>;
    createProject: handleUnaryCall<CreateProjectRequest, Project>;
    updateProject: handleUnaryCall<UpdateProjectRequest, Project>;
    deleteProject: handleUnaryCall<DeleteProjectRequest, DeleteResponse>;
    runProjectInit: handleUnaryCall<RunProjectInitRequest, Project>;
}
export interface ProjectServiceClient extends Client {
    listProjects(request: ListProjectsRequest, callback: (error: ServiceError | null, response: ListProjectsResponse) => void): ClientUnaryCall;
    listProjects(request: ListProjectsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListProjectsResponse) => void): ClientUnaryCall;
    listProjects(request: ListProjectsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListProjectsResponse) => void): ClientUnaryCall;
    getProject(request: GetProjectRequest, callback: (error: ServiceError | null, response: Project) => void): ClientUnaryCall;
    getProject(request: GetProjectRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Project) => void): ClientUnaryCall;
    getProject(request: GetProjectRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Project) => void): ClientUnaryCall;
    createProject(request: CreateProjectRequest, callback: (error: ServiceError | null, response: Project) => void): ClientUnaryCall;
    createProject(request: CreateProjectRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Project) => void): ClientUnaryCall;
    createProject(request: CreateProjectRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Project) => void): ClientUnaryCall;
    updateProject(request: UpdateProjectRequest, callback: (error: ServiceError | null, response: Project) => void): ClientUnaryCall;
    updateProject(request: UpdateProjectRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Project) => void): ClientUnaryCall;
    updateProject(request: UpdateProjectRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Project) => void): ClientUnaryCall;
    deleteProject(request: DeleteProjectRequest, callback: (error: ServiceError | null, response: DeleteResponse) => void): ClientUnaryCall;
    deleteProject(request: DeleteProjectRequest, metadata: Metadata, callback: (error: ServiceError | null, response: DeleteResponse) => void): ClientUnaryCall;
    deleteProject(request: DeleteProjectRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: DeleteResponse) => void): ClientUnaryCall;
    runProjectInit(request: RunProjectInitRequest, callback: (error: ServiceError | null, response: Project) => void): ClientUnaryCall;
    runProjectInit(request: RunProjectInitRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Project) => void): ClientUnaryCall;
    runProjectInit(request: RunProjectInitRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Project) => void): ClientUnaryCall;
}
export declare const ProjectServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): ProjectServiceClient;
    service: typeof ProjectServiceService;
    serviceName: string;
};
export interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
}
//# sourceMappingURL=project.d.ts.map