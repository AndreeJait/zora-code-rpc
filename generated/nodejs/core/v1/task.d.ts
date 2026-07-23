import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { type CallOptions, type ChannelCredentials, Client, type ClientOptions, type ClientUnaryCall, type handleUnaryCall, type Metadata, type ServiceError, type UntypedServiceImplementation } from "@grpc/grpc-js";
import { DeleteResponse, PageInfo, Pagination, Status } from "../../common/v1/types.js";
export declare const protobufPackage = "core.v1";
/** Task is a prompt executed within a project. */
export interface Task {
    id: string;
    name: string;
    description: string;
    projectId: string;
    prompt: string;
    model: string;
    linkedTaskId: string;
    status: Status;
    output: string;
    startedAt?: Date | undefined;
    completedAt?: Date | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
export interface ListTasksRequest {
    projectId: string;
    pagination?: Pagination | undefined;
}
export interface ListTasksResponse {
    tasks: Task[];
    pageInfo?: PageInfo | undefined;
}
export interface GetTaskRequest {
    id: string;
}
export interface CreateTaskRequest {
    name: string;
    description: string;
    projectId: string;
    prompt: string;
    model: string;
    linkedTaskId: string;
}
export interface UpdateTaskRequest {
    id: string;
    name?: string | undefined;
    description?: string | undefined;
    prompt?: string | undefined;
    model?: string | undefined;
}
export interface DeleteTaskRequest {
    id: string;
}
export interface CloneTaskRequest {
    id: string;
}
export declare const Task: MessageFns<Task>;
export declare const ListTasksRequest: MessageFns<ListTasksRequest>;
export declare const ListTasksResponse: MessageFns<ListTasksResponse>;
export declare const GetTaskRequest: MessageFns<GetTaskRequest>;
export declare const CreateTaskRequest: MessageFns<CreateTaskRequest>;
export declare const UpdateTaskRequest: MessageFns<UpdateTaskRequest>;
export declare const DeleteTaskRequest: MessageFns<DeleteTaskRequest>;
export declare const CloneTaskRequest: MessageFns<CloneTaskRequest>;
export type TaskServiceService = typeof TaskServiceService;
export declare const TaskServiceService: {
    readonly listTasks: {
        readonly path: "/core.v1.TaskService/ListTasks";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListTasksRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListTasksRequest;
        readonly responseSerialize: (value: ListTasksResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListTasksResponse;
    };
    readonly getTask: {
        readonly path: "/core.v1.TaskService/GetTask";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetTaskRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetTaskRequest;
        readonly responseSerialize: (value: Task) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Task;
    };
    readonly createTask: {
        readonly path: "/core.v1.TaskService/CreateTask";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateTaskRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateTaskRequest;
        readonly responseSerialize: (value: Task) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Task;
    };
    readonly updateTask: {
        readonly path: "/core.v1.TaskService/UpdateTask";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateTaskRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateTaskRequest;
        readonly responseSerialize: (value: Task) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Task;
    };
    readonly deleteTask: {
        readonly path: "/core.v1.TaskService/DeleteTask";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteTaskRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteTaskRequest;
        readonly responseSerialize: (value: DeleteResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => DeleteResponse;
    };
    readonly cloneTask: {
        readonly path: "/core.v1.TaskService/CloneTask";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CloneTaskRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CloneTaskRequest;
        readonly responseSerialize: (value: Task) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Task;
    };
};
export interface TaskServiceServer extends UntypedServiceImplementation {
    listTasks: handleUnaryCall<ListTasksRequest, ListTasksResponse>;
    getTask: handleUnaryCall<GetTaskRequest, Task>;
    createTask: handleUnaryCall<CreateTaskRequest, Task>;
    updateTask: handleUnaryCall<UpdateTaskRequest, Task>;
    deleteTask: handleUnaryCall<DeleteTaskRequest, DeleteResponse>;
    cloneTask: handleUnaryCall<CloneTaskRequest, Task>;
}
export interface TaskServiceClient extends Client {
    listTasks(request: ListTasksRequest, callback: (error: ServiceError | null, response: ListTasksResponse) => void): ClientUnaryCall;
    listTasks(request: ListTasksRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListTasksResponse) => void): ClientUnaryCall;
    listTasks(request: ListTasksRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListTasksResponse) => void): ClientUnaryCall;
    getTask(request: GetTaskRequest, callback: (error: ServiceError | null, response: Task) => void): ClientUnaryCall;
    getTask(request: GetTaskRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Task) => void): ClientUnaryCall;
    getTask(request: GetTaskRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Task) => void): ClientUnaryCall;
    createTask(request: CreateTaskRequest, callback: (error: ServiceError | null, response: Task) => void): ClientUnaryCall;
    createTask(request: CreateTaskRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Task) => void): ClientUnaryCall;
    createTask(request: CreateTaskRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Task) => void): ClientUnaryCall;
    updateTask(request: UpdateTaskRequest, callback: (error: ServiceError | null, response: Task) => void): ClientUnaryCall;
    updateTask(request: UpdateTaskRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Task) => void): ClientUnaryCall;
    updateTask(request: UpdateTaskRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Task) => void): ClientUnaryCall;
    deleteTask(request: DeleteTaskRequest, callback: (error: ServiceError | null, response: DeleteResponse) => void): ClientUnaryCall;
    deleteTask(request: DeleteTaskRequest, metadata: Metadata, callback: (error: ServiceError | null, response: DeleteResponse) => void): ClientUnaryCall;
    deleteTask(request: DeleteTaskRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: DeleteResponse) => void): ClientUnaryCall;
    cloneTask(request: CloneTaskRequest, callback: (error: ServiceError | null, response: Task) => void): ClientUnaryCall;
    cloneTask(request: CloneTaskRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Task) => void): ClientUnaryCall;
    cloneTask(request: CloneTaskRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Task) => void): ClientUnaryCall;
}
export declare const TaskServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): TaskServiceClient;
    service: typeof TaskServiceService;
    serviceName: string;
};
export interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
}
//# sourceMappingURL=task.d.ts.map