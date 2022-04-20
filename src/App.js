import './App.css';

//import components
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      
    <NavBar/>
    <ItemListContainer greeting='Products' />
    <ItemListContainer greeting='Related products' />
    <ItemListContainer greeting='Sale' />
    </div>
  );
}

export default App;
