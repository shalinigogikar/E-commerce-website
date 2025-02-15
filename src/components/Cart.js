import React,{useContext} from "react";
import {Modal,ListGroup,Button} from "react-bootstrap";
import { CartContext} from "./CartContext";
const Cart=({show,handleClose})=>{
const {cart,removeFromCart}=useContext(CartContext);
return(
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Shopping Cart</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {!cart||cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ListGroup>
          { cart.map((item, index) => (
            <ListGroup.Item key={index}>
              <img src={item.imageUrl} alt={item.title} width="50" height="50" className="me-3" />
             <> {item.title} - ${item.price}-quantity:{item.quantity}</>
              <Button variant="danger" onClick={() => removeFromCart(item.title)}>
                  Remove
                </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </Modal.Body>
    <Modal.Footer>
        <Button>Purchase</Button>
    </Modal.Footer>
  </Modal>
);
};
export default Cart;