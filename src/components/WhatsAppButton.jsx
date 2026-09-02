import { useState } from 'react';
import WaIcon from './WaIcon';
import { waLink } from '../data/products';

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="fixed bottom-7 right-7 z-50 flex flex-col items-end gap-2"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Tooltip */}
      <div
        className={`bg-white text-textmid text-sm font-medium px-4 py-2 rounded-xl rounded-br-none shadow-lg whitespace-nowrap transition-all duration-300 pointer-events-none ${
          hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
      >
        Order in 30 seconds
      </div>

      {/* Button */}
      <a
        href={waLink("Hi MicroMagic! I'd like to place an order. Can you help me choose the right product?")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Order on WhatsApp"
        className="relative w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-[0_8px_32px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_12px_48px_rgba(37,211,102,0.5)] transition-all duration-300"
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping" />
        <WaIcon size={26} />
      </a>
    </div>
  );
}
