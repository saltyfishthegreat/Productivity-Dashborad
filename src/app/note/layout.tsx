export default function NoteLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col w-full h-full bg-gray-100 ">
            <h1 className="text-lg font-bold">Note</h1>
            <div>
                {children}
            </div>
        </div>
    )
}