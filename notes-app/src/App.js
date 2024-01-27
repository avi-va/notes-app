import './App.css';
import Homepage from './Homepage';
import Notepage from './Notepage';
import Sidebar from './Sidebar'; 
import CreateGroup from './CreateGroup';


function App() {
  return (
    <div className="App">
      <Sidebar className="Sidebar"/>
      {/* <Homepage className="Homepage"/> */}
      <Notepage className="notepad"/>
      {/* <CreateGroup/> */}
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
  </header>*/}
    </div>
  );
}

export default App;
