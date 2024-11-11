import { createContext, useState } from "react";

import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [cartItem , storecartItem] = useState({});

    const addToCart = itemId => 
    {
        if(!cartItem[itemId])
        {
            storecartItem((prev) => ({...prev, [itemId]:1})) //this function return an object
        }
        else
        {
            storecartItem((prev) => ({...prev,[itemId]:prev[itemId] + 1})) // get the all data using spread operator and select the prev quantity using Id and add + 1 to the cart
        }
    }


    const contextValue = {

        food_list
        
    }
    return (

        <StoreContext.Provider value={contextValue}>

            {props.children}

        </StoreContext.Provider>

    )

}

export default StoreContextProvider