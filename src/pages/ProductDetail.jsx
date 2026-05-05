import { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import WaIcon from '../components/WaIcon';
import ProductCard from '../components/ProductCard';
import CTASection from '../components/CTASection';
import { usePageReveal } from '../hooks/useReveal';
import { products, waLink } from '../data/products';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [openFaq, setOpenFaq] = useState(null);

  usePageReveal();
  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!product) return <Navigate to="/products" replace />;

  const related = products.filter((p) => p.id !== id);

  return (
    <div>
      {/* Breadcrumb */}
      <div className="bg-parchment border-b border-forest/8 px-6 pt-24 pb-4">
        <div className="max-w-6xl mx-auto flex items-center gap-2 text-xs text-textlight">
          <Link to="/" className="hover:text-sage transition-colors">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-sage transition-colors">Products</Link>
          <span>/</span>
          <span className="text-forest font-medium">{product.name}</span>
        </div>
      </div>

      {/* Product Hero */}
      <section className="py-16 px-6 bg-warmwhite">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Image */}
          <div className="reveal">
            <div className={`relative ${product.imgClass} rounded-3xl aspect-square flex items-center justify-center overflow-hidden`}>
              {/* Large product mockup */}
              <div className="flex flex-col items-center gap-4">
                <div className="w-32 h-44 bg-white/25 rounded-3xl backdrop-blur-sm border border-white/40 flex flex-col items-center justify-center gap-3 shadow-xl">
                  <div className="w-16 h-16 rounded-full bg-white/50 backdrop-blur-sm" />
                  <div className="space-y-1.5">
                    <div className="w-20 h-2 rounded-full bg-white/60" />
                    <div className="w-14 h-1.5 rounded-full bg-white/40" />
                    <div className="w-16 h-1.5 rounded-full bg-white/40" />
                    <div className="w-12 h-1.5 rounded-full bg-white/30" />
                  </div>
                </div>
                <div className="text-white/60 text-xs font-medium tracking-[2.5px] uppercase">
                  {product.weight} · MicroMagic
                </div>
              </div>

              {/* Availability */}
              <div className="absolute top-5 left-5 flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1.5">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                <span className="text-white text-xs font-medium">In Stock</span>
              </div>

              {/* Badge */}
              {product.badge && (
                <div className="absolute top-5 right-5 bg-forest/85 text-goldlight text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-sm">
                  {product.badge}
                </div>
              )}
            </div>

            {/* Small batch note */}
            <div className="mt-4 flex items-center gap-2.5 text-sm text-textmid bg-gold/8 border border-gold/20 rounded-xl px-4 py-3">
              <span className="text-gold text-base">⚠</span>
              <span><strong className="text-forest">Limited small batch</strong> — order while fresh stock is available</span>
            </div>
          </div>

          {/* Info */}
          <div className="reveal reveal-delay-1">
            <p className="section-label mb-3">{product.shortName}</p>
            <h1 className="font-serif text-4xl md:text-5xl text-forest font-bold mb-3">{product.name}</h1>
            <p className="font-display italic text-xl text-sage mb-5">{product.tagline}</p>

            <p className="text-textmid text-base leading-relaxed mb-8">{product.description}</p>

            {/* Price + CTA */}
            <div className="flex items-center gap-5 mb-8 p-5 bg-parchment rounded-2xl border border-forest/8">
              <div>
                <p className="text-xs uppercase tracking-[1.5px] text-textlight mb-1">Price</p>
                <p className="font-serif text-3xl text-forest font-bold">{product.price}</p>
                <p className="text-xs text-textlight">{product.weight}</p>
              </div>
              <div className="flex-1">
                <a
                  href={waLink(product.waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-wa w-full justify-center py-4 text-base"
                >
                  <WaIcon size={20} />
                  Order via WhatsApp
                </a>
              </div>
            </div>

            {/* Benefits */}
            <div className="mb-8">
              <h3 className="font-sans text-xs uppercase tracking-[2px] text-textlight font-medium mb-4">What it does for you</h3>
              <ul className="space-y-3">
                {product.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-textmid text-sm leading-relaxed">
                    <div className="w-5 h-5 rounded-full bg-sage/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg viewBox="0 0 10 10" fill="none" className="w-3 h-3">
                        <path d="M1.5 5 L3.8 7.5 L8.5 2.5" stroke="#4e7c5f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Usage */}
            <div className="bg-sage/8 border border-sage/15 rounded-2xl p-6">
              <h3 className="font-sans text-xs uppercase tracking-[2px] text-sage font-medium mb-4">How to use</h3>
              <ol className="space-y-2.5">
                {product.usage.map((u, i) => (
                  <li key={i} className="flex items-start gap-3 text-textmid text-sm leading-relaxed">
                    <span className="w-5 h-5 rounded-full bg-sage text-cream text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {u}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6 bg-parchment">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl text-forest mb-3">Common questions</h2>
            <p className="font-display text-lg text-textlight">Honest answers, no fluff.</p>
          </div>
          <div className="space-y-3">
            {product.faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-forest/7 overflow-hidden hover:border-sage/25 transition-colors"
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-sans font-medium text-forest text-sm">{faq.q}</span>
                  <span className={`text-sage text-lg flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-40' : 'max-h-0'}`}>
                  <p className="px-6 pb-5 text-sm text-textmid leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-textlight text-sm mb-4">Have a different question?</p>
            <a
              href={waLink(`Hi MicroMagic! I have a question about ${product.name}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wa inline-flex"
            >
              <WaIcon size={17} />
              Ask us on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-20 px-6 bg-warmwhite">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl text-forest mb-10 text-center">You might also like</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 max-w-2xl mx-auto">
            {related.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading={`Ready to try ${product.shortName}?`}
        sub="Order via WhatsApp in 30 seconds. Personal guidance included."
        ctaText={`Order ${product.shortName} Now`}
        ctaHref={waLink(product.waMessage)}
      />
    </div>
  );
}
