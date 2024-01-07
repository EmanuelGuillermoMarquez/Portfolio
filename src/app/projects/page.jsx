'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Jost } from 'next/font/google';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import styles from './page.module.css';

const jost = Jost({ subsets: ['latin'] });

export default function ProjectsPage() {

    const router = useRouter();

    const projects = {
        foodie: [{src:'/foodie_1.webp'} , {src:'/foodie_2.webp'} , {src:'/foodie_3.webp'} , {src:'/foodie_4.webp'} , {src:'/foodie_5.webp'} , {src:'/foodie_6.webp'} , {src:'/foodie_7.webp'}],
        vitality: [{src:'/vitality_1.webp'} , {src:'/vitality_2.webp'} , {src:'/vitality_3.webp'} , {src:'/vitality_4.webp'} , {src:'/vitality_5.webp'} , {src:'/vitality_6.webp'}, {src:'/vitality_7.webp'}],
        auto: [{src:'/auto_1.webp'} , {src:'/auto_2.webp'} , {src:'/auto_3.webp'} , {src:'/auto_4.webp'} , {src:'/auto_5.webp'} , {src:'/auto_6.webp'}, {src:'/auto_7.webp'}],
        tetris: [{src:'/tetris_1.webp'} , {src:'/tetris_2.webp'} , {src:'/tetris_3.webp'} , {src:'/tetris_4.webp'} , {src:'/tetris_5.webp'}],
        todo: [{src:'/todo_1.webp'} , {src:'/todo_2.webp'} , {src:'/todo_3.webp'} , {src:'/todo_4.webp'}]
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Some recent <strong>works</strong>...</h1>
            </div>

            <section className={jost.className} style={{width:'100%'}}>
                <div className={styles.item}>
                    <h2>AutoBaires</h2>
                    <p>E-commerce for a car dealership, developed from React with NextJS, using NodeJS in the backend and MongoDB as a database.</p>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={50}
                        loop={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: false,
                        }}
                        speed={2500}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className={styles.swiper}
                    >

                        {projects.auto.map((item, index) => (
                            <SwiperSlide className={styles.slide} key={`autobaires${index}`}>
                                <div className={styles.window_frame}>
                                    <div className={styles.upper}>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                    <img src={item.src} alt={`autobaires${index}`}/>
                                </div>
                            </SwiperSlide>
                        ))}

                    </Swiper>
                    <p><strong>In development...</strong></p>
                </div>
                <div className={styles.item}>
                    <h2>Tetris</h2>
                    <p>Basic version of the classic Tetris game, developed in Vanilla Javascript.</p>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={50}
                        loop={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: false,
                        }}
                        speed={2500}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className={styles.swiper}
                    >

                        {projects.tetris.map((item, index) => (
                            <SwiperSlide className={styles.slide} key={`tetris${index}`}>
                                <div className={styles.window_frame}>
                                    <div className={styles.upper}>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                    <img src={item.src} alt={`tetris${index}`}/>
                                </div>
                            </SwiperSlide>
                        ))}

                    </Swiper>
                    <p><strong>Coming soon deploy...</strong></p>
                </div>
                <div className={styles.item}>
                    <h2>Vitality Medical Group</h2>
                    <p>Web application for a medical clinic designed and developed in a group, using scrum methodology, with Javascript, React, NodeJS, SQL, Auth0, Mercado Libre API, among other technologies.</p>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={50}
                        loop={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: false,
                        }}
                        speed={2500}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className={styles.swiper}
                    >

                        {projects.vitality.map((item, index) => (
                            <SwiperSlide className={styles.slide} key={`vitality${index}`}>
                                <div className={styles.window_frame}>
                                    <div className={styles.upper}>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                    <img src={item.src} alt={`vitality${index}`}/>
                                </div>
                            </SwiperSlide>
                        ))}

                    </Swiper>
                    <p><strong>In production...</strong></p>
                </div>
                <div className={styles.item}>
                    <h2>Foodie App</h2>
                    <p>Recipe web application designed and developed using Javascript, React, NodeJS, SQL, BCrypt, among other technologies.</p>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={50}
                        loop={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: false,
                        }}
                        speed={2500}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className={styles.swiper}
                    >

                        {projects.foodie.map((item, index) => (
                            <SwiperSlide className={styles.slide} key={`foodie${index}`}>
                                <div className={styles.window_frame}>
                                    <div className={styles.upper}>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                    <img src={item.src} alt={`foodie${index}`}/>
                                </div>
                            </SwiperSlide>
                        ))}

                    </Swiper>
                    <p><strong>In production...</strong></p>
                </div>
                <div className={styles.item}>
                    <h2>To Do App</h2>
                    <p>Basic web application to record pending tasks, created with React and Redux, using localeStorage data persistence.</p>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={50}
                        loop={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: false,
                        }}
                        speed={2500}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className={styles.swiper}
                    >

                        {projects.todo.map((item, index) => (
                            <SwiperSlide className={styles.slide} key={`todo${index}`}>
                                <div className={styles.window_frame}>
                                    <div className={styles.upper}>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                    <img src={item.src} alt={`todo${index}`}/>
                                </div>
                            </SwiperSlide>
                        ))}

                    </Swiper>
                    <p><strong>Coming soon deploy...</strong></p>
                </div>
                
                <div style={{display:'flex', flexDirection:'column', gap:'50px', width:'100%', padding:'10rem 0 '}}>
                    <h3>If you liked my work, we should have a coffee and talk...</h3>
                    <button onClick={() => router.push('/contact')}>Let's do it!</button>    
                </div>

            </section>

        </div>
    );
};
