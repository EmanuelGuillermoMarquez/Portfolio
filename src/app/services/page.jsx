import React from 'react';
import TerminalIcon from '@mui/icons-material/Terminal';
import CodeIcon from '@mui/icons-material/Code';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import { Jost } from 'next/font/google';
import styles from './page.module.css';

const jost = Jost({ subsets: ['latin'] });

export default function ServicesPage() {

    return (

        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Some of the things</h1>
                <h1> we can <strong>build!</strong></h1>
            </div>
            <section className={jost.className}>
                <div className={styles.cards}>
                    <div className={styles.item}>
                        <ViewCarouselIcon fontSize='large'/>
                        <h3>UI/UX Design</h3>
                        <p className={styles.desc}>I value modern and clean design patterns, with thoughtful interactions...</p>
                        <div>
                            <h4>Things I design:</h4>
                            <p>User Experiencie</p>
                            <p>User Interface</p>
                            <p>Web Aplications</p>
                            <p>Design Patterns</p>
                            <p>Logos</p>
                            <p>and others...</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <CodeIcon fontSize='large'/>
                        <h3>Frontend Developer</h3>
                        <p className={styles.desc}>I enjoy coding and bringing ideas to life in the browser...</p>
                        <div>
                            <h4>Dev tools:</h4>
                            <p>JavaScript</p>
                            <p>React</p>
                            <p>Redux</p>
                            <p>NextJs</p>
                            <p>Css - Sass</p>
                            <p>Material UI</p>
                            <p>Git</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <TerminalIcon fontSize='large'/>
                        <h3>Backend Developer</h3>
                        <p className={styles.desc}>I really care about the security of the code and the effective backend performance...</p>
                        <div>
                            <h4>Dev tools:</h4>
                            <p>NodeJs</p>
                            <p>Express</p>
                            <p>SQL</p>
                            <p>MongoDB</p>
                            <p>Docker</p>
                            <p>Cloud Services</p>
                            <p>Authentication Services</p>
                        </div>
                    </div>
                </div>
            </section>
            <button><a href='/contact'>Let's Start!</a></button>
        </div>
    );
};
