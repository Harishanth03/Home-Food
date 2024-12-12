import axios from "axios";
import { createContext,  useEffect,  useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [cartItem , storecartItem] = useState({});

    const urlLocal = "http://localhost:4000";

    const [token , setToken] = useState("");

    const [food_list , setFoodList] = useState([]);



    const addToCart = async itemId => 
    {
        if(!cartItem[itemId])
        {
            storecartItem((prev) => ({...prev, [itemId]:1})) //this function return an object
        }
        else
        {
            storecartItem((prev) => ({...prev,[itemId]:prev[itemId] + 1})) // get the all data using spread operator and select the prev quantity using Id and add + 1 to the cart
        }

        if(token)
        {
            await axios.post(urlLocal + "/api/cart/add" , {itemId} , {headers:{token}});
        }
    }

    const removeFromCart = async (itemId) =>
    {
        storecartItem(prev => ({...prev , [itemId]:prev[itemId] - 1}))

        if(token)
        {
            await axios.post(urlLocal + "/api/cart/remove" , {itemId} , {headers:{tok}})
        }
    }

    //==================================================================================================================================

    const getTotalCartAmount = () => {

        let totalAmount = 0;

        for(const item in cartItem)
        {
            if(cartItem[item] > 0)
            {
                let itemInfo = food_list.find((product) => product._id === item);

                totalAmount += itemInfo.price * cartItem[item];
            }
            
        }

        return totalAmount;
    }

    const fetchFoodList = async() => {

        const response = await axios.get(urlLocal + '/api/food/list');

        setFoodList(response.data.data);
    }

    const loadcartData = async(token) => {

        const response = await axios.post(urlLocal + "/api/cart/get" , {} , {headers:{token}});
        storecartItem(response.data.cartData);
    }
    
    useEffect(() => {

        async function loadData() {

            await fetchFoodList();

            if(localStorage.getItem("token"))
            {
                setToken(localStorage.getItem("token"));
                await loadcartData(localStorage.getItem("token"));
            }
        }

        loadData();

    }, []);

    


    const contextValue = {

        food_list,
        cartItem,
        storecartItem,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        urlLocal,
        token,
        setToken
        
    }
    return (

        <StoreContext.Provider value={contextValue}>

            {props.children}

        </StoreContext.Provider>

    )

}

export default StoreContextProvider