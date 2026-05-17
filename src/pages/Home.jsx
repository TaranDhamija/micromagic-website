import { Link } from 'react-router-dom';
import WaIcon from '../components/WaIcon';
import ProductCard from '../components/ProductCard';
import TrustSection from '../components/TrustSection';
import CTASection from '../components/CTASection';
import TestimonialCarousel from '../components/testimonials/TestimonialCarousel';
import HeroSection from '../components/hero/HeroSection';
import { usePageReveal } from '../hooks/useReveal';
import { products, combos, testimonials, waLink } from '../data/products';

export default function Home() {
  usePageReveal();

  return (
    <div>
      <HeroSection />

      {/* ─── PROBLEM ─── */}
      <section className="py-24 px-6 bg-parchment relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[35%] h-full bg-[radial-gradient(ellipse_at_right_center,rgba(78,124,95,0.06),transparent_70%)] pointer-events-none" />
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-label reveal">The Problem</p>
            <h2 className="text-[clamp(32px,4.5vw,52px)] text-forest reveal reveal-delay-1 mb-5">
              Modern life is draining you — quietly.
            </h2>
            <p className="font-display text-xl text-textlight leading-relaxed reveal reveal-delay-2 mb-10">
              You eat, you sleep, you work. But something feels off. Energy levels crash by noon. Digestion isn't great. And most "health solutions" are expensive, confusing, or full of ingredients you can't pronounce.
            </p>
            <div className="space-y-4 reveal reveal-delay-3">
              {[
                { title: 'Persistent afternoon fatigue', body: 'Even after 7–8 hours of sleep, your body isn\'t getting the micronutrients it needs to sustain real energy.' },
                { title: 'Gut that never feels quite right', body: 'Bloating, sluggishness, inconsistency — signs that your digestive system is asking for better nourishment.' },
                { title: 'Supplements full of fillers', body: 'Most health products are overprocessed powders with more additives than actual nutrition. Your body knows the difference.' },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-5 flex gap-4 items-start border border-forest/6 hover:border-sage/25 hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-goldlight/12 flex items-center justify-center text-gold text-lg flex-shrink-0">✦</div>
                  <div>
                    <h4 className="font-sans text-sm font-semibold text-forest mb-1">{item.title}</h4>
                    <p className="text-xs text-textlight leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal">
            <div className="relative">
              <div className="font-serif text-[110px] text-sage/8 leading-none mb-2">"</div>
              <blockquote className="font-serif text-[clamp(24px,3vw,34px)] text-forest leading-[1.35] italic">
                The best thing you can do for your body is stop{' '}
                <strong className="not-italic text-sage font-bold">choosing convenience over nourishment.</strong>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SOLUTION ─── */}
      <section className="py-24 px-6 bg-forest relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_70%_at_0%_100%,rgba(78,124,95,0.28),transparent_60%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="section-label reveal justify-center before:hidden text-mint">The MicroMagic Way</p>
          <h2 className="text-[clamp(34px,5vw,58px)] text-cream reveal reveal-delay-1 mb-5">
            Nature had the answer<br />
            <em className="italic text-goldlight">all along.</em>
          </h2>
          <p className="font-display text-xl text-cream/60 reveal reveal-delay-2 leading-relaxed max-w-[580px] mx-auto mb-14">
            No mystery blends. No lab-engineered shortcuts. Just pure, whole-plant nutrition — the same herbs humans have thrived on for centuries.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '🌱', title: 'Purely Natural', body: 'Every product starts with a single, honest ingredient. No additives, no preservatives, no compromise.' },
              { icon: '☕', title: 'One Teaspoon a Day', body: 'The simplest wellness habit you\'ll ever build. Takes 30 seconds and works with your existing routine.' },
              { icon: '🤝', title: 'Honestly Sourced', body: 'We don\'t exaggerate. We source clean, share what\'s inside, and let the plants do the talking.' },
            ].map((p, i) => (
              <div key={i} className={`reveal reveal-delay-${i + 1} group bg-cream/5 border border-cream/8 rounded-2xl p-8 text-center hover:bg-cream/10 hover:border-gold/25 hover:-translate-y-1.5 transition-all duration-300`}>
                <span className="text-3xl mb-5 block">{p.icon}</span>
                <h3 className="text-goldlight font-serif text-lg mb-3">{p.title}</h3>
                <p className="text-cream/55 text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED PRODUCTS ─── */}
      <section className="py-24 px-6 bg-warmwhite">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label reveal justify-center before:hidden">Our Products</p>
            <h2 className="text-[clamp(32px,4.5vw,52px)] text-forest reveal reveal-delay-1 mb-4">
              Three plants. Endless benefits.
            </h2>
            <p className="font-display text-xl text-textlight reveal reveal-delay-2 max-w-[480px] mx-auto">
              Each product is sourced honestly, packed hygienically, and delivered to your door.
            </p>
          </div>

          {/* Urgency banner */}
          <div className="reveal mb-10 bg-gold/10 border border-gold/25 rounded-2xl px-6 py-4 flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              <span className="text-sm font-medium text-forest">
                <strong>Small batch production</strong> — limited fresh stock available
              </span>
            </div>
            <span className="text-xs text-textlight bg-white px-3 py-1.5 rounded-full border border-forest/10">
              Fresh batch • Hygienically packed
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {products.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>

          <div className="text-center mt-10 reveal">
            <Link to="/products" className="btn-forest inline-flex text-sm px-6 py-3">
              View Full Details →
            </Link>
          </div>
        </div>
      </section>

      {/* Mid CTA */}
      <section className="py-14 px-6 bg-sage/8 border-y border-sage/15">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-display italic text-xl text-textmid mb-5">Not sure which product is right for you?</p>
          <a
            href={waLink("Hi MicroMagic! I'm not sure which product is right for me. Can you help me choose?")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa inline-flex"
          >
            <WaIcon size={18} />
            We'll help you choose — message us
          </a>
        </div>
      </section>

      {/* ─── TRUST ─── */}
      <TrustSection />

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label reveal justify-center before:hidden">Real Customers</p>
            <h2 className="text-[clamp(32px,4.5vw,52px)] text-forest reveal reveal-delay-1">
              What they're saying
            </h2>
          </div>
          <div className="reveal reveal-delay-2">
            <TestimonialCarousel testimonials={testimonials} />
          </div>
        </div>
      </section>

      {/* ─── COMBOS ─── */}
      <section className="py-24 px-6 bg-forest relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_50%,rgba(46,90,61,0.5),transparent_70%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-14">
            <p className="section-label reveal justify-center before:bg-goldlight before:block text-goldlight">Bundle & Save</p>
            <h2 className="text-[clamp(32px,4.5vw,52px)] text-cream reveal reveal-delay-1 mb-3">
              Get more, spend less.
            </h2>
            <p className="font-display text-xl text-cream/55 reveal reveal-delay-2 max-w-lg mx-auto">
              Build a complete daily wellness routine at a price that makes sense.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {combos.map((combo, i) => (
              <div
                key={combo.id}
                className={`reveal reveal-delay-${i + 1} relative rounded-[28px] p-10 transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_24px_80px_rgba(0,0,0,0.28)] ${
                  combo.featured
                    ? 'bg-gold border border-goldlight'
                    : 'bg-cream/5 border border-cream/10'
                }`}
              >
                {combo.featured && (
                  <div className="absolute -top-px right-8 bg-forest text-goldlight text-[10px] font-semibold tracking-[1.5px] uppercase px-4 py-1.5 rounded-b-xl">
                    Best Value
                  </div>
                )}
                <p className={`text-[11px] font-medium tracking-[2.5px] uppercase mb-2 ${combo.featured ? 'text-forest/60' : 'text-mint'}`}>
                  {combo.label}
                </p>
                <h3 className={`font-serif text-2xl font-bold mb-4 ${combo.featured ? 'text-forest' : 'text-cream'}`}>
                  {combo.name}
                </h3>
                <p className={`text-sm leading-relaxed mb-6 ${combo.featured ? 'text-forest/70' : 'text-cream/60'}`}>
                  {combo.description}
                </p>
                <ul className="space-y-2.5 mb-8">
                  {combo.products.map((p) => (
                    <li key={p} className={`flex items-center gap-2.5 text-sm ${combo.featured ? 'text-forest/80' : 'text-cream/75'}`}>
                      <span className={`text-xs font-bold ${combo.featured ? 'text-forest' : 'text-mint'}`}>✓</span>
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="flex items-end gap-3 mb-6">
                  <span className={`font-serif text-4xl font-bold ${combo.featured ? 'text-forest' : 'text-goldlight'}`}>
                    {combo.price}
                  </span>
                  <span className={`text-xs font-medium px-3 py-1 rounded-full mb-1.5 ${combo.featured ? 'bg-forest/15 text-forest' : 'bg-goldlight/15 text-goldlight'}`}>
                    {combo.savings}
                  </span>
                </div>
                <a
                  href={waLink(combo.waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2.5 w-full py-3.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    combo.featured
                      ? 'bg-forest text-goldlight hover:bg-moss hover:shadow-lg'
                      : 'bg-cream/8 border border-cream/15 text-cream hover:bg-cream/15'
                  }`}
                >
                  <WaIcon size={16} />
                  Order This Combo
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW TO ORDER ─── */}
      <section className="py-24 px-6 bg-parchment">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-label reveal">How to Order</p>
            <h2 className="text-[clamp(28px,4vw,44px)] text-forest reveal reveal-delay-1 mb-4">
              Three steps to your first order.
            </h2>
            <p className="font-display text-xl text-textlight reveal reveal-delay-2 mb-10">
              No app. No checkout flow. Just a quick WhatsApp message and we handle the rest.
            </p>
            <div className="space-y-0">
              {[
                { num: '1', title: 'Tap the WhatsApp button', body: 'Any "Order" button on this page opens a chat with our team — pre-filled message included.' },
                { num: '2', title: 'Tell us what you\'d like', body: 'Share your product or combo choice. We\'ll confirm availability and your delivery address.' },
                { num: '3', title: 'We pack and ship it', body: 'Fresh batch, hygienically packed, dispatched to your door. Tracking shared once shipped.' },
              ].map((step, i) => (
                <div key={i} className={`reveal reveal-delay-${i + 1} flex gap-6 pb-10 relative`}>
                  {i < 2 && (
                    <div className="absolute left-5 top-11 bottom-0 w-px bg-gradient-to-b from-sage to-transparent" />
                  )}
                  <div className="w-10 h-10 rounded-full bg-forest text-goldlight font-serif font-bold text-base flex items-center justify-center flex-shrink-0 relative z-10">
                    {step.num}
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-forest text-base mb-1.5">{step.title}</h4>
                    <p className="text-sm text-textlight leading-relaxed">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal">
            <div className="bg-forest rounded-[28px] p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-goldlight/6 rounded-full -translate-y-1/2 translate-x-1/2" />
              <h3 className="font-serif text-2xl text-cream mb-3 relative z-10">Ready to start?</h3>
              <p className="text-cream/55 text-sm leading-relaxed mb-8 relative z-10">
                Our team answers WhatsApp messages personally — no bots, no automated flows. Just real people helping you find the right product.
              </p>
              <a
                href={waLink("Hi MicroMagic! I'd like to place an order. What's available right now?")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa w-full justify-center relative z-10 text-base py-4"
              >
                <WaIcon size={19} />
                Order on WhatsApp
              </a>
              <p className="text-cream/30 text-xs text-center mt-4 relative z-10">
                📍 Jalandhar, Punjab · +91 94170 27979
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <CTASection
        heading={<>Start nourishing your body<br /><em className="italic text-goldlight">the natural way.</em></>}
        sub="Pure herbs. Honest prices. One teaspoon at a time."
        ctaText="Begin Your Wellness Journey"
      />
    </div>
  );
}
