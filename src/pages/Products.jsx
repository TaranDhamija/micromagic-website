import { useEffect } from 'react';
import ProductsGrid from '../components/ProductsGrid';
import CTASection from '../components/CTASection';
import WaIcon from '../components/WaIcon';
import { usePageReveal } from '../hooks/useReveal';
import { products, combos, waLink } from '../data/products';

export default function Products() {
  usePageReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="bg-forest pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_80%_40%,rgba(46,90,61,0.52),transparent_72%)] pointer-events-none" />
        <div className="absolute inset-y-0 left-0 w-[34%] bg-[radial-gradient(ellipse_at_left_center,rgba(232,201,122,0.08),transparent_68%)] pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <p className="section-label text-goldlight before:bg-goldlight mb-5">Collection</p>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_340px] lg:items-end">
            <div>
              <h1 className="font-serif text-[clamp(42px,6vw,76px)] leading-[0.98] text-cream mb-6">
                A premium botanical collection
                <br />
                <em className="italic text-goldlight">designed for exploration.</em>
              </h1>
              <p className="font-display text-[22px] text-cream/62 leading-relaxed max-w-[720px]">
                Each product is presented like an editorial object rather than a catalogue item — with its own story, rhythm, and gallery of quiet visual moments.
              </p>
            </div>
            <div className="rounded-[32px] border border-cream/10 bg-cream/5 p-7 backdrop-blur-md">
              <p className="text-[10px] uppercase tracking-[2.6px] text-goldlight/75 mb-3">Product Discovery</p>
              <p className="font-display text-[28px] italic leading-[1.08] text-cream/82">
                Browse by mood, ritual, and ingredient character — not just by price.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gold/15 border-b border-gold/20 px-6 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2.5 text-sm text-forest">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse flex-shrink-0" />
            <strong>Fresh small batch</strong> — every product is packed in limited runs for better freshness
          </div>
          <a
            href={waLink('Hi MicroMagic! What products are currently in stock?')}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-sage hover:text-forest transition-colors flex items-center gap-1.5"
          >
            Check availability <span>→</span>
          </a>
        </div>
      </div>

      <section className="py-24 px-6 bg-warmwhite">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="section-label reveal">Discover</p>
              <h2 className="text-[clamp(34px,4.6vw,58px)] text-forest reveal reveal-delay-1 mb-4">
                Seven products,
                <br />
                <em className="italic text-sage">each with its own visual story.</em>
              </h2>
            </div>
            <p className="max-w-xl font-display text-[21px] leading-relaxed text-textlight reveal reveal-delay-2">
              Every card below supports a multi-image gallery from the start, so the experience can grow naturally when final product photography is added.
            </p>
          </div>

          <ProductsGrid products={products} />
        </div>
      </section>

      <section className="py-16 px-6 bg-parchment border-y border-forest/8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl text-forest mb-3">Not sure where to begin?</h2>
          <p className="font-display text-xl text-textlight mb-7 leading-relaxed">
            Share your routine, your goals, or what feels off right now. We&apos;ll help you choose the most natural starting point without upselling.
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

      <section className="py-24 px-6 bg-forest relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_50%,rgba(46,90,61,0.5),transparent_70%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-14">
            <p className="section-label justify-center before:bg-goldlight text-goldlight">Bundle Offers</p>
            <h2 className="font-serif text-4xl text-cream mb-3">Better together. Better value.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {combos.map((combo, i) => (
              <div
                key={combo.id}
                className={`relative rounded-[28px] p-10 hover:-translate-y-2 hover:shadow-[0_24px_80px_rgba(0,0,0,0.28)] transition-all duration-400 reveal reveal-delay-${i + 1} ${
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
        heading="Ready to explore your ritual?"
        sub="Every product page goes deeper on ingredients, benefits, and how it fits into your routine."
      />
    </div>
  );
}
