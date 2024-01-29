import './CreateGroup.css'
import {useRef} from 'react'

function CreateGroup(){

    let inputRef = useRef(null);

    function handleSubmit() {

    }
    return(
        <div className='newGroup'>
                <p>Create New Notes group</p>
                <label>Group Name</label>
                <input placeholder='Enter your group name...'
                 ref={inputRef}
                 type="text"
                />
                
                <div className='chooseColour'>
                    <div><label>Choose colour</label></div>
                    <div className='colours'>
                        <input type='color' name='note_color' value='#B38BFA' style={{backgroundColor:'#B38BFA'}}></input>
                        <input type='color' name='note_color' value='#FF79F2' style={{backgroundColor:'#FF79F2'}}/>
                        <input type='color' name='note_color' value='#43E6FC' style={{backgroundColor:'#43E6FC'}}/>
                        <input type='color' name='note_color' value='#F19576' style={{backgroundColor:'#F19576'}}/>
                        <input type='color' name='note_color' value='#0047FF' style={{backgroundColor:'#0047FF'}}/>
                        <input type='color' name='note_color' value='#6691FF' style={{backgroundColor:'#6691FF'}}/>
                    </div>
                </div>
                <button className='createButton' onClick={handleSubmit}>Create</button>
            </div>
    )
}
export default CreateGroup;