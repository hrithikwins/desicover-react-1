import { useCart } from "react-use-cart";
import { Button } from "@mui/material";

function CartItemComponent({ product }) {
    const { updateItemQuantity, removeItem } = useCart();
    return (
        <div className="py-2 cart-item-component">
            <div className="d-md-flex flex-md-row justify-content-around align-items-center">
                <div className="d-md-flex flex-md-row h-100">
                    <img
                        className="img-fluid p-2"
                        style={{ width: 100, height: 100 }}
                        src={product.productImage}
                        alt="item"
                    />
                    <div className="d-flex flex-column justify-content-start">
                        <div style={{ paddingLeft: "20px" }}>
                            {product.productName}
                        </div>
                        <div className="d-flex">
                            <Button
                                onClick={() => {
                                    updateItemQuantity(
                                        product.id,
                                        product.quantity - 1
                                    );
                                }}
                            >
                                -
                            </Button>
                            <div className="px-1 pt-2">{product.quantity}</div>
                            <Button
                                onClick={() => {
                                    updateItemQuantity(
                                        product.id,
                                        product.quantity + 1
                                    );
                                }}
                            >
                                +
                            </Button>
                        </div>
                    </div>
                    <div className="p-4"></div>
                    <div className="h-100 align-self-end">
                        {/* <div> */}
                        {"$"}
                        {(product.discountedPrice || product.price) *
                            product.quantity}
                        {/* </div> */}
                    </div>
                </div>
            </div>

            <div>
                <div
                    className="close-button-top"
                    onClick={() => removeItem(product.id)}
                >
                    <Button className="close-top">X</Button>
                </div>
            </div>
            <div
                style={{
                    height: "0.4px",
                    width: "100%",
                    backgroundColor: "black",
                }}
            />
        </div>
    );
}

export default CartItemComponent;
