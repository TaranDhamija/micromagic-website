import { useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import CTASection from '../components/CTASection';
import WaIcon from '../components/WaIcon';
import { usePageReveal } from '../hooks/useReveal';
import { products, combos, waLink } from '../data/products';

export default function Products() {
  usePageReveal();

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div>
      {/* Header */}
      <div className="bg-forest pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_80%_50%,rgba(46,90,61,0.5),transparent)] pointer-events-none" />
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <p className="section-label justify-center before:bg-goldlight text-goldlight mb-4">Our Range</p>
          <h1 className="font-serif text-5xl text-cream font-bold mb-5">Three plants. One honest brand.</h1>
          <p className="font-display text-xl text-cream/60 leading-relaxed">
            No fillers. No exaggerations. Just clean herbal nutrition in its simplest, most honest form.
          </p>
        </div>
      </div>

      {/* Urgency Bar */}
      <div className="bg-gold/15 border-b border-gold/20 px-6 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2.5 text-sm text-forest">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse flex-shrink-0" />
            <strong>Fresh small batch</strong> — limited stock available right now
          </div>
          <a
            href={waLink("Hi MicroMagic! What products are currently in stock?")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-sage hover:text-forest transition-colors flex items-center gap-1.5"
          >
            Check availability <span>→</span>
          </a>
        </div>
      </div>

      {/* Products Grid */}
      <section className="py-20 px-6 bg-warmwhite">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {products.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Not sure section */}
      <section className="py-16 px-6 bg-parchment border-y border-forest/8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl text-forest mb-3">Not sure where to start?</h2>
          <p className="font-display text-xl text-textlight mb-7 leading-relaxed">
            Tell us about your daily routine and health goals — we'll suggest the best product or combo for you. No upselling, just honest guidance.
          </p>
          <a
            href={waLink("Hi MicroMagic! I'm not sure which product is best for my situation. Can you help me choose?")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa inline-flex"
          >
            <WaIcon size={18} />
            Get a personalised recommendation
          </a>
        </div>
      </section>

      {/* Combo Section */}
      <section className="py-24 px-6 bg-forest relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_50%,rgba(46,90,61,0.5),transparent_70%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-14">
            <p className="section-label justify-center text-goldlight">Bundle Offers</p>
            <h2 className="font-serif text-4xl text-cream mb-3">Better together. Better price.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {combos.map((combo, i) => (
              <div
                key={combo.id}
                className={`relative rounded-[28px] p-10 hover:-translate-y-2 hover:shadow-[0_24px_80px_rgba(0,0,0,0.28)] transition-all duration-400 reveal reveal-delay-${i+1} ${
                  combo.featured ? 'bg-gold border border-goldlight' : 'bg-cream/5 border border-cream/10'
                }`}
              >
                {combo.featured && (
                  <div className="absolute -top-px right-8 bg-forest text-goldlight text-[10px] font-semibold tracking-[1.5px] uppercase px-4 py-1.5 rounded-b-xl">Best Value</div>
                )}
                <p className={`text-[11px] font-medium tracking-[2.5px] uppercase mb-2 ${combo.featured ? 'text-forest/60' : 'text-mint'}`}>{combo.label}</p>
                <h3 className={`font-serif text-2xl font-bold mb-3 ${combo.featured ? 'text-forest' : 'text-cream'}`}>{combo.name}</h3>
                <p className={`text-sm leading-relaxed mb-5 ${combo.featured ? 'text-forest/70' : 'text-cream/60'}`}>{combo.description}</p>
                <ul className="space-y-2 mb-7">
                  {combo.products.map((p) => (
                    <li key={p} className={`flex items-center gap-2 text-sm ${combo.featured ? 'text-forest/80' : 'text-cream/75'}`}>
                      <span className={`font-bold text-xs ${combo.featured ? 'text-forest' : 'text-mint'}`}>✓</span> {p}
                    </li>
                  ))}
                </ul>
                <div className="flex items-end gap-3 mb-5">
                  <span className={`font-serif text-4xl font-bold ${combo.featured ? 'text-forest' : 'text-goldlight'}`}>{combo.price}</span>
                  <span className={`text-xs font-medium px-3 py-1 rounded-full mb-1 ${combo.featured ? 'bg-forest/15 text-forest' : 'bg-goldlight/15 text-goldlight'}`}>{combo.savings}</span>
                </div>
                <a
                  href={waLink(combo.waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2.5 w-full py-3.5 rounded-full text-sm font-medium transition-all duration-300 ${combo.featured ? 'bg-forest text-goldlight hover:bg-moss' : 'bg-cream/8 border border-cream/15 text-cream hover:bg-cream/15'}`}
                >
                  <WaIcon size={15} /> Order This Combo
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to start?"
        sub="Order via WhatsApp in 30 seconds. We'll take care of the rest."
      />
    </div>
  );
}
