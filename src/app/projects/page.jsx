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
import { useInView } from "react-intersection-observer";
import { images } from 'next.config';

const jost = Jost({ subsets: ['latin'] });

export default function ProjectsPage() {

    const router = useRouter();

    /* const projects = {
        foodie: [{src:'/foodie_1.webp'} , {src:'/foodie_2.webp'} , {src:'/foodie_3.webp'} , {src:'/foodie_4.webp'} , {src:'/foodie_5.webp'} , {src:'/foodie_6.webp'} , {src:'/foodie_7.webp'}],
        vitality: [{src:'/vitality_1.webp'} , {src:'/vitality_2.webp'} , {src:'/vitality_3.webp'} , {src:'/vitality_4.webp'} , {src:'/vitality_5.webp'} , {src:'/vitality_6.webp'}, {src:'/vitality_7.webp'}],
        auto: [{src:'/auto_1.webp'} , {src:'/auto_2.webp'} , {src:'/auto_3.webp'} , {src:'/auto_4.webp'} , {src:'/auto_5.webp'} , {src:'/auto_6.webp'}, {src:'/auto_7.webp'}],
        tetris: [{src:'/tetris_1.webp'} , {src:'/tetris_2.webp'} , {src:'/tetris_3.webp'} , {src:'/tetris_4.webp'} , {src:'/tetris_5.webp'}],
        todo: [{src:'/todo_1.webp'} , {src:'/todo_2.webp'} , {src:'/todo_3.webp'} , {src:'/todo_4.webp'}],
        microservices: [{src:'/micro_1.webp'} , {src:'/micro_2.webp'} , {src:'/micro_3.webp'} , {src:'/micro_4.webp'}, {src:'/micro_5.webp'} , {src:'/micro_6.webp'} , {src:'/micro_7.webp'} , {src:'/micro_8.webp'}],
        innova: [{src:'/innova1.webp'} , {src:'/innova2.webp'} , {src:'/innova3.webp'} , {src:'/innova4.webp'}, {src:'/innova5.webp'}]
    } */
    const projects = [
        {
            title: 'InnovaApps',
            description: 'I contributed to the development and maintenance of business management web applications that managed billing, inventory, accounting, client and patient management, and other digital tools necessary for a business.',
            tech: ["VueJS", "NodeJS", "Express", "Sequelize", "MySQL", 'JWT'],
            images: [{src:'/innova1.webp'} , {src:'/innova2.webp'} , {src:'/innova3.webp'} , {src:'/innova4.webp'}, {src:'/innova5.webp'}],
            link: '/innovaapps',
            git: ''
        },
        {
            title: 'AutoBaires',
            description: 'E-commerce for car dealerships that allows you to manage your inventory of available units, show them to buyers, coordinate visits, and close sales.',
            tech: ["React", "NextJS", "NodeJS", "Express", "Mongoose", "MongoDB", "Auth0"],
            images: [{src:'/auto_1.webp'} , {src:'/auto_2.webp'} , {src:'/auto_3.webp'} , {src:'/auto_4.webp'} , {src:'/auto_5.webp'} , {src:'/auto_6.webp'}, {src:'/auto_7.webp'}],
            link: '/autobaires',
            git: ''
        },
        /* {
            title: 'Tetris',
            description: 'Basic version of the classic Tetris game, developed in Vanilla Javascript.',
            images: [{src:'/tetris_1.webp'} , {src:'/tetris_2.webp'} , {src:'/tetris_3.webp'} , {src:'/tetris_4.webp'} , {src:'/tetris_5.webp'}],
            link: '/tetris',
            git: ''
        }, */
        {
            title: 'API Microservices',
            description: 'Basic API for information about the Star Wars film series, developed with a microservices structure using Docker containers and deployed on a virtual machine in the cloud.',
            tech: ["React", "NodeJS", "Express", "Mongoose", "MongoDB", "Docker", "Google Cloud"],
            images: [{src:'/micro_1.webp'} , {src:'/micro_2.webp'} , {src:'/micro_3.webp'} , {src:'/micro_4.webp'}, {src:'/micro_5.webp'} , {src:'/micro_6.webp'} , {src:'/micro_7.webp'} , {src:'/micro_8.webp'}],
            link: '/microservices',
            git: ''
        },
        {
            title: 'Vitality Medical Group',
            description: "A web application for a medical clinic, designed and developed using a team's Agile Scrum methodology, allows administrators to manage patients, medical records, medical studies, and other patient information. It also allows patients to purchase medical coverage plans, make online inquiries, and access their information.",
            tech: ["React", "Redux", "NodeJS", "Express", "Sequelize", "PostgreSQL", "Auth0", "Mercado Libre API", "Vite", "Cloudinary"],
            images: [{src:'/vitality_1.webp'} , {src:'/vitality_2.webp'} , {src:'/vitality_3.webp'} , {src:'/vitality_4.webp'} , {src:'/vitality_5.webp'} , {src:'/vitality_6.webp'}, {src:'/vitality_7.webp'}],
            link: '/vitality',
            git: ''
        },
        {
            title: 'Foodie App',
            description: 'Recipe web application that allows users to register, access the recipe database, create new recipes, save favorite recipes, upload images, and more.',
            tech: ["React", "Redux", "NodeJS", "Express", "Sequelize", "PostgreSQL", "BCrypt"],
            images: [{src:'/foodie_1.webp'} , {src:'/foodie_2.webp'} , {src:'/foodie_3.webp'} , {src:'/foodie_4.webp'} , {src:'/foodie_5.webp'} , {src:'/foodie_6.webp'} , {src:'/foodie_7.webp'}],
            link: '/foodie',
            git: ''
        },
        {
            title: 'To Do App',
            description: 'Basic web application to record pending tasks, created with React and Redux, using localeStorage data persistence.',
            tech: ["Javascript", "React", "Redux", "NodeJS"],
            images: [{src:'/todo_1.webp'} , {src:'/todo_2.webp'} , {src:'/todo_3.webp'} , {src:'/todo_4.webp'}],
            link: '/todo',
            git: ''
        },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Some recent <strong>works</strong>...</h1>
            </div>

            <section className={jost.className} style={{width:'100%'}}>
                
                {projects.map((project, index) => {
                    
                    const { ref, inView } = useInView({
                        triggerOnce: true,
                        threshold: 0.2,
                    });
            
                    return (
                        <div key={index} ref={ref} className={`${styles.item} ${inView ? styles.visible : ""}`}>
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                            <div className={styles.tech}>
                                {project.tech.map((tech, i) => (
                                    <span key={i}>{tech}</span>
                                ))}
                            </div>

                            <Swiper
                                slidesPerView={1}
                                spaceBetween={50}
                                loop={true}
                                /* autoplay={{
                                    delay: 5000,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: false,
                                }} */
                                speed={1000}
                                pagination={{
                                    clickable: true,
                                    dynamicBullets: true,
                                }}
                                navigation={true}
                                modules={[Autoplay, Pagination, Navigation]}
                                className={styles.swiper}
                            >

                                {project.images.map((item, index) => (
                                    <SwiperSlide className={styles.slide} key={`${project.title}${index}`}>
                                        <div className={styles.window_frame}>
                                            <img src={item.src} alt={`${project.title}${index}`}/>
                                            {/* <div className={styles.upper}>
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                            </div> */}
                                        </div>
                                    </SwiperSlide>
                                ))}

                            </Swiper>

                            {/* <div className={styles.links}>
                                <a href={project.link} target="_blank" rel="noreferrer">Demo</a>
                                <a href={project.git} target="_blank" rel="noreferrer">Código</a>
                            </div> */}
                            <p><strong>In production...</strong></p>
                        </div>
                    );
                })}

                <div style={{display:'flex', flexDirection:'column', gap:'50px', width:'100%', padding:'10rem 0 '}}>
                    <h3>If you liked my work, we should have a coffee and talk...</h3>
                    <button onClick={() => router.push('/contact')}>Let's do it!</button>    
                </div>

            </section>

        </div>
    );
};
