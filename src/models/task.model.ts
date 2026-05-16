export interface Task {
    id: number;
    description: string;
    status: Status;
    createdAt: string;
    updatedAt?: string;
}

export enum Status {
    TODO,
    IN_PROGRESS,
    DONE
}