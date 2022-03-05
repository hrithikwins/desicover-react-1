import { Link } from "react-router-dom";

const SimpleProductCard = ({ data }) => {
    return (
        <>
            <div className="element-item">
                <div className="ecommerce_product_grid">
                    <ul className="product_label ul_li clearfix">
                        <li data-bg-color="#93be2b">New</li>
                    </ul>
                    <div className="tab-content">
                        <div id="ptab1_1" className="tab-pane active">
                            <div className="item_image">
                                <img
                                    src="https://images.pexels.com/photos/4195323/pexels-photo-4195323.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=lis"
                                    alt="image_not_found"
                                />
                            </div>
                        </div>
                        {/* <div id="ptab1_2" className="tab-pane fade">
                            <div className="item_image">
                                <img
                                    src="https://images.pexels.com/photos/4195323/pexels-photo-4195323.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                    alt="image_not_found"
                                />
                            </div>
                        </div>
                        <div id="ptab1_3" className="tab-pane fade">
                            <div className="item_image">
                                <img
                                    src="https://images.pexels.com/photos/4195323/pexels-photo-4195323.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                    alt="image_not_found"
                                />
                            </div>
                        </div> */}
                        {/* <ul className="product_action_btns ul_li_center clearfix">
                            <li>
                                <a
                                    className="tooltips"
                                    data-placement="top"
                                    title="Add To Wishlist"
                                    href="#!"
                                >
                                    <i className="fal fa-heart" />
                                </a>
                            </li>
                            <li>
                                <a
                                    className="tooltips"
                                    data-placement="top"
                                    title="Add To Cart"
                                    href="#!"
                                >
                                    <i className="fal fa-shopping-basket" />
                                </a>
                            </li>
                            <li>
                                <a
                                    className="tooltips"
                                    data-placement="top"
                                    title="Quick View"
                                    href="#!"
                                    data-toggle="modal"
                                    data-target="#quickview_modal"
                                >
                                    <i className="fal fa-search" />
                                </a>
                            </li>
                        </ul> */}
                    </div>
                    <div className="item_content">
                        <h3 className="item_title">
                            <a href="#!">{data.productData.name}</a>
                        </h3>
                        <span className="item_price">
                            <strong>{data.productData.price}</strong>
                            <del>{data.productData.price}</del>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};
export default SimpleProductCard;
