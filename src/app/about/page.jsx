'use client'

import React from 'react';
import { useRef , useEffect } from 'react';
import { useRouter , usePathname } from 'next/navigation';
import { Jost } from 'next/font/google';
import styles from './page.module.css';

const jost = Jost({ subsets: ['latin'] });

export default function AboutPage() {

    const ref = useRef(null);
    const router = useRouter();
    const path = usePathname();
    const route = path === '/about';

    useEffect(() => {
        if(route) {
            window.addEventListener('scroll', parallaxEfect);
        };
        return () => {
            window.removeEventListener('scroll', parallaxEfect);
        };
    }, [route]);

    const parallaxEfect = () => {

        const value = window.scrollY;
        //console.log(value);
        //if(value >= 600) btn.current.style.right = '0';
    
        ref.current.style.top = `-${value * 1}px`;
        //console.log(ref.current.style.top);
    };

   /*  if(typeof window !== 'undefined') {
        window.addEventListener('scroll', parallaxEfect);
    } */

    return (

        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.title}>
                    <h1>Hi!</h1>
                    <h1>I'm <strong>Emanuel</strong></h1>
                    <h1>Nice to meet you</h1>
                </div>
                <div className={styles.image}>
                    <div className={styles.grad_top}></div>
                    <img src='/profile_image.jpg' alt='creator_img'/>
                    <div className={styles.grad_bottom}></div>
                </div>
            </div>

            <div ref={ref} className={styles.desc}>
                <div className={jost.className}> 
                    <div className={styles.info}>
                        <h2>I design and build digital things</h2>
                        <h2>Also I'm a lawyer</h2>
                    </div>

                    <p>I am someone who constantly seeks to keep learning, keep challenging myself and improve my skills.</p>
                    <p>I consider myself a responsible, organized person and I am never satisfied with simply proposing ideas. I have an almost impulsive need to act accordingly.</p>
                    <p>I learn quickly, I can acquire new skills and easily adapt to different projects and roles.</p>
                    <p>I currently work as a lawyer and, within the IT world, I work remotely and independently based on the needs of each client, and always predisposed to new opportunities.</p>
                    <p>I am looking for new opportunities where I can contribute my knowledge and, at the same time, grow professionally.</p>
                    <p>I'm from Santa Fe, Argentina.</p>
                    <div style={{display:'flex', justifyContent:'space-between', width:'100%', padding:'4rem 0 '}}>
                        <button><a href='/projects'>Recent works...</a></button>
                        <button><a href='/contact'>Let's Start!</a></button>    
                    </div>
                </div>
            </div>
            
        </div>
    );
};