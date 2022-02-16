import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Autoplay } from "swiper";
import Image from "next/image";

import "swiper/css/effect-cube";

export const SwiperCarousel = () => {
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
                    <div className="vh-100">
                        <Image
                            class="img-fluid"
                            layout="fill"
                            src="/2.png"
                            alt="image1"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="vh-100">
                        <Image
                            class="img-fluid"
                            layout="fill"
                            src="/3.png"
                            alt="image1"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="vh-100">
                        <Image
                            class="img-fluid"
                            layout="fill"
                            src="/4.png"
                            alt="image1"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="vh-100">
                        <Image
                            class="img-fluid"
                            layout="fill"
                            src="/5.png"
                            alt="image1"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="vh-100">
                        <Image
                            class="img-fluid"
                            layout="fill"
                            src="/6.jpeg"
                            alt="image1"
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};
