import { ProductContext } from "../../context/product-context";
import { useContext } from "react";
import SimpleProductCard from "./simple-product-card";
import { Link } from "react-router-dom";

const AllProducts = (props) => {
    const [productData, getAllProducts] = useContext(ProductContext);
    return (
        <>
            <section class="product_section sec_ptb_100 clearfix">
                <div class="container">
                    <div class="row mb_30 align-items-center justify-content-lg-between">
                        <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                            <div class="ecommerce_section_title">
                                <h2 class="title_text mb-0">
                                    Popular Products
                                </h2>
                            </div>
                        </div>

                        {/* <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                            <ul class="button-group filters-button-group ul_li_right clearfix">
                                <li>
                                    <button class="active" data-filter="*">
                                        All
                                    </button>
                                </li>
                                <li>
                                    <button data-filter=".fall">Fall</button>
                                </li>
                                <li>
                                    <button data-filter=".blouse">
                                        Blouse
                                    </button>
                                </li>
                                <li>
                                    <button data-filter=".dresses">
                                        Dresses
                                    </button>
                                </li>
                                <li>
                                    <button data-filter=".tops">Tops</button>
                                </li>
                                <li>
                                    <button data-filter=".bodysuits">
                                        Bodysuits
                                    </button>
                                </li>
                                <li>
                                    <span
                                        class="filter_sidebar_btn"
                                        data-bg-color="#f9f9f9"
                                    >
                                        <i class="far fa-bars"></i>
                                        FILTER
                                    </span>
                                </li>
                            </ul>
                        </div> */}
                    </div>

                    <div class="element-grid column4_element_grid mb_50">
                        {productData.map((data) => {
                            return (
                                <>
                                    {/* <Link to="/"> */}
                                    <SimpleProductCard data={data} />
                                    {/* </Link> */}
                                </>
                            );
                        })}
                    </div>

                    {/* <div class="load_more text-center clearfix">
                        <a class="custom_btn bg_gray text-uppercase" href="#!">
                            Load More
                        </a>
                    </div> */}
                </div>
            </section>
        </>
    );
};
export default AllProducts;
