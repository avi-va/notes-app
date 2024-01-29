import './Notepage.css';
import {useState, useRef, useEffect} from 'react'
import arrow from './arrow.png';

let id = 0;
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

function Notepage(){

    let inputRef = useRef(null);

    let [notes, setNotes] = useState([]);
    
    const addNotesEnter = event =>{
        if(event.key === 'Enter' && event.target.value !== ""){
            addNotes();
        }
    }
    function getDateTime(){
        const today = new Date();
        const month = months[today.getMonth()];
        const year = today.getFullYear();
        const day = today.getDate();
        const currDate = day+" "+month+" "+year;

        const hrs = today.getHours();
        let showTime = ''
        if( hrs < 12){
            showTime = today.getHours() + ':' + today.getMinutes() +' Am'
        }
        else if( hrs === 12){
            showTime = today.getHours() + ':' + today.getMinutes() +' Pm'
        }
        else{
            showTime = (today.getHours() - 12) + ':' + today.getMinutes() +' Pm'
        }

        return [showTime, currDate]
    }

    function addNotes(){

        let [showTime, currDate] = getDateTime();

        if(inputRef.current.value !== ""){
            setNotes([...notes, 
                {id: ++id, text: inputRef.current.value, date: currDate, time: showTime}
                ]);
            console.log("Note meta "+showTime+" "+currDate);
            inputRef.current.value="";
            
        }
    }
    
    return(
        <div className="notepad">
                <div className="main">
                    {notes.map(note =>(
                        <div className="note_element" key={note.id}>
                            <div className='note_metadata'>
                                <div>{note.time}</div>
                                {<div>{note.date}</div>}
                            </div>
                            <div className="note_text">{note.text}</div>
                        </div> 
                    ))
                    
                    }
                </div>
            
            <div className="input-wrapper">
                <textarea 
                ref={inputRef}
                className="input" 
                placeholder="Enter your text here......" 
                type="text"
                onKeyDown={addNotesEnter}
                />
                <button className="submit-button" 
                onClick={addNotes}
                >
                    <img alt="send arrow"src={arrow}/>
                </button>
            </div>
        </div>    
    );
    
}
export default Notepage;
