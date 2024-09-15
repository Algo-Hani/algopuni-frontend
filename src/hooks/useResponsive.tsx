import { useState, useEffect } from 'react';

export const useResponsive = ({ mobileMax = 767, tabletMin = 768, tabletMax = 1023, pcMin = 1024 } = {}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isPC, setIsPC] = useState(false);

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;

      setIsMobile(width <= mobileMax);
      setIsTablet(width >= tabletMin && width <= tabletMax);
      setIsPC(width >= pcMin);
    };

    updateScreenSize(); // 초기 값 설정
    window.addEventListener('resize', updateScreenSize); // 윈도우 크기 변화 감지

    return () => {
      window.removeEventListener('resize', updateScreenSize); // 정리 작업
    };
  }, [mobileMax, tabletMin, tabletMax, pcMin]);

  return { isMobile, isTablet, isPC };
};
