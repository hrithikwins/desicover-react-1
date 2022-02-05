import { useState } from "react";
import PersonalInfo from "../pages/components/checkout/personalInfo";
import DeliveryDetails from "../pages/components/checkout/deliveryDetails";
import YourOrder from "../pages/components/checkout/yourOrder";
import CartItems from "../pages/components/checkout/cartItems";

import { useCart } from "react-use-cart";

const Checkout = (props) => {
    const { items } = useCart();
    const [quantity, setQuantity] = useState(1);
    return (
        <>
            <div className="d-flex flex-column flex-md-row justify-content-around">
                <div className="d-md-flex flex-md-column">
                    <h3 className="text-center text-md-start p-3 p-md-1 font-weight-900">
                        {" "}
                        Checkout
                    </h3>
                    <PersonalInfo />
                    <DeliveryDetails />
                    {/* <Payment />  */}
                </div>
                <div className="d-md-flex flex-md-column w-md-50">
                    <YourOrder
                        className="w-100"
                        subtotal={400}
                        delivery={20}
                        total={100}
                    />
                    <CartItems
                        cartItems={items}
                        setQuantity={setQuantity}
                        quantity={quantity}
                    />
                </div>
            </div>
        </>
    );
};
export default Checkout;
