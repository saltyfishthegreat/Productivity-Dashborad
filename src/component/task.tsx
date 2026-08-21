export default function task(){
    return (
        <div className = "flex flex-row items-center justify-center w-4/5 h-1/6 gap-2 border-2 border-gray-300 rounded-lg shadow-md p-2">
            <img></img>
            <a>吃饭</a>
            <div className = "flex flex-row items-center justify-center h-7/8 gap-2 border-2 border-gray-300 rounded-lg shadow-md p-2">
                <input type='checkbox'></input>
                <a>in progress</a>
            </div>
        </div>
    )
}