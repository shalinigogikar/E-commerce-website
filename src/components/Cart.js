import React,{useContext} from "react";
import {Modal,ListGroup,Button} from "react-bootstrap";
import { CartContext} from "./CartContext";
const Cart=({show,handleClose})=>{
const {cart}=useContext(CartContext);
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
              {item.title} - ${item.price}
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