'use client'

export default function App() {
    return (
        <>
        <div>
            <button className="flex justify-center w-1/5 border-grey-300 border-2 rounded-lg" onClick={() => setAddTask(!addTask)}>
                Add Task
            </button>
        </div>
        {taskForm()}
        </>
    );
}


export function taskForm() {
    return(
        <form 
            id = 'taskForm'
            className='hidden fixed z-100 top-29 left-1/3 w-1/3  bg-white border-2 border-grey-300 rounded-lg  p-5'
        >
            <div>
                <input className='size-12 text-50px  w-1/2' placeholder='Title'></input>
            </div>
            <div className='w-4/5 h-1px border-1'></div>
                <div className='flex flex-col gap-4'>
                <div className='flex flex-row justify-between pt-2'>
                    <p className='text-sm '>Assignee</p>
                    <input></input>
                </div>
                <div className='flex flex-row justify-between'>
                    <p className='text-sm w-1/2 h-full ml-1 whitespace-nowrap'>Due Date</p>
                    <input className= 'w=1/2 h-full'></input>
                </div>
                <div className='flex flex-col justify-between'>
                    <p className='text-sm'>Description</p>
                    <input className='border-2 border-grey-300 rounded-lg border-b-2'></input>
                </div>
            </div>
            <div className='flex justify-center align-center pt-5  '>
                <button type='submit' className='border-1 bg-blue border-grey-300 rounded-sm'>Submit</button>
            </div>
        </form>
    )
}
