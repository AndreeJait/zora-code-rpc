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
    imageUrls: string[];
    fileUrls: string[];
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
    imageUrls: string[];
    fileUrls: string[];
}
export interface UpdateTaskRequest {
    id: string;
    name?: string | undefined;
    description?: string | undefined;
    prompt?: string | undefined;
    model?: string | undefined;
    imageUrls: string[];
    fileUrls: string[];
}
export interface DeleteTaskRequest {
    id: string;
}
export interface CloneTaskRequest {
    id: string;
}
export interface CancelTaskRequest {
    id: string;
}
export interface CancelTaskResponse {
    task?: Task | undefined;
}
export interface RerunTaskRequest {
    id: string;
}
export interface RerunTaskResponse {
    task?: Task | undefined;
}
export interface UploadTaskImagesRequest {
    images: Buffer[];
    fileNames: string[];
}
export interface UploadTaskImagesResponse {
    imageUrls: string[];
}
export interface UploadTaskFilesRequest {
    files: Buffer[];
    fileNames: string[];
}
export interface UploadTaskFilesResponse {
    fileUrls: string[];
}
export declare const Task: MessageFns<Task>;
export declare const ListTasksRequest: MessageFns<ListTasksRequest>;
export declare const ListTasksResponse: MessageFns<ListTasksResponse>;
export declare const GetTaskRequest: MessageFns<GetTaskRequest>;
export declare const CreateTaskRequest: MessageFns<CreateTaskRequest>;
export declare const UpdateTaskRequest: MessageFns<UpdateTaskRequest>;
export declare const DeleteTaskRequest: MessageFns<DeleteTaskRequest>;
export declare const CloneTaskRequest: MessageFns<CloneTaskRequest>;
export declare const CancelTaskRequest: MessageFns<CancelTaskRequest>;
export declare const CancelTaskResponse: MessageFns<CancelTaskResponse>;
export declare const RerunTaskRequest: MessageFns<RerunTaskRequest>;
export declare const RerunTaskResponse: MessageFns<RerunTaskResponse>;
export declare const UploadTaskImagesRequest: MessageFns<UploadTaskImagesRequest>;
export declare const UploadTaskImagesResponse: MessageFns<UploadTaskImagesResponse>;
export declare const UploadTaskFilesRequest: MessageFns<UploadTaskFilesRequest>;
export declare const UploadTaskFilesResponse: MessageFns<UploadTaskFilesResponse>;
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
    readonly cancelTask: {
        readonly path: "/core.v1.TaskService/CancelTask";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CancelTaskRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CancelTaskRequest;
        readonly responseSerialize: (value: CancelTaskResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => CancelTaskResponse;
    };
    readonly rerunTask: {
        readonly path: "/core.v1.TaskService/RerunTask";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RerunTaskRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RerunTaskRequest;
        readonly responseSerialize: (value: RerunTaskResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => RerunTaskResponse;
    };
    readonly uploadTaskImages: {
        readonly path: "/core.v1.TaskService/UploadTaskImages";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UploadTaskImagesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UploadTaskImagesRequest;
        readonly responseSerialize: (value: UploadTaskImagesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => UploadTaskImagesResponse;
    };
    readonly uploadTaskFiles: {
        readonly path: "/core.v1.TaskService/UploadTaskFiles";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UploadTaskFilesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UploadTaskFilesRequest;
        readonly responseSerialize: (value: UploadTaskFilesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => UploadTaskFilesResponse;
    };
};
export interface TaskServiceServer extends UntypedServiceImplementation {
    listTasks: handleUnaryCall<ListTasksRequest, ListTasksResponse>;
    getTask: handleUnaryCall<GetTaskRequest, Task>;
    createTask: handleUnaryCall<CreateTaskRequest, Task>;
    updateTask: handleUnaryCall<UpdateTaskRequest, Task>;
    deleteTask: handleUnaryCall<DeleteTaskRequest, DeleteResponse>;
    cloneTask: handleUnaryCall<CloneTaskRequest, Task>;
    cancelTask: handleUnaryCall<CancelTaskRequest, CancelTaskResponse>;
    rerunTask: handleUnaryCall<RerunTaskRequest, RerunTaskResponse>;
    uploadTaskImages: handleUnaryCall<UploadTaskImagesRequest, UploadTaskImagesResponse>;
    uploadTaskFiles: handleUnaryCall<UploadTaskFilesRequest, UploadTaskFilesResponse>;
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
    cancelTask(request: CancelTaskRequest, callback: (error: ServiceError | null, response: CancelTaskResponse) => void): ClientUnaryCall;
    cancelTask(request: CancelTaskRequest, metadata: Metadata, callback: (error: ServiceError | null, response: CancelTaskResponse) => void): ClientUnaryCall;
    cancelTask(request: CancelTaskRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: CancelTaskResponse) => void): ClientUnaryCall;
    rerunTask(request: RerunTaskRequest, callback: (error: ServiceError | null, response: RerunTaskResponse) => void): ClientUnaryCall;
    rerunTask(request: RerunTaskRequest, metadata: Metadata, callback: (error: ServiceError | null, response: RerunTaskResponse) => void): ClientUnaryCall;
    rerunTask(request: RerunTaskRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: RerunTaskResponse) => void): ClientUnaryCall;
    uploadTaskImages(request: UploadTaskImagesRequest, callback: (error: ServiceError | null, response: UploadTaskImagesResponse) => void): ClientUnaryCall;
    uploadTaskImages(request: UploadTaskImagesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: UploadTaskImagesResponse) => void): ClientUnaryCall;
    uploadTaskImages(request: UploadTaskImagesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: UploadTaskImagesResponse) => void): ClientUnaryCall;
    uploadTaskFiles(request: UploadTaskFilesRequest, callback: (error: ServiceError | null, response: UploadTaskFilesResponse) => void): ClientUnaryCall;
    uploadTaskFiles(request: UploadTaskFilesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: UploadTaskFilesResponse) => void): ClientUnaryCall;
    uploadTaskFiles(request: UploadTaskFilesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: UploadTaskFilesResponse) => void): ClientUnaryCall;
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