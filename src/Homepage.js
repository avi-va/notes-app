import logo from  './image-removebg-preview 1.png';
import './Homepage.css'
import lock from './lock.png'

function Homepage(){
    return(
        <div className="Main-wrapper">
        
            <div className="Main">
            
                <img src={logo} className="Main-img" alt=''/>
                <h1>Pocket Notes</h1>
                <p className="main-text">
                    Send and receive messages without keeping your phone online.<br/> 
                    Use Pocket Notes on up to 4 linked devices and 1 mobile phone
                </p>
            </div>
            <div className="bottom-text">
                <p >
                    <img src={lock}/> end-to-end encrypted
                </p>
            </div>
                
        </div>
    );
}

export default Homepage;