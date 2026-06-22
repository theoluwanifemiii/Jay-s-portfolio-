import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MOCKS } from '../components/Mocks';
import { works } from '../data/works';

gsap.registerPlugin(ScrollTrigger);

export default function Highlights() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.works-header > *', { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
      );
      gsap.fromTo('.work-card', { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out',
          scrollTrigger: { trigger: '.works-grid', start: 'top 80%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ paddingBottom: 'var(--gap)' }}>
      <div className="container">
        <p className="works-header" style={{
          fontSize: 'clamp(18px, 2.4vw, 26px)',
          lineHeight: 1.4, letterSpacing: '-0.01em',
          color: 'var(--ink)', maxWidth: 760,
          marginBottom: 'clamp(32px, 5vw, 56px)',
        }}>
          Three products, three different problems &mdash; <span style={{ color: 'var(--ink-faint)' }}>helping teams ship faster, own their roadmap, and reach more people with less guesswork.</span>
        </p>

        <div className="works-grid" style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'clamp(20px, 3vw, 32px)',
        }}>
          {works.map((w) => {
            const Mock = MOCKS[w.mockKey];
            return (
              <Link key={w.slug} to={`/work/${w.slug}`} className="work-card" style={{ display: 'block' }}>
                <div style={{
                  background: w.bg,
                  borderRadius: 18,
                  aspectRatio: '4 / 3.4',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 20,
                  overflow: 'hidden',
                  transition: 'transform 0.25s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.015)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <Mock />
                </div>
                <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-faint)', marginBottom: 8 }}>
                  {w.eyebrow}
                </p>
                <p style={{ fontSize: 17, fontWeight: 700, color: 'var(--ink)', marginBottom: 8, letterSpacing: '-0.01em' }}>
                  {w.title}
                </p>
                <p style={{ fontSize: 14, color: 'var(--ink-muted)', lineHeight: 1.6, fontWeight: 300 }}>
                  {w.desc}
                </p>
              </Link>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .works-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
