import React from "react";
import {Button} from "react-bootstrap";
import { Container,Navbar,Nav } from "react-bootstrap";
import ProductList from "./components/ProductList";
import classes from "./components/Style.module.css";
import Footer from "./components/Footer";
function App() {
  return (
    <>
    <Navbar bg="dark" variant="dark" expand="md">
      <Container>
      <Nav>
      <Nav.Link href="#">Home</Nav.Link>
      <Nav.Link href="#">Store</Nav.Link>
      <Nav.Link href="#">About</Nav.Link>
      </Nav>
      <Button>Cart</Button>
      </Container>
    </Navbar>
    <header className={classes.header}>The Generics</header>
    <ProductList/>
    <Footer/>
  </>
  );
}

export default App;
