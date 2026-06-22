import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const roles = [
  {
    period: '2026 – Present',
    title: 'Product Owner',
    company: 'Medicare Supply Chain (MSC)',
    location: 'Nigeria',
    type: 'Current',
    desc: 'PO for HPMS — a promotion management system built into MSC\'s platform. Own the roadmap end to end, lead MVP discovery, author PRDs, and run cross-functional delivery across engineering, design, and QA.',
    tags: ['Roadmapping', 'PRDs', 'Discovery', 'Agile'],
  },
  {
    period: '2025 – Present',
    title: 'Product Manager',
    company: 'Planpadi (WeixelTech)',
    location: 'Remote',
    type: 'Current',
    desc: 'Lead product for an event and digital wallet platform. Shipped a 60% lift in event activation, 56% mobile engagement growth, and cut failed wallet withdrawals by 70% through KYC rebuild.',
    tags: ['Product Strategy', 'UX', 'Analytics', 'Agile'],
    highlight: true,
  },
  {
    period: '2025',
    title: 'Medical Representative',
    company: 'Colexa Biosensor Ltd',
    location: 'Ondo State, Nigeria',
    type: 'Field',
    desc: 'Opened the entire Ondo State market from zero as the first Medical Rep. Built and sustained the customer base through hands-on product demos and structured market insight gathering.',
    tags: ['GTM', 'Market Entry', 'User Insight'],
  },
  {
    period: '2022 – 2025',
    title: 'Medical Representative',
    company: 'Fidson Healthcare Plc',
    location: 'Nigeria',
    type: 'Field',
    desc: 'Ranked top 3 of all reps nationwide within 6 months. Managed 80+ weekly healthcare clients at a 65% conversion rate, contributing to 40% revenue growth.',
    tags: ['Sales', 'Client Management', 'Healthcare'],
  },
  {
    period: '2018 – 2020',
    title: 'Project Manager',
    company: 'Tochi Health Access Initiative',
    location: 'Abuja & Northern Nigeria',
    type: 'NGO',
    desc: 'Led multi-regional public health campaigns and genotype testing programs reaching 500+ individuals. Built performance dashboards and managed a remote cross-functional team.',
    tags: ['Program Management', 'Public Health', 'Data'],
  },
  {
    period: '2017 – 2018',
    title: 'Medical Sales Representative',
    company: 'DrugStoc',
    location: 'Lagos',
    type: 'Field',
    desc: 'Built digital-first customer engagement strategies driving a 95% client retention rate across hospitals and pharmacies.',
    tags: ['B2B Sales', 'Client Retention', 'Digital'],
  },
];

const typeColors = {
  Current: { bg: '#E6F0EB', color: '#1A4D3A' },
  Field: { bg: '#FEF3EC', color: '#C4632A' },
  NGO: { bg: '#EEF2FF', color: '#4338CA' },
};

export default function Experience() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.exp-header > *', { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power2.out',
          scrollTrigger: { trigger: '.exp-header', start: 'top 85%' } }
      );
      gsap.fromTo('.exp-row', { opacity: 0, x: -24 },
        { opacity: 1, x: 0, duration: 0.55, stagger: 0.1, ease: 'power2.out',
          scrollTrigger: { trigger: '.exp-list', start: 'top 80%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experience" style={{
      paddingTop: 'var(--gap)',
      paddingBottom: 'var(--gap)',
      background: 'var(--white)',
      borderTop: '1px solid var(--border)',
    }}>
      <div className="container">
        <div className="exp-header" style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
          flexWrap: 'wrap', gap: 24, marginBottom: 'clamp(40px, 6vw, 64px)',
        }}>
          <div>
            <p style={{
              fontSize: 12, fontWeight: 600, letterSpacing: '0.12em',
              textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 12,
            }}>Experience</p>
            <h2 style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 700,
              fontSize: 'clamp(32px, 4.5vw, 52px)',
              lineHeight: 1.1, letterSpacing: '-0.02em', color: 'var(--ink)',
            }}>
              10 years of proof,<br />
              <span style={{ color: 'var(--ink-faint)' }}>not theory.</span>
            </h2>
          </div>
          <a href="https://drive.google.com/file/d/1wZgpg0WTdpmzpE2Pmtzwpq-on3RUOfHc/view?usp=sharing" target="_blank" rel="noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '12px 24px',
            border: '1.5px solid var(--border)',
            borderRadius: 40, fontSize: 14, fontWeight: 500,
            color: 'var(--ink)',
            transition: 'all 0.2s',
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.background = 'var(--accent-light)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'transparent'; }}
          >
            Download CV ↓
          </a>
        </div>

        <div className="exp-list" style={{ display: 'flex', flexDirection: 'column' }}>
          {roles.map((r, i) => {
            const tc = typeColors[r.type] || typeColors.Field;
            return (
              <div key={i} className="exp-row" style={{
                display: 'grid',
                gridTemplateColumns: '140px 1fr',
                gap: '0 40px',
                borderTop: '1px solid var(--border)',
                paddingTop: 28, paddingBottom: 28,
                transition: 'background 0.2s',
                borderRadius: 8,
                cursor: 'default',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--bg)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                {/* Left: period */}
                <div style={{ paddingTop: 4 }}>
                  <p style={{ fontSize: 13, color: 'var(--ink-muted)', fontWeight: 400, lineHeight: 1.5 }}>{r.period}</p>
                  <span style={{
                    display: 'inline-block', marginTop: 8,
                    fontSize: 11, fontWeight: 600, padding: '3px 10px',
                    borderRadius: 40, letterSpacing: '0.06em',
                    background: tc.bg, color: tc.color,
                    textTransform: 'uppercase',
                  }}>{r.type}</span>
                </div>

                {/* Right: details */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 4, marginBottom: 6 }}>
                    <div>
                      <p style={{ fontSize: 17, fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.01em' }}>{r.title}</p>
                      <p style={{ fontSize: 14, color: 'var(--accent)', fontWeight: 500 }}>{r.company}</p>
                    </div>
                    <p style={{ fontSize: 13, color: 'var(--ink-faint)' }}>{r.location}</p>
                  </div>
                  <p style={{ fontSize: 14, color: 'var(--ink-muted)', lineHeight: 1.65, marginBottom: 12, fontWeight: 300 }}>{r.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {r.tags.map(t => (
                      <span key={t} style={{
                        fontSize: 12, fontWeight: 500,
                        padding: '4px 10px', borderRadius: 40,
                        border: '1px solid var(--border)',
                        color: 'var(--ink-muted)',
                        background: 'var(--white)',
                      }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
          {/* Last border */}
          <div style={{ borderTop: '1px solid var(--border)' }} />
        </div>
      </div>
    </section>
  );
}
