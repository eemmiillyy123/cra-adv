import { createContext } from "react";
function calculateTotalPrice(cartList) {
    return cartList.map((item) => item.quantity * item.price)
      .reduce((a, b) => a + b, 0);
  }

export const cartInit= {
    cartList: [],
  }

export const cartReducer=(state, action) => {
    const cartList=[...state.cartList];
    //#1.先取得當前購物車目標品項的索引 沒有就會得到-1
    const index=cartList.findIndex((item)=>item.id===action.payload.id);
    // console.log(index);
    // console.log(action);
    switch (action.type) {
      case 'ADD_TO_CART':
        if(index===-1){
          //還未加入到購物車內
          cartList.push(action.payload);  
        }else{
          //當前購物車的項目與加入的項目一致
          cartList[index].quantity+=action.payload.quantity;
        }
        
        //陣列來計算各品項的總金額
        // const array=cartList.map((item)=>{
        //   return item.quantity*item.price;
        // });
        // console.log(array);
        // //reduce跑迴圈進行累加
        // const total=array.reduce((a,b)=>{
        //   return a+b;
        // },0)

        const total=cartList.map((item) => item.quantity * item.price)
            .reduce((a, b) => a + b, 0);

        //轉成函式
        // const total=calculateTotalPrice(cartList);


        return {
          ...state,
          cartList,
          total:calculateTotalPrice(cartList)
          // total
        }
      case 'CHANGE_CART_QUANTITY':
        cartList[index].quantity=action.payload.quantity;
        // const total=calculateTotalPrice(cartList);//同個作用域命名一樣會出錯
        return {
          ...state,
          cartList,
          total:calculateTotalPrice(cartList)
        }
      case 'REMOVE_CART_ITEM':
          cartList.splice(index,1);
          return {
            ...state,
            cartList,
            total:calculateTotalPrice(cartList)
          }
      default:
        return state;
    }
  }
export const CartContext=createContext({});