import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function ProductImageSlider({
  product,
  autoplay = true,
  aspectClassName = 'aspect-[0.92/1]',
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(null);

  // Automatically move through product images
  useEffect(() => {
    if (!autoplay || isPaused || product.images.length <= 1) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex(
        (current) => (current + 1) % product.images.length
      );
    }, 3200);

    return () => window.clearInterval(intervalId);
  }, [autoplay, isPaused, product.images.length]);

  const activeImage = product.images[activeIndex];

  const hasRealImages = Boolean(activeImage?.src);

  // Previous / next image
  const paginate = (direction) => {
    setActiveIndex(
      (current) =>
        (current + direction + product.images.length) %
        product.images.length
    );
  };

  // Safety check
  if (!activeImage) {
    return (
      <div
        className={`relative overflow-hidden rounded-[30px] ${aspectClassName} ${product.imgClass || ''}`}
      />
    );
  }

  return (
    <div
      className={`group/product-slider relative overflow-hidden rounded-[30px] touch-pan-y ${aspectClassName}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onTouchStart={(event) => {
        const touch = event.changedTouches[0];

        setTouchStart(
          touch
            ? {
                x: touch.clientX,
                y: touch.clientY,
              }
            : null
        );
      }}
      onTouchEnd={(event) => {
        if (!touchStart) return;

        const touch = event.changedTouches[0];

        if (!touch) {
          setTouchStart(null);
          return;
        }

        const deltaX = touch.clientX - touchStart.x;
        const deltaY = touch.clientY - touchStart.y;

        const isHorizontalSwipe =
          Math.abs(deltaX) > 48 &&
          Math.abs(deltaX) > Math.abs(deltaY) + 12;

        if (isHorizontalSwipe && deltaX > 0) {
          paginate(-1);
        }

        if (isHorizontalSwipe && deltaX < 0) {
          paginate(1);
        }

        setTouchStart(null);
      }}
    >
      {/* Fallback background when there is no real image */}
      {!hasRealImages && (
        <div
          className={`absolute inset-0 ${
            product.imgClass || ''
          }`}
        />
      )}

      {/* Subtle image overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_40%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),transparent_34%,rgba(15,24,18,0.08))]" />

      {/* IMAGE TRANSITION */}
      <AnimatePresence
        mode="wait"
        initial={false}
      >
        <motion.div
          key={activeImage.id}
          className="absolute inset-0"
          initial={{
            opacity: 0,
            scale: 1.04,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 1.02,
          }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {hasRealImages ? (
            <motion.img
              src={activeImage.src}
              alt={
                activeImage.alt ||
                product.name ||
                'MicroMagic product'
              }
              className="absolute inset-0 h-full w-full object-cover"
              animate={{
                scale: isPaused ? 1.04 : 1.01,
              }}
              transition={{
                duration: 1.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              onError={(event) => {
                event.currentTarget.style.display = 'none';
              }}
            />
          ) : (
            <div
              className="absolute inset-0 opacity-[0.9]"
              style={{
                background:
                  activeImage.tones
                    ? `radial-gradient(circle at 28% 18%, ${activeImage.tones[0]}, transparent 32%), radial-gradient(circle at 74% 24%, rgba(255,255,255,0.32), transparent 24%), linear-gradient(140deg, ${activeImage.tones[0]} 0%, ${activeImage.tones[1]} 42%, ${activeImage.tones[2]} 100%)`
                    : undefined,
              }}
            />
          )}

          {/* Placeholder artwork only used when real images don't exist */}
          {!hasRealImages && (
            <motion.div
              className="absolute inset-0"
              animate={{
                scale: isPaused ? 1.04 : 1.01,
              }}
              transition={{
                duration: 1.4,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="absolute left-[14%] top-[16%] h-[72%] w-[48%] rounded-[34px] border border-white/35 bg-white/18 shadow-[0_24px_70px_rgba(9,15,12,0.18)] backdrop-blur-xl" />

              <div className="absolute left-[21%] top-[24%] h-[54%] w-[34%] rounded-[28px] border border-white/45 bg-white/28 shadow-[0_18px_50px_rgba(9,15,12,0.12)] backdrop-blur-md" />

              <div className="absolute left-[25%] top-[30%] h-[9%] w-[26%] rounded-full bg-white/55" />

              <div className="absolute left-[25%] top-[44%] h-[2px] w-[26%] rounded-full bg-white/55" />

              <div className="absolute left-[25%] top-[48%] h-[2px] w-[22%] rounded-full bg-white/42" />

              <div className="absolute left-[25%] top-[52%] h-[2px] w-[20%] rounded-full bg-white/42" />

              <div className="absolute left-[25%] top-[58%] h-[6%] w-[14%] rounded-full bg-white/48" />

              <div className="absolute right-[14%] top-[20%] h-[58%] w-[18%] rounded-[26px] border border-white/25 bg-white/10 backdrop-blur-sm" />

              <div className="absolute right-[12%] bottom-[18%] h-[20%] w-[22%] rounded-[22px] border border-white/22 bg-white/12 backdrop-blur-sm" />
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* WEIGHT */}
      <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-white/18 bg-[#122016]/26 px-3 py-1.5 backdrop-blur-sm">
        <span className="text-[10px] font-medium uppercase tracking-[2px] text-white/78]">
          {product.weight}
        </span>
      </div>

      {/* IMAGE INDICATORS */}
      {product.images.length > 1 && (
        <div className="absolute bottom-5 right-5 flex items-center gap-1.5 rounded-full bg-[#122016]/26 px-2.5 py-1.5 backdrop-blur-sm">
          {product.images.map((image, index) => (
            <button
              key={image.id}
              type="button"
              aria-label={`View image ${index + 1}`}
              onClick={(event) => {
                event.stopPropagation();
                setActiveIndex(index);
              }}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                index === activeIndex
                  ? 'w-4 bg-white/90'
                  : 'w-1.5 bg-white/38'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
