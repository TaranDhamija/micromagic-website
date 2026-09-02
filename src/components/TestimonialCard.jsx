export default function TestimonialCard({
  testimonial,
  index = 0,
  className = '',
  isActive = false,
  disableReveal = false,
}) {
  const avatarGradients = [
    'from-sage to-forest',
    'from-earth to-[#c49a5a]',
    'from-moss to-sage',
    'from-[#5a7a6a] to-forest',
  ];

  return (
    <div
      className={`${disableReveal ? '' : `reveal reveal-delay-${index + 1}`} ${disableReveal ? 'visible' : ''} relative h-full bg-warmwhite border border-forest/7 rounded-[24px] p-7 transition-all duration-500 will-change-transform ${
        isActive ? 'border-sage/18 shadow-[0_18px_50px_rgba(30,58,42,0.08)]' : ''
      } ${className}`}
    >
      {/* Product tag */}
      <span className="absolute top-5 right-5 text-[10px] uppercase tracking-[1.5px] text-sage font-medium">
        {testimonial.product}
      </span>

      {/* Stars */}
      <div className="text-gold text-sm tracking-widest mb-4">
        {'★'.repeat(testimonial.rating)}
      </div>

      {/* Text */}
      <p className="font-display italic text-textmid text-[17px] leading-relaxed mb-6">
        "{testimonial.text}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${avatarGradients[index % 4]} flex items-center justify-center text-cream font-serif font-bold text-base flex-shrink-0`}>
          {testimonial.initial}
        </div>
        <div>
          <p className="text-sm font-medium text-forest">{testimonial.name}</p>
          <p className="text-xs text-textlight">{testimonial.location} · {testimonial.duration}</p>
        </div>
      </div>
    </div>
  );
}
