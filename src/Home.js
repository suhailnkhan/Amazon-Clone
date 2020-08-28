import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
    return (
        <div className="home">
        <img className="home__img" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/CEPC/BestOfTech/August/GWR/R01_Bes_of-tech_Aug_1500x600._CB407852474_.jpg" />  
        

       {/* product title, price,rating,image  */}
<div className="home__row">

<Product
id="1"
title="Echo Dot (3rd Gen) – New and improved smart speaker with Alexa (Black)"
price={2500}
image="https://images-eu.ssl-images-amazon.com/images/I/41tEQogY3qL._AC_US218_FMwebp_QL70_.jpg"
rating={2}

/>  

<Product
id="2"
title="Introducing Echo Show 8 – Smart display with Alexa - 8 HD screen with stereo sound Black "
price={6700}
image="https://images-eu.ssl-images-amazon.com/images/I/41-qa+YzqwL._AC_US218_FMwebp_QL70_.jpg"
rating={4}

/> 
</div>

<div className="home__row">

<Product
id="3"
title="Echo Plus (2nd Gen) – Premium sound, powered by Dolby, built-in Smart Home hub (Black)"
price={8500}
image="https://images-eu.ssl-images-amazon.com/images/I/41OnyasYFEL._AC_US218_FMwebp_QL70_.jpg"
rating={5}

/>  

<Product
id="4"
title="Echo Dot (3rd Gen) – New and improved smart speaker with Alexa (Black)"
price={2500}
image="https://images-eu.ssl-images-amazon.com/images/I/41tEQogY3qL._AC_US218_FMwebp_QL70_.jpg"
rating={2}

/> 
<Product
id="5"
title="Echo Dot (3rd Gen) – New and improved smart speaker with Alexa (Black)"
price={2500}
image="https://images-eu.ssl-images-amazon.com/images/I/41tEQogY3qL._AC_US218_FMwebp_QL70_.jpg"
rating={2}

/> 



</div>
<div className="home__row">
<Product
id="6"
title="Lenovo Legion Y540 9th Gen Intel Core i5 15.6 inch FHD Gaming Laptop (8GB/512GB SSD/NVIDIA GTX 1650 4GB Graphics/Windows 10/Black/2.3Kg),81SY00CKIN"
price={63000}
image="https://m.media-amazon.com/images/I/81pl1o7uQ3L._AC_UY218_.jpg"
rating={2}

/> 

    
</div>



        </div>
    )
}

export default Home
