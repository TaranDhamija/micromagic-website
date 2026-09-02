import { motion } from 'framer-motion';
import WaIcon from './WaIcon';
import { waLink } from '../data/products';

export default function CTASection({
  heading,
  sub,
  ctaText,
  ctaHref,
  dark = true,
}) {
  return (
    <section
      className={`py-24 px-6 relative overflow-hidden ${
        dark ? 'bg-forest' : 'bg-warmwhite'
      }`}
    >
      {dark && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_80%,rgba(78,124,95,0.2),transparent_70%)]" />

          <div className="absolute top-0 right-0 w-1/3 h-full bg-[radial-gradient(ellipse_at_right_top,rgba(201,168,76,0.05),transparent_60%)]" />
        </div>
      )}

      <div className="max-w-2xl mx-auto text-center relative z-10">
        {heading && (
          <h2
            className={`text-4xl md:text-5xl mb-4 ${
              dark ? 'text-cream' : 'text-forest'
            }`}
          >
            {heading}
          </h2>
        )}

        {sub && (
          <p
            className={`font-display text-xl leading-relaxed mb-10 ${
              dark ? 'text-cream/60' : 'text-textlight'
            }`}
          >
            {sub}
          </p>
        )}

        <a
          href={
            ctaHref ||
            waLink(
              "Hi MicroMagic! I'd like to start my wellness journey. Can you help me choose?"
            )
          }
          target="_blank"
          rel="noopener noreferrer"
          className="btn-wa inline-flex text-base px-10 py-5"
        >
          <WaIcon size={20} />
          {ctaText || 'Order via WhatsApp in 30 seconds'}
        </a>

        {/* PREMIUM CTA SUPPORTING LINE */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`mt-6 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-[15px] font-medium tracking-[1.6px] ${
            dark ? 'text-white' : 'text-forest'
          }`}
        >
          <span className="h-2 w-2 rounded-full bg-[#25D366] shadow-[0_0_14px_rgba(37,211,102,0.7)]" />

          <span>Small batch</span>

          <span
            className={
              dark ? 'text-goldlight/70' : 'text-gold/70'
            }
          >
            ·
          </span>

          <span>Fresh stock</span>

          <span
            className={
              dark ? 'text-goldlight/70' : 'text-gold/70'
            }
          >
            ·
          </span>

          <span>Pan-India delivery</span>
        </motion.p>
      </div>
    </section>
  );
}