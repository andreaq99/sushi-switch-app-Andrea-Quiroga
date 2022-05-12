import './App.css';

//import components
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart';
import { CartContextProvider } from './components/store/CartContext';
 
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <CartContextProvider>
        <NavBar/>
            <Routes>
                <Route path='/' element={<ItemListContainer/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/category/:categoryid' element={<ItemListContainer/>}/>
                <Route path='/product' element={<ItemListContainer/>}/>
                <Route path='/product/:itemid' element={<ItemDetailContainer/>}/>
            </Routes>
      </CartContextProvider>
        
    </BrowserRouter>
    
    </div>
  );
}

export default App;
