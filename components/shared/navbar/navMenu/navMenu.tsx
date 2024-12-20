'use client'
import styles from './style.module.scss'
import { useEffect } from 'react';
import Nav from './nav/nav';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useMenu } from '@/context/menuContext';

export default function NaveMenu() {
  const { isMenuOpen, toggleMenu } = useMenu();
  const pathname = usePathname();

  useEffect(() => {
    if(isMenuOpen) toggleMenu();
  }, [pathname]);

  return (
    <>
      {/* <div className={styles.main}>
        <div className={styles.header}>
          <div onClick={toggleMenu} className={styles.button}>
            <div className={`${styles.burger} ${isMenuOpen ? styles.burgerActive : ""}`}></div>
          </div>
        </div>
      </div> */}
      <AnimatePresence mode="wait">
        {isMenuOpen && <Nav />}
      </AnimatePresence>
    </>
  );
}