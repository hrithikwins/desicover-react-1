// import { useState } from "react";
import { useCart } from "react-use-cart";
import CartItemComponent from "../../components/cart-item/cart-item";

function CartItems() {
    const { items } = useCart();
    return (
        <div className="d-md-flex flex-md-column">
            {items.map((item) => (
                <>
                    <CartItemComponent product={item} />
                </>
            ))}
        </div>
    );
}

export default CartItems;
