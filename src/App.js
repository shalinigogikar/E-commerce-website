import React,{useContext, useState,lazy,Suspense}from "react";
import {BrowserRouter ,Routes,  Route,Navigate,  Link,useLocation ,useNavigate} from "react-router-dom";
import {Button} from "react-bootstrap";
import { Container,Navbar,Nav } from "react-bootstrap";
import classes from "./components/Style.module.css";
import  { CartContext } from "./components/CartContext";
import { AuthContext } from "./components/AuthContext";
const ProductList=lazy(() =>import("./components/ProductList"));
const Footer =lazy(()=>import("./components/Footer"));
const Cart=lazy(()=>import("./components/Cart"));
const About =lazy(()=>import("./components/About"));
const Home=lazy(()=>import("./components/Home"));
const ContactUs=lazy(()=>import("./components/ContactUs"));
const ProductPage=lazy(()=>import("./components/ProductPage"));
const Login =lazy(()=>import("./components/Login"));
function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MainContent />
      </Suspense>
  );
}

function MainContent() {
  const [showCart, setShowCart] = useState(false);
  const {cart}=useContext(CartContext);
  const location=useLocation();
  const navigate = useNavigate();
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
              <Button variant="outline-light" onClick={() => { logout(); navigate("/"); }}>Logout</Button>
            )}
      </Nav>
      <Button onClick={() => setShowCart(true)}>Cart{cart.length}</Button>
      </Container>
    </Navbar>
    {showCart&&(
     <Suspense fallback={<div>Loading Cart...</div>}>
     <Cart show={showCart} handleClose={() => setShowCart(false)} />
      </Suspense>)}
    <header className={classes.header}>
      <h1>The Generics</h1>
      {location.pathname==="/"&&<div>
      <h1 className={classes.heading}>Get our Latest Album</h1><br/>
            <Button className={classes.playButton} variant="dark">►</Button>
            </div>}</header>
            <Container>
            <Suspense fallback={<div>Loading Cart...</div>}>
    <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/store" element={user ? <ProductList /> : <Navigate to="/login" replace />} />
          <Route path="/about" element={<About/>} /> 
          <Route path="/contact" element={<ContactUs/>}/>
          <Route path="/product/:id" element={user ? <ProductPage /> : <Navigate to="/login" replace />} />
          <Route path="/login" element={<Login/>} />
        </Routes>
        </Suspense>
        </Container>
    {/*<ProductList/> we have moved it to store*/}
    <Suspense fallback={<div>Loading Cart...</div>}>
    <Footer/>
    </Suspense>
  </>
  );
}
export default App;
