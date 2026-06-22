import { useEffect, useRef } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { gsap } from 'gsap';
import Navbar from '../components/Navbar';
import { MOCKS } from '../components/Mocks';
import { works, getWork } from '../data/works';

export default function WorkDetail() {
  const { slug } = useParams();
  const work = getWork(slug);
  const pageRef = useRef(null);

  useEffect(() => {
    if (!work) return;
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      gsap.fromTo('.detail-fade', { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power2.out', delay: 0.1 }
      );
    }, pageRef);
    return () => ctx.revert();
  }, [slug]);

  if (!work) return <Navigate to="/" replace />;

  const others = works.filter(w => w.slug !== work.slug);

  return (
    <div ref={pageRef}>
      <Navbar />
      <main style={{ paddingTop: 140, paddingBottom: 'var(--gap)' }}>
        <div className="container">
          <Link to="/" className="detail-fade" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            fontSize: 13, fontWeight: 500, color: 'var(--ink-muted)', marginBottom: 32,
          }}>← Back to all work</Link>

          <p className="detail-fade" style={{
            fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
            color: 'var(--ink-faint)', marginBottom: 16,
          }}>{work.eyebrow}</p>

          <h1 className="detail-fade" style={{
            fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 700,
            letterSpacing: '-0.02em', lineHeight: 1.1,
            color: 'var(--ink)', maxWidth: 880, marginBottom: 20,
          }}>{work.title}</h1>

          <div className="detail-fade" style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap', marginBottom: work.status ? 16 : 40 }}>
            <span style={{ fontSize: 13, color: 'var(--ink-muted)' }}>{work.role}</span>
            <span style={{ fontSize: 13, color: 'var(--ink-faint)' }}>{work.period}</span>
            {work.status && (
              <span style={{
                fontSize: 11, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase',
                padding: '4px 12px', borderRadius: 40, background: '#FEF3EC', color: '#C4632A',
              }}>{work.status.label}</span>
            )}
          </div>

          {work.status && (
            <p className="detail-fade" style={{
              fontSize: 13.5, color: 'var(--ink-faint)', fontStyle: 'italic', fontWeight: 300,
              maxWidth: 560, marginBottom: 40,
            }}>{work.status.note}</p>
          )}

          <p className="detail-fade" style={{
            fontSize: 'clamp(16px, 1.8vw, 19px)', lineHeight: 1.7, fontWeight: 300,
            color: 'var(--ink-muted)', maxWidth: 680, marginBottom: 'clamp(48px, 7vw, 88px)',
          }}>{work.intro}</p>

          {/* Two-up visual blocks */}
          <div className="detail-fade detail-blocks" style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(20px, 3vw, 32px)',
            marginBottom: 'clamp(56px, 8vw, 100px)',
          }}>
            {work.blocks.map((b) => {
              const Mock = MOCKS[b.mockKey];
              return (
                <div key={b.label}>
                  <div style={{
                    background: work.bg, borderRadius: 18,
                    aspectRatio: '4 / 3.2',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 18, overflow: 'hidden',
                  }}>
                    <Mock />
                  </div>
                  <p style={{
                    fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase',
                    color: 'var(--ink-faint)', marginBottom: 8,
                  }}>{b.label}</p>
                  <p style={{ fontSize: 15, color: 'var(--ink-muted)', lineHeight: 1.65, fontWeight: 300, maxWidth: 420 }}>
                    {b.text}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Narrative sections */}
          {work.sections && work.sections.map((sec) => (
            <div key={sec.heading} className="detail-fade" style={{ marginBottom: 'clamp(56px, 8vw, 100px)' }}>
              <p style={{
                fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
                color: 'var(--ink-faint)', marginBottom: 16,
              }}>{sec.heading}</p>

              {sec.body && (
                <p style={{
                  fontSize: 16, lineHeight: 1.7, fontWeight: 300, color: 'var(--ink-muted)',
                  maxWidth: 680, marginBottom: sec.list ? 28 : 0,
                }}>{sec.body}</p>
              )}

              {sec.list && (
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {sec.list.map((item) => (
                    <div key={item.title} className="narrative-row" style={{
                      display: 'grid', gridTemplateColumns: '260px 1fr', gap: 'clamp(20px, 3vw, 40px)',
                      borderTop: '1px solid var(--border)', paddingTop: 20, paddingBottom: 20,
                    }}>
                      <p style={{ fontSize: 15, fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.01em' }}>
                        {item.title}
                      </p>
                      <p style={{ fontSize: 14.5, color: 'var(--ink-muted)', lineHeight: 1.65, fontWeight: 300, maxWidth: 620 }}>
                        {item.text}
                      </p>
                    </div>
                  ))}
                  <div style={{ borderTop: '1px solid var(--border)' }} />
                </div>
              )}
            </div>
          ))}

          {/* Feature breakdown */}
          {work.features && (
            <div className="detail-fade" style={{ marginBottom: 'clamp(56px, 8vw, 100px)' }}>
              <p style={{
                fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
                color: 'var(--ink-faint)', marginBottom: 24,
              }}>Feature Breakdown</p>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {work.features.map((f, i) => (
                  <div key={f.title} className="feature-row" style={{
                    display: 'grid', gridTemplateColumns: '1fr 1.4fr',
                    gap: 'clamp(24px, 4vw, 56px)',
                    borderTop: '1px solid var(--border)',
                    paddingTop: 32, paddingBottom: 32,
                  }}>
                    <div>
                      <p style={{ fontSize: 12, color: 'var(--ink-faint)', fontWeight: 500, marginBottom: 8 }}>
                        {String(i + 1).padStart(2, '0')}
                      </p>
                      <p style={{ fontSize: 19, fontWeight: 700, color: 'var(--ink)', letterSpacing: '-0.01em', marginBottom: 12, maxWidth: 320 }}>
                        {f.title}
                      </p>
                      <p style={{ fontSize: 14, color: 'var(--ink-muted)', lineHeight: 1.6, fontWeight: 300, fontStyle: 'italic', maxWidth: 320 }}>
                        {f.goal}
                      </p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                      <div>
                        <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-faint)', marginBottom: 10 }}>
                          My Contribution
                        </p>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: 8, paddingLeft: 0 }}>
                          {f.contributions.map((c, j) => (
                            <li key={j} style={{
                              display: 'flex', gap: 10, fontSize: 14.5, color: 'var(--ink-muted)',
                              lineHeight: 1.6, fontWeight: 300, listStyle: 'none',
                            }}>
                              <span style={{ color: 'var(--ink-faint)' }}>—</span>
                              <span>{c}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-faint)', marginBottom: 10 }}>
                          Impact
                        </p>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: 8, paddingLeft: 0 }}>
                          {f.impact.map((c, j) => (
                            <li key={j} style={{
                              display: 'flex', gap: 10, fontSize: 14.5, color: 'var(--ink)',
                              lineHeight: 1.6, fontWeight: 500, listStyle: 'none',
                            }}>
                              <span style={{ color: work.bg }}>✓</span>
                              <span>{c}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
                <div style={{ borderTop: '1px solid var(--border)' }} />
              </div>
            </div>
          )}

          {/* Outcome row: label + bold paragraph */}
          <div className="detail-fade" style={{
            display: 'grid', gridTemplateColumns: '160px 1fr',
            gap: 24, paddingTop: 32, borderTop: '1px solid var(--border)',
            marginBottom: 'clamp(56px, 8vw, 100px)',
          }}>
            <p style={{
              fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
              color: 'var(--ink-faint)', paddingTop: 4,
            }}>{work.outcomeLabel}</p>
            <p style={{
              fontSize: 'clamp(20px, 2.6vw, 30px)', fontWeight: 600,
              letterSpacing: '-0.01em', lineHeight: 1.4,
              color: 'var(--ink)', maxWidth: 760,
            }}>{work.outcomeText}</p>
          </div>

          {/* Other work */}
          <div className="detail-fade" style={{ paddingTop: 32, borderTop: '1px solid var(--border)' }}>
            <p style={{
              fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
              color: 'var(--ink-faint)', marginBottom: 24,
            }}>More work</p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              {others.map(o => (
                <Link key={o.slug} to={`/work/${o.slug}`} style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '12px 22px', borderRadius: 40,
                  border: '1px solid var(--border)', fontSize: 14, fontWeight: 500,
                  color: 'var(--ink)', transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--ink)'; e.currentTarget.style.background = 'var(--bg-alt)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'transparent'; }}
                >{o.eyebrow.split(' ·')[0]} →</Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <style>{`
        @media (max-width: 760px) {
          .detail-blocks { grid-template-columns: 1fr !important; }
          .feature-row { grid-template-columns: 1fr !important; }
          .narrative-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
