import { useEffect, useState } from 'react';
import WaIcon from '../components/WaIcon';
import CTASection from '../components/CTASection';
import { usePageReveal } from '../hooks/useReveal';
import { waLink } from '../data/products';

const contactMethods = [
  {
    label: 'Phone',
    value: '+91 94170 27979',
    href: 'tel:+919417027979',
    hint: 'Available 9am – 7pm IST',
  },
  {
    label: 'Email',
    value: 'micromagic.ceo@gmail.com',
    href: 'mailto:micromagic.ceo@gmail.com',
    hint: 'We reply within 24 hours',
  },
  {
    label: 'Location',
    value: 'Jalandhar, Punjab',
    href: null,
    hint: 'Pan-India shipping available',
  },
];

const faqs = [
  { q: 'Do you ship across India?', a: 'Yes, we deliver pan-India. Shipping typically takes 3–6 business days depending on your location.' },
  { q: 'How do I place an order?', a: 'The easiest way is via WhatsApp — click any order button. You can also call or email us directly.' },
  { q: 'Can I get a product recommendation?', a: 'Absolutely. Message us on WhatsApp with a brief description of your goals and we\'ll suggest the best option.' },
  { q: 'What payment methods do you accept?', a: 'We accept UPI, bank transfer, and cash on delivery for select locations. Payment details confirmed via WhatsApp.' },
  { q: 'Is there a return policy?', a: 'If you receive a damaged or incorrect product, message us within 48 hours of delivery and we\'ll resolve it immediately.' },
];

export default function Contact() {
  usePageReveal();
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [activeFaq, setActiveFaq] = useState(null);

  return (
    <div>
      {/* Header */}
      <section className="bg-forest pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_60%_50%,rgba(46,90,61,0.5),transparent)] pointer-events-none" />
        <div className="max-w-xl mx-auto text-center relative z-10">
          <p className="section-label justify-center before:bg-goldlight text-goldlight mb-4">Get in Touch</p>
          <h1 className="font-serif text-5xl text-cream font-bold mb-5">We're real people.<br />We reply personally.</h1>
          <p className="font-display text-xl text-cream/60 leading-relaxed">
            No bots, no support tickets. A WhatsApp message or email — and a real person responds.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 px-6 bg-warmwhite">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {contactMethods.map((method, i) => (
              <div key={i} className={`reveal reveal-delay-${i + 1} bg-white rounded-2xl p-7 border border-forest/7 hover:border-sage/25 hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(30,58,42,0.08)]`}>
                <p className="text-[10px] uppercase tracking-[2px] text-textlight font-medium mb-2">{method.label}</p>
                {method.href ? (
                  <a href={method.href} className="font-sans font-semibold text-forest text-base hover:text-sage transition-colors block mb-2">{method.value}</a>
                ) : (
                  <p className="font-sans font-semibold text-forest text-base mb-2">{method.value}</p>
                )}
                <p className="text-xs text-textlight">{method.hint}</p>
              </div>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <div className="reveal bg-forest rounded-[28px] p-10 md:p-14 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_80%,rgba(78,124,95,0.2),transparent)] pointer-events-none" />
            <div className="relative z-10">
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">The fastest way to reach us</h2>
              <p className="font-display text-xl text-white mb-8 max-w-lg mx-auto leading-relaxed">
                Most customers place their order and get a confirmation within 15–30 minutes via WhatsApp.
              </p>
              <a href={waLink("Hi MicroMagic! I'd like to get in touch with your team.")} target="_blank" rel="noopener noreferrer" className="btn-wa inline-flex text-base px-10 py-5">
                <WaIcon size={22} />
                Message Us on WhatsApp
              </a>
              <p className="text-white text-xs mt-5">+91 94170 27979 · micromagic.ceo@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-parchment">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 reveal">
            <h2 className="font-serif text-3xl text-forest mb-3">Frequently asked</h2>
            <p className="font-display text-lg text-textlight">Quick answers before you reach out.</p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="reveal bg-white rounded-2xl border border-forest/7 overflow-hidden hover:border-sage/25 transition-colors">
                <button className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left" onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
                  <span className="font-sans font-medium text-forest text-sm">{faq.q}</span>
                  <span className={`text-sage text-xl flex-shrink-0 transition-transform duration-300 ${activeFaq === i ? 'rotate-45' : ''}`}>+</span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${activeFaq === i ? 'max-h-32' : 'max-h-0'}`}>
                  <p className="px-6 pb-5 text-sm text-textmid leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Still have a question?"
        sub="We're on WhatsApp and typically reply within an hour."
        ctaText="Chat With Us Now"
        ctaHref={waLink("Hi MicroMagic! I have a question.")}
      />
    </div>
  );
}
