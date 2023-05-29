import {Button, Container, Navbar, Modal, ModalTitle} from 'react-bootstrap';
import { useState, useContext } from 'react';
import { CartContext } from '../CartContext';
import CartProduct from '../CartContext';



function NavbarComponent() {
    const cart = useContext(CartContext);

    const [show, setShow] = useState(false);
    const handelClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const checkout = async () => {
        await fetch('http://localhost:4000/checkout', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ items: cart.items})
        }).then((response) => {
            return response.json()
        }).then((response) => {
           if (response.url) {
            window.location.assign(response.url);
           }
        })
    }

   const productsCount = cart.items.reduce((sum, product) =>  sum + product.quantity, 0);


    return (
        <>
        <Navbar expand="sm">
            <Navbar.Brand href='/'> Ecommerce Store</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className='justify-content-end'>
                <Button onClick={handleShow}> Cart {{productsCount}} Items</Button>
            </Navbar.Collapse>
        </Navbar>
        <Modal show={show} onHide={handelClose}>
            <Modal.Header closeButton>
                <Modal.Title>Shopping Cart</Modal.Title>

            </Modal.Header>
            <Modal.Body>
                {productsCount > 0 ? 
                <>
                <p> Items in your Cart:</p>
                {cart.items.map((currentProduct, idx ) => (
                    <CartProduct key={idx}  id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>


                ))}
                
                 <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>
                 <Button variant="success" onclick={checkout} >
                          purchase items!
                 </Button>


                </>
                
            :
            
            <h1>there are no items in your cart! </h1>
            }
                <h1>This is the body</h1>
            </Modal.Body>
        </Modal>
        </>
    )




}

export default NavbarComponent;