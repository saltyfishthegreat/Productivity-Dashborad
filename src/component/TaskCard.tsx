import taskListData from "../data/taskList.json";
import StatusBadge from "./StatusBadge";
import type { Task } from "../types/types";
const taskList = taskListData as Task[];
export default function TaskCard(){
    return (
        <div >
            { taskList.map((task: Task) =>
                 <div key={task.title} className = "flex flex-row w-4/5 h-1/6 gap-2 border-2 border-gray-300 rounded-lg shadow-md p-2">
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