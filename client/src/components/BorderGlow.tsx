/**
 * Design: Ember Counter — this interaction uses ember-persimmon and warm brass light,
 * never neon, to make a card edge feel like candlelight catching lacquer.
 */
import {
  type CSSProperties,
  type PointerEvent,
  type ReactNode,
  useCallback,
  useEffect,
  useRef,
} from "react";
import "./BorderGlow.css";

type BorderGlowProps = {
  children: ReactNode;
  className?: string;
  edgeSensitivity?: number;
  glowColor?: string;
  backgroundColor?: string;
  borderRadius?: number;
  glowRadius?: number;
  glowIntensity?: number;
  coneSpread?: number;
  animated?: boolean;
  colors?: string[];
  fillOpacity?: number;
};

function parseHSL(hsl: string) {
  const match = hsl.match(/([\d.]+)\s*([\d.]+)%?\s*([\d.]+)%?/);
  if (!match) return { h: 10, s: 68, l: 54 };
  return { h: Number(match[1]), s: Number(match[2]), l: Number(match[3]) };
}

function buildGlowVars(glowColor: string, intensity: number) {
  const { h, s, l } = parseHSL(glowColor);
  const opacities = [100, 60, 50, 40, 30, 20, 10];
  const suffixes = ["", "-60", "-50", "-40", "-30", "-20", "-10"];
  return opacities.reduce<Record<string, string>>((vars, opacity, index) => {
    vars[`--glow-color${suffixes[index]}`] = `hsl(${h}deg ${s}% ${l}% / ${Math.min(opacity * intensity, 100)}%)`;
    return vars;
  }, {});
}

const POSITIONS = ["80% 55%", "69% 34%", "8% 6%", "41% 38%", "86% 85%", "82% 18%", "51% 4%"];
const KEYS = ["--gradient-one", "--gradient-two", "--gradient-three", "--gradient-four", "--gradient-five", "--gradient-six", "--gradient-seven"];
const COLOR_MAP = [0, 1, 2, 0, 1, 2, 1];

function gradientVars(colors: string[]) {
  return KEYS.reduce<Record<string, string>>((vars, key, index) => {
    const color = colors[Math.min(COLOR_MAP[index], colors.length - 1)];
    vars[key] = `radial-gradient(at ${POSITIONS[index]}, ${color} 0px, transparent 52%)`;
    return vars;
  }, { "--gradient-base": `linear-gradient(${colors[0]} 0 100%)` });
}

export default function BorderGlow({
  children,
  className = "",
  edgeSensitivity = 38,
  glowColor = "10 68 54",
  backgroundColor = "#171513",
  borderRadius = 0,
  glowRadius = 32,
  glowIntensity = 0.9,
  coneSpread = 24,
  animated = false,
  colors = ["#BE3B2F", "#D3A65C", "#54676E"],
  fillOpacity = 0.26,
}: BorderGlowProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = useCallback((event: PointerEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const dx = x - centerX;
    const dy = y - centerY;
    const proximity = Math.min(Math.max(Math.max(Math.abs(dx) / centerX, Math.abs(dy) / centerY), 0), 1);
    let angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
    if (angle < 0) angle += 360;
    card.style.setProperty("--edge-proximity", `${(proximity * 100).toFixed(3)}`);
    card.style.setProperty("--cursor-angle", `${angle.toFixed(3)}deg`);
  }, []);

  useEffect(() => {
    const card = cardRef.current;
    if (!animated || !card) return;
    card.classList.add("sweep-active");
    let frame = 0;
    const start = performance.now();
    const animate = (time: number) => {
      const progress = Math.min((time - start) / 1800, 1);
      const wave = progress < 0.78 ? Math.sin((progress / 0.78) * Math.PI) * 100 : (1 - progress) * 455;
      card.style.setProperty("--edge-proximity", `${Math.max(wave, 0)}`);
      card.style.setProperty("--cursor-angle", `${110 + progress * 355}deg`);
      if (progress < 1) frame = requestAnimationFrame(animate);
      else card.classList.remove("sweep-active");
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [animated]);

  const style = {
    "--card-bg": backgroundColor,
    "--edge-sensitivity": edgeSensitivity,
    "--border-radius": `${borderRadius}px`,
    "--glow-padding": `${glowRadius}px`,
    "--cone-spread": coneSpread,
    "--fill-opacity": fillOpacity,
    ...buildGlowVars(glowColor, glowIntensity),
    ...gradientVars(colors),
  } as CSSProperties;

  return (
    <div ref={cardRef} onPointerMove={handlePointerMove} className={`border-glow-card ${className}`} style={style}>
      <span className="edge-light" aria-hidden="true" />
      <div className="border-glow-inner">{children}</div>
    </div>
  );
}
