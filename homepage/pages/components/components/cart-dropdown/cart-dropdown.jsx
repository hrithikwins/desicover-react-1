import { useContext , Link } from "react";

import { CartContext } from "../../../contexts/cart/cart-context";
// import CartItemComponent from "../calculators/cartItemComponent";

const CartDropdown = () => {
  const [cart] = useContext(CartContext);

  return (
    <div>
      {cart.map((item) => (
        <p>
          Cart Item: {item.productName} Quantity: {item.quantity}
        </p>
        
      ))}
      <Link to="../../checkout.jsx">Checkout</Link>
    </div>
  );
};

export default CartDropdown;
