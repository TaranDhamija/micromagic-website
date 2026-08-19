import { useState } from 'react';
import { Link } from 'react-router-dom';
import AmbientBackground from './AmbientBackground';
import AnimatedHeadline from './AnimatedHeadline';
import WaIcon from '../WaIcon';
import BrandLogo from '../BrandLogo';
import { waLink } from '../../data/products';

const detailCards = [
  {
    label: 'Atmosphere',
    title: 'From fields in Punjab',
    body: 'Slow-grown botanicals, packed with restraint and care.',
  },
  {
    label: 'Ritual',
    title: 'One teaspoon, daily',
    body: 'A quieter routine built around consistency, not complexity.',
  },
];

const statItems = [
  { value: '100%', label: 'Chemical-Free' },
  { value: '3', label: 'Core Rituals' },
  { value: '₹350', label: 'Starting From' },
];

function HeroCtaButton() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handlePointerMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 12;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 10;

    setOffset({ x, y });
  };

  const resetOffset = () => setOffset({ x: 0, y: 0 });

  return (
    <a
      href={waLink("Hi MicroMagic! I'd like to order. Can you help me choose the right product?")}
      target="_blank"
      rel="noopener noreferrer"
      className="hero-cta group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[#2ac867] px-8 py-4 text-[15px] font-medium text-white shadow-[0_14px_40px_rgba(42,200,103,0.24)] transition-shadow duration-500 hover:shadow-[0_18px_50px_rgba(42,200,103,0.3)]"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetOffset}
    >
      <span className="hero-cta-pulse absolute inset-0 rounded-full" />
      <span
        className="relative z-10 inline-flex items-center gap-3 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ transform: `translate3d(${offset.x}px, ${offset.y}px, 0)` }}
      >
        <WaIcon size={20} />
        Order in 30 seconds
      </span>
    </a>
  );
}

export default function HeroSection() {
  return (
    <section className="hero-section relative flex min-h-screen items-center overflow-hidden bg-forest">
      <AmbientBackground />

      <div className="relative z-10 mx-auto grid min-h-screen w-full max-w-6xl grid-cols-1 gap-16 px-6 pb-14 pt-28 lg:grid-cols-[minmax(0,1.2fr)_minmax(300px,0.8fr)] lg:items-center lg:pt-32">
        <div className="max-w-[720px]">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-goldlight/20 bg-goldlight/10 px-4 py-2 text-[11px] font-medium uppercase tracking-[2.4px] text-goldlight backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-gold hero-dot-pulse" />
            100% Organic · Chemical-Free · Jalandhar, Punjab
          </div>

          <div className="mb-10 flex items-center gap-4 text-cream/85">
            <BrandLogo
              markClassName="h-8 w-14 md:h-9 md:w-16"
              textClassName="text-[28px] md:text-[30px]"
              lightWordmark
            />
            <span className="hidden h-px w-14 bg-gradient-to-r from-cream/40 to-transparent sm:block" />
          </div>

          <AnimatedHeadline />

          <p className="mt-7 max-w-[540px] font-display text-[clamp(19px,2.4vw,25px)] leading-relaxed text-[#D8D5C7]">
            Pure herbal powders and botanicals for a slower, steadier kind of wellness. Honest ingredients, prepared with care, designed to become part of everyday life.
          </p>

          <div className="mt-11 flex flex-wrap items-center gap-5">
            <HeroCtaButton />
            <Link
              to="/products"
              className="group inline-flex items-center gap-3 text-sm font-medium text-cream/58 transition-colors duration-300 hover:text-cream"
            >
              See all products
              <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
            </Link>
          </div>

          <div className="mt-14 grid max-w-[560px] grid-cols-3 gap-5 border-t border-cream/10 pt-8">
            {statItems.map((item) => (
              <div key={item.label}>
                <span className="block font-serif text-[30px] font-bold text-goldlight">
                  {item.value}
                </span>
                <span className="text-[11px] uppercase tracking-[1.8px] text-cream/38">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="hero-editorial-frame absolute right-[12%] top-[6%] h-32 w-32 rounded-full border border-cream/10" />
          <div className="hero-editorial-frame absolute bottom-[10%] left-[4%] h-24 w-24 rounded-full border border-goldlight/10" />

          <div className="relative ml-auto flex max-w-[360px] flex-col gap-6">
            {detailCards.map((card, index) => (
              <article
                key={card.title}
                className={`hero-detail-card rounded-[28px] border border-cream/10 bg-cream/[0.045] p-7 backdrop-blur-xl ${
                  index === 1 ? 'ml-14' : ''
                }`}
              >
                <p className="mb-3 text-[10px] font-medium uppercase tracking-[2.4px] text-goldlight/75">
                  {card.label}
                </p>
                <h3 className="font-serif text-[30px] leading-[1.05] text-cream">
                  {card.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-cream/55">
                  {card.body}
                </p>
              </article>
            ))}

            <div className="hero-ritual-note ml-6 max-w-[280px] rounded-[26px] border border-cream/8 bg-forest/40 p-6 backdrop-blur-md">
              <p className="text-[10px] uppercase tracking-[2.2px] text-sage/80">
                Quiet Luxury Wellness
              </p>
              <p className="mt-4 font-display text-[28px] italic leading-[1.15] text-white/90">
                Daily nourishment, not dramatic promises.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 text-[10px] uppercase tracking-[2.6px] text-cream/28 md:flex">
        <div className="h-8 w-px bg-gradient-to-b from-cream/45 to-transparent" />
        Scroll
      </div>
    </section>
  );
}
