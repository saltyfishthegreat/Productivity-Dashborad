import StatusBadge from "./StatusBadge";
import type { Task } from "../types/types";

export default function TaskWorkSpace({taskList}: {taskList: Task[]}) {

    return (
        <div >
            { taskList.map((task: Task) =>
                <div key={task.uid} className = "flex flex-row w-4/5 h-1/6 gap-2 border-2 border-gray-300 rounded-lg shadow-md p-2">
                    <input type='checkbox'></input>
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
