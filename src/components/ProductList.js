import React, { useContext } from "react";
import { Button, Row, Col, Container } from "react-bootstrap";
import {Link} from "react-router-dom";
import classes from "./Style.module.css";
import { CartContext } from "./CartContext";
import ProductData from "./ProductData";
  const ProductList = () => {
  const { addToCart }=useContext(CartContext);
    return (
      <Container className="mt-4">
        <h2 style={{textAlign:"center"}}>Colors</h2>
        <Row>
          {ProductData.map((product, index) => (
            <Col key={index} md={6} lg={6} className="mb-4">
              <div>
              <Link to={`/product/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                <img src={product.imageUrl} 
                alt={product.title}
                 className="img-fluid mb-3"
                  style={{ maxHeight: "250px",objectFit: "cover"  }}/></Link>
                  <h4>{product.title}</h4>
                  <p>Price: ${product.price}</p>
                 <Button as={Link} to={`/product/${product.id}`} variant="info" className="me-2">
                  View Product
                </Button>
                  <Button variant="primary"onClick={() => addToCart(product)} >Add to Cart</Button>
                </div>
            </Col>
          ))}
        </Row>
      <Button className={classes.button}><h2>See the Cart</h2></Button>
      </Container>
    );
  };
  
  export default ProductList;
  