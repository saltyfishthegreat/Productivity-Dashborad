export default function taskslayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col h-[80vh] bg-gray-100 border-2 border-gray-300 rounded-lg shadow-md p-4">
            {children}
        </div>
    )
}
