import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { type CallOptions, type ChannelCredentials, Client, type ClientOptions, type ClientUnaryCall, type handleUnaryCall, type Metadata, type ServiceError, type UntypedServiceImplementation } from "@grpc/grpc-js";
import { DeleteResponse, Status, Timestamps } from "../../common/v1/types.js";
export declare const protobufPackage = "core.v1";
/** Deployment exposes a project container to the internet. */
export interface Deployment {
    id: string;
    projectId: string;
    tunnelId: string;
    subdomain: string;
    dns: string;
    port: number;
    containerId: string;
    status: Status;
    createNewContainerIfNotExists: boolean;
    timestamps?: Timestamps | undefined;
    zoneId: string;
    networkName: string;
}
export interface ListDeploymentsRequest {
    projectId: string;
}
export interface ListDeploymentsResponse {
    deployments: Deployment[];
}
export interface GetDeploymentRequest {
    id: string;
}
export interface CreateDeploymentRequest {
    projectId: string;
    tunnelId: string;
    subdomain: string;
    port: number;
    createNewContainerIfNotExists: boolean;
    zoneId: string;
    networkName: string;
}
export interface UpdateDeploymentRequest {
    id: string;
    tunnelId?: string | undefined;
    subdomain?: string | undefined;
    port?: number | undefined;
    createNewContainerIfNotExists?: boolean | undefined;
    zoneId?: string | undefined;
    networkName?: string | undefined;
}
export interface DeleteDeploymentRequest {
    id: string;
}
export interface RedeployRequest {
    id: string;
}
export interface StopDeploymentRequest {
    id: string;
}
export declare const Deployment: MessageFns<Deployment>;
export declare const ListDeploymentsRequest: MessageFns<ListDeploymentsRequest>;
export declare const ListDeploymentsResponse: MessageFns<ListDeploymentsResponse>;
export declare const GetDeploymentRequest: MessageFns<GetDeploymentRequest>;
export declare const CreateDeploymentRequest: MessageFns<CreateDeploymentRequest>;
export declare const UpdateDeploymentRequest: MessageFns<UpdateDeploymentRequest>;
export declare const DeleteDeploymentRequest: MessageFns<DeleteDeploymentRequest>;
export declare const RedeployRequest: MessageFns<RedeployRequest>;
export declare const StopDeploymentRequest: MessageFns<StopDeploymentRequest>;
export type DeploymentServiceService = typeof DeploymentServiceService;
export declare const DeploymentServiceService: {
    readonly listDeployments: {
        readonly path: "/core.v1.DeploymentService/ListDeployments";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListDeploymentsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListDeploymentsRequest;
        readonly responseSerialize: (value: ListDeploymentsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListDeploymentsResponse;
    };
    readonly getDeployment: {
        readonly path: "/core.v1.DeploymentService/GetDeployment";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetDeploymentRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetDeploymentRequest;
        readonly responseSerialize: (value: Deployment) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Deployment;
    };
    readonly createDeployment: {
        readonly path: "/core.v1.DeploymentService/CreateDeployment";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateDeploymentRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateDeploymentRequest;
        readonly responseSerialize: (value: Deployment) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Deployment;
    };
    readonly updateDeployment: {
        readonly path: "/core.v1.DeploymentService/UpdateDeployment";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateDeploymentRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateDeploymentRequest;
        readonly responseSerialize: (value: Deployment) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Deployment;
    };
    readonly deleteDeployment: {
        readonly path: "/core.v1.DeploymentService/DeleteDeployment";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteDeploymentRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteDeploymentRequest;
        readonly responseSerialize: (value: DeleteResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => DeleteResponse;
    };
    readonly redeploy: {
        readonly path: "/core.v1.DeploymentService/Redeploy";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RedeployRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RedeployRequest;
        readonly responseSerialize: (value: Deployment) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Deployment;
    };
    readonly stopDeployment: {
        readonly path: "/core.v1.DeploymentService/StopDeployment";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: StopDeploymentRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StopDeploymentRequest;
        readonly responseSerialize: (value: Deployment) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Deployment;
    };
};
export interface DeploymentServiceServer extends UntypedServiceImplementation {
    listDeployments: handleUnaryCall<ListDeploymentsRequest, ListDeploymentsResponse>;
    getDeployment: handleUnaryCall<GetDeploymentRequest, Deployment>;
    createDeployment: handleUnaryCall<CreateDeploymentRequest, Deployment>;
    updateDeployment: handleUnaryCall<UpdateDeploymentRequest, Deployment>;
    deleteDeployment: handleUnaryCall<DeleteDeploymentRequest, DeleteResponse>;
    redeploy: handleUnaryCall<RedeployRequest, Deployment>;
    stopDeployment: handleUnaryCall<StopDeploymentRequest, Deployment>;
}
export interface DeploymentServiceClient extends Client {
    listDeployments(request: ListDeploymentsRequest, callback: (error: ServiceError | null, response: ListDeploymentsResponse) => void): ClientUnaryCall;
    listDeployments(request: ListDeploymentsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListDeploymentsResponse) => void): ClientUnaryCall;
    listDeployments(request: ListDeploymentsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListDeploymentsResponse) => void): ClientUnaryCall;
    getDeployment(request: GetDeploymentRequest, callback: (error: ServiceError | null, response: Deployment) => void): ClientUnaryCall;
    getDeployment(request: GetDeploymentRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Deployment) => void): ClientUnaryCall;
    getDeployment(request: GetDeploymentRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Deployment) => void): ClientUnaryCall;
    createDeployment(request: CreateDeploymentRequest, callback: (error: ServiceError | null, response: Deployment) => void): ClientUnaryCall;
    createDeployment(request: CreateDeploymentRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Deployment) => void): ClientUnaryCall;
    createDeployment(request: CreateDeploymentRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Deployment) => void): ClientUnaryCall;
    updateDeployment(request: UpdateDeploymentRequest, callback: (error: ServiceError | null, response: Deployment) => void): ClientUnaryCall;
    updateDeployment(request: UpdateDeploymentRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Deployment) => void): ClientUnaryCall;
    updateDeployment(request: UpdateDeploymentRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Deployment) => void): ClientUnaryCall;
    deleteDeployment(request: DeleteDeploymentRequest, callback: (error: ServiceError | null, response: DeleteResponse) => void): ClientUnaryCall;
    deleteDeployment(request: DeleteDeploymentRequest, metadata: Metadata, callback: (error: ServiceError | null, response: DeleteResponse) => void): ClientUnaryCall;
    deleteDeployment(request: DeleteDeploymentRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: DeleteResponse) => void): ClientUnaryCall;
    redeploy(request: RedeployRequest, callback: (error: ServiceError | null, response: Deployment) => void): ClientUnaryCall;
    redeploy(request: RedeployRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Deployment) => void): ClientUnaryCall;
    redeploy(request: RedeployRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Deployment) => void): ClientUnaryCall;
    stopDeployment(request: StopDeploymentRequest, callback: (error: ServiceError | null, response: Deployment) => void): ClientUnaryCall;
    stopDeployment(request: StopDeploymentRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Deployment) => void): ClientUnaryCall;
    stopDeployment(request: StopDeploymentRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Deployment) => void): ClientUnaryCall;
}
export declare const DeploymentServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): DeploymentServiceClient;
    service: typeof DeploymentServiceService;
    serviceName: string;
};
export interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
}
//# sourceMappingURL=deployment.d.ts.map