import type{Note} from "../../types/types";
import NoteCard from "../../component/NoteCard";
import NoteInfo from "../../data/noteInfo.json";
const noteList = NoteInfo as Note[];
export default function NotePage() {
    return (
        <>
            { noteList.map((note: Note) =>
                <NoteCard key={note.title} note={note} />
             )} 
        </>
    )
}