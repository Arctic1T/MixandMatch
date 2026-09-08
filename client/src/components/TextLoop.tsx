import { useEffect, useId, useLayoutEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import "./TextLoop.css";

type Shape = "wave" | "circle" | "infinity" | "arch" | "line";

type TextLoopProps = {
  text?: string;
  shape?: Shape;
  speed?: number;
  direction?: "forward" | "reverse";
  separator?: string;
  curviness?: number;
  fontSize?: number;
  fontWeight?: number;
  letterSpacing?: number;
  uppercase?: boolean;
  color?: string;
  ribbon?: boolean;
  ribbonColor?: string;
  ribbonWidth?: number;
  pauseOnHover?: boolean;
  className?: string;
};

const VIEW_W = 1200;
const VIEW_H = 520;
const CX = VIEW_W / 2;
const CY = VIEW_H / 2;

function buildPath(shape: Shape, curviness: number) {
  const c = Math.max(0, curviness);
  switch (shape) {
    case "circle": {
      const r = 120 + c * 0.55;
      return `M ${CX - r} ${CY} A ${r} ${r} 0 1 1 ${CX + r} ${CY} A ${r} ${r} 0 1 1 ${CX - r} ${CY} Z`;
    }
    case "infinity": {
      const r = 185 + c;
      const h = 70 + c * 0.4;
      return `M ${CX} ${CY} C ${CX + r * 0.52} ${CY - h} ${CX + r} ${CY - h} ${CX + r} ${CY} C ${CX + r} ${CY + h} ${CX + r * 0.52} ${CY + h} ${CX} ${CY} C ${CX - r * 0.52} ${CY - h} ${CX - r} ${CY - h} ${CX - r} ${CY} C ${CX - r} ${CY + h} ${CX - r * 0.52} ${CY + h} ${CX} ${CY} Z`;
    }
    case "arch":
      return `M 120 ${CY + 48} Q ${CX} ${CY - 180 - c} ${VIEW_W - 120} ${CY + 48}`;
    case "line":
      return `M -260 ${CY} L ${VIEW_W + 260} ${CY}`;
    default: {
      const a = Math.min(c * 1.7, 210);
      return `M -260 ${CY} Q -80 ${CY - a} 100 ${CY} T 460 ${CY} T 820 ${CY} T 1180 ${CY} T ${VIEW_W + 260} ${CY}`;
    }
  }
}

export default function TextLoop({
  text = "Mix it. Match it. Love it.",
  shape = "wave",
  speed = 95,
  direction = "forward",
  separator = "✦",
  curviness = 72,
  fontSize = 42,
  fontWeight = 800,
  letterSpacing = 1.5,
  uppercase = true,
  color = "#ef4f1e",
  ribbon = true,
  ribbonColor = "#fff0a8",
  ribbonWidth = 84,
  pauseOnHover = true,
  className = "",
}: TextLoopProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const measureRef = useRef<SVGTextElement>(null);
  const headRef = useRef<SVGTextPathElement>(null);
  const tailRef = useRef<SVGTextPathElement>(null);
  const [metrics, setMetrics] = useState({ length: 0, reps: 1 });
  const rawId = useId();
  const pathId = `mix-loop-${rawId.replace(/:/g, "")}`;
  const path = useMemo(() => buildPath(shape, curviness), [shape, curviness]);
  const unit = useMemo(() => {
    const base = uppercase ? text.toUpperCase() : text;
    return `${base}\u00a0${separator}\u00a0`;
  }, [separator, text, uppercase]);

  useLayoutEffect(() => {
    const pathEl = pathRef.current;
    const measureEl = measureRef.current;
    if (!pathEl || !measureEl) return;
    let cancelled = false;
    const measure = () => {
      if (cancelled) return;
      const length = pathEl.getTotalLength();
      const unitWidth = measureEl.getComputedTextLength();
      setMetrics({ length, reps: unitWidth ? Math.max(2, Math.round(length / unitWidth) + 1) : 2 });
    };
    measure();
    document.fonts?.ready.then(measure).catch(() => undefined);
    return () => { cancelled = true; };
  }, [path, unit, fontSize, fontWeight, letterSpacing]);

  useEffect(() => {
    const head = headRef.current;
    const tail = tailRef.current;
    const root = rootRef.current;
    if (!head || !tail || !root || !metrics.length) return;
    const apply = (offset: number) => {
      const partner = offset >= 0 ? offset - metrics.length : offset + metrics.length;
      head.setAttribute("startOffset", String(offset));
      tail.setAttribute("startOffset", String(partner));
    };
    apply(0);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || speed <= 0) return;
    const state = { offset: 0 };
    const tween = gsap.to(state, {
      offset: direction === "reverse" ? -metrics.length : metrics.length,
      duration: metrics.length / speed,
      ease: "none",
      repeat: -1,
      onUpdate: () => apply(state.offset),
    });
    const pause = () => tween.pause();
    const resume = () => tween.resume();
    if (pauseOnHover) {
      root.addEventListener("pointerenter", pause);
      root.addEventListener("pointerleave", resume);
    }
    return () => {
      tween.kill();
      root.removeEventListener("pointerenter", pause);
      root.removeEventListener("pointerleave", resume);
    };
  }, [direction, metrics.length, pauseOnHover, speed]);

  const textStyle = { fontSize, fontWeight, letterSpacing };
  const loopText = unit.repeat(metrics.reps);

  return (
    <div ref={rootRef} className={`text-loop ${className}`.trim()}>
      <svg className="text-loop-svg" viewBox={`0 0 ${VIEW_W} ${VIEW_H}`} preserveAspectRatio="xMidYMid meet" role="img" aria-label={text}>
        <path ref={pathRef} id={pathId} d={path} fill="none" stroke={ribbon ? ribbonColor : "none"} strokeWidth={ribbon ? ribbonWidth : 0} strokeLinecap="round" />
        <text ref={measureRef} className="text-loop-measure" style={textStyle} aria-hidden="true">{unit}</text>
        <text className="text-loop-text" style={textStyle} fill={color} dominantBaseline="central" aria-hidden="true">
          <textPath ref={headRef} href={`#${pathId}`} startOffset={0}>{loopText}</textPath>
        </text>
        <text className="text-loop-text" style={textStyle} fill={color} dominantBaseline="central" aria-hidden="true">
          <textPath ref={tailRef} href={`#${pathId}`} startOffset={0}>{loopText}</textPath>
        </text>
      </svg>
    </div>
  );
}
