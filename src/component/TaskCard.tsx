import { Children } from "react";
import taskList from "../data/taskList.json";

export default function TaskCard(tasks: any){
    return (
        <div>
            { taskList.map((task: any) =>
                 <div className = "flex flex-row w-4/5 h-1/6 gap-2 border-2 border-gray-300 rounded-lg shadow-md p-2">
                     <span>{task.icon}</span>
                     <a className="mr-3/5">{task.title}</a>
                     <a className="mr-3/5">{task.assignee}</a>
                     <span className="mr-3/5">{task.dueDate}</span>
                     <div className = "flex flex-row items-center justify-center ml-auto gap-2 border-2 border-gray-300 rounded-lg shadow-md p-2">
                         <input type='checkbox'></input>
                         <a>{task.status}</a>
                     </div>
                 </div>
             )} 
        </div>
    )
}