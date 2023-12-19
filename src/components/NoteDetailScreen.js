import React,{useState} from 'react'
import Icons from './Icons';
import { RiDeleteBinLine } from "react-icons/ri";

export default function NoteDetailScreen(props) {
    const [typing, setTyping] = useState('');
    const [typingData, setTypingData] = useState(props.showData.typing)
    const [deleteMedia,setDeleteMedia]=useState(props.showData.renderMedia)
    function saveBtnHandler(e) {
        setTypingData((prev)=> prev+typing);
    }
    function deleteHandler(){
        setDeleteMedia(null)
    }
    return (
        <div className='noteDetailed-section'>
            <div className='noteDetail-top'>
                <button className='save-btn' onClick={saveBtnHandler}>Save</button>
            </div>
            <h4 className='noteDetail-heading'>{props.showData.title}</h4>
            <p className='noteDetail-para'>
                {typingData}
            </p>
            <div className='file-section'>
                {deleteMedia}
                <button className='delete-btn' onClick={deleteHandler}><RiDeleteBinLine /></button>
              <div className='detail-icons'>
                <Icons />
              </div>
            </div>
            <div className='edit'>
                <input className='startTyping-section' name='typing' value={typing} onChange={(e) => setTyping(e.target.value)} placeholder='Start Typing...' />
            </div>
        </div>
    )
}
