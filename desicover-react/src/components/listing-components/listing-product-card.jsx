import { Button } from "@mui/material";
import { purple } from "@mui/material/colors";
import { useTheme } from "@mui/material";

const ListingProductCard = ({ productData }) => {
    const theme = useTheme;
    return (
        <>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <div className="modern_product_item bg_lightyellow text-uppercase">
                    <ul className="product_label ul_li_right clearfix">
                        <li className="bg_black">{productData.onSale}</li>
                    </ul>
                    <div className="item_image">
                        <img
                            // src={productData.image}
                            src={
                                "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fn3.sdlcdn.com%2Fimgs%2Ff%2Fl%2Fb%2FXiaomi-Redmi-3s-Prime-Flip-SDL618840124-3-88c94.jpg&f=1&nofb=1"
                            }
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
                            <a
                                className="text-decoration-none product-name"
                                href={`/product-description/${productData.productData.id}`}
                            >
                                {productData.productData.name}
                            </a>
                        </span>
                        <h3 className="item_title">
                            <a className="underline_effect" href="#!">
                                {productData.productData.name}
                            </a>
                        </h3>
                        <div className="effect_wrap">
                            <span className="item_price">
                                <strong>
                                    ₹{productData.productData.price}
                                </strong>{" "}
                                <del>₹{productData.productData.price}</del>
                            </span>
                            <ul className="action_btns ul_li clearfix">
                                <li>
                                    <Button
                                        className="text-white"
                                        color="primary"
                                        variant="contained"
                                    >
                                        ADD TO CART
                                    </Button>
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
        </>
    );
};
export default ListingProductCard;
