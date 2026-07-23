import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "common.v1";
/** Reusable status enum used across task, deployment, and runtime build states. */
export declare enum Status {
    STATUS_UNSPECIFIED = 0,
    STATUS_PENDING = 1,
    STATUS_QUEUED = 2,
    STATUS_RUNNING = 3,
    STATUS_COMPLETED = 4,
    STATUS_FAILED = 5,
    STATUS_CANCELLED = 6,
    STATUS_STOPPED = 7,
    STATUS_BUILDING = 8,
    STATUS_ERROR = 9,
    UNRECOGNIZED = -1
}
export declare function statusFromJSON(object: any): Status;
export declare function statusToJSON(object: Status): string;
/** Sort direction. */
export declare enum SortDirection {
    SORT_DIRECTION_UNSPECIFIED = 0,
    SORT_DIRECTION_ASC = 1,
    SORT_DIRECTION_DESC = 2,
    UNRECOGNIZED = -1
}
export declare function sortDirectionFromJSON(object: any): SortDirection;
export declare function sortDirectionToJSON(object: SortDirection): string;
/** A key/value environment variable. Masked values are encrypted by the owning service. */
export interface EnvVar {
    key: string;
    value: string;
    masked: boolean;
}
/** Pagination request fields. */
export interface Pagination {
    /** page size */
    first: number;
    /** opaque cursor */
    after: string;
}
/** Pagination response fields. */
export interface PageInfo {
    hasNextPage: boolean;
    endCursor: string;
    totalCount: number;
}
export interface Sort {
    field: string;
    direction: SortDirection;
}
/** Empty body helper. */
export interface Empty {
}
/** Standard delete response. */
export interface DeleteResponse {
    success: boolean;
}
/** Health status for a downstream service. */
export interface HealthStatus {
    service: string;
    healthy: boolean;
    latencyMs: number;
    error: string;
}
/** Standard timestamp wrapper used in entities. */
export interface Timestamps {
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
export declare const EnvVar: MessageFns<EnvVar>;
export declare const Pagination: MessageFns<Pagination>;
export declare const PageInfo: MessageFns<PageInfo>;
export declare const Sort: MessageFns<Sort>;
export declare const Empty: MessageFns<Empty>;
export declare const DeleteResponse: MessageFns<DeleteResponse>;
export declare const HealthStatus: MessageFns<HealthStatus>;
export declare const Timestamps: MessageFns<Timestamps>;
export interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
}
//# sourceMappingURL=types.d.ts.map