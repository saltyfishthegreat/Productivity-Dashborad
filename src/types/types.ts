export type Task = {
    title: string;
    assignee: string;
    dueDate: string;
    status: string;
    icon: string;
}

export type Note = {
    title: string;
    content: string;
    updatedAt: string;
    tags?: string[];
}

export type Status = "todo" | "in progress" | "done";

export type Priority = "low" | "medium" | "high";

