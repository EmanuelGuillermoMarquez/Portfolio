import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
  return (
    
    <div className={styles.container}> 
      <p> Developed by Emanuel Marquez -  {new Date().getFullYear()}</p>
    </div>
  );
};

export default Footer;
