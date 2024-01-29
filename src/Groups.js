import React from 'react';
import './Groups.css';
function Groups(props){

    
    return(
        <div className='Group'>
            <div className='Circle'></div>
            <p>{props.title}</p> 
        </div>
    )
}
export default Groups
