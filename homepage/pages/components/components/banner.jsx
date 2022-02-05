// import { useState } from "react";
import DiscountCard from "./cards/discount-card/discountCard";
import FeaturedProduct from "./cards/featured-product/featured-product";
// import banner from "../../images/banner.png";

// import SwiperCore, {
//   EffectFade,
//   Autoplay,
//   Pagination,
//   Scrollbar,
// } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";

function  Banner() {
//   const [windowWidth] = useState(window.innerWidth);
//   const [isMobile] = useState(windowWidth > 750 ? false : true);
//   SwiperCore.use([EffectFade]);
//   SwiperCore.use([Autoplay]);
//   SwiperCore.use([Pagination, Scrollbar]);

  return (
    <div className="d-flex p-md-2 flex-md-row flex-column">
      <div className="w-100 p-md-2" style={{ borderRadius: "40px" }}>
        {/* <Swiper
          spaceBetween={20}
          slidesPerView={isMobile ? 1 : 2}
          autoplay={isMobile ? true : false}
        > */}
        <div className="d-flex w-100">
          <div
            className="col-md-8 col-12 px-2"
            style={{ borderRadius: "40px" }}
          >
            <FeaturedProduct
              productName="DESI CHAAT "
              productDesc="Try our Desi chaat and unleash the spicy and crispy adventure at Daana Paani Grocers"
            />
          </div>
          <div className="col-md-4 col-12 d-md-block d-none px-2">
            <DiscountCard
              percentage="10"
              code="FRUITS2021"
              description="Given 10% off all seasonal fruits on your first purchase"
              shortTitle="Spring promo code:"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
