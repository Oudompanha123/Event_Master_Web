'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { CategoryCardComponent } from './CategoryCardComponent';

export const CategoryCardListComponent = ({ data }) => {

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
                {data.payload.map((x, index) => (
                    <SwiperSlide key={index} >
                        <CategoryCardComponent title={x?.eventName} content={x?.description} cate={x?.categoryName} eventId={x?.eventId} img={`https://firebasestorage.googleapis.com/v0/b/cloud-storage-next-8e2cc.appspot.com/o/headway-F2KRf_QfCqw-unsplash.jpgbff2c2b3-3340-421f-b8bf-06cf683bb395?alt=media&token=19e9782d-0cca-4105-ab02-d627bd515ac6`} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}