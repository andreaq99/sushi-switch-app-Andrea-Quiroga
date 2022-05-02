import './App.css';

//import components
import NavBar from './components/NavBar/NavBar';
//import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      
    <NavBar/>
    {/*<ItemListContainer greeting='Products' />*/}
    <ItemDetailContainer/>
    </div>
  );
}

export default App;
