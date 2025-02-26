import React,{createContext,useState,useEffect,useContext} from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext"; 
export const CartContext=createContext();
const crud_crud_url="https://crudcrud.com/api/8ba9f2f2a136489986387abf6981768b";
const CartProvider=({children})=>{
const [cart,setCart]=useState([
    {
        title: "Colors",
        price: 100,
        imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
        quantity: 2,
      },
      {
        title: "Black and white Colors",
        price: 50,
        imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
        quantity: 3,
      },
      {
        title: "Yellow and Black Colors",
        price: 70,
        imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
        quantity: 1,
      },
]);
const { user } = useContext(AuthContext);
useEffect(() => {
  if (user) {
    fetchCartItems();
  }
}, [user]);
const fetchCartItems = async () => {
  if (!user) return;

  try {
    const response = await axios.get(`${crud_crud_url}/cart${user.email}`);
    setCart(response.data); 
  } catch (error) {
    console.error("Error fetching cart items:", error);
  }
};
const addToCart=async (product) => {
  if (!user) {
    console.error("User not logged in");
    return;
  }

  try {
    const response = await axios.post(`${crud_crud_url}/cart${user.email}`, product);
    setCart([...cart, response.data]); // Update local state
  } catch (error) {
    console.error("Error adding to cart:", error);
  }
};
const removeFromCart = async (id) => {
  if (!user) return;

  try {
    await axios.delete(`${crud_crud_url}/cart${user.email}/${id}`);
    setCart(cart.filter((item) => item._id !== id));
  } catch (error) {
    console.error("Error removing from cart:", error);
  }
};

return(
    <CartContext.Provider value={{cart,addToCart,removeFromCart,fetchCartItems}}>
        {children}
    </CartContext.Provider>
);
};
export default CartProvider;
