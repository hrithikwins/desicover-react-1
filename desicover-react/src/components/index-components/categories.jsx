const Categories = (props) => {
    return (
        <>
            <section className="category_section sec_ptb_100 pb-0 clearfix">
                <div className="container">
                    <div className="ecommerce_category_masonry grid">
                        <div className="grid-sizer"></div>
                        <div className="grid-item w_66">
                            <div className="ce_offer_carousel position-relative clearfix">
                                <div
                                    className="slideshow1_slider"
                                    data-slick='{"dots": false}'
                                >
                                    <div className="item">
                                        <div className="ce_offer_fullimage2 offer_fullimage text-white">
                                            <img
                                                src="https://images.pexels.com/photos/4195323/pexels-photo-4195323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                                alt="image_not_found"
                                            />
                                            <div className="item_content">
                                                <h3 className="item_title text-white">
                                                    Special Offer
                                                </h3>
                                                <p>
                                                    Lorem ipsum dolor sit amet
                                                    domin Quaequ e an mea
                                                </p>
                                                <a
                                                    className="custom_btn bg_white text-uppercase"
                                                    href="#!"
                                                >
                                                    View Collection
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel_nav clearfix">
                                    <button
                                        type="button"
                                        className="left_arrow"
                                    >
                                        <i className="fal fa-angle-left"></i>
                                    </button>
                                    <button
                                        type="button"
                                        className="right_arrow"
                                    >
                                        <i className="fal fa-angle-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="grid-item">
                            <div className="ecommerce_category_fullimage">
                                <img
                                    src="https://images.pexels.com/photos/4195323/pexels-photo-4195323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                    alt="image_not_found"
                                />
                                <h3 className="item_title">
                                    <a href="#!">Cropped Pointelle</a>
                                </h3>
                            </div>
                        </div>

                        <div className="grid-item">
                            <div className="ecommerce_category_fullimage">
                                <img
                                    src="https://images.pexels.com/photos/4195323/pexels-photo-4195323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                    alt="image_not_found"
                                />
                                <h3 className="item_title">
                                    <a href="#!">Pouch Pocket Jacket</a>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Categories;
