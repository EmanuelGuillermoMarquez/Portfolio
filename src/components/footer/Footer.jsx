import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
  return (
    
    <div className={styles.container}> 
      <p> Handcrafted by Emanuel Marquez -  {new Date().getFullYear()}</p>
    </div>
  );
};

export default Footer;
