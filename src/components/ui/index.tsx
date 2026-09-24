import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { viewportConfig } from '../../lib/motion';

export function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#EEF2FF] text-[#4F46E5]">
      {children}
    </span>
  );
}

export function PrimaryButton({ children, className = '', ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { children: React.ReactNode }) {
  return (
    <button
      className={`inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#4F46E5] text-white font-semibold text-sm ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function OutlineButton({ children, className = '', ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { children: React.ReactNode }) {
  return (
    <button
      className={`inline-flex items-center justify-center px-6 py-3 rounded-xl border border-[#E5E7EB] text-[#0F0F0F] font-semibold text-sm bg-white ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function TextReveal({ text, className = '', delay = 0 }: { text: string; className?: string; delay?: number }) {
  const words = text.split(' ');
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.07, delayChildren: delay } }
      }}
    >
      <span className="inline-flex flex-wrap">
        {words.map((word, i) => (
          <span key={i} className="overflow-hidden inline-block mr-[0.3em]">
            <motion.span className="inline-block" variants={{
              hidden: { y: '100%' },
              visible: { y: '0%', transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
            }}>
              {word}
            </motion.span>
          </span>
        ))}
      </span>
    </motion.div>
  );
}

export function AnimatedCounter({ target, suffix = '', prefix = '' }: { target: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      setCount(target);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1800;
          const startTime = performance.now();
          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(eased * target);
            setCount(current);
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref} className="font-mono">{prefix}{count.toLocaleString()}{suffix}</span>;
}

export function NoiseOverlay() {
  return null;
}
