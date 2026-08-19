import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const AUTOPLAY_DELAY = 3200;
const SWIPE_THRESHOLD = 900;

function getSwipePower(offset, velocity) {
  return Math.abs(offset) * velocity;
}

function getWrappedIndex(current, direction, total) {
  return (current + direction + total) % total;
}

export default function ProductGallery({ product }) {
  const images = useMemo(() => product.images ?? [], [product.images]);
  const totalImages = images.length;

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);
  const [autoplayResetKey, setAutoplayResetKey] = useState(0);

  useEffect(() => {
    if (activeIndex > totalImages - 1) {
      setActiveIndex(0);
    }
  }, [activeIndex, totalImages]);

  useEffect(() => {
    if (totalImages <= 1 || isAutoplayPaused) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setDirection(1);
      setActiveIndex((current) =>
        getWrappedIndex(current, 1, totalImages)
      );
    }, AUTOPLAY_DELAY);

    return () => window.clearInterval(intervalId);
  }, [autoplayResetKey, isAutoplayPaused, totalImages]);

  const activeImage = images[activeIndex];
  const hasRealImage = Boolean(activeImage?.src);

  const goToIndex = (nextIndex) => {
    if (nextIndex === activeIndex || totalImages <= 0) {
      return;
    }

    const normalizedIndex =
      (nextIndex + totalImages) % totalImages;

    const delta = normalizedIndex - activeIndex;

    setDirection(delta > 0 ? 1 : -1);
    setActiveIndex(normalizedIndex);
    setAutoplayResetKey((current) => current + 1);
  };

  const paginate = (step) => {
    if (totalImages <= 0) {
      return;
    }

    setDirection(step > 0 ? 1 : -1);

    setActiveIndex((current) =>
      getWrappedIndex(current, step, totalImages)
    );

    setAutoplayResetKey((current) => current + 1);
  };

  const toggleAutoplay = () => {
    setIsAutoplayPaused((current) => !current);
    setAutoplayResetKey((current) => current + 1);
  };

  const handleKeyDown = (event) => {
    if (totalImages <= 1 && event.code !== 'Space') {
      return;
    }

    if (event.code === 'ArrowLeft') {
      event.preventDefault();
      paginate(-1);
    }

    if (event.code === 'ArrowRight') {
      event.preventDefault();
      paginate(1);
    }

    if (event.code === 'Space') {
      event.preventDefault();
      toggleAutoplay();
    }
  };

  if (!activeImage) {
    return (
      <div className="rounded-[34px] border border-forest/8 bg-white shadow-[0_18px_60px_rgba(18,35,25,0.08)]">
        <div className="aspect-[0.95/1] rounded-[34px] bg-[linear-gradient(145deg,rgba(250,248,242,0.92),rgba(232,223,204,0.74))]" />
      </div>
    );
  }

  const controlsSurface =
    'border border-forest/10 bg-[#f7f2e8]/78 text-forest shadow-[0_12px_32px_rgba(18,35,25,0.08)] backdrop-blur-md';

  return (
    <>
      <div
        className="space-y-4"
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        {/* MAIN IMAGE */}
        <div className="group relative overflow-hidden rounded-[34px] border border-forest/8 bg-white shadow-[0_18px_60px_rgba(18,35,25,0.08)]">

          {/* Click main image to open lightbox */}
          <button
            type="button"
            className="absolute inset-0 z-10 cursor-zoom-in"
            onClick={() => setLightboxOpen(true)}
            aria-label={`Open ${product.name} gallery image ${activeIndex + 1} of ${totalImages}`}
          />

          <div className="relative aspect-[0.95/1] overflow-hidden bg-[linear-gradient(180deg,rgba(250,248,242,0.96),rgba(244,238,226,0.92))]">

            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.36),transparent_42%)]" />

            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent_26%,rgba(15,31,20,0.05)_100%)]" />

            <AnimatePresence
              mode="wait"
              initial={false}
              custom={direction}
            >
              <motion.div
                key={
                  activeImage.id ??
                  `${product.id}-${activeIndex}`
                }
                custom={direction}
                className="absolute inset-0"
                initial={{
                  opacity: 0,
                  x: direction > 0 ? 18 : -18,
                  filter: 'blur(8px)',
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  filter: 'blur(0px)',
                }}
                exit={{
                  opacity: 0,
                  x: direction > 0 ? -18 : 18,
                  filter: 'blur(8px)',
                }}
                transition={{
                  duration: 0.72,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {hasRealImage ? (
                  <motion.img
                    src={activeImage.src}
                    alt={
                      activeImage.alt ||
                      product.name ||
                      'MicroMagic product'
                    }
                    className="absolute inset-0 h-full w-full object-contain p-4 sm:p-6"
                    initial={{ scale: 1.02 }}
                    animate={{ scale: 1 }}
                    transition={{
                      duration: 1.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    drag={totalImages > 1 ? 'x' : false}
                    dragConstraints={{
                      left: 0,
                      right: 0,
                    }}
                    dragElastic={0.08}
                    onDragEnd={(_, info) => {
                      const swipe = getSwipePower(
                        info.offset.x,
                        info.velocity.x
                      );

                      if (swipe < -SWIPE_THRESHOLD) {
                        paginate(1);
                      }

                      if (swipe > SWIPE_THRESHOLD) {
                        paginate(-1);
                      }
                    }}
                    onError={(event) => {
                      event.currentTarget.style.display = 'none';
                    }}
                  />
                ) : (
                  <motion.div
                    className="absolute inset-0"
                    initial={{ scale: 1.02 }}
                    animate={{ scale: 1 }}
                    transition={{
                      duration: 1.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <div
                      className="absolute inset-0 opacity-[0.92]"
                      style={{
                        background: activeImage.tones
                          ? `radial-gradient(circle at 24% 20%, rgba(255,255,255,0.34), transparent 20%), radial-gradient(circle at 76% 18%, rgba(255,255,255,0.18), transparent 22%), linear-gradient(145deg, ${activeImage.tones[0]} 0%, ${activeImage.tones[1]} 46%, ${activeImage.tones[2]} 100%)`
                          : undefined,
                      }}
                    />
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* GALLERY CONTROLS */}
          {totalImages > 1 && (
            <div className="border-t border-forest/8 bg-[linear-gradient(180deg,rgba(250,248,242,0.92),rgba(247,242,232,0.98))] px-4 py-4 sm:px-5">

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                <div className="flex items-center gap-2 self-start sm:self-auto">

                  {/* PREVIOUS */}
                  <button
                    type="button"
                    onClick={() => paginate(-1)}
                    aria-label="Previous image"
                    className={`inline-flex h-10 items-center gap-2 rounded-full px-4 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/28 hover:text-earth ${controlsSurface}`}
                  >
                    <span aria-hidden="true">←</span>
                    <span>Previous</span>
                  </button>

                  {/* IMAGE COUNT */}
                  <div
                    className={`rounded-full px-4 py-2 text-sm tracking-[0.18em] text-textlight ${controlsSurface}`}
                  >
                    {activeIndex + 1} / {totalImages}
                  </div>

                  {/* NEXT */}
                  <button
                    type="button"
                    onClick={() => paginate(1)}
                    aria-label="Next image"
                    className={`inline-flex h-10 items-center gap-2 rounded-full px-4 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/28 hover:text-earth ${controlsSurface}`}
                  >
                    <span>Next</span>
                    <span aria-hidden="true">→</span>
                  </button>
                </div>

                <div className="flex items-center justify-between gap-3 sm:justify-end">

                  {/* IMAGE DOTS */}
                  <div className="flex flex-wrap items-center gap-2">
                    {images.map((image, index) => (
                      <button
                        key={
                          image.id ??
                          `${product.id}-indicator-${index}`
                        }
                        type="button"
                        aria-label={`View image ${index + 1} of ${totalImages}`}
                        aria-pressed={index === activeIndex}
                        onClick={() => goToIndex(index)}
                        className={`h-2 rounded-full transition-all duration-500 ${
                          index === activeIndex
                            ? 'w-7 bg-gold/80 shadow-[0_0_0_1px_rgba(201,168,76,0.2)]'
                            : 'w-2 bg-forest/22 hover:bg-forest/40'
                        }`}
                      />
                    ))}
                  </div>

                  {/* AUTOPLAY */}
                  <button
                    type="button"
                    onClick={toggleAutoplay}
                    aria-label={
                      isAutoplayPaused
                        ? 'Resume autoplay'
                        : 'Pause autoplay'
                    }
                    aria-pressed={isAutoplayPaused}
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/28 hover:text-earth ${controlsSurface}`}
                  >
                    <span
                      aria-hidden="true"
                      className="text-sm"
                    >
                      {isAutoplayPaused ? '▶' : '❚❚'}
                    </span>
                  </button>

                </div>
              </div>
            </div>
          )}
        </div>

        {/* THUMBNAILS */}
        {totalImages > 1 && (
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-5">
            {images.map((image, index) => (
              <button
                key={
                  image.id ??
                  `${product.id}-thumb-${index}`
                }
                type="button"
                onClick={() => goToIndex(index)}
                aria-label={`Select image ${index + 1} of ${totalImages}`}
                className={`overflow-hidden rounded-[18px] border transition-all duration-300 ${
                  index === activeIndex
                    ? 'border-sage shadow-[0_10px_30px_rgba(18,35,25,0.1)]'
                    : 'border-forest/8 hover:border-sage/35'
                }`}
              >
                {image.src ? (
                  <img
                    src={image.src}
                    alt={
                      image.alt ||
                      `${product.name} thumbnail ${index + 1}`
                    }
                    className="aspect-square h-full w-full object-contain bg-[#faf8f2] p-2"
                    onError={(event) => {
                      event.currentTarget.style.display = 'none';
                    }}
                  />
                ) : (
                  <div
                    className="aspect-square w-full"
                    style={{
                      background: image.tones
                        ? `linear-gradient(145deg, ${image.tones[0]} 0%, ${image.tones[1]} 46%, ${image.tones[2]} 100%)`
                        : undefined,
                    }}
                  />
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            className="fixed inset-0 z-[70] bg-[#081109]/82 px-4 py-8 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            {/* CLOSE BUTTON */}
            <button
              type="button"
              className="absolute right-6 top-6 rounded-full border border-[#d8d4c6] bg-[#f7f3e8] px-5 py-2 text-sm font-medium text-[#173d2b] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#173d2b] hover:text-[#f7f3e8]"
              onClick={() => setLightboxOpen(false)}
              aria-label="Close lightbox"
            >
              Close
            </button>

            <div className="mx-auto flex h-full max-w-5xl items-center justify-center">
              <div className="w-full">

                <AnimatePresence
                  mode="wait"
                  initial={false}
                >
                  {activeImage.src ? (
                    <motion.img
                      key={`lightbox-${
                        activeImage.id ?? activeIndex
                      }`}
                      src={activeImage.src}
                      alt={
                        activeImage.alt ||
                        product.name
                      }
                      className="mx-auto max-h-[78vh] w-auto rounded-[30px] object-contain shadow-[0_28px_90px_rgba(0,0,0,0.28)]"
                      initial={{
                        opacity: 0,
                        y: 10,
                        filter: 'blur(8px)',
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        filter: 'blur(0px)',
                      }}
                      exit={{
                        opacity: 0,
                        y: -10,
                        filter: 'blur(8px)',
                      }}
                      transition={{
                        duration: 0.55,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />
                  ) : (
                    <motion.div
                      key={`lightbox-${
                        activeImage.id ?? activeIndex
                      }`}
                      className="mx-auto aspect-square max-h-[78vh] w-full max-w-[42rem] rounded-[30px] shadow-[0_28px_90px_rgba(0,0,0,0.28)]"
                      style={{
                        background: activeImage.tones
                          ? `linear-gradient(145deg, ${activeImage.tones[0]} 0%, ${activeImage.tones[1]} 46%, ${activeImage.tones[2]} 100%)`
                          : 'linear-gradient(145deg, rgba(247,242,232,0.9), rgba(231,221,201,0.78))',
                      }}
                      initial={{
                        opacity: 0,
                        y: 10,
                        filter: 'blur(8px)',
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        filter: 'blur(0px)',
                      }}
                      exit={{
                        opacity: 0,
                        y: -10,
                        filter: 'blur(8px)',
                      }}
                      transition={{
                        duration: 0.55,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />
                  )}
                </AnimatePresence>

                {/* LIGHTBOX NAVIGATION */}
                {totalImages > 1 && (
                  <div className="mt-5 flex flex-wrap items-center justify-center gap-3">

                    <button
                      type="button"
                      className="rounded-full border border-white/16 bg-white/8 px-4 py-2 text-sm text-white/88"
                      onClick={() => paginate(-1)}
                      aria-label="Previous lightbox image"
                    >
                      Previous
                    </button>

                    <p className="text-sm tracking-[0.2em] text-white/74">
                      {activeIndex + 1} / {totalImages}
                    </p>

                    <button
                      type="button"
                      className="rounded-full border border-white/16 bg-white/8 px-4 py-2 text-sm text-white/88"
                      onClick={() => paginate(1)}
                      aria-label="Next lightbox image"
                    >
                      Next
                    </button>

                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}