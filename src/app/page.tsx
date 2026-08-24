import TaskCard from "../component/TaskCard";

export default function Home() {

  function list(task: string) {
    return (
      
        <li className="">
          <span className="text-black bg-white font-bold py-2 px-4 rounded">
            {task}
          </span>
        </li>
    )
  }
  
  return (
    <>
      <ul className="list-none flex flex-row gap-2 w-4/5 h-1/6">
        {list("Task")}
        {list("Assignee")} 
        {list("Due Date")}
        <li className = "ml-auto">
          <a className="text-black bg-white font-bold py-2 px-4 rounded ">
            Status
          </a>
        </li>
      </ul>
      <div>
        <TaskCard />
      </div>
    </>
  )
}