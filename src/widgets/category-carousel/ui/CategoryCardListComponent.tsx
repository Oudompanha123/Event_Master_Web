'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { CategoryCardComponent } from "@/entities/category";
import { posterSrc } from "@/shared/lib/poster";

export const CategoryCardListComponent = ({ data }) => (
    <Swiper
        spaceBetween={24}
        breakpoints={{
            0: { slidesPerView: 1.15 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3.1 },
        }}
    >
        {(data?.payload ?? []).map((x) => (
            <SwiperSlide key={x?.eventId}>
                <CategoryCardComponent
                    title={x?.eventName}
                    content={x?.description}
                    cate={x?.categoryName}
                    eventId={x?.eventId}
                    img={posterSrc(x?.poster)}
                />
            </SwiperSlide>
        ))}
    </Swiper>
)
