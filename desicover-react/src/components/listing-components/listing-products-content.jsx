import { ProductContext } from "../../context/product-context";
import ListingProductCard from "./listing-product-card";
import { useContext } from "react";

const ListingProductContent = (props) => {
    const [productData, getAllProducts] = useContext(ProductContext);
    return (
        <>
            <section className="product_section sec_ptb_100 pb-0 clearfix">
                <div className="carparts_filetr_bar clearfix">
                    <div className="row align-items-center justify-content-lg-between">
                        <div className="col-lg-6 col-md-6">
                            <h4 className="result_text">
                                Showing 1 to 10 of 24 products
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
                    {productData.map((data) => {
                        return (
                            <>
                                {/* <Link to="/"> */}
                                <ListingProductCard productData={data} />
                                {/* </Link> */}
                            </>
                        );
                    })}
                </div>
            </section>
        </>
    );
};
export default ListingProductContent;
