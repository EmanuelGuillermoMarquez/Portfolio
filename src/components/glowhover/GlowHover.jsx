'use client'

import React, { useRef } from 'react';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import styles from './glow.module.css';

export const GlowHover = () => {

    const elementRef = useRef(null);
    const path = usePathname();
    const home = path === '/' || path.includes('#');

    useEffect(() => {
        if(home) {
            console.log(home);
            window.addEventListener('mousemove', pointerMove);
        }

        return () => {
            window.removeEventListener('mousemove', pointerMove)
        };
    },[home]);
    
    const pointerMove = (e) => {

        //const containerEl = document.querySelector('#box-wrap');
        //const featureEl = document.querySelectorAll('#box');
        
        //console.log(e);

        const glow = document.querySelector('#glow');
        const fake_glow = document.querySelector('#fake_glow');
        
        const rect = fake_glow.getBoundingClientRect();
        
        glow.animate(
            [{
                transform: `translate(${e.clientX - rect.left - (rect.width / 2)}px,${e.clientY - rect.top - (rect.height / 2)}px)`,
            }],
            {
              duration: 1000,
              fill: 'forwards',
            }
        )
            
    }

    // Movido al useEffect para desmontar el evento al cambiar la ruta
    
    /* if(typeof window !== 'undefined') {
        window.addEventListener('mousemove', pointerMove);
    }; */

    return (
        <div id='box-wrap' className={styles.container} /* onMouseMove={pointerMove} */>
            <div ref={elementRef} className={styles.center} >
                {/* <h1><span>{'<'}</span>{' Emanuel Marquez '}<span>{'/>'}</span></h1> */}
                {/* <Image src='/profile_image.jpg' alt= "profile" width={240} height={240} className={styles.image} priority/> */}
                <div id='glow' className={styles.glow}></div>
                <div id='fake_glow' className={styles.fake_glow}></div>
            </div>
      </div>
    );
};
