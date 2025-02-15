import React,{useContext, useState}from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import {Button} from "react-bootstrap";
import { Container,Navbar,Nav } from "react-bootstrap";
import ProductList from "./components/ProductList";
import classes from "./components/Style.module.css";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import  { CartContext } from "./components/CartContext";
import About from "./components/About";
import Home from "./components/Home";
function App() {
  const [showCart, setShowCart] = useState(false);
  const {cart}=useContext(CartContext);
  return (
    <>
    <Router>
    <Navbar bg="dark" variant="dark" expand="md">
      <Container>
      <Nav>
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/store">Store</Nav.Link>
      <Nav.Link as={Link} to="/about">About</Nav.Link>
      </Nav>
      <Button onClick={() => setShowCart(true)}>Cart{cart.length}</Button>
      </Container>
    </Navbar>
    {showCart&&<Cart show={showCart} handleClose={() => setShowCart(false)} />}
    <header className={classes.header}>The Generics</header>
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<ProductList />} />
          <Route path="/about" element={<About />} /> 
        </Routes>
    {/*<ProductList/> we have moved it to store*/}
    
    <Footer/>
    </Router>
  </>
  );
}

export default App;
