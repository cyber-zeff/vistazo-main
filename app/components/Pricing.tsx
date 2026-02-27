"use client";

import React, { useState, useCallback, useRef, useEffect } from "react";
import { motion, PanInfo } from "framer-motion";
import PricingBtn from "./PricingBtns";
import { ChartSpline, FileCheck, FileHeart, Infinity, Sparkles, TimerIcon, TrendingUp } from "lucide-react";
import Link from "next/link";

// Config
const PRICING_CONFIG = {
  showCanDecideOnMobile: false,
};

// Card data
const CARD_VARIANTS = [
  {
    id: "card-1",
    color: "#361E98",
    textColor: "text-white",
    title: "Landing Page",
    description: "Ideal for designing or redesigning a website to increase your conversion rates",
    features: [
      { icon: TimerIcon, text: "04–07 day turnaround" },
      { icon: Sparkles, text: "Custom layout tailored for conversions" },
      { icon: TrendingUp, text: "SEO-friendly structure" },
      { icon: FileHeart, text: "50/50 secure payment process" },
    ],
    btnBg: "#FFF",
  },
  {
    id: "card-2",
    color: "#361E98",
    textColor: "text-white",
    title: "Partnership",
    description: "Tailored for businesses with ongoing design",
    features: [
      { icon: TimerIcon, text: "5-7 Days turnaround time" },
      { icon: Infinity, text: "Unlimited Requests" },
      { icon: ChartSpline, text: "Monthly CRO & Growth Strategy" },
      { icon: TrendingUp, text: "SEO-friendly structure" },
      { icon: FileHeart, text: "50/50 secure payment process" },
    ],
    btnBg: "#FFF",
  },
  {
    id: "card-3",
    color: "#6755CF",
    textColor: "text-white",
    title: "Custom",
    description: "Tailored digital experiences built for unique business needs",
    features: [
      { icon: TimerIcon, text: "Fully Custom Timeline & Scope" },
      { icon: Infinity, text: "Unlimited Requests" },
      { icon: FileCheck, text: "End-to-End Web Dev" },
      { icon: TrendingUp, text: "Advanced SEO & Marketing" },
      { icon: FileHeart, text: "50/50 secure payment process" },
    ],
    btnBg: "#FFF",
  },
  {
    id: "card-4",
    color: "#6755CF",
    textColor: "text-white",
    title: "Can't Decide?",
    description: null,
    features: [],
    btnBg: "#FFF",
    isCallToAction: true,
  },
];

const SWIPE_CONFIDENCE_THRESHOLD = 5000;
const SWIPE_VELOCITY_THRESHOLD = 500;

const MOBILE_CARDS = CARD_VARIANTS.filter(
  (c) => PRICING_CONFIG.showCanDecideOnMobile || !c.isCallToAction
);

const Pricing = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swipeAwayDirection, setSwipeAwayDirection] = useState<number | null>(null);
  const [cardRejoiningId, setCardRejoiningId] = useState<string | null>(null);
  const [lastSwipeDirection, setLastSwipeDirection] = useState<number>(1);
  const [manualDragX, setManualDragX] = useState<number | null>(null);
  const [shouldNudge, setShouldNudge] = useState(false);

  const isAnimating = useRef(false);
  const topCardElementRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartTimeRef = useRef(0);
  const lastDragXRef = useRef(0);
  const hasNudged = useRef(false);
  const isManualModeRef = useRef(false);
  const mobileCarouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mobileCarouselRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasNudged.current) {
          hasNudged.current = true;
          setShouldNudge(true);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (manualDragX === 0) {
      const t = setTimeout(() => setManualDragX(null), 450);
      return () => clearTimeout(t);
    }
  }, [manualDragX]);

  const paginate = useCallback(
    (swipeDirection: number) => {
      if (isAnimating.current) return;
      isAnimating.current = true;
      setLastSwipeDirection(swipeDirection);
      const swipedCard = MOBILE_CARDS[currentIndex];
      setCardRejoiningId(swipedCard.id);
      setCurrentIndex((prev) => (prev + 1) % MOBILE_CARDS.length);
      setTimeout(() => {
        isAnimating.current = false;
        setCardRejoiningId(null);
      }, 600);
    },
    [currentIndex]
  );

  const swipePower = useCallback((offset: number, velocity: number) => Math.abs(offset) * velocity, []);

  const handleDragStart = useCallback(
    (_event: MouseEvent | TouchEvent | PointerEvent) => {
      isDraggingRef.current = true;
      isManualModeRef.current = false;
      dragStartTimeRef.current = Date.now();
      const clientX =
        "touches" in _event ? _event.touches[0]?.clientX : (_event as PointerEvent).clientX;
      dragStartXRef.current = clientX ?? 0;
      lastDragXRef.current = dragStartXRef.current;

      const handleGlobalMove = (e: PointerEvent | TouchEvent) => {
        if (!isDraggingRef.current || !topCardElementRef.current) return;
        const currentX = "touches" in e ? e.touches[0]?.clientX : e.clientX;
        const currentY = "touches" in e ? e.touches[0]?.clientY : e.clientY;
        if (currentX === undefined) return;

        lastDragXRef.current = currentX;
        const offset = currentX - dragStartXRef.current;
        const clamped = Math.max(-400, Math.min(400, offset * 0.7));
        const rect = topCardElementRef.current.getBoundingClientRect();
        const isOutsideCard =
          currentX < rect.left || currentX > rect.right || currentY < rect.top || currentY > rect.bottom;

        if (isOutsideCard || isManualModeRef.current) {
          isManualModeRef.current = true;
          setManualDragX(clamped);
        }
      };

      const handleGlobalEnd = (e: PointerEvent | TouchEvent) => {
        if (!isDraggingRef.current) return;
        isDraggingRef.current = false;

        if (!isManualModeRef.current) {
          document.removeEventListener("pointermove", handleGlobalMove);
          document.removeEventListener("pointerup", handleGlobalEnd);
          document.removeEventListener("pointercancel", handleGlobalEnd);
          document.removeEventListener("touchmove", handleGlobalMove);
          document.removeEventListener("touchend", handleGlobalEnd);
          document.removeEventListener("touchcancel", handleGlobalEnd);
          return;
        }

        const endX = "changedTouches" in e ? e.changedTouches[0]?.clientX : (e as PointerEvent).clientX;
        if (endX !== undefined) {
          const offset = lastDragXRef.current - dragStartXRef.current;
          const duration = Date.now() - dragStartTimeRef.current;
          const velocity = duration > 0 ? offset / (duration / 1000) : 0;
          const swipe = swipePower(offset, velocity);

          if (swipe < -SWIPE_CONFIDENCE_THRESHOLD || velocity < -SWIPE_VELOCITY_THRESHOLD) {
            setManualDragX(null);
            setSwipeAwayDirection(1);
          } else if (swipe > SWIPE_CONFIDENCE_THRESHOLD || velocity > SWIPE_VELOCITY_THRESHOLD) {
            setManualDragX(null);
            setSwipeAwayDirection(-1);
          } else {
            setManualDragX(0);
          }
        }

        document.removeEventListener("pointermove", handleGlobalMove);
        document.removeEventListener("pointerup", handleGlobalEnd);
        document.removeEventListener("pointercancel", handleGlobalEnd);
        document.removeEventListener("touchmove", handleGlobalMove);
        document.removeEventListener("touchend", handleGlobalEnd);
        document.removeEventListener("touchcancel", handleGlobalEnd);
      };

      document.addEventListener("pointermove", handleGlobalMove, { passive: false });
      document.addEventListener("pointerup", handleGlobalEnd);
      document.addEventListener("pointercancel", handleGlobalEnd);
      document.addEventListener("touchmove", handleGlobalMove, { passive: false });
      document.addEventListener("touchend", handleGlobalEnd);
      document.addEventListener("touchcancel", handleGlobalEnd);
    },
    [swipePower]
  );

  const handleDragEnd = useCallback(
    (_: MouseEvent | TouchEvent | PointerEvent, { offset, velocity }: PanInfo) => {
      isDraggingRef.current = false;
      const swipe = swipePower(offset.x, velocity.x);
      if (swipe < -SWIPE_CONFIDENCE_THRESHOLD || velocity.x < -SWIPE_VELOCITY_THRESHOLD) {
        setSwipeAwayDirection(1);
      } else if (swipe > SWIPE_CONFIDENCE_THRESHOLD || velocity.x > SWIPE_VELOCITY_THRESHOLD) {
        setSwipeAwayDirection(-1);
      }
    },
    [swipePower]
  );

  const handleSwipeAwayComplete = useCallback(() => {
    if (swipeAwayDirection !== null) {
      paginate(swipeAwayDirection);
      setSwipeAwayDirection(null);
    }
  }, [swipeAwayDirection, paginate]);

  const visibleCards = React.useMemo(() => {
    const cards = [];
    const count = Math.min(4, MOBILE_CARDS.length);
    for (let i = 0; i < count; i++) {
      const index = (currentIndex + i) % MOBILE_CARDS.length;
      cards.push({ ...MOBILE_CARDS[index], stackIndex: i });
    }
    return cards;
  }, [currentIndex]);

  const desktopCards = [CARD_VARIANTS[0], CARD_VARIANTS[1], CARD_VARIANTS[2]];

  return (
    <section id="pricing" className="w-full bg-[#FFFEF7] text-black overflow-hidden py-16 lg:py-20 px-8 lg:px-12">
      <h2 className="quantaFont font-black uppercase text-center lg:mb-16 text-[clamp(40px,9vw,128px)] leading-none">
        Find What Fits
      </h2>

      {/* Desktop - side cards up next to top row, center card extends down */}
      <div className="hidden lg:flex justify-center px-8 overflow-x-auto">
        <div
          className="grid items-start shrink-0"
          style={{
            gridTemplateColumns: "354px 354px 354px",
            gridTemplateRows: "532px 186px",
            gap: 32,
          }}
        >
          <DesktopCard card={desktopCards[0]} style={{ gridArea: "1 / 1" }} />
          <div style={{ gridArea: "1 / 2 / 3 / 3" }} className="self-start">
            <DesktopCard card={desktopCards[1]} tall />
          </div>
          <DesktopCard card={desktopCards[2]} style={{ gridArea: "1 / 3" }} />
          <div
            className="w-[354px] h-[186px] px-4 flex flex-col justify-around rounded-[32px] border-2 border-dashed border-[#123123]"
            style={{ gridArea: "2 / 1" }}
          >
            <div className="mt-1">
              <h2 className="quantaFont text-[30px] leading-normal">No-Code Dev</h2>
              <p className="mt-1 text-[16px] leading-tight font-medium">We will build your website in framer for an additional fee.</p>
            </div>
            <Link href="#" className="bg-black w-full rounded-full text-white text-center text-[18px] py-2 font-medium">
              Add
            </Link>
          </div>
          <div
            className="w-[354px] h-[186px] p-4 text-white rounded-[32px] shadow-[4px_6px_8px_0px_rgba(0,0,0,0.25)] flex flex-col items-center justify-center"
            style={{ backgroundColor: CARD_VARIANTS[3].color, gridArea: "2 / 3" }}
          >
            <h2 className="quantaFont text-[30px] leading-normal mb-3 text-center">Can&apos;t Decide?</h2>
            <PricingBtn path="#" name="Book a Call" bg={CARD_VARIANTS[3].btnBg} />
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div ref={mobileCarouselRef} className="lg:hidden relative flex flex-col items-center gap-8">
        <motion.div
          className="relative w-full h-[70vh] min-h-[580px] flex items-start justify-center pt-8"
          animate={shouldNudge ? { x: [0, -10, 8, 0] } : {}}
          transition={{ duration: 0.7, ease: "easeInOut", times: [0, 0.35, 0.7, 1] }}
          onAnimationComplete={() => setShouldNudge(false)}
        >
          {visibleCards.map((card) => {
            const isTopCard = card.stackIndex === 0;
            const isRejoining = cardRejoiningId === card.id;
            const zIndex = 10 - card.stackIndex;
            const scale = 1 - card.stackIndex * 0.05;
            const yOffset = card.stackIndex * 16;

            return (
              <motion.div
                ref={isTopCard ? topCardElementRef : undefined}
                key={card.id}
                className={`absolute w-[85vw] max-w-[380px] h-[65vh] min-h-[560px] rounded-[32px] shadow-[4px_6px_8px_0px_rgba(0,0,0,0.25)] py-6 flex flex-col justify-between ${card.textColor}`}
                style={{ backgroundColor: card.color, zIndex, touchAction: isTopCard ? "none" : "auto" }}
                drag={isTopCard && manualDragX === null && swipeAwayDirection === null ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.7}
                dragPropagation={false}
                dragMomentum={false}
                onDragStart={isTopCard ? handleDragStart : undefined}
                onDragEnd={isTopCard ? handleDragEnd : undefined}
                onAnimationComplete={isTopCard && swipeAwayDirection !== null ? handleSwipeAwayComplete : undefined}
                animate={{
                  scale,
                  y: yOffset,
                  x:
                    swipeAwayDirection !== null && isTopCard
                      ? -swipeAwayDirection * 500
                      : manualDragX !== null && isTopCard
                        ? manualDragX
                        : 0,
                  opacity: 1,
                }}
                initial={
                  isRejoining
                    ? { scale, y: yOffset, x: -lastSwipeDirection * 500, opacity: 1 }
                    : { scale, y: yOffset, x: 0, opacity: 1 }
                }
                transition={
                  swipeAwayDirection !== null && isTopCard
                    ? { type: "tween", duration: 0.35, ease: [0.32, 0.72, 0, 1] }
                    : isRejoining || isTopCard
                      ? { type: "tween", duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
                      : { type: "spring", stiffness: 260, damping: 26 }
                }
                whileTap={isTopCard ? { cursor: "grabbing" } : {}}
              >
                {card.isCallToAction ? (
                  <div className="flex flex-col justify-center items-center h-full px-6">
                    <h2 className="quantaFont text-[40px] leading-tight mb-8 text-center">{card.title}</h2>
                    <div className="w-full">
                      <PricingBtn path="#" name="Book a Call" bg={card.btnBg} />
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="px-6 pt-2">
                      <h2 className="quantaFont text-[32px] leading-tight mb-3">{card.title}</h2>
                      <p className="text-[16px] leading-snug font-medium opacity-90">{card.description}</p>
                    </div>
                    <div className="px-6 flex-1 flex flex-col justify-center">
                      <div className="pt-5 pb-2 border-t border-gray-300">
                        {card.features.map((feature, idx) => {
                          const Icon = feature.icon;
                          return (
                            <div key={idx} className="flex items-start gap-4 mb-3">
                              <div className="shrink-0 mt-0.5">
                                <Icon size={22} strokeWidth={1.5} />
                              </div>
                              <p className="text-[15px] leading-snug font-medium">{feature.text}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div className="px-6 pb-2">
                      <PricingBtn path="#" name="Get Started" bg={card.btnBg} />
                    </div>
                  </>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        <div className="px-6 py-5 flex flex-col justify-between w-[85vw] max-w-[380px] min-h-[160px] rounded-[32px] border-2 border-dashed border-[#123123]">
          <div>
            <h2 className="quantaFont text-[28px] leading-tight mb-2">No-Code Dev</h2>
            <p className="text-[15px] leading-snug font-medium opacity-90">We will build your website in framer for an additional fee.</p>
          </div>
          <Link href="#" className="bg-black w-full rounded-full text-white text-center text-[17px] py-2.5 mt-4 font-medium">
            Add
          </Link>
        </div>

        <p className="text-sm opacity-60 text-center">Swipe to explore</p>
      </div>
    </section>
  );
};

function DesktopCard({
  card,
  tall = false,
  style,
}: {
  card: (typeof CARD_VARIANTS)[0];
  tall?: boolean;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`py-8 flex flex-col justify-between text-white w-[354px] rounded-[32px] shadow-[4px_6px_8px_0px_rgba(0,0,0,0.25)] ${
        tall ? "h-[620px]" : "h-[532px]"
      }`}
      style={{ backgroundColor: card.color, ...style }}
    >
      <div className="mx-4">
        <h2 className="quantaFont text-[30px] lg:text-[26px] xl:[36px] leading-normal">{card.title}</h2>
        <p className="mt-2 text-[18px] leading-tight font-medium">{card.description}</p>
      </div>
      <div className="mx-4 pt-6 pl-3 border-t border-white/30">
        {card.features.map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <div key={idx} className="flex items-center gap-8 lg:mb-2 xl:mb-4">
              <Icon />
              <p className="text-[16px] font-medium">{feature.text}</p>
            </div>
          );
        })}
      </div>
      <PricingBtn path="#" name="Get Started" bg={card.btnBg} />
    </div>
  );
}

export default Pricing;
