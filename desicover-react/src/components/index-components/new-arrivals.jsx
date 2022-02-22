import ArrivalProducts from "./new-arrivals/arrivals-products";
import { Swiper, SwiperSlide } from "swiper/react";
import useMediaQuery from "@mui/material/useMediaQuery";

const NewArrivals = (props) => {
    const isMobile = useMediaQuery("(max-width:1024px)");
    var productData = [
        "hello",
        "othre",
        "hello",
        "hello",
        "hello",
        "hello",
        "hello",
        "hello",
        "hello",
        "hello",
        "hello",
        "hello",
        "hello",
        "hello",
        "hello",
    ];

    return (
        <>
            <div className="container pt-5">
                <div className="text-center">
                    <h6 className="pb-2">NEW ARRIVALS</h6>
                    <div className="d-block d-md-block">
                        <div className="px-md-5 product-carousel">
                            <Swiper
                                spaceBetween={isMobile ? 2 : 20}
                                slidesPerView={isMobile ? 2 : 4}
                                className="d-block d-md-block slideshow-container"
                            >
                                {productData.map((product, index) => (
                                    <SwiperSlide
                                        className="slideshow-content"
                                        key={index}
                                    >
                                        {/* <ProductCard
                                            key={product.id}
                                            product={product}
                                        /> */}
                                        <ArrivalProducts />
                                    </SwiperSlide>
                                    //     </div>
                                    //   </div>
                                ))}
                            </Swiper>
                        </div>
                    </div>

                    {/* mobile view */}
                    {/* <div className="row">
                        {productData.map((product, index) => (
                            <div
                                className="d-block d-md-none  slideshow-container product-carousel col-6"
                                key="name"
                            >
                                <div className="slideshow-content">
                                    <ArrivalProducts />

                                    <ProductCard
                                        key={product.id}
                                        product={product}
                                    />
                                </div>
                            </div>
                        ))}
                    </div> */}
                    {/* <div className="row">
                        <div className="col-6">
                            <ArrivalProducts />
                        </div>
                        <div className="col-6">
                            <ArrivalProducts />
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    );
};
export default NewArrivals;
