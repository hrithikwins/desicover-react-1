const Categories = (props) => {
    return (
        <>
            <section class="category_section sec_ptb_100 pb-0 clearfix">
                <div class="container">
                    <div class="ecommerce_category_masonry grid">
                        <div class="grid-sizer"></div>
                        <div class="grid-item w_66">
                            <div class="ce_offer_carousel position-relative clearfix">
                                <div
                                    class="slideshow1_slider"
                                    data-slick='{"dots": false}'
                                >
                                    <div class="item">
                                        <div class="ce_offer_fullimage2 offer_fullimage text-white">
                                            <img
                                                src="https://images.pexels.com/photos/4195323/pexels-photo-4195323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                                alt="image_not_found"
                                            />
                                            <div class="item_content">
                                                <h3 class="item_title text-white">
                                                    Special Offer
                                                </h3>
                                                <p>
                                                    Lorem ipsum dolor sit amet
                                                    domin Quaequ e an mea
                                                </p>
                                                <a
                                                    class="custom_btn bg_white text-uppercase"
                                                    href="#!"
                                                >
                                                    View Collection
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel_nav clearfix">
                                    <button type="button" class="left_arrow">
                                        <i class="fal fa-angle-left"></i>
                                    </button>
                                    <button type="button" class="right_arrow">
                                        <i class="fal fa-angle-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="grid-item">
                            <div class="ecommerce_category_fullimage">
                                <img
                                    src="https://images.pexels.com/photos/4195323/pexels-photo-4195323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                    alt="image_not_found"
                                />
                                <h3 class="item_title">
                                    <a href="#!">Cropped Pointelle</a>
                                </h3>
                            </div>
                        </div>

                        <div class="grid-item">
                            <div class="ecommerce_category_fullimage">
                                <img
                                    src="https://images.pexels.com/photos/4195323/pexels-photo-4195323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                    alt="image_not_found"
                                />
                                <h3 class="item_title">
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
