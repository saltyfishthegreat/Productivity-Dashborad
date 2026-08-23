import { Children } from "react";
import taskList from "../data/taskList.json";
import StatusBadge from "./StatusBadge";
export default function TaskCard(tasks: any){
    return (
        <div>
            { taskList.map((task: any) =>
                 <div className = "flex flex-row w-4/5 h-1/6 gap-2 border-2 border-gray-300 rounded-lg shadow-md p-2">
                     <span>{task.icon}</span>
                     <a className="mr-3/5">{task.title}</a>
                     <a className="mr-3/5">{task.assignee}</a>
                     <span className="mr-3/5">{task.dueDate}</span>
                     <StatusBadge status={task.status} />
                 </div>
             )} 
        </div>
    )
}