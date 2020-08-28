//set up the data layer

import React,  { createContext , useContext , useReducer} from "react";
//tracking the basket
//this is a data layer
export const StateContext = createContext();
// build a provider
// 
// 
export const StateProvider = ({reducer , initialState,children}) => (
<StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
</StateContext.Provider>
)
//this is how we use it inside of the component
export const useStateValue = () => useContext(StateContext)

