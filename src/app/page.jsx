import Image from 'next/image';
import { Typewriter } from '@/components/typewriter/Typewriter';
import { Jost } from 'next/font/google';
import styles from './page.module.css';
import { GlowHover } from '@/components/glowhover/GlowHover';

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
      <div style={{width:'100%', display:'flex', justifyContent:'space-between', gap:'200px'}}>
        <div className={styles.center}>
          <h1><span>{'<'}</span>{' Emanuel Marquez '}<span>{'/>'}</span></h1>
          <div className={styles.description && jost.className}>
            <Typewriter sequence={sequence} />
          </div>
        </div>
        <Image src='/profile_image.jpg' alt= "profile" width={240} height={240} className={styles.image} priority/>
      </div>

      <GlowHover/>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  )
}
