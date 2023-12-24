'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import styles from './slider.module.css';

export default function Slider() {

    const images =[
        {title: 'javascript', src: '/javascript-logo.svg'},
        {title: 'react', src: '/react.png'},
        {title: 'redux', src: '/redux.svg'},
        {title: 'next', src: '/next.svg'},
        {title: 'nodejs', src: '/nodejs.svg'},
        {title: 'express', src: '/expressjs.svg'},
        {title: 'sql', src: '/sql.svg'},
        {title: 'mongodb', src: '/mongodb.png'},
        {title: 'docker', src: '/docker.svg'},
        {title: 'git', src: '/git.svg'},
    ]

    return (
        <>
            <Swiper
                slidesPerView={5}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                }}
                speed={2500}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                breakpoints={{
                    1200: {
                        slidesPerView: 5,
                        spaceBetween: 30},
                    1000: {
                        slidesPerView: 5,
                        spaceBetween: 20},
                    800: {
                        slidesPerView: 4,
                        spaceBetween: 20
                    },
                    600: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },
                    400: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    200: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },

                }}
                modules={[Autoplay, Pagination]}
                className={styles.swiper}
            >

                {images.map((item, index) => (
                    <SwiperSlide className={styles.slide} key={index}>
                        <img src={item.src} alt={item.title} width={200} height={100}/>
                    </SwiperSlide>
                ))}

            </Swiper>
        </>
    );
};
