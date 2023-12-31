import Image from 'next/image';
import { Jost } from 'next/font/google';
import { Typewriter } from '@/components/typewriter/Typewriter';
import { GlowHover } from '@/components/glowhover/GlowHover';
import Parallax from '@/components/parallax/Parallax';
import Slider from '@/components/slider/Slider';
import Education from '@/components/background/Education';
import Experience from '@/components/background/Experience';
import styles from './page.module.css';

const jost = Jost({ subsets: ['latin'] });

export default function Home() {

  const sequence = [
    "I'm a Fullstack Web Developer ",
    2000,
    "I'm a profesional UI/UX Designer ", // initially rendered starting point
    2000,
    "I'm a Lawyer too... ",
    2000,
    /* "I'm a Fullstack Web Developer",
    1000, */
  ]
  return (
    <main className={styles.main}>

      <div className={styles.header}>

        <div className={styles.container}>
          <div className={styles.section_info}>
            <h1><span>{'<'}</span>{' Emanuel Marquez '}<span>{'/>'}</span></h1>
            <div className={styles.description && jost.className}>
              <Typewriter sequence={sequence} />
            </div>
          </div>
          <Image src='/profile_image.jpg' alt= "profile" width={240} height={240} className={styles.image} priority/>
        </div>


        <div className={styles.grid}>
          <a href='#education' className={styles.card}>
            <h2>Education</h2>
            <p>Information about my academic background.</p>
          </a>
          <a href='#experiencie' className={styles.card}>
            <h2>Experience</h2>
            <p>Information about my professional experience.</p>
          </a>
          <a href='#technologies' className={styles.card}>
            <h2>Technologies</h2>
            <p>Knowledge of various web development technologies.</p>
          </a>
          <a href='/services' className={styles.card}>
            <h2>Services</h2>
            <p>Learn about my web design and development services.</p>
          </a>
        </div>

        <GlowHover/>

      </div>

      {/* <div className={styles.contact_section}>
        <div className={styles.contact_header}>
          <h2>Let's <strong>build</strong> something great!</h2>
        </div>
        <button><a href="/contact">Contact me!</a></button>
      </div> */}

      <Parallax/>

      <div id='technologies' style={{width:'100%', paddingTop:'250px', paddingBottom:'150px'}}>
        <Slider/>
      </div>

      <Education/>

      <Experience/>

      

    </main>
  )
}
