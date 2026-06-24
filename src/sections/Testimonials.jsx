import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: 'It’s rare that you come across an astounding talent like volunteer Jubril. We had the pleasure of working with Jubril for six weeks at the Fame Illuminate program. Above all, we were particularly impressed by Jubril’s ability to handle the tough conditions of the public school he was assigned to effortlessly. That skill often takes years to develop, but it seemed to come perfectly naturally to him. Oh, and he made sure our beneficiaries were never without smiles after each session delivery. Talk about delivering results! Jubril would be an asset to any team he works with.',
    name: 'Fashioned and Made for Excellence Foundation',
    role: null,
  },
  {
    quote: 'An awesome project manager who has successfully initiated and implemented lifesaving solutions to vulnerable communities while helping third party projects achieve their goals.',
    name: 'Praise E.',
    role: 'Founder, TOHAI Nigeria',
  },
];

export default function Testimonials() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.testi-header > *', { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power2.out',
          scrollTrigger: { trigger: '.testi-header', start: 'top 85%' } }
      );
      gsap.fromTo('.testi-card', { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: 'power2.out',
          scrollTrigger: { trigger: '.testi-strip', start: 'top 80%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="praise" style={{
      paddingTop: 'var(--gap)',
      paddingBottom: 'var(--gap)',
      background: 'var(--bg)',
      borderTop: '1px solid var(--border)',
    }}>
      <div className="container">
        <div className="testi-header" style={{ marginBottom: 'clamp(40px, 6vw, 64px)' }}>
          <p style={{
            fontSize: 12, fontWeight: 600, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 12,
          }}>Testimonials</p>
          <h2 style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 700,
            fontSize: 'clamp(32px, 4.5vw, 52px)',
            lineHeight: 1.1, letterSpacing: '-0.02em',
            color: 'var(--ink)', maxWidth: 600,
          }}>
            What it's like<br />
            <span style={{ color: 'var(--ink-faint)' }}>to work with me.</span>
          </h2>
        </div>

        <div className="testi-strip" style={{
          display: 'flex',
          borderTop: '1px solid var(--border)',
        }}>
          {testimonials.map((t, i) => (
            <div key={t.name} className="testi-card" style={{
              flex: 1,
              borderRight: i < testimonials.length - 1 ? '1px solid var(--border)' : 'none',
              paddingTop: 32,
              paddingLeft: i === 0 ? 0 : 'clamp(24px, 3.6vw, 48px)',
              paddingRight: i === testimonials.length - 1 ? 0 : 'clamp(24px, 3.6vw, 48px)',
              display: 'flex', flexDirection: 'column',
            }}>
              <p style={{
                fontSize: 'clamp(15px, 1.6vw, 17px)', lineHeight: 1.7, fontWeight: 300,
                color: 'var(--ink-muted)', marginBottom: 24, flex: 1,
              }}>
                “{t.quote}”
              </p>
              <div>
                <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.01em' }}>{t.name}</p>
                {t.role && (
                  <p style={{ fontSize: 13, color: 'var(--ink-faint)', marginTop: 2 }}>{t.role}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .testi-strip { flex-direction: column; }
          .testi-strip .testi-card { border-right: none !important; border-top: 1px solid var(--border); padding-top: 28px; padding-bottom: 28px; padding-left: 0 !important; padding-right: 0 !important; }
          .testi-strip .testi-card:first-child { border-top: none; }
        }
      `}</style>
    </section>
  );
}
