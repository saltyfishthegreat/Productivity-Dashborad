'use client'
import {useState} from 'react'        

import AddTask from './AddTask/page'
import taskListData from "@/src/data/taskList.json";
import type { Task } from '@/src/types/types';
import TaskWorkSpace from '@/src/component/TaskWorkSpace';
import TaskForm from '@/src/component/TaskForm';

export default function taskslayout() {
    const initalTaskList = taskListData as Task[];
    const [tasks, setTasks] = useState<Task[]>(initalTaskList);
    const [addTask,isAdding] = useState(false); 
    return (
        <>
        <div className="flex f
        lex-row gap-2 w-full ml-3 pl-7">
            <p>Task</p>
            <p>Assignee</p>
            <p>Due Date</p>
            <p>Status</p>
        </div>
        <div> 
            <TaskWorkSpace taskList={tasks}/>
        </div>
        <div>
            <button 
              onClick={() => isAdding(!addTask)}
              className="flex justify-center w-1/5 border-grey-300 border-2 rounded-lg" onClick={() => setAddTask(!addTask)}>
                Add Task
            </button>
        </div>
        <TaskForm isAdding = {isAdding}/>
        </>
    ) 
}
