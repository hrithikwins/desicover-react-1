import ProductCard from "../components/index-components/product-card";
import { useState, useRef, useEffect, useContext } from "react";
import { ProductContext } from "./../context/product-context";
import { Grid } from "@mui/material";
const Listing = (props) => {
    const [productData, getAllProducts] = useContext(ProductContext);

    return (
        <>
            <Grid container spacing={4}>
                {productData.map((product, index) => (
                    <Grid item xs={6} sm={6} md={3} key={index}>
                        <div className="d-flex flex-column mb-4">
                            <ProductCard key={product.id} product={product} />
                        </div>
                    </Grid>
                ))}
            </Grid>
        </>
    );
};
export default Listing;
