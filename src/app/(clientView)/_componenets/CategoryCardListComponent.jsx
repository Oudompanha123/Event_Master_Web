'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { CategoryCardComponent } from './CategoryCardComponent';

export const CategoryCardListComponent = () => {
    return (
        <div>
            <Swiper
                spaceBetween={24}
                breakpoints={{
                    50: {
                        slidesPerView: 1.15,
                    },
                    640: {
                        slidesPerView: 1.15,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3.10
                    }
                }}
            >
                <SwiperSlide>
                    <CategoryCardComponent />
                </SwiperSlide>
                <SwiperSlide>
                    <CategoryCardComponent />
                </SwiperSlide>
                <SwiperSlide>
                    <CategoryCardComponent />
                </SwiperSlide>
                <SwiperSlide>
                    <CategoryCardComponent />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}