import { useEffect, useMemo, useRef, useState } from 'react';
import TestimonialCard from '../TestimonialCard';

const INTRO_STATIC_MS = 1500;
const INTRO_BURST_MS = 700;
const INTRO_SETTLE_MS = 1800;
const RESUME_BOOST_MS = 1100;
const MOBILE_GAP = 18;
const DESKTOP_GAP = 20;
const SLOW_SPEED = 28;
const BURST_SPEED = 240;
const RESUME_SPEED = 92;

function wrapOffset(offset, cycleWidth) {
  if (!cycleWidth) return offset;

  let nextOffset = offset;

  while (nextOffset <= -cycleWidth) nextOffset += cycleWidth;
  while (nextOffset > 0) nextOffset -= cycleWidth;

  return nextOffset;
}

function getLayout(width) {
  const gap = width >= 768 ? DESKTOP_GAP : MOBILE_GAP;

  if (width >= 1024) {
    return {
      gap,
      cardWidth: (width - gap * 3) / 4,
    };
  }

  if (width >= 768) {
    return {
      gap,
      cardWidth: (width - gap) / 2,
    };
  }

  return {
    gap,
    cardWidth: (width - gap) / 1.2,
  };
}

function getBaseSpeed(elapsed) {
  if (elapsed < INTRO_STATIC_MS) return 0;
  if (elapsed < INTRO_STATIC_MS + INTRO_BURST_MS) return BURST_SPEED;

  if (elapsed < INTRO_STATIC_MS + INTRO_BURST_MS + INTRO_SETTLE_MS) {
    const settleProgress =
      (elapsed - INTRO_STATIC_MS - INTRO_BURST_MS) / INTRO_SETTLE_MS;

    return BURST_SPEED + (SLOW_SPEED - BURST_SPEED) * settleProgress;
  }

  return SLOW_SPEED;
}

export default function TestimonialCarousel({ testimonials }) {
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const animationFrameRef = useRef(0);
  const lastTimestampRef = useRef(0);
  const startTimestampRef = useRef(0);
  const currentSpeedRef = useRef(0);
  const offsetRef = useRef(0);
  const interactingRef = useRef(false);
  const wheelResumeTimeoutRef = useRef(0);
  const resumeBoostUntilRef = useRef(0);
  const activeIndexRef = useRef(0);
  const dragStateRef = useRef({
    pointerId: null,
    startX: 0,
    startOffset: 0,
  });

  const [layout, setLayout] = useState({ cardWidth: 280, gap: MOBILE_GAP });
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const duplicatedTestimonials = useMemo(
    () => [...testimonials, ...testimonials],
    [testimonials]
  );

  const cycleWidth =
    testimonials.length > 0
      ? testimonials.length * layout.cardWidth + layout.gap * (testimonials.length - 1)
      : 0;

  const applyTransform = () => {
    if (!trackRef.current) return;

    trackRef.current.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
  };

  useEffect(() => {
    if (!viewportRef.current) return undefined;

    const updateLayout = () => {
      const width = viewportRef.current?.offsetWidth ?? 0;

      if (!width) return;
      setLayout(getLayout(width));
    };

    updateLayout();

    const observer = new ResizeObserver(updateLayout);
    observer.observe(viewportRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    offsetRef.current = wrapOffset(offsetRef.current, cycleWidth);
    applyTransform();
  }, [cycleWidth]);

  useEffect(() => {
    if (!cycleWidth || !layout.cardWidth) return undefined;

    const updateActiveCard = () => {
      const viewportWidth = viewportRef.current?.offsetWidth ?? 0;
      const step = layout.cardWidth + layout.gap;

      if (!viewportWidth || !step) return;

      const trackCenter = -offsetRef.current + viewportWidth / 2 - layout.cardWidth / 2;
      const normalizedCenter =
        ((trackCenter % cycleWidth) + cycleWidth) % cycleWidth;
      const nextIndex =
        Math.round(normalizedCenter / step) % testimonials.length;

      if (activeIndexRef.current !== nextIndex) {
        activeIndexRef.current = nextIndex;
        setActiveIndex(nextIndex);
      }
    };

    const animate = (timestamp) => {
      if (!startTimestampRef.current) {
        startTimestampRef.current = timestamp;
        lastTimestampRef.current = timestamp;
      }

      const deltaSeconds = Math.min(
        (timestamp - lastTimestampRef.current) / 1000,
        0.05
      );
      const elapsed = timestamp - startTimestampRef.current;
      const baseSpeed = getBaseSpeed(elapsed);

      let targetSpeed = baseSpeed;

      if (interactingRef.current) {
        targetSpeed = 0;
      } else if (resumeBoostUntilRef.current > timestamp) {
        const boostProgress =
          1 - (resumeBoostUntilRef.current - timestamp) / RESUME_BOOST_MS;
        const easedBoost = 1 - Math.min(Math.max(boostProgress, 0), 1);
        targetSpeed = Math.max(baseSpeed, SLOW_SPEED + (RESUME_SPEED - SLOW_SPEED) * easedBoost);
      }

      const easeStrength = interactingRef.current ? 9.5 : 3.25;
      const smoothing = 1 - Math.exp(-easeStrength * deltaSeconds);

      currentSpeedRef.current +=
        (targetSpeed - currentSpeedRef.current) * smoothing;

      offsetRef.current = wrapOffset(
        offsetRef.current - currentSpeedRef.current * deltaSeconds,
        cycleWidth
      );

      applyTransform();
      updateActiveCard();

      lastTimestampRef.current = timestamp;
      animationFrameRef.current = window.requestAnimationFrame(animate);
    };

    animationFrameRef.current = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(animationFrameRef.current);
      window.clearTimeout(wheelResumeTimeoutRef.current);
    };
  }, [cycleWidth, layout.cardWidth, layout.gap, testimonials.length]);

  const beginInteraction = () => {
    window.clearTimeout(wheelResumeTimeoutRef.current);
    interactingRef.current = true;
  };

  const endInteraction = () => {
    interactingRef.current = false;
    resumeBoostUntilRef.current = performance.now() + RESUME_BOOST_MS;
  };

  const handlePointerDown = (event) => {
    beginInteraction();
    setIsDragging(true);

    dragStateRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startOffset: offsetRef.current,
    };

    viewportRef.current?.setPointerCapture?.(event.pointerId);
  };

  const handlePointerMove = (event) => {
    if (dragStateRef.current.pointerId !== event.pointerId) return;

    const deltaX = event.clientX - dragStateRef.current.startX;
    offsetRef.current = wrapOffset(
      dragStateRef.current.startOffset + deltaX,
      cycleWidth
    );
    applyTransform();
  };

  const releasePointer = (event) => {
    if (dragStateRef.current.pointerId !== event.pointerId) return;

    viewportRef.current?.releasePointerCapture?.(event.pointerId);
    dragStateRef.current = { pointerId: null, startX: 0, startOffset: 0 };
    setIsDragging(false);
    endInteraction();
  };

  const handleMouseEnter = () => {
    if (!isDragging) beginInteraction();
  };

  const handleMouseLeave = () => {
    if (!isDragging && dragStateRef.current.pointerId === null) endInteraction();
  };

  const handleWheel = (event) => {
    if (Math.abs(event.deltaX) <= Math.abs(event.deltaY) && !event.shiftKey) return;

    beginInteraction();

    const delta = event.shiftKey ? event.deltaY : event.deltaX;
    offsetRef.current = wrapOffset(offsetRef.current - delta, cycleWidth);
    applyTransform();

    window.clearTimeout(wheelResumeTimeoutRef.current);
    wheelResumeTimeoutRef.current = window.setTimeout(() => {
      if (dragStateRef.current.pointerId === null) endInteraction();
    }, 140);
  };

  return (
    <div
      ref={viewportRef}
      className={`testimonial-marquee relative overflow-hidden ${isDragging ? 'is-dragging' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={releasePointer}
      onPointerCancel={releasePointer}
      onWheel={handleWheel}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-10 bg-gradient-to-r from-white via-white/88 to-transparent md:w-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-10 bg-gradient-to-l from-white via-white/88 to-transparent md:w-20" />

      <div
        ref={trackRef}
        className="testimonial-track"
        style={{ gap: `${layout.gap}px` }}
      >
        {duplicatedTestimonials.map((testimonial, index) => (
          <div
            key={`${testimonial.name}-${testimonial.location}-${index}`}
            className={`testimonial-slide ${
              activeIndex === index % testimonials.length ? 'is-active' : ''
            }`}
            style={{ width: `${layout.cardWidth}px` }}
          >
            <TestimonialCard
              testimonial={testimonial}
              index={index % testimonials.length}
              disableReveal
              isActive={activeIndex === index % testimonials.length}
              className="testimonial-card-slide hover:-translate-y-1.5 hover:border-sage/25 hover:shadow-[0_20px_60px_rgba(30,58,42,0.1)]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
