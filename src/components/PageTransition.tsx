'use client';

import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isAnimating, setIsAnimating] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    setShowContent(false);

    const enterDuration = 800;

    const timeout = setTimeout(() => {
      setIsAnimating(false);
      setShowContent(true);
    }, enterDuration);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <div className="relative">
      {/* Green overlay animation */}
      <AnimatePresence>
        {isAnimating && (
          <motion.div
            key="overlay"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="fixed top-0 left-0 w-full h-full z-50 bg-green-600"
          />
        )}
      </AnimatePresence>

      {/* Page content – hidden but space-preserving */}
    <div
        className={`transition-opacity duration-500 ease-in-out ${
            showContent ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        >
        {children}
        </div>
    </div>
  );
}
