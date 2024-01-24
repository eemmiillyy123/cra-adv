//建議把外部的元件或方法寫在最前面
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { CartContext } from "./store";
import { useReducer } from "react";
function App() {
  //callbackfunction,預設狀態
  const cartReducer = useReducer((state, action) => {
    const cartList=[...state.cartList];
    //#1.先取得當前購物車目標品項的索引 沒有就會得到-1
    const index=cartList.findIndex((item)=>item.id===action.payload.id);
    console.log(index);
    console.log(action);
    switch (action.type) {
      case 'ADD_TO_CART':
        if(index===-1){
          //還未加入到購物車內
          cartList.push(action.payload);  
        }else{
          //當前購物車的項目與加入的項目一致
          cartList[index].quantity+=action.payload.quantity;
        }
        
        return {
          ...state,
          cartList,
        }
      default:
        return state;
    }
  }, {
    cartList: [],
  });
  return (
    // <div className="App">
    <CartContext.Provider value={cartReducer}>
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
