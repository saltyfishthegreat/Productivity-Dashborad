const mainFunction = ['Add Task', 'View Tasks', 'Settings']

export default function Sider(){
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                {mainFunction.map(item => 
                    <div className="w-4/5 mr-auto mb-2">
                        <a href="/" className="text-black bg-white py-2 px-2 rounded">
                            {item}
                        </a>
                    </div>
                )}
            </div>
        </>
    )
}