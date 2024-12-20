'use client'
import { forwardRef } from 'react';
import styles from './style.module.scss';
import Magnetic from '../magnetic/magnetic';
import { useMenu } from '@/context/menuContext';

const Burgur = forwardRef(function index(props, ref: any) {
  const { toggleMenu, isMenuOpen } = useMenu();
  
  return (
    <div className={styles.header}>
        <Magnetic>
          <div onClick={toggleMenu} className={`${styles.burger} ${isMenuOpen ? styles.burgerActive : ''} `}>
            <div ref={ref} className={styles.bounds}></div>
          </div>
        </Magnetic>
    </div>
  )}
)

export default Burgur