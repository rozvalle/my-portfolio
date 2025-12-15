import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

/**
 * CustomCursor
 * - Minimal dot + smooth ring follower
 * - Morphs on hover via data-cursor attributes
 * - Tooltip text support
 * - Disabled on touch devices
 */
export default function CustomCursor() {
    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);

    const [label, setLabel] = useState<string | null>(null);
    const [variant, setVariant] = useState<"default" | "hover" | "button" | "image">("default");

    useEffect(() => {
        // Disable on touch devices
        if ("ontouchstart" in window) return;

        const move = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            dotRef.current!.style.transform = `translate(${clientX}px, ${clientY}px)`;
            ringRef.current!.animate(
                { transform: `translate(${clientX}px, ${clientY}px)` },
                { duration: 150, fill: "forwards" }
            );
        };

        const onOver = (e: MouseEvent) => {
            const t = e.target as HTMLElement;
            const type = t.closest("[data-cursor]")?.getAttribute("data-cursor");
            const text = t.closest("[data-cursor-text]")?.getAttribute("data-cursor-text");

            if (type === "button") setVariant("button");
            else if (type === "image") setVariant("image");
            else if (type === "hover") setVariant("hover");
            else setVariant("default");

            setLabel(text ?? null);
        };

        const onOut = () => {
            setVariant("default");
            setLabel(null);
        };

        window.addEventListener("mousemove", move);
        document.addEventListener("mouseover", onOver);
        document.addEventListener("mouseout", onOut);

        return () => {
            window.removeEventListener("mousemove", move);
            document.removeEventListener("mouseover", onOver);
            document.removeEventListener("mouseout", onOut);
        };
    }, []);

    return (
        <>
            {/* Dot */}
            <div
                ref={dotRef}
                className="pointer-events-none fixed left-0 top-0 z-[9999] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white mix-blend-difference"
            />

            {/* Ring */}
            <motion.div
                ref={ringRef}
                className="pointer-events-none fixed left-0 top-0 z-[9998] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white mix-blend-difference"
                animate={variant}
                variants={{
                    default: { width: 28, height: 28, opacity: 0.8 },
                    hover: { width: 40, height: 40, opacity: 0.9 },
                    button: { width: 48, height: 48, borderRadius: 12 },
                    image: { width: 60, height: 60, opacity: 0.7 },
                }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
                {label && (
                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] tracking-widest text-white">
                        {label}
                    </span>
                )}
            </motion.div>
        </>
    );
}

/**
 * Usage:
 * 1. Import and render <CustomCursor /> once (e.g., in App.tsx)
 * 2. Add attributes to elements:
 *    data-cursor="button" | "image" | "hover"
 *    data-cursor-text="VIEW" | "OPEN"
 *
 * Example:
 * <button data-cursor="button" data-cursor-text="CLICK">Hire Me</button>
 */
