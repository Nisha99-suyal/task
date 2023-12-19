import React, { useState } from 'react';

export default function NewNoteScreen() {

    const [title,setTitle] = useState('');
    const [typing,setTyping] = useState('');
    const [saveData,setSaveData]=useState({
        title:'',
        typing:''
    });

    function saveBtnHandler(e){
        console.log(title+"       "+typing)
        setSaveData((prevStoredValues)=>[
            ...prevStoredValues,
            {
                title:saveData.title,
                typing:saveData.typing
            },
        ])
        setTitle('');
        console.log("save:    "+ saveData)
    }
    return (
        <div>
            <div className='newNote-top'>
                <div>
                    
                </div>
                <button className='save-btn' onClick={saveBtnHandler}>Save</button>
            </div>
            <div className='note-section'>
                <input className='noteTitle' placeholder='Title' onChange={(e)=>setTitle(e.target.value)} name='title' value={title} />
                <input className='startTyping-section' placeholder='Start Typing...' onChange={(e)=>setTyping(e.target.value)} name='typing' value={typing} />
            </div>
        </div>
    )
}
