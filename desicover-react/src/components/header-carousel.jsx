import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Autoplay } from "swiper";

import "swiper/css/effect-cube";

const SwiperCarousel = () => {
    var imagesList = ["/banner.png"];
    return (
        <div className="container">
            <Swiper
                modules={[EffectCube, Autoplay]}
                slidesPerView={1}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                effect="cube"
                loop={true}
                autoplay={{ delay: 3000 }}
            >
                {imagesList.map((data) => (
                    <SwiperSlide>
                        <div className="w-100">
                            <img
                                className="img-fluid"
                                // layout="fill"
                                src={data}
                                alt="image1"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SwiperCarousel;

// old swiper carousel
