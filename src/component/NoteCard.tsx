import type {Note} from "../types/types";

export default function NoteCard({note }: { note: Note }) {
    return (
        <div className=" border-2 border-gray-300 rounded-lg shadow-md p-2 mb-2"> 
            <h2 className="text-lg font-bold">{note.title}</h2> 
             <p className="text-sm">{note.content}</p>
            <span className="text-xs text-gray-500">{note.updatedAt}</span>
        </div>
    )
}