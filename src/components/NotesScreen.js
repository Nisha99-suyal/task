import React, { useState } from 'react'
import NewNoteScreen from './NewNoteScreen';
import Notes from './Notes';

export default function NotesScreen() {
    const [newNote, setNewNote] = useState(true);
    const [notes,setNotes]=useState([]);
    return (
        <div>
            {
                newNote ? 
                (<Notes setNewNote={setNewNote} notes={notes}/>) :
                (<NewNoteScreen setNotes={setNotes} setNewNote={setNewNote} />)
            }
        </div>
    )
}
