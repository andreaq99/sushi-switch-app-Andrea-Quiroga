import './App.css';

//import components
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
      
    <NavBar/>
    <ItemListContainer greeting='Products' />
    
    <hr/>
    <ItemCount stock={10} initial={1}/>
    <ItemCount stock={20} initial={2}/>
    <ItemCount stock={0} initial={0}/>
    <hr/>
    <ItemListContainer greeting='Related products' />
    <ItemListContainer greeting='Sale' />
    </div>
  );
}

export default App;
