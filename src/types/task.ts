export type Status = "in progress" | "completed" | "not started";

export type Task = {
    id: number; 
    icon: string;
    title: string;
    assignee: string;
    status: Status;
    dueDate: string;
    startDate:string;
    creater: string;
};