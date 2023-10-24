import './App.css';
import { Routes, Route } from "react-router-dom";
import NAVBAR from './components/Navbar';
import { SHOP } from './pages/shop/shop';
import { CART } from './pages/cart/cart';
import { ShopContextProvider } from './context/shop-context';


function App() {
  return (
    <div className="App">

      <ShopContextProvider>
        <NAVBAR/>

      <Routes>
          <Route exact path="/" element={<SHOP/>}/>
          <Route path="/Cart" element={<CART/>}/>
      </Routes>
      </ShopContextProvider>

    </div>
  );
}

export default App;
