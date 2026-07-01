import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Preloader({ onDone }) {
  const overlayRef = useRef(null);
  const nameRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(nameRef.current,
      { y: 28, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.75, ease: 'power3.out' }
    )
    .to({}, { duration: 0.65 })
    .to(nameRef.current,
      { y: -16, opacity: 0, duration: 0.35, ease: 'power2.in' }
    )
    .to(overlayRef.current,
      { yPercent: -100, duration: 0.65, ease: 'power3.inOut', onComplete: onDone }
    );
  }, [onDone]);

  return (
    <div ref={overlayRef} style={{
      position: 'fixed',
      inset: 0,
      background: '#FFFFFF',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
    }}>
      <p ref={nameRef} style={{
        fontFamily: "'DM Sans', system-ui, sans-serif",
        fontSize: 'clamp(28px, 4.5vw, 52px)',
        fontWeight: 700,
        letterSpacing: '-0.03em',
        lineHeight: 1,
        userSelect: 'none',
      }}>
        <span style={{ color: '#111111' }}>Jubril</span>
        {' '}
        <span style={{ color: '#B5B3AE' }}>Osunlana</span>
      </p>
    </div>
  );
}
