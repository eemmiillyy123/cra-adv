import { useContext } from "react";
import productsData from "../assests/productsData";
import { CartContext } from "../store";

export default function Products(){
    //把兩個方法取出  按鈕會觸發dispatch並觸發cartReducer裡面的內容
    const [state,dispatch]=useContext(CartContext);
    return (<div className="row row-cols-3 g-3">
        {productsData.map((product)=>{
            return (<div className="col" key={product.id}>
            <div className="card" >
              <img src={product.img} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h6 className="card-title">{product.title}
                  <span className="float-end">NT$ {product.price}</span>
                </h6>
                <button  className="btn btn-outline-primary w-100" type="button"
                onClick={()=>{
                  //加入action裡面的參數
                  dispatch({
                    type:"ADD_TO_CART",
                    payload:{
                      ...product,
                      quantity:1
                    }
                  });
                }}>購物車</button>
              </div>
            </div>
          </div>);
        })}
  </div>);
}