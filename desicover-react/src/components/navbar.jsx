import * as React from "react";
import "./navbar.sass";
import { Link } from "react-router-dom";
import {
    FacebookOutlined,
    Instagram,
    LogoutOutlined,
    MenuOutlined,
    SearchOutlined,
    SettingsOutlined,
    ShoppingCartOutlined,
    Twitter,
    VerifiedUserOutlined,
    WhatsappOutlined,
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
        <header
            className="header_section default_header clearfix"
            style={{ backgroundColor: "#9e8748" }}
        >
            <div className="header_top">
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
                                        <FacebookOutlined />
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <Twitter />
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <Instagram />
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <WhatsappOutlined />
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
                                            <Link to="/listing">
                                                <SearchOutlined />
                                            </Link>
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            type="button"
                                            className="cart_btn"
                                        >
                                            <Link to="/shopping">
                                                <ShoppingCartOutlined />
                                            </Link>
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
                        <div className="col-lg-6 text-dark">
                            <nav className="main_menu clearfix">
                                <ul className="ul_li_center clearfix">
                                    <li>
                                        <a href="#!">Home</a>
                                    </li>
                                    <li className="menu_item_has_child">
                                        <a href="#!">Products</a>
                                        <div className="mega_menu">
                                            <div
                                                className="background"
                                                style={{
                                                    backgroundColor: "#fff",
                                                }}
                                            >
                                                <div className="container">
                                                    <div className="row mt__30">
                                                        <div className="col-lg-3">
                                                            <div className="page_links">
                                                                <h3 className="title_text">
                                                                    All Products
                                                                </h3>
                                                                <ul className="ul_li_block">
                                                                    <li>
                                                                        <a href="carparts_shop.html">
                                                                            Covers
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="carparts_shop_grid.html">
                                                                            Cups
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="carparts_shop_list.html">
                                                                            Popsocket
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="carparts_shop_details.html">
                                                                            T-Shirts
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
                                        <a href="#!">Covers</a>
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
                                        <Link to="/listing">
                                            <SearchOutlined />
                                        </Link>
                                    </button>
                                </li>
                                <li>
                                    <VerifiedUserOutlined />
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
                                                        <VerifiedUserOutlined />
                                                        Profile
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#!">
                                                        <SettingsOutlined />
                                                        Settings
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#!">
                                                        <LogoutOutlined />
                                                        Logout
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <button type="button" className="cart_btn">
                                        <ShoppingCartOutlined />
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
                                    <SearchOutlined />
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
