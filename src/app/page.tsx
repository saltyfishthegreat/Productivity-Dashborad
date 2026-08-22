import TaskCard from "../component/TaskCard";

export default function Home() {

  function list(task: string) {
    return (
      
        <li className="">
          <a href="/" className="text-black bg-white font-bold py-2 px-4 rounded">
            {task}
          </a>
        </li>
    )
  }
  return (
    <>
      <ul className="list-none flex flex-row gap-2">
        {list("Task")}
        {list("Assignee")}
      </ul>
      <div>
        <TaskCard />
      </div>
    </>
  )
}