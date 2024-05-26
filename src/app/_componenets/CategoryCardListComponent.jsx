'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { CategoryCardComponent } from './CategoryCardComponent';

export const CategoryCardListComponent = () => {
    return (
        <div>
            <Swiper
                spaceBetween={24}
                slidesPerView={2.5}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
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