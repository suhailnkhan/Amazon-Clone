export const  initialState = {


    basket : [{
id :'2',
title :"Introducing Echo Show 8 – Smart display with Alexa - 8 HD screen with stereo sound Black ",
price: "6700",
image:"https://images-eu.ssl-images-amazon.com/images/I/41-qa+YzqwL._AC_US218_FMwebp_QL70_.jpg",
rating:'4',
}],
}

const reducer = ( state , action) =>{
    console.log(action);
    console.log(state);

switch (action.type){
case 'ADD_TO_BASKET':
    return {
        ...state,
        basket : [...state.basket , action.item]
    }
    break;
    case "REMOVE_FROM_BASKET":
       console.log(state.basket);
       let newBAsket = [...state.basket];
       const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)
            console.log(index);

       if (index >= 0){
          //item exist , remove
          newBAsket.splice(index, 1)
         
       }else{
           console.warn('cont remove')
       }
        return {...state ,
             basket : newBAsket };
        break;
default:
    return state;
}
}

export default reducer