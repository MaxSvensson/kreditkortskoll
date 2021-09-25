import styles from './Navbar.module.css';
import Link from 'next/link';
import { motion } from 'framer-motion';
import React, { useEffect, useState, useRef } from 'react';
import SlideDown from './SlideDown/SlideDown';
import { Visible, Hidden } from 'react-grid-system';
import NavigationButton from '../Navigation/Navigation';

const Navbar = () => {

    const [slideDown, _setSlideDown] = useState(false);

    const slideDownRef = useRef(slideDown);
    const setSlideDown = data => {
      slideDownRef.current = data;
      _setSlideDown(data);
    };

    useEffect(() => {
      var lastScrollTop = 0;

      // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
      window.addEventListener("scroll", () => { // or window.addEventListener("scroll"....
         var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
         if (st < lastScrollTop) {
           if (st > 600) {
             return slideDownRef.current ? null : setSlideDown(true);
           } 
           setSlideDown(false)
         } else {
          setSlideDown(false)
          console.log("down")
         }
         lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
      }, {
        capture: true,
        passive: true
      });
    } , [])

    return <React.Fragment>
     <div id={styles.Navbar}>
      <Link href="/">
          <a id={styles.loggo}>Kreditkortskoll.com</a>
      </Link>
      <Visible lg xl xxl>
      <SlideDown visible={slideDownRef.current} />
          <ul>
            <motion.li whileHover={{y: -2}}><Link href="/kort"><a>Alla kreditkort</a></Link></motion.li>
            <motion.li whileHover={{y: -2}}><Link href="/kategorier"><a>Kategorier</a></Link></motion.li>
            <motion.li whileHover={{y: -2}}><Link href="/artiklar"><a>Artiklar</a></Link></motion.li>
            <motion.li whileHover={{y: -2}}><Link href="/faq"><a>FAQ</a></Link></motion.li>
          </ul>
      </Visible>
      <Visible xs sm md>
        <NavigationButton />
      </Visible>
    </div>
    </React.Fragment>
}


export default Navbar;