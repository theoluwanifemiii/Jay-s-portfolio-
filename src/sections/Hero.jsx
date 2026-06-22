import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Hero() {
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);
  const tagsRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.6 });

      tl.fromTo(headlineRef.current.querySelectorAll('.word'),
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.012, ease: 'power3.out' }
      )
      .fromTo(tagsRef.current.children,
        { y: 12, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.06, ease: 'power2.out' },
        '-=0.2'
      )
      .fromTo(ctaRef.current.children,
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out' },
        '-=0.2'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const tags = ['Product Management', 'B2B SaaS', 'HealthTech', 'GTM & Growth', 'User Discovery'];

  const muted = 'Eight years in the field, watching real people adopt products.';
  const bold = "Now I build the products; turning that field instinct into roadmaps, PRDs and measurable growth for ambitious teams.";

  const renderWords = (text, className) =>
    text.split(' ').map((w, i) => (
      <span key={`${className}-${i}`} className="word" style={{ display: 'inline-block', marginRight: '0.28em' }}>{w}</span>
    ));

  return (
    <section ref={sectionRef} id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      paddingTop: 140,
      paddingBottom: 80,
      position: 'relative',
    }}>
      <div className="container">
        <h1 ref={headlineRef} style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'clamp(32px, 5.2vw, 58px)',
          lineHeight: 1.18,
          letterSpacing: '-0.02em',
          maxWidth: 1080,
          marginBottom: 56,
        }}>
          <span style={{ color: 'var(--ink-faint)', fontWeight: 400 }}>{renderWords(muted, 'm')} </span>
          <span style={{ color: 'var(--ink)', fontWeight: 600 }}>{renderWords(bold, 'b')}</span>
        </h1>

        <div ref={tagsRef} style={{
          display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 40,
        }}>
          {tags.map(t => (
            <span key={t} style={{
              fontSize: 13, fontWeight: 500,
              padding: '7px 16px',
              borderRadius: 40,
              border: '1px solid var(--border)',
              color: 'var(--ink-muted)',
              background: 'var(--white)',
            }}>{t}</span>
          ))}
        </div>

        <div ref={ctaRef} style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
          <a href="#numbers" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '14px 28px',
            background: 'var(--ink)',
            color: 'var(--white)',
            borderRadius: 40,
            fontSize: 14.5, fontWeight: 600,
            letterSpacing: '0.01em',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            See the results →
          </a>
          <a href="#contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '14px 28px',
            border: '1.5px solid var(--border)',
            color: 'var(--ink)',
            borderRadius: 40,
            fontSize: 14.5, fontWeight: 500,
            transition: 'border-color 0.2s, background 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--ink)'; e.currentTarget.style.background = 'var(--bg-alt)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'transparent'; }}
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
