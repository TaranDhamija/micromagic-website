import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

export default function ProductsGrid({ products, compact = false }) {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined'
      ? window.matchMedia('(max-width: 767px)').matches
      : false
  );

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const mediaQuery = window.matchMedia('(max-width: 767px)');

    const updateViewportMode = () => {
      setIsMobile(mediaQuery.matches);
    };

    updateViewportMode();
    mediaQuery.addEventListener('change', updateViewportMode);

    return () => {
      mediaQuery.removeEventListener('change', updateViewportMode);
    };
  }, []);

  return (
    <motion.div
      className={`grid min-w-0 grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3 ${
        compact ? 'max-w-5xl mx-auto' : ''
      }`}
      variants={containerVariants}
      initial={isMobile ? false : 'hidden'}
      animate={isMobile ? 'visible' : undefined}
      whileInView={isMobile ? undefined : 'visible'}
      viewport={isMobile ? undefined : { once: true, amount: 0.16 }}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </motion.div>
  );
}
