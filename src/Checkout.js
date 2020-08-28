import React from 'react';
import { useStateValue } from './StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
function Checkout() {
const [{basket}] = useStateValue()


    return (

        <div className="checkout">
            <div className="checkout__header">
<img className="checkout__ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/SingleTitle/BandishBandits/Launch/1500x600_Hero-Tall_p._CB407155763_.jpg" />

{basket?.length > 0 }{

<div className="checkout_right">
    
    <h1> subtotol</h1>
     </div>


}

        </div>

{basket?.length === 0 ? (
<div> 

<h2>Your shipping basket is empty</h2>

</div>



): (

<div> 
    
    <h2 className="checkout_title"> Your shopping basket</h2>
   { basket.map(item =>(
        <CheckoutProduct 
        title = {item.title}
        image = {item.image}
        id = {item.id}
        price = {item.price}
        rating = {item.rating}

    />
    )) }
    </div>
)}


    
    </div>
    );
    
}

export default Checkout
