import { useEffect, useRef, useState } from 'react';

export const useScroll = <T extends HTMLElement>(): { ref: React.Ref<T>; onScreen: boolean } => {
  const [onScreen, setOnScreen] = useState(false);

  const ref = useRef<T>(null);

  useEffect(() => {
    if (onScreen) {
      return;
    }

    const handleScroll = () => {
      if (ref.current) {
        const top = ref.current.getBoundingClientRect().top;
        if (top < window.innerHeight * 0.7 && !onScreen) {
          setOnScreen(true);
        }
      }
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [onScreen]);

  return { ref, onScreen };
};
