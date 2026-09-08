/**
 * Design: Ember Counter — a quiet, once-only reveal: ink clearing from a rice-paper surface.
 * Adapted from the supplied React Bits FadeContent behavior.
 */
import { type CSSProperties, type ReactNode, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type FadeContentProps = {
  children: ReactNode;
  container?: string | Element | null;
  blur?: boolean;
  duration?: number;
  ease?: string;
  delay?: number;
  threshold?: number;
  initialOpacity?: number;
  className?: string;
  style?: CSSProperties;
};

const seconds = (value: number) => (value > 10 ? value / 1000 : value);

export default function FadeContent({
  children,
  container,
  blur = false,
  duration = 800,
  ease = "power2.out",
  delay = 0,
  threshold = 0.14,
  initialOpacity = 1,
  className = "",
  style,
}: FadeContentProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let scroller: string | Element | null | undefined = container || null;
    if (typeof scroller === "string") scroller = document.querySelector(scroller);
    const start = `top ${(1 - threshold) * 100}%`;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let hasEntered = false;

    gsap.set(element, {
      opacity: reducedMotion ? 1 : initialOpacity,
      filter: reducedMotion || !blur ? "blur(0px)" : "blur(8px)",
      willChange: reducedMotion ? "auto" : "opacity, filter",
    });

    const timeline = gsap.timeline({ paused: true, delay: reducedMotion ? 0 : seconds(delay) });
    timeline.to(element, {
      opacity: 1,
      filter: "blur(0px)",
      duration: reducedMotion ? 0 : seconds(duration),
      ease,
      onComplete: () => {
        gsap.set(element, { opacity: 1, filter: "blur(0px)", clearProps: "willChange" });
      },
    });

    const reveal = () => {
      if (hasEntered) return;
      hasEntered = true;
      timeline.play(0);
    };

    const isPastRevealLine = () => {
      const rect = element.getBoundingClientRect();
      return rect.top <= window.innerHeight * (1 - threshold);
    };

    const trigger = ScrollTrigger.create({
      trigger: element,
      scroller: scroller || window,
      start,
      once: true,
      onEnter: reveal,
      onRefresh: () => {
        if (isPastRevealLine()) reveal();
      },
    });

    const frame = window.requestAnimationFrame(() => {
      if (isPastRevealLine()) reveal();
    });

    return () => {
      window.cancelAnimationFrame(frame);
      trigger.kill();
      timeline.kill();
      gsap.killTweensOf(element);
    };
  }, [blur, container, delay, duration, ease, initialOpacity, threshold]);

  return <div ref={ref} className={className} style={style}>{children}</div>;
}
