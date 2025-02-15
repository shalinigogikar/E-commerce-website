import React,{createContext,useState} from "react";
export const CartContext=createContext();
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
const addToCart=(product)=>{
    setCart((prev)=>{
        const existItemIndex=prev.findIndex((item)=>item.title===product.title);
        if(existItemIndex!==-1){
            const updatedItem=[...prev];
            updatedItem[existItemIndex].quantity+=1;
            return updatedItem;}
            else{
               return[...prev,{...product,quantity:1}];
}
    });
}
const removeFromCart = (title) => {
    setCart((prevCart) => prevCart
      .map((item) =>
        item.title === title ? { ...item, quantity: item.quantity - 1 } : item)
       .filter((item) => item.quantity>0));
  };
return(
    <CartContext.Provider value={{cart,addToCart,removeFromCart}}>
        {children}
    </CartContext.Provider>
);
};
export default CartProvider;
