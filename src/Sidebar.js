
import Groups from './Groups';
// import createNotes from './createNotes';
import CreateGroup from './CreateGroup'

import './Sidebar.css'



function Sidebar(){
    function createGroup(){
         
    }
    return(
        <div className='Sidebar'>
            <div className='logo'>Pocket Notes</div>
            <div><button id='create' onClick={createGroup}>+ Create Notes group</button></div>
            <div className='Groups'>
                <Groups id="1001" title={'Cuvette Notes'}/>
                <Groups id="1002" title={'My personal grp'}/>
                <Groups id="1003" title={'Javascript grp'}/>
                <Groups id="1004" title={'HTML grp'}/>
                <Groups id="1004" title={'CSS Notes'}/>
                <Groups id="1005" title={'SQL Notes'}/>
                <Groups id="1006" title={'Python Notes'}/>
            </div>
        </div>
    )
}
export default Sidebar


