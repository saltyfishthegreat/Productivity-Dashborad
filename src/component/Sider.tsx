const mainFunction = ['Add Task', 'Tasks','Note', 'Settings']
const route = ['addTask', 'tasks','note', 'settings']
export default function Sider(){
    return (
        <>
            <div className="flex flex-col justify-center items-center gap-2 w-full h-screen  bg-gray-200">
                {mainFunction.map(item => 
                    <div key={item} className="flex items-center justify-center w-4/5 mb-2 bg-white border-2 border-gray-300 rounded-lg shadow-md p-2">
                        <a href={`/${route[mainFunction.indexOf(item)]}`} className="text-center text-black font-bold py-2 px-4 rounded">
                            {item}
                        </a>
                    </div>
                )}
            </div>
        </>
    )
}