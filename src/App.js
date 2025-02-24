import React,{useContext, useState}from "react";
import {BrowserRouter,  Route, Switch, Link,useLocation ,useHistory} from "react-router-dom";
import {Button} from "react-bootstrap";
import { Container,Navbar,Nav } from "react-bootstrap";
import ProductList from "./components/ProductList";
import classes from "./components/Style.module.css";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import  { CartContext } from "./components/CartContext";
import About from "./components/About";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import ProductPage from "./components/ProductPage";
import Login from "./components/Login";
import { AuthContext } from "./components/AuthContext";
function App() {
  return (
    <BrowserRouter>
      <MainContent />
    </BrowserRouter>
  );
}

function MainContent() {
  const [showCart, setShowCart] = useState(false);
  const {cart}=useContext(CartContext);
  const location=useLocation();
  const history = useHistory();
  const authContext = useContext(AuthContext);
  if (!authContext) {
    console.error("AuthContext is not available!");
    return null;
  }
  const {user,logout}=authContext;
  return (
    <>
    <Navbar bg="dark" variant="dark" expand="md">
      <Container>
      <Nav>
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/store">Store</Nav.Link>
      <Nav.Link as={Link} to="/about">About</Nav.Link>
      <Nav.Link as={Link} to="/contact">ContactUs</Nav.Link>
      {!user ? (
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
            ) : (
              <Button variant="outline-light" onClick={() => { logout(); history("/"); }}>Logout</Button>
            )}
      </Nav>
      <Button onClick={() => setShowCart(true)}>Cart{cart.length}</Button>
      </Container>
    </Navbar>
    {showCart&&<Cart show={showCart} handleClose={() => setShowCart(false)} />}
    <header className={classes.header}>
      <h1>The Generics</h1>
      {location.pathname==="/"&&<div>
      <h1 className={classes.heading}>Get our Latest Album</h1><br/>
            <Button className={classes.playButton} variant="dark">►</Button>
            </div>}</header>
            <Container>
    <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/store" component={ProductList} />
          <Route path="/about" component={About} /> 
          <Route path="/contact" component={ContactUs}/>
          <Route path="/product/:id" component={ProductPage} />
          <Route path="/login" component={Login} />
        </Switch></Container>
    {/*<ProductList/> we have moved it to store*/}
    
    <Footer/>
  </>
  );
}
export default App;
