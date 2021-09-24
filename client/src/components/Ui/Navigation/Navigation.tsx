import React, { useRef } from 'react';
import styles from './Navigation.module.css';
import Link from 'next/link';
import Router from 'next/router'

const NavigationButton: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const closeNavigation = () => {
      Router.events.on('routeChangeComplete', () => {
        if(!inputRef.current) return
        inputRef.current.checked = false
      }); 
      Router.events.on('routeChangeError', () => {
        if(!inputRef.current) return
        inputRef.current.checked = false
      });
  }
  
  return (
    <div id={styles.Navigation}>
      <input
        className={styles.navigationCheckbox}
        type="checkbox"
        id="navi-toggle"
        ref={inputRef}
      />

      <label htmlFor="navi-toggle" className={styles.NavigationButton}>
        <span className={styles.navigationIcon}></span>
      </label>

      <div className={styles.navigationBackground}>&nbsp;</div>
      <nav className={styles.navigationNav}>
      <h1>Kreditkortskoll.com</h1>
        <ul className={styles.navigationList}>
          <li className={styles.navigationItem}>
            <Link href="/kort">
              <a onClick={closeNavigation} className={styles.navigationLink}>Alla kreditkort</a>
            </Link>
          </li>
          <li className={styles.navigationItem}>
            <Link href="#">
              <a onClick={closeNavigation} className={styles.navigationLink}>Kreditkorts testet</a>
            </Link>
          </li>
          <li className={styles.navigationItem}>
            <Link href="/artiklar">
              <a onClick={closeNavigation} className={styles.navigationLink}>Artiklar</a>
            </Link>
          </li>
          <li className={styles.navigationItem}>
            <Link href="/faq">
              <a onClick={closeNavigation} className={styles.navigationLink}>FAQ</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationButton;
