import React, { useEffect, useState } from "react";
import { useCart } from "react-use-cart";
import { Link } from "@mui/material";
import PayButton from "../../components/pay-button";

function YourOrder({ delivery, total }) {
    const { items } = useCart();
    const [cartTotal, setCartTotal] = useState();
    useEffect(() => {
        setCartTotal(
            items.reduce(
                (accumalator, item) =>
                    accumalator +
                    (item.discountedPrice || item.price) * item.quantity,
                0
            )
        );
    }, [items]);
    return (
        <div>
            <h3>Your order:</h3>
            <div className="">
                <Link>Subtotal:</Link>
                <span className="float-end">
                    <label>{cartTotal}</label>
                </span>
            </div>
            <div className="">
                <Link>Delivery:</Link>
                <span className="float-end">
                    <label>{delivery}</label>
                </span>
            </div>
            <hr />
            <strong>
                <Link>Total:</Link>
                <span className="float-end">
                    <label>{cartTotal + delivery}</label>
                </span>
            </strong>
            <div className="d-md-flex py-md-3 justify-content-center">
                {/* <Button
          style={{ background: "#56876C", color: "white" }}
          variant="contained"
          fullWidth
          disableElevation
        >
          Purchase
        </Button> */}
                <PayButton total={total} />
            </div>
        </div>
    );
}

export default YourOrder;

// const loadScript = (src) => {
//   return new Promise((resolve) => {
//     const script = document.createElement("script");
//     script.src = src;
//     script.onload = () => {
//       resolve(true);
//     };
//     script.onerror = () => {
//       resolve(false);
//     };
//     document.body.appendChild(script);
//   });
// };
