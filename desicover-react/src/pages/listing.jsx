import ProductCard from "../components/index-components/product-card";
import { useState, useRef, useEffect, useContext } from "react";
import { ProductContext } from "./../context/product-context";
import { Grid } from "@mui/material";
import SimpleProductCard from "../components/index-components/simple-product-card";
import { Link } from "react-router-dom";
import ListingSideBar from "../components/listing-components/listing-sidebar";

const Listing = (props) => {
    const [productData, getAllProducts] = useContext(ProductContext);

    return (
        <>
            <ListingSideBar />
            {/* <ListingSideContent /> */}
            <Grid container spacing={4}>
                {productData.map((product, index) => (
                    <Grid item xs={6} sm={6} md={3} key={index}>
                        <Link to="/">
                            <SimpleProductCard data={product} />
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </>
    );
};
export default Listing;
