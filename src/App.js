import logo from './logo.svg';
import './App.css';

//import components
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      
    <NavBar/>
      <header className="App-header">
        <h1>Welcome to Sushi Switch!!</h1>
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
      </header>
    </div>
  );
}

export default App;
