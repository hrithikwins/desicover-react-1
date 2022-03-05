import { Link } from "react-router-dom";

const ListingSideBar = (props) => {
    return (
        <>
            <div className="sidebar-menu-wrapper">
                <div className="sidebar_mobile_menu modern_mobile_sidebar">
                    <button type="button" className="close_btn">
                        <i className="fal fa-times" />
                    </button>
                    <div className="brand_logo mb_50">
                        <a href="index.html">
                            <img src="/logo.png" alt="logo_not_found" />
                        </a>
                    </div>
                    <div className="form_item mb_50">
                        <input type="search" name="search" />
                        <button type="submit" className="submit_btn">
                            <i className="fal fa-search" />
                        </button>
                    </div>
                    <div className="mobile_menu_list mb_50 clearfix">
                        <ul className="ul_li_block clearfix">
                            <li className="active dropdown">
                                <a
                                    href="#!"
                                    data-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Home
                                </a>
                                <ul className="ul_li_block dropdown-menu">
                                    <li>
                                        <a href="home_carparts.html">
                                            Carparts
                                        </a>
                                    </li>
                                    <li>
                                        <a href="home_classic_ecommerce.html">
                                            Classic Ecommerce
                                        </a>
                                    </li>
                                    <li>
                                        <a href="home_creative_onelook.html">
                                            Creative Onelook
                                        </a>
                                    </li>
                                    <li>
                                        <a href="home_electronic.html">
                                            Electronic
                                        </a>
                                    </li>
                                    <li>
                                        <a href="home_fashion.html">Fashion</a>
                                    </li>
                                    <li>
                                        <a href="home_fashion_minimal.html">
                                            Fashion Minimal
                                        </a>
                                    </li>
                                    <li>
                                        <a href="home_furniture.html">
                                            Furniture
                                        </a>
                                    </li>
                                    <li>
                                        <a href="home_gadget.html">Gadget</a>
                                    </li>
                                    <li>
                                        <a href="home_lookbook_creative.html">
                                            Lookbook Creative
                                        </a>
                                    </li>
                                    <li>
                                        <a href="home_lookbook_slide.html">
                                            Lookbook Slide
                                        </a>
                                    </li>
                                    <li>
                                        <a href="home_medical.html">Medical</a>
                                    </li>
                                    <li>
                                        <a href="home_modern.html">Modern</a>
                                    </li>
                                    <li>
                                        <a href="home_modern_minimal.html">
                                            Modern Minimal
                                        </a>
                                    </li>
                                    <li>
                                        <a href="home_motorcycle.html">
                                            Motorcycle
                                        </a>
                                    </li>
                                    <li>
                                        <a href="home_parallax_shop.html">
                                            Parallax Shop
                                        </a>
                                    </li>
                                    <li>
                                        <a href="home_simple_shop.html">
                                            Simple Shop
                                        </a>
                                    </li>
                                    <li>
                                        <a href="home_single_story_black.html">
                                            Single Story Black
                                        </a>
                                    </li>
                                    <li>
                                        <a href="home_single_story_white.html">
                                            Single Story White
                                        </a>
                                    </li>
                                    <li>
                                        <a href="home_sports.html">Sports</a>
                                    </li>
                                    <li>
                                        <a href="home_supermarket.html">
                                            Supermarket
                                        </a>
                                    </li>
                                    <li>
                                        <a href="home_watch.html">Watch</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a
                                    href="#!"
                                    data-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Shop
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="dropdown ul_li_block">
                                        <a
                                            href="#!"
                                            data-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Carparts
                                        </a>
                                        <ul className="dropdown-menu ul_li_block">
                                            <li>
                                                <a href="carparts_shop.html">
                                                    Shop Page
                                                </a>
                                            </li>
                                            <li>
                                                <a href="carparts_shop_grid.html">
                                                    Shop Grid
                                                </a>
                                            </li>
                                            <li>
                                                <a href="carparts_shop_list.html">
                                                    Shop List
                                                </a>
                                            </li>
                                            <li>
                                                <a href="carparts_shop_details.html">
                                                    Shop Details
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <a
                                            href="#!"
                                            data-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Classic Ecommerce
                                        </a>
                                        <ul className="dropdown-menu ul_li_block">
                                            <li>
                                                <a href="classic_ecommerce_shop.html">
                                                    Shop Page
                                                </a>
                                            </li>
                                            <li>
                                                <a href="classic_ecommerce_shop_details.html">
                                                    Shop Details
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <a
                                            href="#!"
                                            data-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Electronic
                                        </a>
                                        <ul className="dropdown-menu ul_li_block">
                                            <li>
                                                <a href="electronic_shop.html">
                                                    Shop Page
                                                </a>
                                            </li>
                                            <li>
                                                <a href="electronic_shop_details.html">
                                                    Shop Details
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <a
                                            href="#!"
                                            data-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Fashion
                                        </a>
                                        <ul className="dropdown-menu ul_li_block">
                                            <li>
                                                <a href="fashion_shop.html">
                                                    Shop Page
                                                </a>
                                            </li>
                                            <li>
                                                <a href="fashion_shop_details.html">
                                                    Shop Details
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <a
                                            href="#!"
                                            data-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Fashion Minimal
                                        </a>
                                        <ul className="dropdown-menu ul_li_block">
                                            <li>
                                                <a href="fashion_minimal_shop.html">
                                                    Shop Page
                                                </a>
                                            </li>
                                            <li>
                                                <a href="fashion_minimal_shop_details.html">
                                                    Shop Details
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <a
                                            href="#!"
                                            data-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Fashion Minimal
                                        </a>
                                        <ul className="dropdown-menu ul_li_block">
                                            <li>
                                                <a href="fashion_minimal_shop.html">
                                                    Shop Page
                                                </a>
                                            </li>
                                            <li>
                                                <a href="fashion_minimal_shop_details.html">
                                                    Shop Details
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <a
                                            href="#!"
                                            data-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Furniture
                                        </a>
                                        <ul className="dropdown-menu ul_li_block">
                                            <li>
                                                <a href="furniture_shop.html">
                                                    Shop Page
                                                </a>
                                            </li>
                                            <li>
                                                <a href="furniture_shop_details.html">
                                                    Shop Details
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <a
                                            href="#!"
                                            data-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Gadget
                                        </a>
                                        <ul className="dropdown-menu ul_li_block">
                                            <li>
                                                <a href="gadget_shop.html">
                                                    Shop Page
                                                </a>
                                            </li>
                                            <li>
                                                <a href="gadget_shop_details.html">
                                                    Shop Details
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <a
                                            href="#!"
                                            data-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Medical
                                        </a>
                                        <ul className="dropdown-menu ul_li_block">
                                            <li>
                                                <a href="medical_shop.html">
                                                    Shop Page
                                                </a>
                                            </li>
                                            <li>
                                                <a href="medical_shop_details.html">
                                                    Shop Details
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <a
                                            href="#!"
                                            data-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Modern Minimal
                                        </a>
                                        <ul className="dropdown-menu ul_li_block">
                                            <li>
                                                <a href="modern_minimal_shop.html">
                                                    Shop Page
                                                </a>
                                            </li>
                                            <li>
                                                <a href="modern_minimal_shop_details.html">
                                                    Shop Details
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <a
                                            href="#!"
                                            data-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Modern
                                        </a>
                                        <ul className="dropdown-menu ul_li_block">
                                            <li>
                                                <a href="modern_shop.html">
                                                    Shop Page
                                                </a>
                                            </li>
                                            <li>
                                                <a href="modern_shop_details.html">
                                                    Shop Details
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <a
                                            href="#!"
                                            data-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Motorcycle
                                        </a>
                                        <ul className="dropdown-menu ul_li_block">
                                            <li>
                                                <a href="motorcycle_shop_grid.html">
                                                    Shop Grid
                                                </a>
                                            </li>
                                            <li>
                                                <a href="motorcycle_shop_list.html">
                                                    Shop List
                                                </a>
                                            </li>
                                            <li>
                                                <a href="motorcycle_shop_details.html">
                                                    Shop Details
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <a
                                            href="#!"
                                            data-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Simple Shop
                                        </a>
                                        <ul className="dropdown-menu ul_li_block">
                                            <li>
                                                <a href="simple_shop.html">
                                                    Shop Page
                                                </a>
                                            </li>
                                            <li>
                                                <a href="simple_shop_details.html">
                                                    Shop Details
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <a
                                            href="#!"
                                            data-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Sports
                                        </a>
                                        <ul className="dropdown-menu ul_li_block">
                                            <li>
                                                <a href="sports_shop.html">
                                                    Shop Page
                                                </a>
                                            </li>
                                            <li>
                                                <a href="sports_shop_details.html">
                                                    Shop Details
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <a
                                            href="#!"
                                            data-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Lookbook
                                        </a>
                                        <ul className="dropdown-menu ul_li_block">
                                            <li>
                                                <a href="lookbook_creative_shop.html">
                                                    Shop Page
                                                </a>
                                            </li>
                                            <li>
                                                <a href="lookbook_creative_shop_details.html">
                                                    Shop Details
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <a
                                            href="#!"
                                            data-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Shop Other Pages
                                        </a>
                                        <ul className="dropdown-menu ul_li_block">
                                            <li>
                                                <a href="#!">
                                                    <del>Shop Page</del>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="shop_details.html">
                                                    Shop Details
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a
                                    href="#!"
                                    data-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Pages
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="dropdown">
                                        <a
                                            href="#!"
                                            data-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Shop Inner Pages
                                        </a>
                                        <ul className="dropdown-menu">
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
                                    <li className="dropdown">
                                        <a
                                            href="#!"
                                            data-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Blogs
                                        </a>
                                        <ul className="dropdown-menu">
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
                                    <li className="dropdown">
                                        <a
                                            href="#!"
                                            data-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Compare
                                        </a>
                                        <ul className="dropdown-menu">
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
                                    <li className="dropdown">
                                        <a
                                            href="#!"
                                            data-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Register
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <a href="login.html">Login</a>
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
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <ul className="action_btns_group mb_50 ul_li clearfix">
                        <li>
                            <button type="button" className="user_btn">
                                <i className="fal fa-user" />
                            </button>
                        </li>
                        <li>
                            <button type="button" className="cart_btn">
                                <i className="fal fa-shopping-cart" />
                                <span className="btn_badge">2</span>
                            </button>
                        </li>
                    </ul>
                    <ul className="primary_social_links ul_li clearfix">
                        <li>
                            <a href="#!">
                                <i className="fab fa-instagram" />
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                <i className="fab fa-twitter" />
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                <i className="fab fa-facebook-f" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="overlay" />
            </div>
        </>
    );
};
export default ListingSideBar;
