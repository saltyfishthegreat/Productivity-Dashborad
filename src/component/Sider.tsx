const mainFunction = ['Add Task', 'View Tasks', 'Settings']

export default function Sider(){
    return (
        <>
            <div className="flex flex-col justify-center items-center gap-2 w-full h-screen  bg-gray-200">
                {mainFunction.map(item => 
                    <div key={item} className="flex items-center justify-center w-4/5 mb-2 bg-white border-2 border-gray-300 rounded-lg shadow-md p-2">
                        <span className="text-center text-black font-bold py-2 px-4 rounded">
                            {item}
                        </span>
                    </div>
                )}
            </div>
        </>
    )
}