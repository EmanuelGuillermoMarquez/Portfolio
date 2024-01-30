import { Inter , Jost } from 'next/font/google';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const jost = Jost({ subsets: ['latin'] });

export const metadata = {
  title: 'Emanuel Marquez Dev',
  description: 'Emanuel Marquez dev-portfolio ',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <section className={jost.className}>
          <Navbar/>
        </section>
        {children}
        <footer className={jost.className} >
          <Footer/>
        </footer>
      </body>
    </html>
  );
};
