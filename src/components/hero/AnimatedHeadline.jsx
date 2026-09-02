import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const rotatingPhrases = [
  'real nutrition',
  'honest ingredients',
  'clean wellness',
  'natural rituals',
  'daily nourishment',
];

export default function AnimatedHeadline() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % rotatingPhrases.length);
    }, 3200);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <h1 className="hero-headline font-serif text-[clamp(46px,7vw,92px)] text-cream font-bold tracking-[-0.03em]">
      <span className="block">Your body deserves</span>
      <span className="hero-phrase-row">
        <span className="hero-phrase-sizer italic">
          {rotatingPhrases[activeIndex]}
        </span>
        <span className="hero-phrase-stage" aria-live="polite">
          <AnimatePresence mode="wait" initial={false}>
            <motion.em
              key={rotatingPhrases[activeIndex]}
              className="hero-phrase text-gradient-gold"
              initial={{ opacity: 0, y: 14, filter: 'blur(7px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -12, filter: 'blur(7px)' }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              {rotatingPhrases[activeIndex]}
            </motion.em>
          </AnimatePresence>
        </span>
      </span>
      <span className="block">not shortcuts.</span>
    </h1>
  );
}
