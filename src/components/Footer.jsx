import { Link } from 'react-router-dom';
import WaIcon from './WaIcon';
import BrandLogo from './BrandLogo';
import { waLink } from '../data/products';

export default function Footer() {
  return (
    <footer className="bg-[#0d1c12] text-cream">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-cream/8">
          {/* Brand */}
          <div>
            <BrandLogo
              markClassName="h-10 w-16"
              textClassName="text-[38px]"
              lightWordmark
              className="items-center mb-4"
            />
            <p className="font-display italic text-cream/45 text-base leading-relaxed mb-6">
              Pure Herbal Solution for Modern Living.
              <br />Honest plants. Simple habits. Real nourishment.
            </p>
            <div className="space-y-2.5">
              <a href="tel:+919417027979" className="flex items-center gap-3 text-sm text-cream/50 hover:text-mint transition-colors">
                <span className="text-base">📞</span> +91 94170 27979
              </a>
              <a href="mailto:micromagic.ceo@gmail.com" className="flex items-center gap-3 text-sm text-cream/50 hover:text-mint transition-colors">
                <span className="text-base">✉️</span> micromagic.ceo@gmail.com
              </a>
              <p className="flex items-center gap-3 text-sm text-cream/40">
                <span className="text-base">📍</span> Jalandhar, Punjab, India
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={waLink("Hi MicroMagic! I'd like to know more about your products.")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs px-3 py-1.5 rounded-full border border-cream/20 text-cream/55 hover:text-mint hover:border-mint/40 transition-colors"
              >
                WhatsApp
              </a>
              <a
                href="mailto:micromagic.ceo@gmail.com"
                className="text-xs px-3 py-1.5 rounded-full border border-cream/20 text-cream/55 hover:text-mint hover:border-mint/40 transition-colors"
              >
                Email
              </a>
              <a
                href="tel:+919417027979"
                className="text-xs px-3 py-1.5 rounded-full border border-cream/20 text-cream/55 hover:text-mint hover:border-mint/40 transition-colors"
              >
                Call
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-sans text-xs font-medium tracking-[2.5px] uppercase text-cream/30 mb-5">Products</h4>
            <ul className="space-y-3">
              {[
                { to: '/products/wheatgrass-powder', label: 'Wheatgrass Powder' },
                { to: '/products/moringa-powder', label: 'Moringa Powder' },
                { to: '/products/blue-pea-flowers', label: 'Blue Pea Flowers' },
                { to: '/products', label: 'Full Collection' },
              ].map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm text-cream/50 hover:text-mint transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans text-xs font-medium tracking-[2.5px] uppercase text-cream/30 mb-5">Navigate</h4>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'Our Story' },
                { to: '/contact', label: 'Contact Us' },
              ].map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm text-cream/50 hover:text-mint transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <a
                href={waLink("Hi MicroMagic! I'd like to place an order.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#25D366]/15 border border-[#25D366]/25 text-[#4ade80] hover:bg-[#25D366]/25 transition-all px-4 py-2.5 rounded-full text-sm font-medium"
              >
                <WaIcon size={15} /> Order on WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-cream/20">© 2025 MicroMagic. Made with care in Jalandhar, Punjab.</p>
          <p className="text-xs text-cream/15 font-display italic">
            Pure Herbal Solution for Modern Living
          </p>
        </div>
      </div>
    </footer>
  );
}
