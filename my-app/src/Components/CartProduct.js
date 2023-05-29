import { Button } from "react-bootstrap/Button";
import { CartContext } from '../CartContext';
import { useContext } from "react";
import { getProductData } from "../productStore";




function  CartProduct(props) {
   const cart = useContext(CartContext);
   const id = props.id;
   const quantity = props.quantity;
   const productData = getProductData(id);


    return (
        <>
            <h3>{productData.title}</h3>
            <p>{quantity} total       </p>
            <p>£{  (quantity * productData.price).toFixed(2)}</p>
            <Button size="sm"  onClick={() => cart.deleteFromCart(id)}>   </Button>
            <hr></hr>
        
        </>

)

}

export default CartProduct;