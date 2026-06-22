import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import portrait from '../assets/portrait.png';

export default function Navbar() {
  const pillRef = useRef(null);
  const ctaRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo([pillRef.current, ctaRef.current],
      { y: -16, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out', delay: 0.2, stagger: 0.08 }
    );
  }, []);

  const links = ['Story', 'Numbers', 'Experience', 'Contact'];

  return (
    <>
      <div ref={pillRef} style={{
        position: 'fixed',
        top: 'clamp(16px, 3vw, 28px)',
        left: 'clamp(16px, 3vw, 28px)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        gap: 4,
        padding: 6,
        background: 'rgba(255,255,255,0.9)',
        backdropFilter: 'blur(12px)',
        border: '1px solid var(--border)',
        borderRadius: 40,
        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
      }}>
        <a href="/" style={{
          width: 38, height: 38,
          display: 'block',
          borderRadius: '50%',
          overflow: 'hidden',
          flexShrink: 0,
        }}>
          <img src={portrait} alt="Jubril Osunlana" style={{
            width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 8%', transform: 'scale(2.6)',
          }} />
        </a>

        <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: 4, paddingRight: 6 }}>
          {links.map(l => (
            <a key={l} href={`/#${l.toLowerCase()}`} style={{
              fontSize: 13.5,
              fontWeight: 500,
              padding: '8px 14px',
              borderRadius: 30,
              color: 'var(--ink-muted)',
              transition: 'color 0.2s, background 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = 'var(--ink)'; e.currentTarget.style.background = 'var(--bg-alt)'; }}
            onMouseLeave={e => { e.currentTarget.style.color = 'var(--ink-muted)'; e.currentTarget.style.background = 'transparent'; }}
            >{l}</a>
          ))}
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="hamburger" style={{
          display: 'none',
          width: 38, height: 38,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 4,
        }}>
          {[0, 1, 2].map(i => (
            <span key={i} style={{ display: 'block', width: 16, height: 1.5, background: 'var(--ink)', borderRadius: 2 }} />
          ))}
        </button>
      </div>

      <a ref={ctaRef} href="mailto:jubril.osunlana@gmail.com" style={{
        position: 'fixed',
        top: 'clamp(16px, 3vw, 28px)',
        right: 'clamp(16px, 3vw, 28px)',
        zIndex: 100,
        display: 'inline-flex',
        alignItems: 'center',
        padding: '14px 24px',
        background: 'var(--ink)',
        color: 'var(--white)',
        borderRadius: 40,
        fontSize: 14,
        fontWeight: 600,
        letterSpacing: '0.01em',
        boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
        transition: 'opacity 0.2s',
      }}
      onMouseEnter={e => e.currentTarget.style.opacity = '0.82'}
      onMouseLeave={e => e.currentTarget.style.opacity = '1'}
      >Get in touch</a>

      {menuOpen && (
        <div style={{
          position: 'fixed', top: 76, left: 'clamp(16px, 3vw, 28px)', zIndex: 99,
          display: 'flex', flexDirection: 'column', gap: 2,
          background: 'var(--white)', border: '1px solid var(--border)',
          borderRadius: 16, padding: 8, boxShadow: '0 12px 32px rgba(0,0,0,0.1)',
        }} className="mobile-menu">
          {links.map(l => (
            <a key={l} href={`/#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)} style={{
              fontSize: 14, fontWeight: 500, padding: '10px 16px', borderRadius: 10, color: 'var(--ink)',
            }}>{l}</a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 680px) {
          .nav-links { display: none !important; }
          .hamburger { display: flex !important; }
        }
        @media (min-width: 681px) {
          .mobile-menu { display: none !important; }
        }
      `}</style>
    </>
  );
}
