import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Direction = "up" | "left" | "right";

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string | undefined;
  as?: "div" | "section" | "li" | "article" | "span";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const hidden =
    direction === "left"
      ? "translateX(-32px)"
      : direction === "right"
        ? "translateX(32px)"
        : "translateY(28px)";

  return (
    <Tag
      ref={ref as never}
      style={{
        transitionDelay: `${delay}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : hidden,
      }}
      className={cn(
        "transition-[opacity,transform] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}