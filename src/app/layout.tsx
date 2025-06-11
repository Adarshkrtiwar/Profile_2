import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import Navbar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import WhatIOffer from './components/WhatIOffer';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Contact from './components/Contact';
import ClientWrapper from './components/ClientWrapper'; // 👈 Import kiya

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Adarsh Portfolio',
  description: 'Portfolio of a Software Developer',
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
          <ClientWrapper>
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
          </ClientWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
