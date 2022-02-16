import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Autoplay } from "swiper";

import "swiper/css/effect-cube";

const SwiperCarousel = () => {
    return (
        <div>
            <Swiper
                modules={[EffectCube, Autoplay]}
                slidesPerView={1}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                effect="cube"
                loop={true}
                autoplay={{ delay: 3000 }}
            >
                <SwiperSlide>
                    <div className="w-100">
                        <img
                            className="img-fluid"
                            layout="fill"
                            src="https://images.pexels.com/photos/6311650/pexels-photo-6311650.jpeg?auto=compress&cs=tinysrgb&dpr=1"
                            alt="image1"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-100">
                        <img
                            className="img-fluid"
                            // layout="fill"
                            src="https://images.pexels.com/photos/6310889/pexels-photo-6310889.jpeg?auto=compress&cs=tinysrgb&dpr=1"
                            alt="image1"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-100">
                        <img
                            className="img-fluid"
                            // layout="fill"
                            src="https://images.pexels.com/photos/7475142/pexels-photo-7475142.jpeg?auto=compress&cs=tinysrgb&dpr=1"
                            alt="image1"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-100">
                        <img
                            className="img-fluid"
                            // layout="fill"
                            src="https://images.pexels.com/photos/7742544/pexels-photo-7742544.jpeg?auto=compress&cs=tinysrgb&dpr=1"
                            alt="image1"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-100">
                        <img
                            className="img-fluid"
                            // layout="fill"

                            src="https://images.pexels.com/photos/958960/pexels-photo-958960.jpeg?auto=compress&cs=tinysrgb&dpr=1"
                            alt="image1"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-100">
                        <img
                            className="img-fluid"
                            // layout="fill"

                            src="https://images.pexels.com/photos/2228576/pexels-photo-2228576.jpeg?auto=compress&cs=tinysrgb&dpr=1"
                            alt="image1"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-100">
                        <img
                            className="img-fluid"
                            // layout="fill"

                            src="https://images.pexels.com/photos/806627/pexels-photo-806627.jpeg?auto=compress&cs=tinysrgb&dpr=1"
                            alt="image1"
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default SwiperCarousel;
