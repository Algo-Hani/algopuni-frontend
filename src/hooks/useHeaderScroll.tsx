import { useEffect, useRef, useState } from 'react';
import throttle from 'lodash/throttle';

export const useHeaderScroll = () => {
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const lastScrollTop = useRef(0);
  const delta = 5;

  const handleScroll = () => {
    const sy = window.scrollY;
    const header = document.querySelector('header');
    if (header !== null) {
      const navbarHeight = header.offsetHeight;
      setIsAtTop(sy === 0);
      if (Math.abs(lastScrollTop.current - sy) <= delta) {
        return;
      }

      if (sy > lastScrollTop.current && sy > navbarHeight) {
        setNavbarVisible(false);
      } else if (sy + window.innerHeight < document.body.offsetHeight) {
        setNavbarVisible(true);
      }

      lastScrollTop.current = sy;
    }
  };

  const throttledHandleScroll = throttle(handleScroll, 200);

  useEffect(() => {
    window.addEventListener('scroll', throttledHandleScroll);

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, []);

  return {
    navbarVisible,
    isAtTop,
  };
};
