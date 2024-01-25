//建議把外部的元件或方法寫在最前面
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { CartContext,cartReducer,cartInit } from "./store";
import { useReducer } from "react";
function App() {
  //callbackfunction,預設狀態
  const reducer = useReducer(cartReducer,cartInit);
  return (
    // <div className="App">
    <CartContext.Provider value={reducer}>
      <Navbar></Navbar>
      <div className="container mt-4">
        {/*外層格線*/}
        <div className="row">
          <div className="col-md-7">
            <Products></Products>
          </div>
          <div className="col-md-5">
            <Cart></Cart>
          </div>
        </div>
      </div>
    </CartContext.Provider>
  );
}

export default App;


