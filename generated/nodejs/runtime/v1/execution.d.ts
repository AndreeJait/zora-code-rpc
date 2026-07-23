import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { type CallOptions, type ChannelCredentials, Client, type ClientDuplexStream, type ClientOptions, type ClientReadableStream, type ClientUnaryCall, type handleBidiStreamingCall, type handleServerStreamingCall, type handleUnaryCall, type Metadata, type ServiceError, type UntypedServiceImplementation } from "@grpc/grpc-js";
import { Empty, Status } from "../../common/v1/types.js";
export declare const protobufPackage = "runtime.v1";
export declare enum LogStream {
    LOG_STREAM_UNSPECIFIED = 0,
    LOG_STREAM_STDOUT = 1,
    LOG_STREAM_STDERR = 2,
    LOG_STREAM_SYSTEM = 3,
    UNRECOGNIZED = -1
}
export declare function logStreamFromJSON(object: any): LogStream;
export declare function logStreamToJSON(object: LogStream): string;
export declare enum LogLevel {
    LOG_LEVEL_UNSPECIFIED = 0,
    LOG_LEVEL_DEBUG = 1,
    LOG_LEVEL_INFO = 2,
    LOG_LEVEL_WARN = 3,
    LOG_LEVEL_ERROR = 4,
    UNRECOGNIZED = -1
}
export declare function logLevelFromJSON(object: any): LogLevel;
export declare function logLevelToJSON(object: LogLevel): string;
/** Log line produced by a running task or runtime build. */
export interface LogLine {
    /** RFC3339 */
    timestamp: string;
    stream: LogStream;
    level: LogLevel;
    message: string;
}
/** Task execution commands. */
export interface StartTaskRequest {
    taskId: string;
    projectId: string;
    runtimeId: string;
}
export interface StartTaskResponse {
    taskId: string;
    status: Status;
}
export interface CancelTaskRequest {
    taskId: string;
}
export interface CancelTaskResponse {
    taskId: string;
    status: Status;
}
export interface StreamTaskLogsRequest {
    taskId: string;
}
export interface WatchStatusRequest {
    taskId: string;
}
export interface StatusEvent {
    taskId: string;
    status: Status;
}
/** Runtime build/install commands. */
export interface BuildRuntimeRequest {
    runtimeId: string;
}
export interface BuildRuntimeResponse {
    runtimeId: string;
    status: Status;
    logStreamId: string;
}
export interface StreamRuntimeLogsRequest {
    runtimeId: string;
}
/** Project init commands. */
export interface RunInitPromptRequest {
    projectId: string;
}
export interface RunInitPromptResponse {
    projectId: string;
    taskId: string;
    status: Status;
}
/** Interactive terminal. */
export interface AttachTerminalRequest {
    /** task or runtime id */
    resourceId: string;
    /** "task" | "runtime" */
    resourceType: string;
}
export interface TerminalInput {
    resourceId: string;
    resourceType: string;
    data: Buffer;
}
export interface TerminalOutput {
    resourceId: string;
    resourceType: string;
    data: Buffer;
}
export interface ResizeTerminalRequest {
    resourceId: string;
    resourceType: string;
    cols: number;
    rows: number;
}
export declare const LogLine: MessageFns<LogLine>;
export declare const StartTaskRequest: MessageFns<StartTaskRequest>;
export declare const StartTaskResponse: MessageFns<StartTaskResponse>;
export declare const CancelTaskRequest: MessageFns<CancelTaskRequest>;
export declare const CancelTaskResponse: MessageFns<CancelTaskResponse>;
export declare const StreamTaskLogsRequest: MessageFns<StreamTaskLogsRequest>;
export declare const WatchStatusRequest: MessageFns<WatchStatusRequest>;
export declare const StatusEvent: MessageFns<StatusEvent>;
export declare const BuildRuntimeRequest: MessageFns<BuildRuntimeRequest>;
export declare const BuildRuntimeResponse: MessageFns<BuildRuntimeResponse>;
export declare const StreamRuntimeLogsRequest: MessageFns<StreamRuntimeLogsRequest>;
export declare const RunInitPromptRequest: MessageFns<RunInitPromptRequest>;
export declare const RunInitPromptResponse: MessageFns<RunInitPromptResponse>;
export declare const AttachTerminalRequest: MessageFns<AttachTerminalRequest>;
export declare const TerminalInput: MessageFns<TerminalInput>;
export declare const TerminalOutput: MessageFns<TerminalOutput>;
export declare const ResizeTerminalRequest: MessageFns<ResizeTerminalRequest>;
export type ExecutionServiceService = typeof ExecutionServiceService;
export declare const ExecutionServiceService: {
    /** Task execution */
    readonly startTask: {
        readonly path: "/runtime.v1.ExecutionService/StartTask";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: StartTaskRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StartTaskRequest;
        readonly responseSerialize: (value: StartTaskResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => StartTaskResponse;
    };
    readonly cancelTask: {
        readonly path: "/runtime.v1.ExecutionService/CancelTask";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CancelTaskRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CancelTaskRequest;
        readonly responseSerialize: (value: CancelTaskResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => CancelTaskResponse;
    };
    readonly streamTaskLogs: {
        readonly path: "/runtime.v1.ExecutionService/StreamTaskLogs";
        readonly requestStream: false;
        readonly responseStream: true;
        readonly requestSerialize: (value: StreamTaskLogsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StreamTaskLogsRequest;
        readonly responseSerialize: (value: LogLine) => Buffer;
        readonly responseDeserialize: (value: Buffer) => LogLine;
    };
    readonly watchStatus: {
        readonly path: "/runtime.v1.ExecutionService/WatchStatus";
        readonly requestStream: false;
        readonly responseStream: true;
        readonly requestSerialize: (value: WatchStatusRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => WatchStatusRequest;
        readonly responseSerialize: (value: StatusEvent) => Buffer;
        readonly responseDeserialize: (value: Buffer) => StatusEvent;
    };
    /** Runtime build/install */
    readonly buildRuntime: {
        readonly path: "/runtime.v1.ExecutionService/BuildRuntime";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: BuildRuntimeRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => BuildRuntimeRequest;
        readonly responseSerialize: (value: BuildRuntimeResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => BuildRuntimeResponse;
    };
    readonly streamRuntimeLogs: {
        readonly path: "/runtime.v1.ExecutionService/StreamRuntimeLogs";
        readonly requestStream: false;
        readonly responseStream: true;
        readonly requestSerialize: (value: StreamRuntimeLogsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StreamRuntimeLogsRequest;
        readonly responseSerialize: (value: LogLine) => Buffer;
        readonly responseDeserialize: (value: Buffer) => LogLine;
    };
    /** Project init */
    readonly runInitPrompt: {
        readonly path: "/runtime.v1.ExecutionService/RunInitPrompt";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RunInitPromptRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RunInitPromptRequest;
        readonly responseSerialize: (value: RunInitPromptResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => RunInitPromptResponse;
    };
    /** Interactive terminal (bidirectional stream) */
    readonly attachTerminal: {
        readonly path: "/runtime.v1.ExecutionService/AttachTerminal";
        readonly requestStream: true;
        readonly responseStream: true;
        readonly requestSerialize: (value: TerminalInput) => Buffer;
        readonly requestDeserialize: (value: Buffer) => TerminalInput;
        readonly responseSerialize: (value: TerminalOutput) => Buffer;
        readonly responseDeserialize: (value: Buffer) => TerminalOutput;
    };
    readonly resizeTerminal: {
        readonly path: "/runtime.v1.ExecutionService/ResizeTerminal";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ResizeTerminalRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ResizeTerminalRequest;
        readonly responseSerialize: (value: Empty) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Empty;
    };
};
export interface ExecutionServiceServer extends UntypedServiceImplementation {
    /** Task execution */
    startTask: handleUnaryCall<StartTaskRequest, StartTaskResponse>;
    cancelTask: handleUnaryCall<CancelTaskRequest, CancelTaskResponse>;
    streamTaskLogs: handleServerStreamingCall<StreamTaskLogsRequest, LogLine>;
    watchStatus: handleServerStreamingCall<WatchStatusRequest, StatusEvent>;
    /** Runtime build/install */
    buildRuntime: handleUnaryCall<BuildRuntimeRequest, BuildRuntimeResponse>;
    streamRuntimeLogs: handleServerStreamingCall<StreamRuntimeLogsRequest, LogLine>;
    /** Project init */
    runInitPrompt: handleUnaryCall<RunInitPromptRequest, RunInitPromptResponse>;
    /** Interactive terminal (bidirectional stream) */
    attachTerminal: handleBidiStreamingCall<TerminalInput, TerminalOutput>;
    resizeTerminal: handleUnaryCall<ResizeTerminalRequest, Empty>;
}
export interface ExecutionServiceClient extends Client {
    /** Task execution */
    startTask(request: StartTaskRequest, callback: (error: ServiceError | null, response: StartTaskResponse) => void): ClientUnaryCall;
    startTask(request: StartTaskRequest, metadata: Metadata, callback: (error: ServiceError | null, response: StartTaskResponse) => void): ClientUnaryCall;
    startTask(request: StartTaskRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: StartTaskResponse) => void): ClientUnaryCall;
    cancelTask(request: CancelTaskRequest, callback: (error: ServiceError | null, response: CancelTaskResponse) => void): ClientUnaryCall;
    cancelTask(request: CancelTaskRequest, metadata: Metadata, callback: (error: ServiceError | null, response: CancelTaskResponse) => void): ClientUnaryCall;
    cancelTask(request: CancelTaskRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: CancelTaskResponse) => void): ClientUnaryCall;
    streamTaskLogs(request: StreamTaskLogsRequest, options?: Partial<CallOptions>): ClientReadableStream<LogLine>;
    streamTaskLogs(request: StreamTaskLogsRequest, metadata?: Metadata, options?: Partial<CallOptions>): ClientReadableStream<LogLine>;
    watchStatus(request: WatchStatusRequest, options?: Partial<CallOptions>): ClientReadableStream<StatusEvent>;
    watchStatus(request: WatchStatusRequest, metadata?: Metadata, options?: Partial<CallOptions>): ClientReadableStream<StatusEvent>;
    /** Runtime build/install */
    buildRuntime(request: BuildRuntimeRequest, callback: (error: ServiceError | null, response: BuildRuntimeResponse) => void): ClientUnaryCall;
    buildRuntime(request: BuildRuntimeRequest, metadata: Metadata, callback: (error: ServiceError | null, response: BuildRuntimeResponse) => void): ClientUnaryCall;
    buildRuntime(request: BuildRuntimeRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: BuildRuntimeResponse) => void): ClientUnaryCall;
    streamRuntimeLogs(request: StreamRuntimeLogsRequest, options?: Partial<CallOptions>): ClientReadableStream<LogLine>;
    streamRuntimeLogs(request: StreamRuntimeLogsRequest, metadata?: Metadata, options?: Partial<CallOptions>): ClientReadableStream<LogLine>;
    /** Project init */
    runInitPrompt(request: RunInitPromptRequest, callback: (error: ServiceError | null, response: RunInitPromptResponse) => void): ClientUnaryCall;
    runInitPrompt(request: RunInitPromptRequest, metadata: Metadata, callback: (error: ServiceError | null, response: RunInitPromptResponse) => void): ClientUnaryCall;
    runInitPrompt(request: RunInitPromptRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: RunInitPromptResponse) => void): ClientUnaryCall;
    /** Interactive terminal (bidirectional stream) */
    attachTerminal(): ClientDuplexStream<TerminalInput, TerminalOutput>;
    attachTerminal(options: Partial<CallOptions>): ClientDuplexStream<TerminalInput, TerminalOutput>;
    attachTerminal(metadata: Metadata, options?: Partial<CallOptions>): ClientDuplexStream<TerminalInput, TerminalOutput>;
    resizeTerminal(request: ResizeTerminalRequest, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    resizeTerminal(request: ResizeTerminalRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    resizeTerminal(request: ResizeTerminalRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
}
export declare const ExecutionServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): ExecutionServiceClient;
    service: typeof ExecutionServiceService;
    serviceName: string;
};
export interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
}
//# sourceMappingURL=execution.d.ts.map