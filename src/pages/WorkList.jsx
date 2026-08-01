import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { works } from '../data/works';

export default function WorkList() {
  const [hovered, setHovered] = useState(null);
  const thumbRef = useRef(null);
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.wl-fade', { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.55, stagger: 0.06, ease: 'power2.out', delay: 0.1 }
      );
    }, pageRef);
    return () => ctx.revert();
  }, []);

  const moveThumb = (e) => {
    if (thumbRef.current) {
      thumbRef.current.style.transform = `translate(${e.clientX + 28}px, ${e.clientY - 100}px)`;
    }
  };

  return (
    <div ref={pageRef}>
      <Navbar />
      <main style={{ paddingTop: 'clamp(80px, 12vw, 140px)', paddingBottom: 'calc(var(--gap) + 60px)' }}>
        <div className="container">
          <p className="wl-fade" style={{
            fontSize: 11, fontWeight: 700, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: 'var(--ink-faint)', marginBottom: 16,
          }}>Selected work</p>

          <h1 className="wl-fade" style={{
            fontSize: 'clamp(36px, 5.5vw, 64px)', fontWeight: 800,
            letterSpacing: '-0.03em', lineHeight: 1.05,
            color: 'var(--ink)', marginBottom: 'clamp(40px, 7vw, 80px)',
          }}>Five case studies.<br />Three clients.</h1>

          <div>
            {works.map((w, i) => (
              <Link
                key={w.slug}
                to={`/work/${w.slug}`}
                className="wl-fade"
                onMouseEnter={() => setHovered(w)}
                onMouseLeave={() => setHovered(null)}
                onMouseMove={moveThumb}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '40px 1fr auto',
                  alignItems: 'center',
                  gap: 'clamp(16px, 3vw, 40px)',
                  padding: 'clamp(20px, 3vw, 32px) 0',
                  borderTop: '1px solid var(--border)',
                  textDecoration: 'none',
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={e => { setHovered(w); e.currentTarget.style.opacity = '0.72'; }}
                onMouseLeave={e => { setHovered(null); e.currentTarget.style.opacity = '1'; }}
              >
                <span style={{
                  fontSize: 12, fontWeight: 500,
                  color: 'var(--ink-faint)', letterSpacing: '0.04em',
                  alignSelf: 'flex-start', paddingTop: 4,
                }}>
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div>
                  <p style={{
                    fontSize: 11, fontWeight: 600, letterSpacing: '0.08em',
                    textTransform: 'uppercase', color: 'var(--ink-faint)', marginBottom: 8,
                  }}>{w.eyebrow}</p>
                  <p style={{
                    fontSize: 'clamp(20px, 2.4vw, 30px)', fontWeight: 700,
                    color: 'var(--ink)', letterSpacing: '-0.02em', lineHeight: 1.2,
                  }}>{w.title}</p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 10 }}>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                    {w.tags && w.tags.map(tag => (
                      <span key={tag} style={{
                        fontSize: 11, fontWeight: 500, letterSpacing: '0.04em',
                        padding: '3px 10px', borderRadius: 20,
                        border: '1px solid var(--border)',
                        color: 'var(--ink-muted)',
                        whiteSpace: 'nowrap',
                      }}>{tag}</span>
                    ))}
                  </div>
                  <span style={{ fontSize: 18, color: 'var(--ink-faint)' }}>→</span>
                </div>
              </Link>
            ))}
            <div style={{ borderTop: '1px solid var(--border)' }} />
          </div>
        </div>
      </main>

      {/* Cursor thumbnail */}
      <div
        ref={thumbRef}
        style={{
          position: 'fixed', top: 0, left: 0,
          width: 260, height: 175,
          borderRadius: 14, overflow: 'hidden',
          pointerEvents: 'none', zIndex: 9999,
          boxShadow: '0 24px 60px rgba(0,0,0,0.18)',
          opacity: hovered ? 1 : 0,
          visibility: hovered ? 'visible' : 'hidden',
          transition: 'opacity 0.2s, visibility 0.2s',
          transform: 'translate(-999px,-999px)',
          willChange: 'transform',
        }}
      >
        {hovered && (
          hovered.cardImage
            ? <img src={hovered.cardImage} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            : <div style={{ width: '100%', height: '100%', background: hovered.bg }} />
        )}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .wl-row { grid-template-columns: 32px 1fr !important; }
          .wl-tags { display: none !important; }
        }
      `}</style>
    </div>
  );
}
