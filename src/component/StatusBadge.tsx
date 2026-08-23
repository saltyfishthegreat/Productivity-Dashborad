export default function StatusBadge({ status }: { status: string }) {
    let badgeColor = "";
    return (
        <div className = "flex flex-row items-center justify-center ml-auto gap-2 border-2 border-gray-300 rounded-lg shadow-md p-2">
                         <input type='checkbox'></input>
                         <a>{status}</a>
        </div>
    )
}