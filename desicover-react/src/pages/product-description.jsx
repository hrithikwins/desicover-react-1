import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
// import Review from "../components/product-description/review";
import { useCart } from "react-use-cart";
import { motion } from "framer-motion";
import { Button } from "@mui/material";
function ProductDescription({ stock = true, pid }) {
    const { id } = useParams();
    // const products =
    // const sumOfRatings = productsData.ratings.rating.map();
    const { updateItemQuantity, removeItem, addItem, items } = useCart();

    const [productsData, setProductsData] = useState({ productName: "" });
    const [quantity] = useState(0);
    const isProductAdded = items.find(({ id }) => id === productsData.id);
    //console.log(isProductAdded);

    const getProduct = () => {
        axios
            .post("https://desicover.herokuapp.com/search-product-id", {
                id: id,
            })
            .then((response) => {
                setProductsData(response.data);
                //console.log(response);
                //console.log("insideaxios" + productsData);
            })
            .catch((error) => {
                console.log(error);
            });
        // console.log(sumOfRatings);
    };
    useEffect(() => {
        getProduct();
        console.log(
            "===============================product fetched==============================================="
        );
        //eslint-disable-next-line
    }, []);
    // setQuantity();

    return (
        <>
            {" "}
            {productsData.productName == null ? (
                <div className="vh-100 vw-100 text-center row">
                    "No DETAILS ABOUT THE PRODUCT"
                </div>
            ) : (
                <div className="d-flex flex-column flex-md-row justify-content-center align-content-center px-md-5">
                    <div className="d-flex flex-column col-md-6 col-12 container">
                        <img
                            className="p-md-5"
                            alt="product"
                            src={productsData.image}
                        />
                        <div className="d-none d-md-flex flex-md-column-reverse">
                            {/* TODO move customer review section to bottom for mobile responsive */}
                            <div>Customer review</div>
                            <div className="">Rating 4.9/5</div>
                        </div>
                        <div className="d-none d-md-block py-md-3">
                            <div className="py-md-2">{/* <Review /> */}</div>
                            <div className="py-md-2">{/* <Review /> */}</div>
                        </div>
                    </div>
                    <div className="d-flex flex-column col-md-6  px-3 py-2 p-md-0">
                        <div>
                            <div>
                                <h1>{productsData.name}</h1>
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="border-1 border-secondary p-md-2 rounded-3 ">
                                In stock{" "}
                                {stock ? (
                                    <CheckCircleOutlineIcon />
                                ) : (
                                    <CancelOutlinedIcon />
                                )}
                            </div>
                            <div className="p-2">
                                Delivery : 4 business days
                            </div>
                        </div>
                        <div className="py-md-3">
                            <div className="">
                                {/* Composition:
                                <span>
                                    <strong>{productsData.composition}</strong>
                                </span> */}
                            </div>
                            <div className="">
                                Country:
                                <span>
                                    <strong>
                                        India
                                        {/* {productsData.originCountry} */}
                                    </strong>
                                </span>
                            </div>
                            <div>
                                Brand:
                                <span>
                                    <strong>{productsData.brand}</strong>
                                </span>
                            </div>
                        </div>
                        <div className=" d-flex bg-white p-md-2 rounded-3 justify-content-md-between">
                            <div className="  p-md-3 px-md-5">
                                <div className="d-flex p-md-1 rounded-pill border-1 border-dark">
                                    <Button
                                        onClick={() =>
                                            isProductAdded
                                                ? updateItemQuantity(
                                                      isProductAdded.id,
                                                      isProductAdded.quantity -
                                                          1
                                                  )
                                                : null
                                        }
                                    >
                                        -
                                    </Button>
                                    <div className="px-1 pt-2">
                                        {isProductAdded
                                            ? isProductAdded.quantity
                                            : 0}
                                    </div>
                                    <Button
                                        onClick={() =>
                                            isProductAdded
                                                ? updateItemQuantity(
                                                      isProductAdded.id,
                                                      isProductAdded.quantity +
                                                          1
                                                  )
                                                : addItem(productsData)
                                        }
                                    >
                                        +
                                    </Button>
                                </div>
                            </div>
                            <div className="row px-md-1 my-auto">
                                <div
                                    className={
                                        isProductAdded
                                            ? "col-12 btn d-md-block align-self-md-end shop-now custom-button-selected"
                                            : "col-12 btn d-md-block feeble-border align-self-md-end custom-button"
                                    }
                                    onClick={() => {
                                        isProductAdded
                                            ? removeItem(isProductAdded.id)
                                            : addItem(productsData);
                                    }}
                                >
                                    <div className="">
                                        {isProductAdded ? (
                                            <motion.div
                                                initial={{ y: -50 }}
                                                animate={{ y: 0 }}
                                            >
                                                Remove
                                            </motion.div>
                                        ) : (
                                            <div>Add +</div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h5 className="py-md-3 py-2">
                                <strong>Description:</strong>
                            </h5>
                            <p> {productsData.description} </p>
                        </div>
                        {/* <div className="d-flex">
                        <div>nutrients</div>
                        <div>badges</div>
                        here
                    </div> */}
                    </div>
                </div>
            )}
            {/* //this bracket is to close the ternary operator */}{" "}
        </>
    );
}

export default ProductDescription;
