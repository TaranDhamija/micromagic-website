import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProductImageSlider from './ProductImageSlider';

const cardVariants = {
  hidden: { opacity: 0, y: 38 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ProductCard({ product }) {
  const cardTitle =
    product.cardTitle ||
    product.name.replace(/^MicroMagic\s+/, '');

  const hasDiscount =
    product.originalPrice &&
    product.originalPrice !== product.price;

  return (
    <motion.article
      variants={cardVariants}
      className="group relative min-w-0"
    >
      <Link
        to={`/products/${product.slug}`}
        className="product-showcase-card block min-w-0 overflow-hidden rounded-[34px] border border-forest/8 bg-white/88 p-4 shadow-[0_12px_45px_rgba(18,35,25,0.08)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_80px_rgba(18,35,25,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage/35"
      >
        {/* PRODUCT IMAGE */}
        <div className="relative overflow-hidden rounded-[28px]">
          <ProductImageSlider product={product} />

          {product.badge && (
            <div className="absolute left-4 top-4 rounded-full border border-white/18 bg-[#122016]/26 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[2px] text-goldlight backdrop-blur-sm">
              {product.badge}
            </div>
          )}
        </div>

        {/* PRODUCT CONTENT */}
        <div className="px-2 pb-3 pt-6">
          <div className="mb-4 flex items-start justify-between gap-4">
            <div>
              {/* CATEGORY */}
              <p className="mb-2 text-[10px] font-medium uppercase tracking-[2.5px] text-sage/90">
                {product.category}
              </p>

              {/* PRODUCT NAME */}
              <h3 className="font-serif text-[30px] leading-[1.02] text-forest">
                {cardTitle}
              </h3>

              {/* VARIANT */}
              {product.variantLabel && (
                <p className="mt-2 text-[10px] font-medium uppercase tracking-[2px] text-textlight">
                  {product.variantLabel}
                </p>
              )}
            </div>
          </div>

          {/* SHORT DESCRIPTION */}
          <p className="mb-5 font-display text-[24px] italic leading-[1.1] text-textmid">
            {product.shortDescription}
          </p>

          {/* HIGHLIGHTS */}
          {product.highlights?.length ? (
            <div className="mb-5 flex flex-wrap gap-2">
              {product.highlights.slice(0, 3).map((highlight) => (
                <span
                  key={highlight}
                  className="rounded-full border border-forest/10 bg-parchment/72 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[1.8px] text-textlight"
                >
                  {highlight}
                </span>
              ))}
            </div>
          ) : null}

          {/* PRODUCT STORY */}
          <p className="mb-8 max-w-[30ch] text-sm leading-relaxed text-textlight">
            {product.story}
          </p>

          {/* PRICE + CTA */}
          <div className="flex items-end justify-between gap-4 border-t border-forest/8 pt-5">
            <div>
              <p className="text-[10px] uppercase tracking-[2.2px] text-[#BDB9AD]">
                Price
              </p>

              <div className="mt-1 flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                {hasDiscount && (
                  <span className="font-serif text-[17px] text-textlight line-through decoration-forest/30">
                    {product.originalPrice}
                  </span>
                )}

                <span className="font-serif text-[30px] leading-none text-forest">
                  {product.price}
                </span>
              </div>

              {hasDiscount && (
                <p className="mt-2 text-[9px] font-medium uppercase tracking-[1.7px] text-sage">
                  Limited-time offer
                </p>
              )}
            </div>

            <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-forest/14 bg-forest px-5 py-2.5 text-[11px] font-medium uppercase tracking-[2px] text-cream transition-all duration-500 group-hover:bg-moss group-hover:pl-6 group-hover:pr-4">
              Explore Product
              <span className="transition-transform duration-500 group-hover:translate-x-1">
                →
              </span>
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}