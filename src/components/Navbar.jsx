import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import portrait from '../assets/portrait.png';

export default function Navbar() {
  const dockRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(dockRef.current,
      { y: 16, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out', delay: 0.2 }
    );
  }, []);

  const links = ['Work', 'Story', 'Experience', 'Praise', 'Contact'];

  return (
    <>
      <div ref={dockRef} className="nav-dock" style={{
        position: 'fixed',
        bottom: 'clamp(16px, 3vw, 28px)',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        gap: 4,
        padding: 6,
        background: 'rgba(255,255,255,0.9)',
        backdropFilter: 'blur(12px)',
        border: '1px solid var(--border)',
        borderRadius: 40,
        boxShadow: '0 8px 28px rgba(0,0,0,0.1)',
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

        <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          {links.map(l => (
            <a key={l} href={`/#${l.toLowerCase()}`} style={{
              fontSize: 13.5,
              fontWeight: 500,
              padding: '8px 14px',
              borderRadius: 30,
              color: 'var(--ink-muted)',
              whiteSpace: 'nowrap',
              transition: 'color 0.2s, background 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = 'var(--ink)'; e.currentTarget.style.background = 'var(--bg-alt)'; }}
            onMouseLeave={e => { e.currentTarget.style.color = 'var(--ink-muted)'; e.currentTarget.style.background = 'transparent'; }}
            >{l}</a>
          ))}
        </div>

        <a href="mailto:jubrilosunlana@gmail.com" className="nav-cta" style={{
          display: 'inline-flex',
          alignItems: 'center',
          padding: '12px 20px',
          background: 'var(--ink)',
          color: 'var(--white)',
          borderRadius: 30,
          fontSize: 13.5,
          fontWeight: 600,
          letterSpacing: '0.01em',
          transition: 'opacity 0.2s',
          whiteSpace: 'nowrap',
          flexShrink: 0,
        }}
        onMouseEnter={e => e.currentTarget.style.opacity = '0.82'}
        onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >Get in touch</a>
      </div>

    </>
  );
}
