

export type Task = {
    id: number; 
    icon: string;
    title: string;
    assignee: string;
    status: "in progress" | "completed" | "not started";
    dueDate: string;
    startDate:string;
    creater: string;
};