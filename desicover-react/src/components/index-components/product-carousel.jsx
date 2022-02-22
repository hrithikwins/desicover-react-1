// import { useState, useRef, useEffect, useContext } from "react";
// import { ProductContext } from "../../context/product-context";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import ProductCard from "./product-card";

// import { ArrowRightOutlined } from "@mui/icons-material";

// import { Swiper, SwiperSlide } from "swiper/react";

// const useSwiperRef = () => {
//     const [wrapper, setWrapper] = useState(null);
//     const ref = useRef(null);

//     useEffect(() => {
//         setWrapper(ref.current);
//     }, []);

//     return [wrapper, ref];
// };

// const ProductCarousel = (props) => {
//     const [productData, getAllProducts] = useContext(ProductContext);
//     useEffect(() => {
//         getAllProducts();
//         console.log("product data is " + productData);
//         // eslint-disable-next-line
//     }, []);

//     return (
//         <>
//             <NewAdditions heading="New Additions" productData={productData} />
//         </>
//     );
// };
// export default ProductCarousel;

// const NewAdditions = ({ heading, productData }) => {
//     const isMobile = useMediaQuery("(max-width:1024px)");

//     return (
//         <>
//             <div className="container">
//                 <div className="product-carousel-container">
//                     <div className="d-flex justify-content-between align-items-center">
//                         <h1 className="p-md-5 px-2 pt-3 product-heading">
//                             &nbsp;{heading}
//                         </h1>
//                         <div className="py-md-5 text-decoration-none text-dark view-all-button">
//                             <a href="/listing">
//                                 <>
//                                     View All{" "}
//                                     <ArrowRightOutlined fontSize="large" />
//                                 </>
//                             </a>
//                         </div>
//                     </div>

//                     <div className="d-none d-md-block">
//                         <div className="px-md-5 product-carousel">
//                             <Swiper
//                                 spaceBetween={isMobile ? 2 : 20}
//                                 slidesPerView={isMobile ? 2 : 4}
//                                 className="d-none d-md-block slideshow-container"
//                             >
//                                 {productData.map((product, index) => (
//                                     <SwiperSlide
//                                         className="slideshow-content"
//                                         key={index}
//                                     >
//                                         <ProductCard
//                                             key={product.id}
//                                             product={product}
//                                         />
//                                     </SwiperSlide>
//                                     //     </div>
//                                     //   </div>
//                                 ))}
//                             </Swiper>
//                         </div>
//                     </div>

//                     {/* mobile view */}
//                     <div className="row">
//                         {productData.map((product, index) => (
//                             <div
//                                 className="d-block d-md-none  slideshow-container product-carousel col-6"
//                                 key="name"
//                             >
//                                 <div className="slideshow-content">
//                                     <ProductCard
//                                         key={product.id}
//                                         product={product}
//                                     />
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };
