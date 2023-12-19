import React, { useState } from 'react'
import NoteDetailScreen from './NoteDetailScreen';

export default function Notes(props) {
    const [isMain, setIsMain] = useState(false);
    const [showData, setShowData] = useState({});
    function newBtnHandler() {
        props.setNewNote(false);
    }

    function formatDateTime(date) {
        const options = {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
        };
        const timeString = date.toLocaleTimeString('en-US', options);
        const dateString = `${date.getDate()} ${date.toLocaleString('en-US', { month: 'short' })}`;
        return `${timeString}   ${dateString}`;
    }

    function truncateWithEllipsis(text, maxWords) {
        const words = text.split(' ');

        if (words.length > maxWords) {
            const truncatedText = words.slice(0, maxWords).join(' ') + ' ...';
            return truncatedText;
        }

        return text;
    }

    const noteHandler = (index) => {
        setIsMain(true);
        setShowData(props.notes[index]);
    }

    return (
        <div className='NotesScreen'>
            {!isMain ? (
                <>
                    <div className='NotesScreen-heading'>
                        <h1 className='notes'>Notes</h1>
                        <button className='new-btn' onClick={newBtnHandler}>+ New</button>
                    </div>
                    {props.notes.map((items, index) =>
                        <div className='notes-block' onClick={() => noteHandler(index)} key={index}>
                            <div className='card-item'>
                                <h4 className='note-heading'>{truncateWithEllipsis(items.title, 10)}</h4>
                                <p className='note-para'>{truncateWithEllipsis(items.typing, 15)}</p>
                                <p className='note-dateTime'>{formatDateTime(items.date)}</p>
                            </div>
                        </div>
                    )}
                </>
            ) : (
                <NoteDetailScreen showData={showData} setNewNote={props.setNewNote} newNote={props.newNote}  />
            )}
        </div>
    )
}
