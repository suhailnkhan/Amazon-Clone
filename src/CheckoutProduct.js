import React from 'react'
import './CheckoutProduct.css';
import  {useStateValue} from "./StateProvider"
function CheckoutProduct({id,title,price,rating,image}) {
    
    const [{basket} , dispatch] = useStateValue();
    
    const removeFromBasket = () => {
   dispatch ({
type: "REMOVE_FROM_BASKET"

   })       

    }
    
    return (
        <div className="checkoutProduct">
              <img className="checkoutproduct__img" src={image} alt ="" />
              <div className="checkoutProduct__info">
                  <p className="checkout_title">{title}</p>
                  <p className="checkoutProducts_title">
                        <small>$</small>
                        <strong>{price}</strong>
                  </p>

                  <div className="checkoutproduct__rating">
                {
                    Array(rating).fill().map((_,i) =>(
                                <p>⭐</p>

                    ))
                }
               </div>

       <button onClick={removeFromBasket}>Remove from basket</button>
              </div>




        </div>
    )
}

export default CheckoutProduct
