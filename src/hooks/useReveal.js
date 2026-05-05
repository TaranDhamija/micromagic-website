import { useEffect, useRef } from 'react';

export function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const items = el.querySelectorAll('.reveal');
    items.forEach((item) => obs.observe(item));
    if (el.classList.contains('reveal')) obs.observe(el);

    return () => obs.disconnect();
  }, []);

  return ref;
}

export function usePageReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );

    const items = document.querySelectorAll('.reveal');
    items.forEach((item) => obs.observe(item));
    return () => obs.disconnect();
  }, []);
}
