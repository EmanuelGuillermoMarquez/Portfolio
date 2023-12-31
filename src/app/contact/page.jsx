'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import styles from './page.module.css';

export default function ContactPage() {

    const router = useRouter();

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Let's <strong>build</strong> something great!</h1>
            </div>

            <div className={styles.info}>
                <p>I'm looking for opportunities to collaborate with companies or people, contributing my knowledge and skills in the design and development of web applications to effectively solve real problems.</p>
            </div>

            <div className={styles.info}>
                <p>At the same time, I am interested in being able to grow professionally within the company or startup, acquiring new experiences.</p>
            </div>

            <div className={styles.info}>
                <p>Feel free to reach out through any platforms bellow:</p>
            </div>

            <div className={styles.links}>
                <a href='mailto:marquezema127@gmail.com'>
                    <p><EmailIcon fontSize='large'/></p>
                </a>
                <a href='https://github.com/EmanuelGuillermoMarquez'>
                    <p><GitHubIcon fontSize='large'/></p>
                </a>
                <a href='https://www.linkedin.com/in/emanuel-marquez-dev'>
                    <p><LinkedInIcon fontSize='large'/></p>
                </a>
                <a href='https://www.instagram.com/emaamarqez'>
                    <p><InstagramIcon fontSize='large'/></p>
                </a>
            </div>

        </div>
    );
};
