import React,{useContext, useState}from "react";
import {Button} from "react-bootstrap";
import { Container,Navbar,Nav } from "react-bootstrap";
import ProductList from "./components/ProductList";
import classes from "./components/Style.module.css";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import  { CartContext } from "./components/CartContext";
function App() {
  const [showCart, setShowCart] = useState(false);
  const {cart}=useContext(CartContext);
  return (
    <>
    <Navbar bg="dark" variant="dark" expand="md">
      <Container>
      <Nav>
      <Nav.Link href="#">Home</Nav.Link>
      <Nav.Link href="#">Store</Nav.Link>
      <Nav.Link href="#">About</Nav.Link>
      </Nav>
      <Button onClick={() => setShowCart(true)}>Cart{cart.length}</Button>
      </Container>
    </Navbar>
    <header className={classes.header}>The Generics</header>
    <ProductList/>
    <Cart show={showCart} handleClose={() => setShowCart(false)} />
    <Footer/>
  </>
  );
}

export default App;
