'use client'

import React from 'react';
import styles from './background.module.css';
import { useRouter } from 'next/navigation';

export default function Experience() {

    const router = useRouter();

    return (
        <div id='experiencie' className={styles.experience_container}>
            <h2>Professional experience</h2>

            <p>Throughout these years I have acquired extensive knowledge as a developer and also solid experience working on real projects based mainly on the <strong>Javascript</strong> programming language.</p>

            <hr/>

            <p>I have designed and built web applications implementing <strong>React</strong> and its ecosystem of frameworks and libraries such as NextJs, Vite, Redux, MaterialUI, and many more.</p>

            <hr/>

            <p>With experience implementing NodeJs, Express, Sequalizee, SQL, MongoDB and other technologies, for backend construction and database management.</p>

            <hr/>

            <p>I also have knowledge in building APIs based on microservices using Docker and Google Cloud, and also in the use of payment gateways, authentication and cybersecurity methods {'(BCrypt, Auth0)'}, among others.</p>

            <hr/>

            <p>Additionally, I trained in agile work methodologies, specifically SCRUM.</p>

            <button onClick={() => router.push('/projects')}>See projects</button>

        </div>
    );
};
