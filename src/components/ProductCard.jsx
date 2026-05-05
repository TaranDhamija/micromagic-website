import { Link } from 'react-router-dom';
import WaIcon from './WaIcon';
import { waLink } from '../data/products';

export default function ProductCard({ product, index = 0 }) {
  return (
    <div
      className={`reveal reveal-delay-${index + 1} card-hover bg-white rounded-[28px] overflow-hidden border border-forest/6 shadow-[0_4px_30px_rgba(30,58,42,0.07)] flex flex-col`}
    >
      {/* Image Placeholder */}
      <div className={`relative h-56 ${product.imgClass} flex items-center justify-center overflow-hidden`}>
        {/* Mockup visual */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-20 h-28 bg-white/30 rounded-2xl backdrop-blur-sm border border-white/40 flex flex-col items-center justify-center gap-2 shadow-lg">
            <div className="w-10 h-10 rounded-full bg-white/50 backdrop-blur-sm" />
            <div className="w-12 h-1.5 rounded-full bg-white/60" />
            <div className="w-8 h-1 rounded-full bg-white/40" />
            <div className="w-10 h-1 rounded-full bg-white/40" />
          </div>
          <div className="text-white/70 text-[10px] font-medium tracking-[2px] uppercase">
            {product.weight}
          </div>
        </div>

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-4 right-4 bg-forest text-goldlight text-[10px] font-medium tracking-wide px-3 py-1.5 rounded-full">
            {product.badge}
          </div>
        )}

        {/* Availability dot */}
        <div className="absolute top-4 left-4 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
          <span className="text-white/70 text-[10px] font-medium">In Stock</span>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl text-forest font-bold mb-1">{product.name}</h3>
        <p className="text-[11px] text-textlight uppercase tracking-[2px] mb-4">{product.weight}</p>

        <p className="font-display italic text-textmid text-base leading-relaxed mb-4">
          "{product.tagline}"
        </p>

        <ul className="space-y-2 mb-5 flex-1">
          {product.benefits.slice(0, 3).map((b, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-textmid leading-snug">
              <span className="text-sage mt-0.5 text-xs flex-shrink-0">✦</span>
              {b}
            </li>
          ))}
        </ul>

        {/* Usage hint */}
        <div className="bg-sage/8 border-l-2 border-sage rounded-r-xl px-4 py-3 mb-5">
          <p className="text-[10px] uppercase tracking-[1.5px] text-sage font-medium mb-1">Daily Ritual</p>
          <p className="text-[13px] text-textmid leading-relaxed">{product.usage[0]}</p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-forest/7">
          <div>
            <p className="font-serif text-2xl text-forest font-bold">{product.price}</p>
          </div>
          <div className="flex gap-2">
            <Link
              to={`/product/${product.id}`}
              className="px-4 py-2 rounded-full border border-forest/20 text-forest text-xs font-medium hover:bg-forest hover:text-cream transition-all duration-200"
            >
              Details
            </Link>
            <a
              href={waLink(product.waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-forest text-xs"
            >
              <WaIcon size={13} />
              Order
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
