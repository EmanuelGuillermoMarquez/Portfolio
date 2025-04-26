'use client'

import React from "react";
import Link from 'next/link';
import styles from "./Timeline.module.css";
import { FaGraduationCap, FaLaptopCode } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const CV_URL = 'https://drive.google.com/file/d/1WLPcXoFxDKiwdXUCUmFZPfwiPE3J2SsX/view?usp=sharing';

const timelineData = [
    {
        type: "work",
        title: "Remote work to InnovaB - Fullstack Developer",
        date: "2024",
        description: "In 2024 I started working for an international company developing and maintaining web applications using VueJs as the front-end, NodeJs with Express as the back-end, and MySQL as the database, using libraries such as JWT, Vuetify, DevExtreme and others.",
    },
    {
        type: "work",
        title: "Freelance Projects - Fullstack Developer",
        date: "2023",
        description: "After graduating, I continued collaborating on freelance projects, strengthening my knowledge and gaining experience in other technologies such as NextJs, MongoDB, Docker, AWS, Google Cloud, and others.",
    },
    {
        type: "work",
        title: "Practice Projects - Fullstack Developer",
        date: "2022",
        description: "While studying programming, I started working on freelance/practice projects, gaining experience and deepening my skills mainly with the React, NodeJs, Express and PostgreSQL stack.",
    },
    {
        type: "education",
        title: "Henry - Fullstack Web Developer",
        date: "2022 - 2023",
        description: "Fullstack web developer title issued by the Henry academic platform completed in the remote part-time modality.",
    },
    {
        type: "work",
        title: "Lawyer - Legal Advisor",
        date: "2020 - Present",
        description: "Over five years of experience in the field, with efficient conflict resolution tailored to the client's interests.",
    },
    {
        type: "education",
        title: "Universidad Nacional del Litoral - Lawyer",
        date: "2016 - 2019",
        description: "Law degree issued by the Faculty of Legal and Social Sciences of the Universidad Nacional del Litoral in Santa Fe.",
    },
];

export default function Timeline() {
    return (
        <section className={styles.timelineSection} id="background">
            <h2 className={styles.title}>Professional Background</h2>
            <div className={styles.timeline}>
                {timelineData.map((item, index) => {
                    
                    const { ref, inView } = useInView({
                        triggerOnce: true,
                        threshold: 0.8,
                    });                   
            
                    return (
                        <div ref={ref} key={index} className={`${styles.event} ${index % 2 === 0 ? styles.left : styles.right} ${inView ? styles.visible : ""}`}>
                            <div className={styles.icon}>
                                {item.type === "education" ? <FaGraduationCap /> : <FaLaptopCode />}
                            </div>
                            <div className={styles.content}>
                                <h3>{item.title}</h3>
                                <span className={styles.date}>{item.date}</span>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <Link href={CV_URL} target='_blank'>     
                <button>Curriculum</button>
            </Link>
        </section>
    );
}
