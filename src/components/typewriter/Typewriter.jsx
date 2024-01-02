'use client'

import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import styles from './typewriter.module.css';


export const Typewriter = ({sequence}) => {
    return (
        <TypeAnimation
            preRenderFirstString={true}
            sequence={sequence}
            speed={50}
            //style={{ fontSize: '24px' }}
            repeat={Infinity}
            className={styles.cursor_type}
            cursor={false}

        />
    );
};
