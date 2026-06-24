import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const roles = [
  {
    period: 'Apr 2026 – Present',
    title: 'Product Owner, Pharmacy-Focused Product Pod',
    company: 'Medicare Supply Chain (MSC)',
    location: 'Lagos, Nigeria',
    type: 'Current',
    bullets: [
      'Led end-to-end development of HPMS (Hierarchical Promotional Management System), a gamified referral and commission platform, from discovery through Phase 1 MVP delivery (June 5, 2026), managing PRD evolution through 4 major versions.',
      'Designed and documented KPI Dashboard & MSV Leaderboard gamification system with tier-based achievement structure to drive network growth and Inviter activation.',
      'Executed post-MVP demo with the GM, collected feedback, prioritized 3 feature requests, and delivered 2 approved enhancements within 48 hours (QR code enhancement, Confirmed Payment box).',
      'Led a cross-functional team (Backend, Frontend, QA, Designer) through sprint planning, daily standups, and stakeholder communications to meet aggressive delivery milestones.',
    ],
    tags: ['Roadmapping', 'PRDs', 'Gamification', 'Agile'],
  },
  {
    period: 'Jul 2025 – Mar 2026',
    title: 'Product Manager, Event Planning Platform',
    company: 'Planpadi (WeixelTech Ltd)',
    location: 'Remote',
    type: 'Product',
    bullets: [
      'Defined product roadmap using RICE prioritization and owned delivery across 3 product verticals, improving event activation by 60% through a redesigned homepage, creation flow, and ticketing UX.',
      'Increased mobile engagement by 56% via KPI-driven UX improvements and mobile-first interaction design, tracked through Mixpanel analytics.',
      'Reduced failed wallet withdrawals by 70% by redesigning KYC and verification flows with clearer validation and feedback mechanisms.',
      'Led discovery, user interviews, analytics instrumentation, and Agile ceremonies to ensure fast, aligned delivery across a distributed engineering team.',
    ],
    tags: ['RICE Prioritization', 'UX', 'Analytics', 'Agile'],
    highlight: true,
  },
  {
    period: 'Jan 2025 – Oct 2025',
    title: 'Medical Representative',
    company: 'Colexa Biosensor Ltd',
    location: 'Ondo State, Nigeria',
    type: 'Field',
    bullets: [
      'Launched Colexa Biosensor’s regional presence in Ondo State as first Medical Representative, building customer base from zero and establishing market foothold.',
      'Delivered product demos and education for glucometers and test strips, driving adoption, repeat usage, and sales growth.',
      'Executed regional marketing initiatives to increase brand visibility and market penetration in underserved territory.',
      'Collected structured customer and market insights that informed product positioning, messaging, and go-to-market decisions.',
    ],
    tags: ['GTM', 'Market Entry', 'User Insight'],
  },
  {
    period: 'Aug 2022 – Jan 2025',
    title: 'Medical Representative',
    company: 'Fidson Healthcare Plc',
    location: 'Nigeria',
    type: 'Field',
    bullets: [
      'Managed a pipeline of 80+ weekly healthcare clients, achieving a 65% conversion rate and contributing to 40% revenue growth through product-led demos and customer education.',
      'Generated structured market and customer insights that shaped product messaging, segmentation, and regional go-to-market strategies.',
      'Developed deep pharmaceutical and healthcare domain expertise foundational to product management at MSC.',
      'Strengthened cross-functional communication and negotiation skills transferable to product and stakeholder management environments.',
    ],
    tags: ['Sales', 'Client Management', 'Healthcare'],
  },
  {
    period: 'Jun 2018 – Sep 2020',
    title: 'Project Manager',
    company: 'TOHAI Health Awareness Initiative',
    location: 'Abuja & Northern Nigeria',
    type: 'NGO',
    bullets: [
      'Coordinated multi-regional health projects reaching 500+ participants, managing logistics, research execution, and cross-stakeholder alignment.',
      'Conducted user needs assessments and stakeholder alignment foundational to product delivery methodologies and project success.',
      'Developed leadership, communication, and project coordination skills that translate to product management environments.',
      'Built a foundation in healthcare domain knowledge and understanding of complex, multi-stakeholder initiatives.',
    ],
    tags: ['Program Management', 'Public Health', 'Stakeholder Alignment'],
  },
  {
    period: 'Sep 2017 – Apr 2018',
    title: 'Medical Sales Representative',
    company: 'DrugStoc',
    location: 'Lagos State',
    type: 'Field',
    bullets: [
      'Built digital-first customer engagement strategies that drove a 95% client retention rate.',
      'Sustained a strong B2B sales pipeline across hospitals and pharmacies through strategic follow-up.',
      'Fed customer feedback to marketing and product teams to sharpen positioning and training materials.',
    ],
    tags: ['B2B Sales', 'Client Retention', 'Digital'],
  },
  {
    period: 'Jul 2016 – May 2017',
    title: 'Assistant Project Manager',
    company: 'Planned Parenthood Federation of Nigeria',
    location: 'Abeokuta, Ogun State',
    type: 'Internship',
    bullets: [
      'Supported training programs for 300+ Community Health Workers focused on maternal health tools and user education.',
      'Collected and analysed field data to guide community health initiatives and measure campaign impact.',
      'Led logistics and stakeholder coordination for testing campaigns reaching 500+ participants.',
    ],
    tags: ['Community Health', 'Field Research', 'Logistics'],
  },
];

const typeColors = {
  Current: { bg: '#E6F0EB', color: '#1A4D3A' },
  Product: { bg: '#EFF6FF', color: '#1D4ED8' },
  Field: { bg: '#FEF3EC', color: '#C4632A' },
  NGO: { bg: '#EEF2FF', color: '#4338CA' },
  Internship: { bg: '#F4F4F5', color: '#52525B' },
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
              8 years of proof,<br />
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
              <div key={i}>
                {i === 2 && (
                  <p style={{
                    fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
                    color: 'var(--ink-faint)', paddingTop: 32, paddingBottom: 8,
                  }}>Prior Experience</p>
                )}
                <div className="exp-row" style={{
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
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 4, marginBottom: 10 }}>
                      <div>
                        <p style={{ fontSize: 17, fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.01em' }}>{r.title}</p>
                        <p style={{ fontSize: 14, color: 'var(--accent)', fontWeight: 500 }}>{r.company}</p>
                      </div>
                      <p style={{ fontSize: 13, color: 'var(--ink-faint)' }}>{r.location}</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 14 }}>
                      {r.bullets.map((b, j) => (
                        <p key={j} style={{
                          display: 'flex', gap: 8,
                          fontSize: 14, color: 'var(--ink-muted)', lineHeight: 1.6, fontWeight: 300,
                        }}>
                          <span style={{ color: 'var(--ink-faint)', flexShrink: 0 }}>▸</span>
                          <span>{b}</span>
                        </p>
                      ))}
                    </div>
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
