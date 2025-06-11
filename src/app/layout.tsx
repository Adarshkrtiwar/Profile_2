import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { ThemeProvider } from 'next-themes';
import About from './components/About';
import WhatIOffer from './components/WhatIOffer';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Contact from './components/Contact';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'My Portfolio',
  description: 'Portfolio of a web developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Navbar />
            <main>
              <Hero />
              <About />
              <WhatIOffer />
              <Experience />
              <Projects />
              <Skills />
              {children}
            </main>
            <Contact />
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}