import Task from "../component/task"

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
      <div>
        <h1>
            Productivity Dashboard
        </h1>
      </div>
      <ul className="list-none flex flex-row gap-2">
        {list("Task")}
        {list("Assignee")}
      </ul>
      <div className="flex flex-col items-center justify-center h-[80vh] bg-gray-100">
        <h1> TEST</h1>
      </div>
      <div>
        <Task />
      </div>
    </>
  )
}