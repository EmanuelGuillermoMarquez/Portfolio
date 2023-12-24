import React from 'react';
import styles from './background.module.css';

export default function Education() {
    return (
        <div id='education' className={styles.education_container}>
            <h2>Education</h2>

            <h4>FullStack Web Developer {'(2022 - 2023)'}</h4>

            <h4>Henry Education Platform</h4>

            <p>Fullstack web developer title issued by the Henry academic platform completed in the remote part-time modality.</p>

            <hr/> 

            <h4>Lawyer {'(2016 - 2019)'}</h4>

            <h4>Universidad Nacional del Litoral</h4>

            <p>Law degree issued by the Faculty of Legal and Social Sciences of the Universidad Nacional del Litoral in Santa Fe.</p>

        </div>
    );
};
