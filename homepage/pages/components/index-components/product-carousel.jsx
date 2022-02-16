import { useState, useRef, useEffect, useContext } from "react";
import { ProductContext } from "../../context/product-context";
import useMediaQuery from "@mui/material/useMediaQuery";
import ProductCard from "./product-card";

import {
    ArrowLeftOutlined,
    ArrowRightOutlined,
    Vibration,
} from "@mui/icons-material";

import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

const useSwiperRef = () => {
    const [wrapper, setWrapper] = useState(null);
    const ref = useRef(null);

    useEffect(() => {
        setWrapper(ref.current);
    }, []);

    return [wrapper, ref];
};

const ProductCarousel = (props) => {
    const [productData, getAllProducts] = useContext(ProductContext);
    useEffect(() => {
        getAllProducts();
        console.log("product data is " + productData);
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <NewAdditions heading="New Additions" productData={productData} />
        </>
    );
};
export default ProductCarousel;

const NewAdditions = ({ heading, productData }) => {
    // const [nextEl, nextElRef] = useSwiperRef();
    // const [prevEl, prevElRef] = useSwiperRef();
    const isMobile = useMediaQuery("(max-width:1024px)");

    return (
        <>
            <div className="product-carousel-container">
                <div className="d-flex justify-content-between align-items-center">
                    <h1 className="p-md-5 px-2 pt-3 product-heading">
                        {/* <Vibration style={{ fontSize: "150%" }} /> */}
                        &nbsp;{heading}
                    </h1>

                    <div className="py-md-5 text-decoration-none text-dark view-all-button">
                        <Link href="/listing">
                            <>
                                View All <ArrowRightOutlined fontSize="large" />
                            </>
                        </Link>
                    </div>
                </div>
                {/* <div className="row"> */}
                <div className="d-none d-md-block">
                    <div className="px-md-5 product-carousel">
                        {/* <button ref={prevElRef} className="prev-button">
                            <ArrowLeftOutlined />{" "}
                        </button>
                        <button ref={nextElRef} className="next-button">
                            <ArrowRightOutlined />{" "}
                        </button> */}

                        <Swiper
                            spaceBetween={isMobile ? 2 : 20}
                            slidesPerView={isMobile ? 2 : 4}
                            // navigation={{
                            //     prevEl,
                            //     nextEl,
                            // }}
                            className="d-none d-md-block slideshow-container"
                            //   navigation={{ hideOnClick: true }}
                            //   pagination={{ clickable: true }}
                            //   scrollbar={{ draggable: true }}
                            //   onSwiper={(swiper) => console.log(swiper)}
                            //   onSlideChange={() => console.log("slide change")}
                        >
                            {productData.map((product, index) => (
                                //   <div className="col-sm-6 col-md-3 col-lg-4 col-xl-3 col-xxl-2 px-4">
                                //     <div className="d-flex flex-column mb-4">
                                <SwiperSlide className="slideshow-content">
                                    <ProductCard
                                        key={product._id}
                                        product={product}
                                    />
                                </SwiperSlide>
                                //     </div>
                                //   </div>
                            ))}
                        </Swiper>
                    </div>
                </div>
                <div className="row">
                    {productData.map((product, index) => (
                        <div className="d-block d-md-none  slideshow-container product-carousel col-6">
                            <div className="slideshow-content">
                                <ProductCard
                                    key={product._id}
                                    product={product}
                                />
                            </div>
                        </div>
                    ))}
                    {/* </div> */}
                    {/* <Link href="checkout">Checkout</Link> */}
                </div>
            </div>
        </>
    );
};
