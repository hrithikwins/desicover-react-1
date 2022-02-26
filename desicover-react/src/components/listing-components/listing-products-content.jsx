const ListingProductContent = (props) => {
    return (
        <>
            <section className="product_section sec_ptb_100 pb-0 clearfix">
                <div className="carparts_filetr_bar clearfix">
                    <div className="row align-items-center justify-content-lg-between">
                        <div className="col-lg-6 col-md-6">
                            <h4 className="result_text">
                                Showing 1 to 10 of 243 products
                            </h4>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <form action="#">
                                <div className="option_select d-flex align-items-center mb-0">
                                    <span className="option_title text-uppercase">
                                        Sort by:
                                    </span>
                                    <select>
                                        <option data-display="Select Your Option">
                                            Nothing
                                        </option>
                                        <option value={1} selected>
                                            {" "}
                                            Popularity
                                        </option>
                                        <option value={2}>
                                            Another option
                                        </option>
                                        <option value={3} disabled>
                                            A disabled option
                                        </option>
                                        <option value={4}>Potato</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                        <div className="modern_product_item bg_lightyellow text-uppercase">
                            <ul className="product_label ul_li_right clearfix">
                                <li className="bg_black">New</li>
                                <li className="bg_black">Sale</li>
                            </ul>
                            <div className="item_image">
                                <img
                                    src="assets/images/shop/modern/img_01.png"
                                    alt="image_not_found"
                                />
                            </div>
                            <div className="item_content">
                                <ul className="rating_star ul_li clearfix">
                                    <li>
                                        <i className="fas fa-star" />
                                    </li>
                                    <li>
                                        <i className="fas fa-star" />
                                    </li>
                                    <li>
                                        <i className="fas fa-star" />
                                    </li>
                                    <li>
                                        <i className="fas fa-star" />
                                    </li>
                                    <li>
                                        <i className="fal fa-star" />
                                    </li>
                                </ul>
                                <span className="item_category">
                                    CLOTHING SIZE CHART
                                </span>
                                <h3 className="item_title">
                                    <a className="underline_effect" href="#!">
                                        Merino Small
                                    </a>
                                </h3>
                                <div className="effect_wrap">
                                    <span className="item_price">
                                        <strong>$15.00</strong>{" "}
                                        <del>$45.00</del>
                                    </span>
                                    <ul className="action_btns ul_li clearfix">
                                        <li>
                                            <a className="bg_black" href="#!">
                                                ADD TO CART
                                            </a>
                                        </li>
                                        <li>
                                            <a className="bg_white" href="#!">
                                                <i className="fal fa-search" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                        <div className="modern_product_item bg_gray text-uppercase">
                            <ul className="product_label ul_li_right clearfix">
                                <li className="bg_black">New</li>
                                <li className="bg_black">Sale</li>
                            </ul>
                            <div className="item_image">
                                <img
                                    src="assets/images/shop/modern/img_02.png"
                                    alt="image_not_found"
                                />
                            </div>
                            <div className="item_content">
                                <ul className="rating_star ul_li clearfix">
                                    <li>
                                        <i className="fas fa-star" />
                                    </li>
                                    <li>
                                        <i className="fas fa-star" />
                                    </li>
                                    <li>
                                        <i className="fas fa-star" />
                                    </li>
                                    <li>
                                        <i className="fas fa-star" />
                                    </li>
                                    <li>
                                        <i className="fal fa-star" />
                                    </li>
                                </ul>
                                <span className="item_category">
                                    CLOTHING SIZE CHART
                                </span>
                                <h3 className="item_title">
                                    <a className="underline_effect" href="#!">
                                        Merino Small
                                    </a>
                                </h3>
                                <div className="effect_wrap">
                                    <span className="item_price">
                                        <strong>$15.00</strong>{" "}
                                        <del>$45.00</del>
                                    </span>
                                    <ul className="action_btns ul_li clearfix">
                                        <li>
                                            <a className="bg_black" href="#!">
                                                ADD TO CART
                                            </a>
                                        </li>
                                        <li>
                                            <a className="bg_white" href="#!">
                                                <i className="fal fa-search" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                        <div className="modern_product_item bg_sweet1 text-uppercase">
                            <ul className="product_label ul_li_right clearfix">
                                <li className="bg_black">New</li>
                                <li className="bg_black">Sale</li>
                            </ul>
                            <div className="item_image">
                                <img
                                    src="assets/images/shop/modern/img_03.png"
                                    alt="image_not_found"
                                />
                            </div>
                            <div className="item_content">
                                <ul className="rating_star ul_li clearfix">
                                    <li>
                                        <i className="fas fa-star" />
                                    </li>
                                    <li>
                                        <i className="fas fa-star" />
                                    </li>
                                    <li>
                                        <i className="fas fa-star" />
                                    </li>
                                    <li>
                                        <i className="fas fa-star" />
                                    </li>
                                    <li>
                                        <i className="fal fa-star" />
                                    </li>
                                </ul>
                                <span className="item_category">
                                    CLOTHING SIZE CHART
                                </span>
                                <h3 className="item_title">
                                    <a className="underline_effect" href="#!">
                                        Merino Small
                                    </a>
                                </h3>
                                <div className="effect_wrap">
                                    <span className="item_price">
                                        <strong>$15.00</strong>{" "}
                                        <del>$45.00</del>
                                    </span>
                                    <ul className="action_btns ul_li clearfix">
                                        <li>
                                            <a className="bg_black" href="#!">
                                                ADD TO CART
                                            </a>
                                        </li>
                                        <li>
                                            <a className="bg_white" href="#!">
                                                <i className="fal fa-search" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                        <div className="modern_product_item bg_past text-uppercase">
                            <ul className="product_label ul_li_right clearfix">
                                <li className="bg_black">New</li>
                                <li className="bg_black">Sale</li>
                            </ul>
                            <div className="item_image">
                                <img
                                    src="assets/images/shop/modern/img_04.png"
                                    alt="image_not_found"
                                />
                            </div>
                            <div className="item_content">
                                <ul className="rating_star ul_li clearfix">
                                    <li>
                                        <i className="fas fa-star" />
                                    </li>
                                    <li>
                                        <i className="fas fa-star" />
                                    </li>
                                    <li>
                                        <i className="fas fa-star" />
                                    </li>
                                    <li>
                                        <i className="fas fa-star" />
                                    </li>
                                    <li>
                                        <i className="fal fa-star" />
                                    </li>
                                </ul>
                                <span className="item_category">
                                    CLOTHING SIZE CHART
                                </span>
                                <h3 className="item_title">
                                    <a className="underline_effect" href="#!">
                                        Merino Small
                                    </a>
                                </h3>
                                <div className="effect_wrap">
                                    <span className="item_price">
                                        <strong>$15.00</strong>{" "}
                                        <del>$45.00</del>
                                    </span>
                                    <ul className="action_btns ul_li clearfix">
                                        <li>
                                            <a className="bg_black" href="#!">
                                                ADD TO CART
                                            </a>
                                        </li>
                                        <li>
                                            <a className="bg_white" href="#!">
                                                <i className="fal fa-search" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                        <div className="modern_product_item bg_sweet2 text-uppercase">
                            <ul className="product_label ul_li_right clearfix">
                                <li className="bg_black">New</li>
                                <li className="bg_black">Sale</li>
                            </ul>
                            <div className="item_image">
                                <img
                                    src="assets/images/shop/modern/img_05.png"
                                    alt="image_not_found"
                                />
                            </div>
                            <div className="item_content">
                                <ul className="rating_star ul_li clearfix">
                                    <li>
                                        <i className="fas fa-star" />
                                    </li>
                                    <li>
                                        <i className="fas fa-star" />
                                    </li>
                                    <li>
                                        <i className="fas fa-star" />
                                    </li>
                                    <li>
                                        <i className="fas fa-star" />
                                    </li>
                                    <li>
                                        <i className="fal fa-star" />
                                    </li>
                                </ul>
                                <span className="item_category">
                                    CLOTHING SIZE CHART
                                </span>
                                <h3 className="item_title">
                                    <a className="underline_effect" href="#!">
                                        Merino Small
                                    </a>
                                </h3>
                                <div className="effect_wrap">
                                    <span className="item_price">
                                        <strong>$15.00</strong>{" "}
                                        <del>$45.00</del>
                                    </span>
                                    <ul className="action_btns ul_li clearfix">
                                        <li>
                                            <a className="bg_black" href="#!">
                                                ADD TO CART
                                            </a>
                                        </li>
                                        <li>
                                            <a className="bg_white" href="#!">
                                                <i className="fal fa-search" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                        <div className="modern_product_item bg_pink text-uppercase">
                            <ul className="product_label ul_li_right clearfix">
                                <li className="bg_black">New</li>
                                <li className="bg_black">Sale</li>
                            </ul>
                            <div className="item_image">
                                <img
                                    src="assets/images/shop/modern/img_06.png"
                                    alt="image_not_found"
                                />
                            </div>
                            <div className="item_content">
                                <ul className="rating_star ul_li clearfix">
                                    <li>
                                        <i className="fas fa-star" />
                                    </li>
                                    <li>
                                        <i className="fas fa-star" />
                                    </li>
                                    <li>
                                        <i className="fas fa-star" />
                                    </li>
                                    <li>
                                        <i className="fas fa-star" />
                                    </li>
                                    <li>
                                        <i className="fal fa-star" />
                                    </li>
                                </ul>
                                <span className="item_category">
                                    CLOTHING SIZE CHART
                                </span>
                                <h3 className="item_title">
                                    <a className="underline_effect" href="#!">
                                        Merino Small
                                    </a>
                                </h3>
                                <div className="effect_wrap">
                                    <span className="item_price">
                                        <strong>$15.00</strong>{" "}
                                        <del>$45.00</del>
                                    </span>
                                    <ul className="action_btns ul_li clearfix">
                                        <li>
                                            <a className="bg_black" href="#!">
                                                ADD TO CART
                                            </a>
                                        </li>
                                        <li>
                                            <a className="bg_white" href="#!">
                                                <i className="fal fa-search" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                        <div className="modern_product_item bg_lightblue text-uppercase">
                            <ul className="product_label ul_li_right clearfix">
                                <li className="bg_black">New</li>
                                <li className="bg_black">Sale</li>
                            </ul>
                            <div className="item_image">
                                <img
                                    src="assets/images/shop/modern/img_07.png"
                                    alt="image_not_found"
                                />
                            </div>
                            <div className="item_content">
                                <ul className="rating_star ul_li clearfix">
                                    <li>
                                        <i className="fas fa-star" />
                                    </li>
                                    <li>
                                        <i className="fas fa-star" />
                                    </li>
                                    <li>
                                        <i className="fas fa-star" />
                                    </li>
                                    <li>
                                        <i className="fas fa-star" />
                                    </li>
                                    <li>
                                        <i className="fal fa-star" />
                                    </li>
                                </ul>
                                <span className="item_category">
                                    CLOTHING SIZE CHART
                                </span>
                                <h3 className="item_title">
                                    <a className="underline_effect" href="#!">
                                        Merino Small
                                    </a>
                                </h3>
                                <div className="effect_wrap">
                                    <span className="item_price">
                                        <strong>$15.00</strong>{" "}
                                        <del>$45.00</del>
                                    </span>
                                    <ul className="action_btns ul_li clearfix">
                                        <li>
                                            <a className="bg_black" href="#!">
                                                ADD TO CART
                                            </a>
                                        </li>
                                        <li>
                                            <a className="bg_white" href="#!">
                                                <i className="fal fa-search" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                        <div className="modern_product_item bg_pink text-uppercase">
                            <ul className="product_label ul_li_right clearfix">
                                <li className="bg_black">New</li>
                                <li className="bg_black">Sale</li>
                            </ul>
                            <div className="item_image">
                                <img
                                    src="assets/images/shop/modern/img_08.png"
                                    alt="image_not_found"
                                />
                            </div>
                            <div className="item_content">
                                <ul className="rating_star ul_li clearfix">
                                    <li>
                                        <i className="fas fa-star" />
                                    </li>
                                    <li>
                                        <i className="fas fa-star" />
                                    </li>
                                    <li>
                                        <i className="fas fa-star" />
                                    </li>
                                    <li>
                                        <i className="fas fa-star" />
                                    </li>
                                    <li>
                                        <i className="fal fa-star" />
                                    </li>
                                </ul>
                                <span className="item_category">
                                    CLOTHING SIZE CHART
                                </span>
                                <h3 className="item_title">
                                    <a className="underline_effect" href="#!">
                                        Merino Small
                                    </a>
                                </h3>
                                <div className="effect_wrap">
                                    <span className="item_price">
                                        <strong>$15.00</strong>{" "}
                                        <del>$45.00</del>
                                    </span>
                                    <ul className="action_btns ul_li clearfix">
                                        <li>
                                            <a className="bg_black" href="#!">
                                                ADD TO CART
                                            </a>
                                        </li>
                                        <li>
                                            <a className="bg_white" href="#!">
                                                <i className="fal fa-search" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                        <div className="modern_product_item bg_light text-uppercase">
                            <ul className="product_label ul_li_right clearfix">
                                <li className="bg_black">New</li>
                                <li className="bg_black">Sale</li>
                            </ul>
                            <div className="item_image">
                                <img
                                    src="assets/images/shop/modern/img_09.png"
                                    alt="image_not_found"
                                />
                            </div>
                            <div className="item_content">
                                <ul className="rating_star ul_li clearfix">
                                    <li>
                                        <i className="fas fa-star" />
                                    </li>
                                    <li>
                                        <i className="fas fa-star" />
                                    </li>
                                    <li>
                                        <i className="fas fa-star" />
                                    </li>
                                    <li>
                                        <i className="fas fa-star" />
                                    </li>
                                    <li>
                                        <i className="fal fa-star" />
                                    </li>
                                </ul>
                                <span className="item_category">
                                    CLOTHING SIZE CHART
                                </span>
                                <h3 className="item_title">
                                    <a className="underline_effect" href="#!">
                                        Merino Small
                                    </a>
                                </h3>
                                <div className="effect_wrap">
                                    <span className="item_price">
                                        <strong>$15.00</strong>{" "}
                                        <del>$45.00</del>
                                    </span>
                                    <ul className="action_btns ul_li clearfix">
                                        <li>
                                            <a className="bg_black" href="#!">
                                                ADD TO CART
                                            </a>
                                        </li>
                                        <li>
                                            <a className="bg_white" href="#!">
                                                <i className="fal fa-search" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default ListingProductContent;
