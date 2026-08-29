export type Priority = "low" | "medium" | "high";
export type Status = "todo" | "in progress" | "done";
export type Task = {
    uid: number;
    icon: string;
    title: string;
    assignee: string;
    dueDate: string;
    status: Status;
    creater: string;
}

export type Note = {
    uid: number;
    title: string;
    content: string;
    updatedAt: string;
    tags?: string[];
}



