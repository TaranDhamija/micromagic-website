export default function TestimonialCard({ testimonial, index = 0 }) {
  const avatarGradients = [
    'from-sage to-forest',
    'from-earth to-[#c49a5a]',
    'from-moss to-sage',
    'from-[#5a7a6a] to-forest',
  ];

  return (
    <div className={`reveal reveal-delay-${index + 1} relative bg-warmwhite border border-forest/7 rounded-[24px] p-7 hover:border-sage/25 hover:-translate-y-1.5 transition-all duration-300 hover:shadow-[0_20px_60px_rgba(30,58,42,0.1)]`}>
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
