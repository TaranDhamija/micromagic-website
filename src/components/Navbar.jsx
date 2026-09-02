import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import WaIcon from './WaIcon';
import BrandLogo from './BrandLogo';
import { waLink } from '../data/products';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'Our Story' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isHome = location.pathname === '/';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled || !isHome
          ? 'bg-warmwhite/95 backdrop-blur-md shadow-[0_2px_30px_rgba(30,58,42,0.07)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className={`transition-all duration-300 origin-left ${
            scrolled || !isHome ? 'scale-[0.92]' : 'scale-100'
          }`}
        >
          <BrandLogo
            markClassName="h-7 w-12 md:h-8 md:w-14"
            textClassName="text-[26px] md:text-[30px]"
            lightWordmark={!scrolled && isHome}
            className="items-center"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors hover:text-sage ${
                location.pathname === link.to
                  ? 'text-sage'
                  : scrolled || !isHome
                  ? 'text-textmid'
                  : 'text-cream/80'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <a
          href={waLink("Hi MicroMagic! I'd like to place an order.")}
          target="_blank"
          rel="noopener noreferrer"
          className={`hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
            scrolled || !isHome
              ? 'bg-forest text-cream hover:bg-moss hover:shadow-lg'
              : 'bg-cream/10 border border-cream/25 text-cream hover:bg-cream/20'
          }`}
        >
          <WaIcon size={15} />
          Order Now
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden flex flex-col gap-1.5 p-2 ${
            scrolled || !isHome ? 'text-forest' : 'text-cream'
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-0.5 w-5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-80' : 'max-h-0'}`}>
        <div className="bg-warmwhite/98 backdrop-blur-md border-t border-forest/8 px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={`py-3 text-sm font-medium border-b border-forest/6 transition-colors ${
                location.pathname === link.to ? 'text-sage' : 'text-textmid hover:text-forest'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={waLink("Hi MicroMagic! I'd like to place an order.")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="btn-wa mt-3 justify-center"
          >
            <WaIcon size={16} /> Order on WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}
