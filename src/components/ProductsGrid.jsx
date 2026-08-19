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
  return (
    <motion.div
      className={`grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3 ${
        compact ? 'max-w-5xl mx-auto' : ''
      }`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.16 }}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </motion.div>
  );
}
