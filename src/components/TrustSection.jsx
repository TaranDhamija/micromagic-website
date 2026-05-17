import { useReveal } from '../hooks/useReveal';
import BrandLogo from './BrandLogo';

const trustItems = [
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <circle cx="20" cy="20" r="19" stroke="#4e7c5f" strokeWidth="1.5" />
        <path d="M20 8 L28 12 L28 22 C28 27 24 31 20 32 C16 31 12 27 12 22 L12 12 Z" fill="none" stroke="#4e7c5f" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M15 20 L18.5 23.5 L25 17" stroke="#4e7c5f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Zero Additives, Zero Compromise',
    body: 'No fillers, binders, or synthetic preservatives. Every label lists exactly what\'s inside — because you deserve to know what you\'re putting in your body.',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <circle cx="20" cy="20" r="19" stroke="#4e7c5f" strokeWidth="1.5" />
        <rect x="11" y="14" width="18" height="14" rx="3" stroke="#4e7c5f" strokeWidth="1.5" />
        <path d="M16 14 L16 11 C16 9.3 17.3 8 19 8 L21 8 C22.7 8 24 9.3 24 11 L24 14" stroke="#4e7c5f" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="20" cy="21" r="2" stroke="#4e7c5f" strokeWidth="1.5" />
      </svg>
    ),
    title: 'Hygienic, Sealed Packaging',
    body: 'Every batch is processed and packed in clean, food-safe conditions. Sealed for freshness from our hands to yours.',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <circle cx="20" cy="20" r="19" stroke="#4e7c5f" strokeWidth="1.5" />
        <path d="M12 20 C12 15.6 15.6 12 20 12 L20 20 L26 24" stroke="#4e7c5f" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="20" cy="20" r="3" stroke="#4e7c5f" strokeWidth="1.5" />
      </svg>
    ),
    title: 'Transparent Sourcing',
    body: 'We source from verified farms and disclose what\'s in each product. No mystery blends, no vague "proprietary formulas."',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <circle cx="20" cy="20" r="19" stroke="#4e7c5f" strokeWidth="1.5" />
        <path d="M14 26 C14 22 17 19 20 19 C23 19 26 22 26 26" stroke="#4e7c5f" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="20" cy="15" r="3" stroke="#4e7c5f" strokeWidth="1.5" />
        <path d="M10 20 L14 20 M26 20 L30 20" stroke="#4e7c5f" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Personal Guidance Included',
    body: 'Not sure which product is right for you? Message us on WhatsApp — we\'ll help you find the best fit for your lifestyle, no hard sell.',
  },
];

const certBadges = [
  { label: 'FSSAI Compliant', sub: 'Food Safety Certified' },
  { label: 'No Artificial Colors', sub: 'Clean Label Verified' },
  { label: 'Small Batch', sub: 'Fresh Production' },
  { label: '100% Traceable', sub: 'Source Transparent' },
];

export default function TrustSection() {
  const ref = useReveal();

  return (
    <section ref={ref} className="py-24 px-6 bg-parchment relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[40%] h-[70%] bg-gradient-to-tl from-sage/5 to-transparent rounded-tl-full" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <p className="section-label reveal justify-center before:hidden">Trust & Quality</p>
          <h2 className="text-4xl md:text-5xl text-forest reveal reveal-delay-1 mb-4">
            Why people trust<br /><em className="font-serif text-sage italic">MicroMagic</em>
          </h2>
          <p className="font-display text-xl text-textlight reveal reveal-delay-2 max-w-xl mx-auto leading-relaxed">
            We're not the loudest brand — but we might be the most honest one.
          </p>
        </div>

        {/* Trust cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {trustItems.map((item, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1} group bg-white rounded-2xl p-6 border border-forest/6 hover:border-sage/30 hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(30,58,42,0.1)] relative overflow-hidden`}
            >
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-sage to-mint scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <div className="mb-4">{item.icon}</div>
              <h3 className="font-sans text-sm font-semibold text-forest mb-2 leading-snug">{item.title}</h3>
              <p className="text-xs text-textlight leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>

        {/* Cert badges */}
        <div className="reveal flex flex-wrap justify-center gap-3 mb-7">
          {certBadges.map((badge, i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-white border border-forest/10 rounded-xl px-5 py-3 hover:border-sage/30 transition-colors"
            >
              <div className="w-6 h-6 rounded-full bg-sage/15 flex items-center justify-center">
                <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
                  <path d="M3 8 L6.5 11.5 L13 5" stroke="#4e7c5f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-forest">{badge.label}</p>
                <p className="text-[10px] text-textlight">{badge.sub}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="reveal flex justify-center">
          <div className="bg-white border border-forest/10 rounded-2xl px-6 py-4">
            <BrandLogo
              monochrome
              markClassName="h-8 w-14"
              textClassName="text-[30px]"
              className="items-center opacity-75"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
