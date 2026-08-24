export default function StatusBadge({ status }: { status: string }) {
    let badgeColor = "";
    let badgeBorderColor = "";

    if (status ==="in progress"){
        badgeColor = "bg-yellow-500"
        badgeBorderColor = "border-yellow-300"
    }else if(status === "completed"){
        badgeColor = "bg-green-500"
        badgeBorderColor = "border-green-300"
    }else if(status === "not started"){
        badgeColor = "bg-red-500"
        badgeBorderColor = "border-red-300"
    }

    return (
        <div className = "flex flex-row items-center justify-center ml-auto gap-2 border-2 border-gray-300 rounded-lg shadow-md p-2">
                         <div className={`w-3 h-3 rounded-full ${badgeColor} border ${badgeBorderColor}`}></div>
                         <span>{status}</span>
        </div>
    )
}