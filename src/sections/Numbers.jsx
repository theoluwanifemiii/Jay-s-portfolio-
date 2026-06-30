import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function StatCard({ value, suffix = '%', label, context, accent = false }) {
  const numRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = numRef.current;
    const target = parseFloat(value);
    const isInt = Number.isInteger(target);

    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      onEnter: () => {
        if (hasAnimated.current) return;
        hasAnimated.current = true;
        gsap.to({ val: 0 }, { val: target, duration: 1.6, ease: 'power2.out',
          onUpdate: function () {
            el.textContent = isInt
              ? Math.round(this.targets()[0].val)
              : this.targets()[0].val.toFixed(0);
          },
          onComplete: () => { el.textContent = value; }
        });
      }
    });
  }, [value]);

  return (
    <div style={{
      padding: 'clamp(24px, 4vw, 40px)',
      border: `1.5px solid ${accent ? 'var(--accent)' : 'var(--border)'}`,
      borderRadius: 16,
      background: accent ? 'var(--accent)' : 'var(--white)',
      display: 'flex', flexDirection: 'column', gap: 8,
      transition: 'transform 0.2s, box-shadow 0.2s',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.boxShadow = accent
        ? '0 16px 40px rgba(26,77,58,0.3)'
        : '0 8px 24px rgba(0,0,0,0.07)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'none';
    }}
    >
      <div style={{
        fontFamily: 'var(--font-sans)',
        fontWeight: 700,
        fontSize: 'clamp(48px, 6vw, 72px)',
        lineHeight: 1,
        color: accent ? 'var(--white)' : 'var(--ink)',
        letterSpacing: '-0.03em',
        display: 'flex', alignItems: 'baseline', gap: 2,
      }}>
        <span ref={numRef}>0</span>
        <span style={{ fontSize: '0.5em', fontFamily: 'var(--font-sans)', fontWeight: 400, opacity: 0.7 }}>{suffix}</span>
      </div>
      <p style={{
        fontSize: 14, fontWeight: 600,
        color: accent ? 'rgba(255,255,255,0.9)' : 'var(--ink)',
        lineHeight: 1.3,
      }}>{label}</p>
      <p style={{
        fontSize: 13,
        color: accent ? 'rgba(255,255,255,0.65)' : 'var(--ink-muted)',
        lineHeight: 1.5,
      }}>{context}</p>
    </div>
  );
}

export default function Numbers() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.numbers-header > *', { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power2.out',
          scrollTrigger: { trigger: '.numbers-header', start: 'top 85%' } }
      );
      gsap.fromTo('.stat-card-wrap', { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power2.out',
          scrollTrigger: { trigger: '.stats-grid', start: 'top 80%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const stats = [
    { value: '76', suffix: '%', label: 'Event activation lift', context: 'After redesigning the creation flow, homepage & ticketing at Planpadi', accent: true },
    { value: '88', suffix: '%', label: 'Mobile engagement growth', context: 'KPI-driven UX improvements based on real usage data' },
    { value: '80', suffix: '%', label: 'Failed withdrawals cut', context: 'Rebuilt KYC and verification flows with clearer validation & feedback' },
    { value: '33', suffix: '%', label: 'Platform reliability up', context: 'Communication features and system updates improving stability' },
    { value: '65', suffix: '%', label: 'Conversion rate', context: 'As Medical Rep at Fidson Healthcare, ranked top 3 within one year' },
    { value: '40', suffix: '%', label: 'Revenue growth driven', context: 'At Fidson Healthcare managing 80+ weekly healthcare clients' },
    { value: '95', suffix: '%', label: 'Client retention', context: 'At DrugStoc through digital-first B2B engagement strategies' },
    { value: '500', suffix: '+', label: 'Lives reached', context: 'Health campaigns across Northern Nigeria with TOHAI Health Awareness Initiative' },
  ];

  return (
    <section ref={sectionRef} id="numbers" style={{
      paddingTop: 'var(--gap)',
      paddingBottom: 'var(--gap)',
      background: 'var(--bg)',
    }}>
      <div className="container">
        <div className="numbers-header" style={{ marginBottom: 'clamp(40px, 6vw, 64px)' }}>
          <p style={{
            fontSize: 12, fontWeight: 600, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 12,
          }}>The Numbers</p>
          <h2 style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 700,
            fontSize: 'clamp(32px, 4.5vw, 52px)',
            lineHeight: 1.1, letterSpacing: '-0.02em',
            color: 'var(--ink)', maxWidth: 540,
          }}>
            Results that show<br />
            <span style={{ color: 'var(--ink-faint)' }}>up in the data.</span>
          </h2>
        </div>

        <div className="stats-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))',
          gap: 16,
        }}>
          {stats.map((s, i) => (
            <div key={i} className="stat-card-wrap">
              <StatCard {...s} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
