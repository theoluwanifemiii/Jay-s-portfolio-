import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import portrait from '../assets/portrait.png';

gsap.registerPlugin(ScrollTrigger);

export default function Story() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.story-label', { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.6, scrollTrigger: { trigger: '.story-label', start: 'top 85%' } }
      );
      gsap.fromTo('.story-headline', { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: '.story-headline', start: 'top 85%' } }
      );
      gsap.fromTo('.story-para', { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power2.out', scrollTrigger: { trigger: '.story-body', start: 'top 80%' } }
      );
      gsap.fromTo('.story-portrait', { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', scrollTrigger: { trigger: '.story-portrait', start: 'top 85%' } }
      );
      gsap.fromTo('.story-stat', { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out', scrollTrigger: { trigger: '.story-strip', start: 'top 85%' } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const pillars = [
    { years: '8 yrs', label: 'Healthcare', desc: 'Demos, onboarding & raw feedback from real patients and clinicians' },
    { years: '5 yrs', label: 'B2B Field Sales', desc: 'Hospitals, pharmacies, 80+ weekly clients, 65% conversion rate' },
    { years: '4 yrs', label: 'Public Health', desc: '500+ participants across Northern Nigeria in health access campaigns' },
    { years: '2 yrs', label: 'Product', desc: 'Shipping measurable outcomes at Planpadi and MSC from day one' },
  ];

  return (
    <section ref={sectionRef} id="story" style={{
      paddingTop: 'var(--gap)',
      paddingBottom: 'var(--gap)',
      background: 'var(--white)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
    }}>
      <div className="container">
        <div className="story-top" style={{
          display: 'flex', gap: 'clamp(32px, 5vw, 72px)',
          marginBottom: 'clamp(48px, 7vw, 88px)',
        }}>
          <div style={{ flex: '1 1 0', minWidth: 0 }}>
            <p className="story-label" style={{
              fontSize: 12, fontWeight: 600, letterSpacing: '0.12em',
              textTransform: 'uppercase', color: 'var(--ink-faint)', marginBottom: 16,
            }}>My Story</p>

            <h2 className="story-headline" style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 700,
              fontSize: 'clamp(32px, 4.5vw, 52px)',
              lineHeight: 1.1, letterSpacing: '-0.02em',
              color: 'var(--ink)', marginBottom: 28,
            }}>
              The field was my<br />
              <span style={{ color: 'var(--ink-faint)' }}>product school.</span>
            </h2>

            <div className="story-body" style={{ maxWidth: 580 }}>
              <p className="story-para" style={{ color: 'var(--ink-muted)', lineHeight: 1.75, marginBottom: 16, fontWeight: 300, fontSize: 16 }}>
                Before product, I was in the field across healthcare and B2B, running demos, onboarding customers, and collecting the kind of raw, unfiltered feedback you only get face to face. Eight years of watching real people adopt products, get stuck, and decide whether to come back.
              </p>
              <p className="story-para" style={{ color: 'var(--ink-muted)', lineHeight: 1.75, marginBottom: 16, fontWeight: 300, fontSize: 16 }}>
                That work taught me what no framework can. How adoption actually happens. Where friction hides. What makes someone trust a product enough to pay for it again.
              </p>
              <p className="story-para" style={{ color: 'var(--ink-muted)', lineHeight: 1.75, fontWeight: 300, fontSize: 16 }}>
                When I moved into Product Management, I didn't need to theorize about users. I already knew them. And that changes everything about how I build.
              </p>
            </div>
          </div>

          <div className="story-portrait" style={{
            flex: '0 0 clamp(220px, 26vw, 320px)',
            borderRadius: 18,
            overflow: 'hidden',
            background: 'var(--bg-alt)',
            aspectRatio: '4 / 5',
            alignSelf: 'start',
          }}>
            <img src={portrait} alt="Jubril Osunlana" style={{
              width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 20%',
            }} />
          </div>
        </div>

        {/* Full-width stat strip */}
        <div className="story-strip" style={{
          display: 'flex',
          borderTop: '1px solid var(--border)',
        }}>
          {pillars.map((p, i) => (
            <div key={p.label} className="story-stat" style={{
              flex: 1,
              borderRight: i < pillars.length - 1 ? '1px solid var(--border)' : 'none',
              paddingTop: 28,
              paddingLeft: i === 0 ? 0 : 'clamp(16px, 2.4vw, 32px)',
              paddingRight: i === pillars.length - 1 ? 0 : 'clamp(16px, 2.4vw, 32px)',
            }}>
              <p style={{ fontSize: 'clamp(28px, 3.2vw, 40px)', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--ink)', marginBottom: 10 }}>
                {p.years}
              </p>
              <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink)', marginBottom: 8 }}>{p.label}</p>
              <p style={{ fontSize: 13, color: 'var(--ink-muted)', lineHeight: 1.55, fontWeight: 300 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .story-top { flex-direction: column; }
          .story-portrait { flex: 1 1 auto !important; width: 100%; max-width: 320px; }
          .story-strip { flex-direction: column; }
          .story-strip .story-stat { border-right: none !important; border-top: 1px solid var(--border); padding-top: 24px; padding-bottom: 24px; padding-left: 0 !important; padding-right: 0 !important; }
          .story-strip .story-stat:first-child { border-top: none; }
        }
      `}</style>
    </section>
  );
}
