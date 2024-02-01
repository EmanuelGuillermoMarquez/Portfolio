'use client'

import React from 'react';
import { useRef , useEffect } from 'react';
import styles from './parallax.module.css';
import { useRouter , usePathname } from 'next/navigation';

export default function Parallax() {

    const text_left = useRef(null);
    const text_right = useRef(null);
    const btn = useRef(null);
    const router = useRouter();
    const path = usePathname();
    const home = path === '/' || path.includes('#');

    useEffect(() => {
        if(home && typeof window != 'undefined') {
            window.addEventListener('scroll', parallaxEfect);
        };
        return () => {
            if(typeof window != 'undefined') window.removeEventListener('scroll', parallaxEfect);
        };
    }, [home]);

    const parallaxEfect = () => {

        const value = window.scrollY;
        //console.log(value);

        if(value === 0) {
            text_left.current.style.left = '0px';
            text_right.current.style.right = '0px';
            btn.current.style.right = '-300px';
        };

        if(window.matchMedia('(max-width: 400px)').matches) {
            if(value >= 1300) btn.current.style.right = '0';

            text_left.current.style.left = value * 0.05 + 'px';
            text_right.current.style.right = value * 0.03 + 'px';
            text_right.current.style.left = 'unset';
        }
        else if(window.matchMedia('(max-width: 500px)').matches) {
            if(value >= 1300) btn.current.style.right = '0';

            text_left.current.style.left = value * 0.05 + 'px';
            text_right.current.style.right = value * 0.04 + 'px';
            text_right.current.style.left = 'unset';
        }
        else if(window.matchMedia('(max-width: 600px)').matches) {
            if(value >= 1200) btn.current.style.right = '0';

            text_left.current.style.left = value * 0.05 + 'px';
            text_right.current.style.right = value * 0.05 + 'px';
            text_right.current.style.left = 'unset';
        }
        else if(window.matchMedia('(max-width: 840px)').matches) {
            if(value >= 1200) btn.current.style.right = '0';

            text_left.current.style.left = value * 0.1 + 'px';
            text_right.current.style.right = value * 0.1 + 'px';
            text_right.current.style.left = 'unset';
        }
        else if(window.matchMedia('(max-width: 1000px)').matches) {
            if(value >= 700) btn.current.style.right = '0';

            text_left.current.style.left = value * 0.1 + 'px';
            text_right.current.style.right = value * 0.3 + 'px';
            text_right.current.style.left = 'unset';
        }
        else if(window.matchMedia('(max-width: 1200px)').matches) {
            if(value >= 600) btn.current.style.right = '0';

            text_left.current.style.left = value * 0.2 + 'px';
            text_right.current.style.right = value * 0.45 + 'px';
            text_right.current.style.left = 'unset';
        }
        else if(window.matchMedia('(max-width: 1300px)').matches){
            if(value >= 600) btn.current.style.right = '0';
    
            text_left.current.style.left = value * 0.25 + 'px';
            text_right.current.style.right = value * 0.5 + 'px';
            text_right.current.style.left = 'unset';
        }
        else {
            if(value >= 600) btn.current.style.right = '0';
    
            text_left.current.style.left = value * 0.25 + 'px';
            text_right.current.style.right = value * 0.7 + 'px';
            text_right.current.style.left = 'unset';
        };
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2 ref={text_left} className={styles.text_1}>Let's <strong>build</strong></h2>
                <h2 ref={text_right} className={styles.text_2}>something great!</h2>
            </div>
            <button ref={btn} onClick={() => router.push('/contact')}>Let's Start!</button>
        </div>
    );
};
