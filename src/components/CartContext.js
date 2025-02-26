import React,{createContext,useState,useEffect,useContext} from "react";

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
const sanitizeEmail = (email) => email.replace(/[@.]/g, "_");
useEffect(() => {
  if (user) {
    fetchCartItems();
  }
}, [user]);
const fetchCartItems = async () => {
  if (!user) return;

  try {
    const sanitizedEmail=sanitizeEmail(user.email);
    const response = await fetch(`${crud_crud_url}/cart${sanitizedEmail}`);
    if (!response.ok) throw new Error("Failed to fetch cart items");

      const data = await response.json();
    setCart(data); 
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
    const sanitizedEmail=sanitizeEmail(user.email);
    const existingItem = cart.find((item) => item.title === product.title);
      
    if (existingItem) {
      const updatedItem = { 
        title: existingItem.title,
        price: existingItem.price,
        imageUrl: existingItem.imageUrl, 
        quantity: existingItem.quantity + 1 };
      
    const response = await fetch(`${crud_crud_url}/cart${sanitizedEmail}/${existingItem._id}`,{
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedItem),
    });
    if (!response.ok) throw new Error("Failed to update item to cart");
    //setCart((prevCart) => prevCart.map((item) => (item._id === existingItem._id ?{...updatedItem,_id:existingItem._id} : item)));
    fetchCartItems();
      } else {
        const response = await fetch(`${crud_crud_url}/cart${sanitizedEmail}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...product, quantity: 1 }),
        });
        if (!response.ok) throw new Error("Failed to add item to cart");
      const newProduct = await response.json();
    setCart((prevCart) => [...prevCart, newProduct]); // Update local state
  } 
}catch (error) {
    console.error("Error adding to cart:", error);
  }
};
const removeFromCart = async (id) => {
  if (!user) return;

  try {
    const sanitizedEmail = sanitizeEmail(user.email);
   const response= await fetch(`${crud_crud_url}/cart${sanitizedEmail}/${id}`,{
    method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to remove item from cart");
    setCart((prevCart) => prevCart.filter((item) => item._id !== id));
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
