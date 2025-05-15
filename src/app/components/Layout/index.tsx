'use client';
import { Inter } from "next/font/google";  // Replace with a supported font
import { ReactLenis } from '@studio-freight/react-lenis';
import StyledComponentsRegistry from '../../../lib/registry';
import { GlobalStyles } from './GlobalStyles'; // Global Styles for this layout
import { Footer, Header, Preloader } from '..';
import { useState } from 'react';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [complete, setComplete] = useState(false);

  return (
    <StyledComponentsRegistry>
      <ReactLenis
        root
      >
        <GlobalStyles />
        <Preloader setComplete={setComplete} />
        <div className={`${inter.variable} antialiased`}>
          {/* Only apply font styles here */}
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </ReactLenis>
    </StyledComponentsRegistry>
  );
};

export default Layout;