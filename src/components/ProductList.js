import React, { useContext } from "react";
import { Button, Row, Col, Container } from "react-bootstrap";
import classes from "./Style.module.css";
import { CartContext } from "./CartContext";
const productsArr = [
    {
      title: "Colors",
      price: 100,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      title: "Blue Color",
      price: 100,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];
  const ProductList = () => {
  const { addToCart }=useContext(CartContext);
    return (
      <Container className="mt-4">
        <h2 style={{textAlign:"center"}}>Colors</h2>
        <Row>
          {productsArr.map((product, index) => (
            <Col key={index} md={6} lg={6} className="mb-4">
              <div>
                <img src={product.imageUrl} alt={product.title} className="img-fluid mb-6" style={{ maxHeight: "300px",maxWidth:"200px" }}/>
                  <h4>{product.title}</h4>
                  <p>Price: ${product.price}</p>
                  <Button variant="primary" onClick={()=>addToCart(product)}>Add to Cart</Button>
                </div>
            </Col>
          ))}
        </Row>
      <Button className={classes.button}><h2>See the Cart</h2></Button>
      </Container>
    );
  };
  
  export default ProductList;
  