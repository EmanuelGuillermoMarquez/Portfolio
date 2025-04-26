'use client'

import React from 'react';
import styles from './background.module.css';
import { useRouter } from 'next/navigation';

export default function Experience() {

    const router = useRouter();

    return (
        <div id='experiencie' className={styles.experience_container}>
            <h2>Professional experience</h2>

            <p>Full Stack Web Developer with extensive knowledge and <strong>more than 3 years</strong> of solid experience working on real projects based mainly on the <strong>Javascript</strong> programming language.</p>

            <p>I have experience in <strong>Front End</strong> design and development of web applications implementing frameworks such as <strong>React</strong>, <strong>VueJS</strong>, NextJs, Vite, Redux, MaterialUI, Vuetify, DevExtreme and many more.</p>

            <p>From the <strong>Back End</strong> side I have experience building applications and database administration using <strong>NodeJs</strong>, Express, Sequalizee, SQL and MongoDB.</p>

            <p>I also have knowledge in building APIs based on microservices using Docker and Google Cloud or AWS, and also in the use of payment gateways, authentication and cybersecurity methods {'(JWT, BCrypt, Auth0)'}, among others.</p>

            <p>Additionally, I trained in agile work methodologies, specifically SCRUM.</p>

            <hr/>

            <button onClick={() => router.push('/projects')}>See projects</button>

        </div>
    );
};
