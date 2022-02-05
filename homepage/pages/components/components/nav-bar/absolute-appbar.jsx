import { useContext } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/user/user-context";
import AppsIcon from "@material-ui/icons/Apps";
import React, { useState } from "react";
import { firebase } from "../../../firebase";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./absolute-appbar.sass";
import Search from "@material-ui/icons/Search";
import logo from "../../../images/logo.png";
import Signin from "../signin/signin";
import { useCart } from "react-use-cart";
import { motion } from "framer-motion";

// import Logout from "../signin/signin";
// import CartDropDown from "../cart-dropdown/cart-dropdown";
import CartItems from "../../../view/pages/checkout/cartItems.js";
import { Avatar } from "@mui/material";

//console.log(props.products)
const AbsoluteAppbar = (props) => {
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    //eslint-disable-next-line
    const [showCart, setShowCart] = useState(false);
    const { user } = useContext(AuthContext);
    const [anim, setAnim] = useState();
    const { items } = useCart();
    const [quantity, setQuantity] = useState(1);

    const jumpInAnim = { x: 4 };
    const jumpOutAnim = { x: 3 };

    const Logout = (e) => {
        firebase
            .auth()
            .signOut()
            .then(() => {
                var msg = "signout due to " + e;
                console.log(msg);
            })
            .catch((error) => {
                console.log("signout Failed");
            });
    };
    const style1 = { cursor: "pointer" }; // I am into simulatioin .. maybe I won't be able to use the mic
    const [hover, setHover] = useState(false);
    const onHoverf = (e) => {
        let randomv = "hello";
        setHover(true);
        console.log(hover);
        return randomv;
    };
    const onHoverl = (e) => {
        setHover(false);
        console.log(hover);
    };
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    //   const productstest = [
    //     {
    //       id: 1,
    //       name: "Malm",
    //       price: 9900,
    //       quantity: 1,
    //     },
    //     {
    //       id: 2,
    //       name: "Nordli",
    //       price: 16500,
    //       quantity: 5,
    //     },
    //   ];

    return (
        <>
            <nav class="navbar navbar-expand-md sticky-top d-lg-flex flex-lg-row bg-gray align-content-lg-stretch justify-content-lg-around navigation-clean-search px-md-4">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="Daanapani" className="img-fluid" />
                    {console.log(anim)}
                </Link>
                <button
                    data-bs-toggle="collapse"
                    class="navbar-toggler"
                    data-bs-target="#navcol-1"
                >
                    <span class="visually-hidden">Toggle navigation</span>
                    <Menu />1
                </button>
                <div
                    class="collapse navbar-collapse d-lg-flex justify-content-md-between"
                    id="navcol-1"
                    style={{ borderTopColor: " transparent" }}
                >
                    <div class="navbar-nav d-flex align-items-center justify-content-around">
                        <div
                            class="nav-link d-flex justify-content-center align-items-center"
                            href="#"
                        >
                            <div className="bg-white search-field-container">
                                <input
                                    class="search-field px-md-4 py-md-3"
                                    placeholder="Search Products"
                                />
                                <Button
                                    variant="primary"
                                    onClick={() => setIsSearchVisible(true)}
                                >
                                    <Search />
                                </Button>
                            </div>

                            <Link
                                to="/categories"
                                className="nav-link text-dark text-decoration-none px-md-5 py-md-3 d-flex justify-content-center align-items-center nav-categories"
                            >
                                <motion.div
                                    onHoverStart={() => setAnim(jumpInAnim)}
                                    onHoverEnd={() => setAnim(jumpOutAnim)}
                                >
                                    <AppsIcon fontSize="large" />
                                    &nbsp; Categories
                                </motion.div>
                            </Link>
                        </div>
                    </div>
                    <div className="d-flex flex-row">
                        {user ? (
                            <div class="nav-item dropdown float-end">
                                {/* <DropdownButton
                  variant=""
                  id="dropdown-basic-button"
                  title={user.displayName}
                  titl
                  style={{cursor: "pointer", fontSize: "150%"}}
                >
                  <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
                  <Dropdown.Item onClick={Logout} variant="link">
                    Logout
                  </Dropdown.Item>
                </DropdownButton> */}
                                <Button
                                    aria-controls="simple-menu"
                                    aria-haspopup="true"
                                    onClick={handleClick}
                                >
                                    <Avatar
                                        sizes="30"
                                        alt={user.displayName}
                                        src={user.photoURL}
                                    />{" "}
                                    &nbsp;
                                    {user.displayName}
                                </Button>
                                <Menu
                                    id="simple-menu"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    {/* <MenuItem onClick={handleClose}>Profile</MenuItem> */}

                                    <MenuItem>
                                        <Link
                                            to="/orders"
                                            className="text-decoration-none text-dark"
                                        >
                                            Your Orders
                                        </Link>
                                    </MenuItem>
                                    <MenuItem onClick={Logout}>Logout</MenuItem>
                                </Menu>
                            </div>
                        ) : (
                            <></>
                        )}
                        <div class="nav-item">
                            <Signin />
                        </div>
                        <div
                            class="nav-link bg-white d-lg-flex justify-content-lg-start align-items-lg-center mx-md-5 px-md-4 nav-cart"
                            onClick={() => setShowCart(!showCart)}
                            onMouseEnter={() => onHoverf()}
                            onMouseLeave={() => onHoverl()}
                            style={style1}
                        >
                            <ShoppingCartIcon
                                className="text-dark"
                                fontSize="large"
                            />
                            <div className="p-md-1" />
                            <span className="text-dark font-190">
                                {" "}
                                Cart: {items.length <= 0
                                    ? "0"
                                    : items.length}{" "}
                            </span>
                            {/*
              {productstest.map((ele) => (<Dropdown.Item href="#/action-1" key={ele.id}>{ele.name}</Dropdown.Item>))}
                */}
                        </div>
                    </div>
                </div>
            </nav>
            {isSearchVisible ? (
                <div className="vw-100 vh-100 p-4">
                    <h1>Search results goes here</h1>

                    <Button
                        variant="primary"
                        onClick={() => setIsSearchVisible(false)}
                    >
                        Close
                    </Button>
                </div>
            ) : (
                ""
            )}
            {/* <div className="d-md-flex flex-md-row align-items-center">
        <Link to="/">
          <div className="logo">DP</div>
        </Link>
      </div> */}{" "}
            <div className={showCart ? "custom-cart" : "d-none custom-cart"}>
                {items.length > 0 ? (
                    <>
                        <CartItems
                            cartItems={items}
                            setQuantity={setQuantity}
                            quantity={quantity}
                        />
                        <Link
                            className="text-decoration-none text-white text-center d-block checkout-button"
                            to="/checkout"
                            onClick={() => setShowCart(!showCart)}
                        >
                            Checkout
                        </Link>
                    </>
                ) : (
                    <div className="text-center d-block text-danger">
                        <div className="py-5">
                            There are no items in your cart
                        </div>
                        <Link
                            className="text-decoration-none text-white text-center d-block checkout-button"
                            to="/all-products"
                        >
                            <div onClick={() => setShowCart(!showCart)}>
                                Explore Products
                            </div>
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
};
export default AbsoluteAppbar;

//       {
//       isSearchVisible ? (
//           <div className="vw-100 vh-100 bg-danger p-4">
//               <h1>Search results goes here</h1>

//               <Button variant="primary"
//                   onClick={
//                       () => setIsSearchVisible(false)
//               }>
//                   Close
//               </Button>
//             </div>
//             <i class="fa fa-search flex-grow-0 align-content-center justify-content-lg-center"></i>
//           </div>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">
//             <AppsIcon />
//             Categories
//           </a>
//         </li>
//         <li class="nav-item">
//           <a
//             class="nav-link bg-white d-lg-flex justify-content-lg-start align-items-lg-center"
//             href="#"
//           >
//             <ShoppingCartIcon /> Cart
//           </a>
//         </li>
//         <li class="nav-item dropdown float-end">
//           <DropdownButton
//             variant=""
//             id="dropdown-basic-button"
//             title="Profile"
//           >
//             <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
//             <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
//             <Dropdown.Item variant="link">Logout</Dropdown.Item>
//           </DropdownButton>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>)
// {isSearchVisible ? (
//
// ) : (
//   ""
// )}
// {/* <div className="d-md-flex flex-md-row align-items-center">
//   <Link to="/">
//     <div className="logo">DP</div>
//   </Link>
// </div> */}{" "}
