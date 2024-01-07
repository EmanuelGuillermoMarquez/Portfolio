'use client'

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Jost } from 'next/font/google';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import styles from './navbar.module.css';

const jost = Jost({ subsets: ['latin'] });

const links = [
  {
    title: 'Home',
    url: '/'
  },
  {
    title: 'Projects',
    url: '/projects'
  },
  {
    title: 'Services',
    url: '/services'
  },
  {
    title: 'About',
    url: '/about'
  },
  {
    title: 'Contact',
    url: '/contact'
  },
   
];

function Navbar() {

  const ref = useRef(null);
  const path = usePathname();
  
  useEffect(() => {
    const dark_theme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const user_theme = localStorage.getItem('theme');
    
    user_theme ? document.documentElement.setAttribute('data-theme', user_theme) : dark_theme ? document.documentElement.setAttribute('data-theme', 'dark') : null;

    if (user_theme === 'dark' || !user_theme && dark_theme ) ref.current.classList.add(styles['dark_mode']);
    else ref.current.classList.remove(styles['dark_mode']);

  }, []);

  const handleThemeSwitch = (e) => {
    ref.current.classList.toggle(styles['dark_mode']);
    if(ref.current.classList.contains(styles['dark_mode'])) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
    else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }

  
  return (
    <div className={styles.container}>
      <div className={styles.links}>
  
        {links.map((link, index) =>(
          <Link key = {index} href={link.url}>
            <div className={path === link.url ? styles.item_selected : styles.item}>
              <p className={jost.className}>{link.title}</p>
              <div className={styles.underline}></div>
            </div>
          </Link>
        ))}

        <div style={{position:'relative'}}>
          <div ref={ref} className={styles.theme_switch} onClick={handleThemeSwitch}>
            <DarkModeIcon fontSize='10px'/>
            <LightModeIcon fontSize='10px'/>
          </div>
          <div style={{height: '1px', margin: '1px', backgroundColor: 'transparent'}}></div>
        </div>


      </div>
    </div>
  );
};

export default Navbar;