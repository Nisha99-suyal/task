import React, { useState } from 'react';
import Icons from './Icons';
import { FaArrowLeftLong } from "react-icons/fa6";

export default function NewNoteScreen(props) {

    const [saveData, setSaveData] = useState({});
    const [typing, setTyping] = useState('');
    const [title, setTitle] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [fileType, setFileType] = useState(null);
    const handleFileSelect = (file, type) => {
        setSelectedFile(file);
        setFileType(type);
    };
    function saveBtnHandler(e) {
        var obj = {
            title: title,
            typing: typing,
            renderMedia:renderMedia(selectedFile, fileType),
        }
        setSaveData(obj);
        var p = { ...obj, date: new Date() }
        props.setNotes((prev) => [...prev, p]);
        props.setNewNote(true);
    }

   
    const renderMedia = (file, type) => {
        if (!file) return null;
        switch (type) {
            case 'image':
                return <img src={URL.createObjectURL(file)} alt='Selected File' style={{ maxWidth: '100%' }} />;
            case 'video':
                return <video controls width='300' src={URL.createObjectURL(file)} />;
            case 'audio':
                return <audio controls src={URL.createObjectURL(file)} />;
            default: return null;
        }
    };
    return (
        <div className='newNote-section'>
            <div className='newNote-top'>
                <div className='back-icon' onClick={() => props.setNewNote(true)}>
                    <FaArrowLeftLong />
                </div>
                <button className='save-btn' onClick={saveBtnHandler}>Save</button>
            </div>
            <div className='note-section'>
                <input className='noteTitle' name='title' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title' />
                <textarea rows="4" cols="100" className='startTyping-section' name='typing' value={typing} onChange={(e) => setTyping(e.target.value)} placeholder='Start Typing...' />
            </div>
            <div className='selected-file'>
                {renderMedia(selectedFile, fileType)}
            </div>

            <div className='icons'>
                <Icons onFileSelect={handleFileSelect} />
            </div>
        </div>
    )
}