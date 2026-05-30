// Lightweight, dependency-free animation primitives for the marketing site.
// Every component here is a passive wrapper: it only adds a transparent
// container around its children so existing layouts, colors and spacing
// stay exactly the same. All effects honour `prefers-reduced-motion`.

import {
  Children,
  isValidElement,
  useEffect,
  useRef,
  useState,
} from 'react'

// ---- helpers ---------------------------------------------------------------

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  typeof window.matchMedia === 'function' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

function useInView({ threshold = 0.15, rootMargin = '0px 0px -8% 0px', once = true } = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof window === 'undefined' || !('IntersectionObserver' in window) || prefersReducedMotion()) {
      setInView(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true)
            if (once) io.disconnect()
          } else if (!once) {
            setInView(false)
          }
        }
      },
      { threshold, rootMargin }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold, rootMargin, once])

  return [ref, inView]
}

// ---- Reveal ----------------------------------------------------------------
// Wraps `children` in a transparent block container that fades / slides in
// when it scrolls into view. The wrapper has no padding, margin or color of
// its own, so existing section styles render unchanged.

export function Reveal({
  children,
  as: Tag = 'div',
  direction = 'up',
  delay = 0,
  distance = 24,
  duration = 700,
  threshold = 0.15,
  once = true,
  className = '',
  style,
}) {
  const [ref, inView] = useInView({ threshold, once })

  const offset = {
    up: `translate3d(0, ${distance}px, 0)`,
    down: `translate3d(0, ${-distance}px, 0)`,
    left: `translate3d(${distance}px, 0, 0)`,
    right: `translate3d(${-distance}px, 0, 0)`,
    fade: 'none',
    scale: 'scale(0.96)',
  }[direction] || `translate3d(0, ${distance}px, 0)`

  const mergedStyle = {
    opacity: inView ? 1 : 0,
    transform: inView ? 'none' : offset,
    transition: `opacity ${duration}ms cubic-bezier(.22,.61,.36,1) ${delay}ms, transform ${duration}ms cubic-bezier(.22,.61,.36,1) ${delay}ms`,
    willChange: 'opacity, transform',
    ...style,
  }

  return (
    <Tag ref={ref} className={className} style={mergedStyle}>
      {children}
    </Tag>
  )
}

// ---- Stagger ---------------------------------------------------------------
// Wraps each direct child in a Reveal with an incrementing delay so groups
// of cards animate in one after another. The host element defaults to a
// fragment-like transparent div and accepts a className for layout.

export function Stagger({
  children,
  gap = 90,
  startDelay = 0,
  direction = 'up',
  distance = 22,
  duration = 700,
  as: Tag = 'div',
  className = '',
  style,
}) {
  const arr = Children.toArray(children)
  return (
    <Tag className={className} style={style}>
      {arr.map((child, i) => {
        if (!isValidElement(child)) return child
        return (
          <Reveal
            key={child.key ?? i}
            delay={startDelay + i * gap}
            direction={direction}
            distance={distance}
            duration={duration}
          >
            {child}
          </Reveal>
        )
      })}
    </Tag>
  )
}

// ---- Spotlight -------------------------------------------------------------
// Adds a cursor-following radial glow on top of its children. The wrapper is
// position:relative so the absolutely-positioned overlay sits inside it; the
// overlay is pointer-events:none so it never intercepts clicks. Children are
// rendered as-is and keep their original layout.

export function Spotlight({
  children,
  color = 'rgba(16, 168, 146, 0.22)',
  size = 520,
  blendMode = 'screen',
  className = '',
  style,
}) {
  const hostRef = useRef(null)
  const overlayRef = useRef(null)

  useEffect(() => {
    const host = hostRef.current
    const overlay = overlayRef.current
    if (!host || !overlay || prefersReducedMotion()) return

    let raf = 0
    const onMove = (e) => {
      const rect = host.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        overlay.style.opacity = '1'
        overlay.style.background = `radial-gradient(${size}px circle at ${x}px ${y}px, ${color}, transparent 60%)`
      })
    }
    const onLeave = () => {
      overlay.style.opacity = '0'
    }

    host.addEventListener('pointermove', onMove)
    host.addEventListener('pointerleave', onLeave)
    return () => {
      host.removeEventListener('pointermove', onMove)
      host.removeEventListener('pointerleave', onLeave)
      cancelAnimationFrame(raf)
    }
  }, [color, size])

  return (
    <div
      ref={hostRef}
      className={`relative ${className}`}
      style={{ overflow: 'hidden', ...style }}
    >
      {children}
      <div
        ref={overlayRef}
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          opacity: 0,
          transition: 'opacity 350ms ease',
          mixBlendMode: blendMode,
          zIndex: 2,
        }}
      />
    </div>
  )
}

// ---- MouseTilt -------------------------------------------------------------
// Applies a subtle 3D tilt to its children as the cursor moves across them.
// The wrapper preserves transforms; children rendering and layout are
// untouched. Reverts smoothly on pointer leave.

export function MouseTilt({
  children,
  intensity = 7,
  perspective = 900,
  scale = 1,
  className = '',
  style,
}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return

    let raf = 0
    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const px = (e.clientX - rect.left) / rect.width
      const py = (e.clientY - rect.top) / rect.height
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const rx = (0.5 - py) * intensity
        const ry = (px - 0.5) * intensity
        el.style.transform = `perspective(${perspective}px) rotateX(${rx}deg) rotateY(${ry}deg) scale(${scale})`
      })
    }
    const onLeave = () => {
      el.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale(1)`
    }

    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerleave', onLeave)
    return () => {
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
      cancelAnimationFrame(raf)
    }
  }, [intensity, perspective, scale])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transition: 'transform 320ms cubic-bezier(.22,.61,.36,1)',
        transformStyle: 'preserve-3d',
        willChange: 'transform',
        ...style,
      }}
    >
      {children}
    </div>
  )
}

// ---- CursorHalo ------------------------------------------------------------
// A refined, professional cursor follower: a small precise dot tracks the
// cursor exactly while a larger outlined ring eases in behind it. The ring
// expands and shifts color when hovering interactive elements (links,
// buttons, inputs). Hidden on touch / coarse-pointer devices and skipped
// entirely when the user prefers reduced motion.

export function CursorHalo({
  dotColor = '#10a892',
  ringColor = 'rgba(16, 168, 146, 0.55)',
  dotSize = 10,
  ringSize = 80,
  zIndex = 40,
}) {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (prefersReducedMotion()) return
    if (typeof window.matchMedia === 'function' &&
        window.matchMedia('(pointer: coarse)').matches) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let x = -100, y = -100
    let rx = -100, ry = -100
    let raf = 0

    const onMove = (e) => {
      x = e.clientX
      y = e.clientY
      dot.style.opacity = '1'
      ring.style.opacity = '1'
    }
    const onLeave = () => {
      dot.style.opacity = '0'
      ring.style.opacity = '0'
    }
    const onPointerOver = (e) => {
      const t = e.target
      const interactive = t && t.closest && t.closest('a,button,[role="button"],input,select,textarea,label')
      ring.style.transform = `translate(-50%,-50%) scale(${interactive ? 1.7 : 1})`
      ring.style.borderColor = interactive ? dotColor : ringColor
    }

    const animate = () => {
      rx += (x - rx) * 0.18
      ry += (y - ry) * 0.18
      dot.style.left = x + 'px'
      dot.style.top = y + 'px'
      ring.style.left = rx + 'px'
      ring.style.top = ry + 'px'
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)

    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('pointerover', onPointerOver, { passive: true })
    document.addEventListener('mouseleave', onLeave)
    window.addEventListener('blur', onLeave)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerover', onPointerOver)
      document.removeEventListener('mouseleave', onLeave)
      window.removeEventListener('blur', onLeave)
    }
  }, [dotColor, ringColor])

  const baseStyle = {
    position: 'fixed',
    pointerEvents: 'none',
    transform: 'translate(-50%, -50%)',
    opacity: 0,
    zIndex,
    transition: 'opacity 200ms ease, transform 220ms cubic-bezier(.22,.61,.36,1), border-color 220ms ease',
    left: -100,
    top: -100,
  }

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          ...baseStyle,
          width: dotSize,
          height: dotSize,
          borderRadius: '50%',
          background: dotColor,
        }}
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          ...baseStyle,
          width: ringSize,
          height: ringSize,
          borderRadius: '50%',
          border: `1.5px solid ${ringColor}`,
          background: 'transparent',
        }}
      />
    </>
  )
}

// ---- PageTransition --------------------------------------------------------
// Lightweight route-change transition: when the consumer passes a new
// `transitionKey` (typically the location pathname), the wrapper re-mounts
// and replays the CSS `ilPageEnter` keyframe defined in src/index.css. The
// component itself stays router-agnostic so it can be reused elsewhere.

export function PageTransition({ children, transitionKey, className = '' }) {
  return (
    <div key={transitionKey} className={`page-transition-in ${className}`.trim()}>
      {children}
    </div>
  )
}

// ---- FoldStack -------------------------------------------------------------
// Stacks a sequence of full-width sections so that as the user scrolls down
// each new section slides over the previous one, and the previous one is
// scaled / faded slightly to feel "folded" underneath. Scrolling back up
// unfolds the stack.
//
// Each FoldStackItem wraps its section in two layers:
//   1. An outer non-sticky div whose paddingBottom is dynamically set to the
//      section's rendered height via ResizeObserver. This "scroll budget"
//      keeps the section pinned and fully readable before the next card
//      starts sliding in — fixing the issue where sections were covered
//      before their content could be seen.
//   2. An inner sticky div that pins to `top` while the user scrolls through
//      that budget.

export function FoldStack({ children, className = '', topOffset = 0, style }) {
  const items = Children.toArray(children).filter(isValidElement)
  return (
    <div className={className} style={{ position: 'relative', ...style }}>
      {items.map((child, i) => (
        <FoldStackItem
          key={child.key ?? i}
          index={i}
          total={items.length}
          topOffset={topOffset}
        >
          {child}
        </FoldStackItem>
      ))}
    </div>
  )
}

function FoldStackItem({ children, index, total, topOffset }) {
  // outerRef  — non-sticky scroll-budget container
  // stickyRef — sticky-positioned layer
  // innerRef  — receives scale / opacity transforms
  const outerRef = useRef(null)
  const stickyRef = useRef(null)
  const innerRef = useRef(null)

  useEffect(() => {
    if (typeof window === 'undefined' || prefersReducedMotion()) return
    const outer = outerRef.current
    const sticky = stickyRef.current
    const inner = innerRef.current
    if (!outer || !sticky || !inner) return

    // ── Scroll budget ────────────────────────────────────────────────────────
    // Set outer paddingBottom = section height so the section remains fully
    // visible (pinned at `top`) while the user scrolls through a distance
    // equal to the section's own height before the next card appears.
    const applyScrollBudget = () => {
      // Use only 15 % of the section height as scroll budget — just enough
      // for the section to stay fully pinned and readable before the next
      // card slides in, without creating a visible blank gap.
      outer.style.paddingBottom = `${Math.round(inner.offsetHeight * 0.19)}px`
    }
    applyScrollBudget()
    const ro = new ResizeObserver(applyScrollBudget)
    ro.observe(inner)

    // ── Scale / opacity feedback ─────────────────────────────────────────────
    // Gently shrink and fade the section as it gets "buried" under the next
    // card. Overshoot measures how far the sticky element has been pushed
    // above the sticky line, which only grows once the section is pinned.
    let raf = 0
    const update = () => {
      const rect = sticky.getBoundingClientRect()
      const overshoot = Math.max(0, topOffset - rect.top)
      const denom = Math.max(1, window.innerHeight * 0.9)
      const p = Math.min(1, overshoot / denom)
      inner.style.transform = `scale(${1 - p * 0.06})`
      inner.style.opacity = String(1 - p * 0.28)
    }
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      ro.disconnect()
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [topOffset, index, total])

  return (
    // Outer: in normal flow, provides the scroll budget via paddingBottom.
    <div ref={outerRef}>
      {/* Sticky layer: pins while user scrolls through the budget above. */}
      <div
        ref={stickyRef}
        style={{
          position: 'sticky',
          top: topOffset,
          zIndex: index + 1,
        }}
      >
        {/* Transform target: scale + opacity applied here, not on the sticky
            element itself, so layout is never affected by the animation. */}
        <div
          ref={innerRef}
          style={{
            transformOrigin: 'center top',
            transition: 'transform 180ms linear, opacity 180ms linear',
            willChange: 'transform, opacity',
          }}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
