import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function MarginIfScroll() {
  const {pathname} = useLocation();

  useEffect(() => {
    const scrollWidth = window.innerWidth - document.documentElement.clientWidth;

    if (scrollWidth > 0) {
      document.body.style.marginLeft = `${scrollWidth / 2}px`;
    } else {
      document.body.style.marginLeft = '0';
    }
  }, [pathname]);

  return null;
}

export default MarginIfScroll;
