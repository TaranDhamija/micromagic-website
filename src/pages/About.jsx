import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import WaIcon from '../components/WaIcon';
import CTASection from '../components/CTASection';
import { usePageReveal } from '../hooks/useReveal';
import { waLink } from '../data/products';

const values = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="24" r="22" stroke="#4e7c5f" strokeWidth="1.5" opacity="0.3" />
        <path d="M24 10 L32 16 L32 28 C32 34 28 38 24 40 C20 38 16 34 16 28 L16 16 Z" fill="none" stroke="#4e7c5f" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M19 24 L22.5 27.5 L29 21" stroke="#4e7c5f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Purity',
    body: 'Every product contains exactly what the label says — nothing more. No fillers, no binders, no preservatives. Just the plant in its cleanest form.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="24" r="22" stroke="#4e7c5f" strokeWidth="1.5" opacity="0.3" />
        <circle cx="24" cy="20" r="6" stroke="#4e7c5f" strokeWidth="1.5" />
        <path d="M14 38 C14 32 18.5 28 24 28 C29.5 28 34 32 34 38" stroke="#4e7c5f" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Honesty',
    body: 'We don\'t make exaggerated medical claims. We share what the plants are traditionally known for, clearly and without hype.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="24" r="22" stroke="#4e7c5f" strokeWidth="1.5" opacity="0.3" />
        <path d="M16 32 Q20 20 24 16 Q28 20 32 32" stroke="#4e7c5f" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18 26 Q22 22 24 20 Q26 22 30 26" stroke="#4e7c5f" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Simplicity',
    body: 'A single plant, a single teaspoon, once a day. Wellness doesn\'t need to be complicated — it needs to be consistent.',
  },
];

export default function About() {
  usePageReveal();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div>
      {/* Hero */}
      <section className="bg-forest pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_50%_100%,rgba(78,124,95,0.22),transparent)] pointer-events-none" />
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <p className="section-label justify-center before:bg-goldlight text-goldlight mb-4">Our Story</p>
          <h1 className="font-serif text-5xl md:text-6xl text-cream font-bold mb-6">
            A small brand with<br /><em className="italic text-gradient-gold">one big conviction.</em>
          </h1>
          <p className="font-display text-xl text-cream/60 leading-relaxed">
            That the simplest, most honest things you put into your body — every single day — are the ones that matter most.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6 bg-warmwhite">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <div className="bg-parchment rounded-3xl p-10 relative overflow-hidden">
              <div className="font-serif text-[100px] text-sage/10 leading-none absolute top-0 left-6">"</div>
              <blockquote className="font-serif text-2xl text-forest leading-relaxed italic pt-8 relative z-10">
                We started MicroMagic because we couldn't find a herbal supplement that was <strong className="not-italic text-sage">honest about what it was</strong> and wasn't loaded with things it didn't need.
              </blockquote>
              <p className="font-sans text-sm text-textlight mt-6 relative z-10">— The MicroMagic Team, Jalandhar</p>
            </div>
          </div>

          <div className="reveal reveal-delay-1">
            <p className="section-label">Where We Started</p>
            <h2 className="font-serif text-3xl text-forest mb-5">From Jalandhar, with intention.</h2>
            <div className="space-y-4 text-textmid text-base leading-relaxed">
              <p>
                MicroMagic was born in Jalandhar, Punjab — a city with a deep connection to agriculture and natural living. We started small, sourcing from farms we trusted, drying slowly to preserve potency, and packing everything by hand.
              </p>
              <p>
                Our philosophy has never changed: give people plants in their purest form, tell them exactly what's inside, and don't make promises the plant can't keep.
              </p>
              <p>
                We're not a corporation or a VC-funded startup. We're a small team that genuinely believes in what we make — and we eat our own products every day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 bg-parchment">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label reveal justify-center before:hidden">What Guides Us</p>
            <h2 className="font-serif text-4xl text-forest reveal reveal-delay-1">Our three principles</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {values.map((v, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${i + 1} bg-white rounded-2xl p-8 border border-forest/6 hover:border-sage/25 hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(30,58,42,0.08)]`}
              >
                <div className="mb-5">{v.icon}</div>
                <h3 className="font-serif text-xl text-forest mb-3">{v.title}</h3>
                <p className="text-sm text-textlight leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="section-label reveal justify-center before:hidden">Our Mission</p>
          <h2 className="font-serif text-4xl md:text-5xl text-forest reveal reveal-delay-1 mb-6">
            Make daily wellness<br /><em className="italic text-sage">radically simple.</em>
          </h2>
          <p className="font-display text-xl text-textlight reveal reveal-delay-2 leading-relaxed max-w-2xl mx-auto mb-10">
            We believe that the best wellness habit is one you'll actually stick to. Not the most elaborate supplement stack. Not the most expensive powder. Just one honest, pure plant — every morning. That's it.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              { num: '3', label: 'Products', sub: 'And we take every one seriously.' },
              { num: '0', label: 'Additives', sub: 'Not a single one. Ever.' },
              { num: '100%', label: 'Transparent', sub: 'Every ingredient listed.' },
            ].map((stat) => (
              <div key={stat.label} className="reveal">
                <div className="font-serif text-4xl text-forest font-bold mb-1">{stat.num}</div>
                <div className="text-sm font-semibold text-textmid mb-1">{stat.label}</div>
                <div className="font-display italic text-textlight text-sm">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-16 px-6 bg-sage/8 border-y border-sage/15">
        <div className="max-w-xl mx-auto text-center">
          <p className="font-display italic text-xl text-textmid mb-5">Have a question about our sourcing or ingredients?</p>
          <a
            href={waLink("Hi MicroMagic! I have a question about your sourcing and ingredients.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa inline-flex"
          >
            <WaIcon size={18} />
            Ask us anything on WhatsApp
          </a>
        </div>
      </section>

      <CTASection
        heading="Ready to experience the difference?"
        sub="Honest plants. Simple habits. Starting at ₹350."
        ctaText="Order via WhatsApp in 30 seconds"
      />
    </div>
  );
}
