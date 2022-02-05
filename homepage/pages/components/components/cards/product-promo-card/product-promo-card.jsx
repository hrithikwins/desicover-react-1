import React from "react";
import { makeStyles } from "@mui/material/styles";
import clsx from "clsx";
import "./discount-card.scss";

const useStyles = makeStyles({
    root: {
        height: 400,
        borderRadius: 20,
        background: "#eee",
    },
});

function ProductPromoCard({ code, description, title, discount }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className="d-flex flex-column justify-content-center  align-items-center h-100 w-100">
                <div className=" text-decoration-none py-md-4 text">
                    {" "}
                    {title}
                </div>
                <h1 className=" text-decoration-none  sticky-top text-success">
                    {" "}
                    {code}{" "}
                </h1>
                <div className=" text-decoration-none">{description}</div>
            </div>
        </div>
    );
}

export default ProductPromoCard;
