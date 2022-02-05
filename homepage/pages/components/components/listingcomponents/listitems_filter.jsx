import ProductCard from "../cards/product-card/product-card.jsx";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React, { useState } from "react";
import Button from "@mui/material/Button";

const Filt = (props) => {
    const [filterElement, setFilterElement] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setFilterElement(null);
    };
    return (
        <>
            <div>
                Sort By:{" "}
                <Button
                    variant="text"
                    color="default"
                    onClick={(e) => setFilterElement(e.currentTarget)}
                >
                    {selectedIndex}
                </Button>
                <Menu
                    id="lock-menu"
                    anchorEl={filterElement}
                    keepMounted
                    open={Boolean(filterElement)}
                    onClose={() => setFilterElement(null)}
                >
                    {[
                        "Price: High to Low",
                        "Price: Low to High",
                        "Ratings",
                        "Popularity",
                    ].map((option, index) => (
                        <MenuItem
                            key={option}
                            selected={index === selectedIndex}
                            onClick={(event) =>
                                handleMenuItemClick(event, index)
                            }
                        >
                            {option}
                        </MenuItem>
                    ))}
                </Menu>
                <div className="row">
                    {props.products.map((product) => {
                        return (
                            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                <div className="d-flex flex-column mb-4 px-xxl-3">
                                    <ProductCard product={product} />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};
export default Filt;
