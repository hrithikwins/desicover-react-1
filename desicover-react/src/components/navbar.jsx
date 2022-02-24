import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import "./navbar.sass";
import { Link } from "react-router-dom";
import {
    MenuOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
} from "@mui/icons-material";

const pages = [
    "Men",
    "Women",
    "Streetwear",
    "Supima Collection",
    "ActiveWear",
    "Themes",
    "Exclusive Membership",
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <header className="header_section default_header clearfix">
            <div className="header_top text-white">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <p className="mb-0">
                                Free Shipping on Domestic Orders over $150
                            </p>
                        </div>
                        <div className="col-lg-5">
                            <ul className="primary_social_links ul_li_right clearfix">
                                <li>
                                    <a href="#!">
                                        <i className="fab fa-facebook-f" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <i className="fab fa-twitter" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <i className="fab fa-instagram" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <i className="fab fa-whatsapp" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header_bottom clearfix">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3">
                            <div className="brand_logo">
                                <Link to="/" className="brand_link">
                                    <img
                                        style={{ width: "120px" }}
                                        src="/logo-small.png"
                                        alt="DesiCovers"
                                    />
                                </Link>
                                <ul className="mh_action_btns ul_li clearfix">
                                    <li>
                                        <button
                                            type="button"
                                            className="search_btn"
                                            data-toggle="collapse"
                                            data-target="#search_body_collapse"
                                            aria-expanded="false"
                                            aria-controls="search_body_collapse"
                                        >
                                            <SearchOutlined />
                                        </button>
                                    </li>
                                    <li>
                                        <ShoppingCartOutlined />
                                        <button
                                            type="button"
                                            className="cart_btn"
                                        >
                                            <span className="btn_badge">2</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            type="button"
                                            className="mobile_menu_btn"
                                        >
                                            <MenuOutlined />
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <nav className="main_menu clearfix">
                                <ul className="ul_li_center clearfix">
                                    <li className="menu_item_has_child">
                                        <a href="#!">Home</a>
                                        <div className="mega_menu text-center">
                                            <div
                                                className="background"
                                                data-bg-color="#ffffff"
                                            >
                                                <div className="container">
                                                    <ul className="home_pages ul_li clearfix">
                                                        <li>
                                                            <a href="home_carparts.html">
                                                                <span className="item_image">
                                                                    <img
                                                                        src="assets/images/home_pages/carparts.png"
                                                                        alt="image_not_found"
                                                                    />
                                                                </span>
                                                                <span className="item_title">
                                                                    Car Parts
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="home_classic_ecommerce.html">
                                                                <span className="item_image">
                                                                    <img
                                                                        src="assets/images/home_pages/classic_ecommarce.png"
                                                                        alt="image_not_found"
                                                                    />
                                                                </span>
                                                                <span className="item_title">
                                                                    Classic
                                                                    Ecommerce
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="home_creative_onelook.html">
                                                                <span className="item_image">
                                                                    <img
                                                                        src="assets/images/home_pages/creative_onelook.png"
                                                                        alt="image_not_found"
                                                                    />
                                                                </span>
                                                                <span className="item_title">
                                                                    Creative
                                                                    Onelook
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="home_electronic.html">
                                                                <span className="item_image">
                                                                    <img
                                                                        src="assets/images/home_pages/electronic.png"
                                                                        alt="image_not_found"
                                                                    />
                                                                </span>
                                                                <span className="item_title">
                                                                    Electronic
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="home_fashion.html">
                                                                <span className="item_image">
                                                                    <img
                                                                        src="assets/images/home_pages/fashion.png"
                                                                        alt="image_not_found"
                                                                    />
                                                                </span>
                                                                <span className="item_title">
                                                                    Fashion
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="home_fashion_minimal.html">
                                                                <span className="item_image">
                                                                    <img
                                                                        src="assets/images/home_pages/fashion_minimal.png"
                                                                        alt="image_not_found"
                                                                    />
                                                                </span>
                                                                <span className="item_title">
                                                                    Fashion
                                                                    Minimal
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="home_furniture.html">
                                                                <span className="item_image">
                                                                    <img
                                                                        src="assets/images/home_pages/furniture.png"
                                                                        alt="image_not_found"
                                                                    />
                                                                </span>
                                                                <span className="item_title">
                                                                    Furniture
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="home_gadget.html">
                                                                <span className="item_image">
                                                                    <img
                                                                        src="assets/images/home_pages/gadget.png"
                                                                        alt="image_not_found"
                                                                    />
                                                                </span>
                                                                <span className="item_title">
                                                                    Gadget
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="home_lookbook_creative.html">
                                                                <span className="item_image">
                                                                    <img
                                                                        src="assets/images/home_pages/lookbook_creative.png"
                                                                        alt="image_not_found"
                                                                    />
                                                                </span>
                                                                <span className="item_title">
                                                                    Lookbook
                                                                    Creative
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="home_lookbook_slide.html">
                                                                <span className="item_image">
                                                                    <img
                                                                        src="assets/images/home_pages/lookbook_slide.png"
                                                                        alt="image_not_found"
                                                                    />
                                                                </span>
                                                                <span className="item_title">
                                                                    Lookbook
                                                                    Slide
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="home_medical.html">
                                                                <span className="item_image">
                                                                    <img
                                                                        src="assets/images/home_pages/medical.png"
                                                                        alt="image_not_found"
                                                                    />
                                                                </span>
                                                                <span className="item_title">
                                                                    Medical
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="home_modern.html">
                                                                <span className="item_image">
                                                                    <img
                                                                        src="assets/images/home_pages/modern.png"
                                                                        alt="image_not_found"
                                                                    />
                                                                </span>
                                                                <span className="item_title">
                                                                    Modern
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="home_modern_minimal.html">
                                                                <span className="item_image">
                                                                    <img
                                                                        src="assets/images/home_pages/modern_minimal.png"
                                                                        alt="image_not_found"
                                                                    />
                                                                </span>
                                                                <span className="item_title">
                                                                    Modern
                                                                    Minimal
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="home_motorcycle.html">
                                                                <span className="item_image">
                                                                    <img
                                                                        src="assets/images/home_pages/motorcycle.png"
                                                                        alt="image_not_found"
                                                                    />
                                                                </span>
                                                                <span className="item_title">
                                                                    Motorcycle
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="home_parallax_shop.html">
                                                                <span className="item_image">
                                                                    <img
                                                                        src="assets/images/home_pages/parallax_shop.png"
                                                                        alt="image_not_found"
                                                                    />
                                                                </span>
                                                                <span className="item_title">
                                                                    Parallax
                                                                    Shop
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="home_simple_shop.html">
                                                                <span className="item_image">
                                                                    <img
                                                                        src="assets/images/home_pages/simple_shop.png"
                                                                        alt="image_not_found"
                                                                    />
                                                                </span>
                                                                <span className="item_title">
                                                                    Simple Shop
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="home_single_story_black.html">
                                                                <span className="item_image">
                                                                    <img
                                                                        src="assets/images/home_pages/single_story_black.png"
                                                                        alt="image_not_found"
                                                                    />
                                                                </span>
                                                                <span className="item_title">
                                                                    Single Story
                                                                    Black
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="home_single_story_white.html">
                                                                <span className="item_image">
                                                                    <img
                                                                        src="assets/images/home_pages/single_story_white.png"
                                                                        alt="image_not_found"
                                                                    />
                                                                </span>
                                                                <span className="item_title">
                                                                    Single Story
                                                                    White
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="home_sports.html">
                                                                <span className="item_image">
                                                                    <img
                                                                        src="assets/images/home_pages/sports.png"
                                                                        alt="image_not_found"
                                                                    />
                                                                </span>
                                                                <span className="item_title">
                                                                    Sports Shop
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="home_supermarket.html">
                                                                <span className="item_image">
                                                                    <img
                                                                        src="assets/images/home_pages/supermarket.png"
                                                                        alt="image_not_found"
                                                                    />
                                                                </span>
                                                                <span className="item_title">
                                                                    Supermarket
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="home_watch.html">
                                                                <span className="item_image">
                                                                    <img
                                                                        src="assets/images/home_pages/watch.png"
                                                                        alt="image_not_found"
                                                                    />
                                                                </span>
                                                                <span className="item_title">
                                                                    Watch
                                                                </span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="menu_item_has_child">
                                        <a href="#!">Shop</a>
                                        <div className="mega_menu">
                                            <div
                                                className="background"
                                                data-bg-color="#ffffff"
                                            >
                                                <div className="container">
                                                    <div className="row mt__30">
                                                        <div className="col-lg-3">
                                                            <div className="page_links">
                                                                <h3 className="title_text">
                                                                    Carparts
                                                                </h3>
                                                                <ul className="ul_li_block">
                                                                    <li>
                                                                        <a href="carparts_shop.html">
                                                                            Shop
                                                                            Page
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="carparts_shop_grid.html">
                                                                            Shop
                                                                            Grid
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="carparts_shop_list.html">
                                                                            Shop
                                                                            List
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="carparts_shop_details.html">
                                                                            Shop
                                                                            Details
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="page_links">
                                                                <h3 className="title_text">
                                                                    Classic
                                                                    Ecommerce
                                                                </h3>
                                                                <ul className="ul_li_block">
                                                                    <li>
                                                                        <a href="classic_ecommerce_shop.html">
                                                                            Shop
                                                                            Page
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="classic_ecommerce_shop_details.html">
                                                                            Shop
                                                                            Details
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="page_links">
                                                                <h3 className="title_text">
                                                                    Electronic
                                                                </h3>
                                                                <ul className="ul_li_block">
                                                                    <li>
                                                                        <a href="electronic_shop.html">
                                                                            Shop
                                                                            Page
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="electronic_shop_details.html">
                                                                            Shop
                                                                            Details
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="page_links">
                                                                <h3 className="title_text">
                                                                    Fashion
                                                                </h3>
                                                                <ul className="ul_li_block">
                                                                    <li>
                                                                        <a href="fashion_shop.html">
                                                                            Shop
                                                                            Page
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="fashion_shop_details.html">
                                                                            Shop
                                                                            Details
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <div className="page_links">
                                                                <h3 className="title_text">
                                                                    Fashion
                                                                    Minimal
                                                                </h3>
                                                                <ul className="ul_li_block">
                                                                    <li>
                                                                        <a href="fashion_minimal_shop.html">
                                                                            Shop
                                                                            Page
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="fashion_minimal_shop_details.html">
                                                                            Shop
                                                                            Details
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="page_links">
                                                                <h3 className="title_text">
                                                                    Fashion
                                                                    Minimal
                                                                </h3>
                                                                <ul className="ul_li_block">
                                                                    <li>
                                                                        <a href="fashion_minimal_shop.html">
                                                                            Shop
                                                                            Page
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="fashion_minimal_shop_details.html">
                                                                            Shop
                                                                            Details
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="page_links">
                                                                <h3 className="title_text">
                                                                    Furniture
                                                                </h3>
                                                                <ul className="ul_li_block">
                                                                    <li>
                                                                        <a href="furniture_shop.html">
                                                                            Shop
                                                                            Page
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="furniture_shop_details.html">
                                                                            Shop
                                                                            Details
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="page_links">
                                                                <h3 className="title_text">
                                                                    Gadget
                                                                </h3>
                                                                <ul className="ul_li_block">
                                                                    <li>
                                                                        <a href="gadget_shop.html">
                                                                            Shop
                                                                            Page
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="gadget_shop_details.html">
                                                                            Shop
                                                                            Details
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <div className="page_links">
                                                                <h3 className="title_text">
                                                                    Medical
                                                                </h3>
                                                                <ul className="ul_li_block">
                                                                    <li>
                                                                        <a href="medical_shop.html">
                                                                            Shop
                                                                            Page
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="medical_shop_details.html">
                                                                            Shop
                                                                            Details
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="page_links">
                                                                <h3 className="title_text">
                                                                    Modern
                                                                    Minimal
                                                                </h3>
                                                                <ul className="ul_li_block">
                                                                    <li>
                                                                        <a href="modern_minimal_shop.html">
                                                                            Shop
                                                                            Page
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="modern_minimal_shop_details.html">
                                                                            Shop
                                                                            Details
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="page_links">
                                                                <h3 className="title_text">
                                                                    Modern
                                                                </h3>
                                                                <ul className="ul_li_block">
                                                                    <li>
                                                                        <a href="modern_shop.html">
                                                                            Shop
                                                                            Page
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="modern_shop_details.html">
                                                                            Shop
                                                                            Details
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="page_links">
                                                                <h3 className="title_text">
                                                                    Motorcycle
                                                                </h3>
                                                                <ul className="ul_li_block">
                                                                    <li>
                                                                        <a href="motorcycle_shop_grid.html">
                                                                            Shop
                                                                            Grid
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="motorcycle_shop_list.html">
                                                                            Shop
                                                                            List
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="motorcycle_shop_details.html">
                                                                            Shop
                                                                            Details
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <div className="page_links">
                                                                <h3 className="title_text">
                                                                    Simple Shop
                                                                </h3>
                                                                <ul className="ul_li_block">
                                                                    <li>
                                                                        <a href="simple_shop.html">
                                                                            Shop
                                                                            Page
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="simple_shop_details.html">
                                                                            Shop
                                                                            Details
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="page_links">
                                                                <h3 className="title_text">
                                                                    Sports
                                                                </h3>
                                                                <ul className="ul_li_block">
                                                                    <li>
                                                                        <a href="sports_shop.html">
                                                                            Shop
                                                                            Page
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="sports_shop_details.html">
                                                                            Shop
                                                                            Details
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="page_links">
                                                                <h3 className="title_text">
                                                                    Lookbook
                                                                </h3>
                                                                <ul className="ul_li_block">
                                                                    <li>
                                                                        <a href="lookbook_creative_shop.html">
                                                                            Shop
                                                                            Page
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="lookbook_creative_shop_details.html">
                                                                            Shop
                                                                            Details
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="page_links">
                                                                <h3 className="title_text">
                                                                    Shop Other
                                                                    Pages
                                                                </h3>
                                                                <ul className="ul_li_block">
                                                                    <li>
                                                                        <a href="#!">
                                                                            <del>
                                                                                Shop
                                                                                Page
                                                                            </del>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="shop_details.html">
                                                                            Shop
                                                                            Details
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="menu_item_has_child">
                                        <a href="#!">Pages</a>
                                        <ul className="submenu">
                                            <li className="menu_item_has_child">
                                                <a href="#!">
                                                    Shop Inner Pages
                                                </a>
                                                <ul className="submenu">
                                                    <li>
                                                        <a href="shop_cart.html">
                                                            Shopping Cart
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop_checkout.html">
                                                            Checkout Step 1
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop_checkout_step2.html">
                                                            Checkout Step 2
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop_checkout_step3.html">
                                                            Checkout Step 3
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="404.html">404 Page</a>
                                            </li>
                                            <li className="menu_item_has_child">
                                                <a href="#!">Blogs</a>
                                                <ul className="submenu">
                                                    <li>
                                                        <a href="blog.html">
                                                            Blog Page
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="blog_details.html">
                                                            Blog Details
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu_item_has_child">
                                                <a href="#!">Compare</a>
                                                <ul className="submenu">
                                                    <li>
                                                        <a href="compare_1.html">
                                                            Compare V.1
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="compare_2.html">
                                                            Compare V.2
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu_item_has_child">
                                                <a href="#!">Register</a>
                                                <ul className="submenu">
                                                    <li>
                                                        <a href="login.html">
                                                            Login
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="signup.html">
                                                            Sign Up
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#!">About us</a>
                                    </li>
                                    <li>
                                        <a href="contact.html">Contact us</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-3">
                            <ul className="action_btns_group ul_li_right clearfix">
                                <li>
                                    <button
                                        type="button"
                                        className="search_btn"
                                        data-toggle="collapse"
                                        data-target="#search_body_collapse"
                                        aria-expanded="false"
                                        aria-controls="search_body_collapse"
                                    >
                                        <i className="fal fa-search" />
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="user_btn"
                                        data-toggle="collapse"
                                        data-target="#use_deropdown"
                                        aria-expanded="false"
                                        aria-controls="use_deropdown"
                                    >
                                        <i className="fal fa-user" />
                                    </button>
                                    <div
                                        id="use_deropdown"
                                        className="collapse_dropdown collapse"
                                    >
                                        <div className="dropdown_content">
                                            <div className="profile_info clearfix">
                                                <div className="user_thumbnail">
                                                    <img
                                                        src="assets/images/meta/img_01.png"
                                                        alt="thumbnail_not_found"
                                                    />
                                                </div>
                                                <div className="user_content">
                                                    <h4 className="user_name">
                                                        Jone Doe
                                                    </h4>
                                                    <span className="user_title">
                                                        Seller
                                                    </span>
                                                </div>
                                            </div>
                                            <ul className="settings_options ul_li_block clearfix">
                                                <li>
                                                    <a href="#!">
                                                        <i className="fal fa-user-circle" />{" "}
                                                        Profile
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#!">
                                                        <i className="fal fa-user-cog" />{" "}
                                                        Settings
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#!">
                                                        <i className="fal fa-sign-out-alt" />{" "}
                                                        Logout
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <button type="button" className="cart_btn">
                                        <i className="fal fa-shopping-cart" />
                                        <span className="btn_badge">2</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div
                id="search_body_collapse"
                className="search_body_collapse collapse"
            >
                <div className="search_body">
                    <div className="container-fluid prl_90">
                        <form action="#">
                            <div className="form_item mb-0">
                                <input
                                    type="search"
                                    name="search"
                                    placeholder="Type here..."
                                />
                                <button type="submit">
                                    <i className="fal fa-search" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </header>
    );
};
export default Navbar;

// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";
// import { Link } from "react-router-dom";

// const pages = ["Mobile cover", "T-Shirts", "Mugs", "Pop Socket", "xyz"];
// const settings = ["Account", "My Orders", "Dashboard", "Logout"];

// const Navbar = () => {
//     return (
//         <div id="navbar">
//             <div className="bg-warning d-flex">
//                 <div className="logo" style={{ width: "150px" }}>
//                     <img src="/logo.png" alt="" className="img-fluid" />
//                 </div>
//                 <div className="desktop-nav">
//                     <div className="nav-content">hii</div>
//                     <div className="nav-content">hii</div>
//                     <div className="nav-content">hii</div>
//                     <div className="nav-content">hii</div>
//                     <div className="nav-content">hii</div>
//                     <div className="nav-content">hii</div>
//                 </div>
//                 <div className="other-icons"></div>
//             </div>
//             <h1>Hii</h1>
//         </div>
//     );
// };
// export default Navbar;
