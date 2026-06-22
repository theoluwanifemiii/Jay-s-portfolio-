import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-inner > *', { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: '.contact-inner', start: 'top 80%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText('jubril.osunlana@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const links = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jubril-osunlana/', icon: '↗' },
    { label: 'Portfolio', href: '#', icon: '↗' },
    { label: 'Email', href: 'mailto:jubril.osunlana@gmail.com', icon: '→' },
  ];

  return (
    <section ref={sectionRef} id="contact" style={{
      paddingTop: 'var(--gap)',
      paddingBottom: 'var(--gap)',
      background: 'var(--ink)',
      color: 'var(--white)',
    }}>
      <div className="container">
        <div className="contact-inner" style={{ maxWidth: 720 }}>
          <p style={{
            fontSize: 12, fontWeight: 600, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 16,
          }}>Get In Touch</p>

          <h2 style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 700,
            fontSize: 'clamp(36px, 6vw, 72px)',
            lineHeight: 1.05, letterSpacing: '-0.025em',
            marginBottom: 24,
          }}>
            Ready to build<br />
            <span style={{ color: 'rgba(255,255,255,0.4)' }}>something real?</span>
          </h2>

          <p style={{
            fontSize: 'clamp(15px, 2vw, 18px)',
            color: 'rgba(255,255,255,0.55)',
            lineHeight: 1.7, fontWeight: 300,
            maxWidth: 540, marginBottom: 48,
          }}>
            Open to Product Manager and Product Owner roles globally. Ready to relocate.
            Eight years of user instinct and shipped results — let's talk.
          </p>

          {/* Email copy row */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 16,
            padding: '16px 24px',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: 12,
            background: 'rgba(255,255,255,0.04)',
            marginBottom: 40,
            cursor: 'pointer',
            transition: 'border-color 0.2s, background 0.2s',
          }}
          onClick={handleCopy}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
          >
            <span style={{ fontSize: 15, fontWeight: 400, color: 'rgba(255,255,255,0.75)', fontFamily: 'monospace' }}>
              jubril.osunlana@gmail.com
            </span>
            <span style={{
              fontSize: 12, fontWeight: 600, padding: '4px 10px',
              borderRadius: 40, background: copied ? '#1A4D3A' : 'rgba(255,255,255,0.1)',
              color: 'var(--white)', letterSpacing: '0.04em',
              transition: 'background 0.2s',
            }}>
              {copied ? 'Copied!' : 'Copy'}
            </span>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            {links.map(l => (
              <a key={l.label} href={l.href} target="_blank" rel="noreferrer" style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '12px 22px',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: 40, fontSize: 14, fontWeight: 500,
                color: 'rgba(255,255,255,0.75)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'; e.currentTarget.style.color = 'var(--white)'; e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = 'rgba(255,255,255,0.75)'; e.currentTarget.style.background = 'transparent'; }}
              >
                {l.label} <span style={{ opacity: 0.5 }}>{l.icon}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Footer strip */}
        <div style={{
          marginTop: 'clamp(60px, 8vw, 100px)',
          paddingTop: 24,
          borderTop: '1px solid rgba(255,255,255,0.08)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: 12,
        }}>
          <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 18, color: 'rgba(255,255,255,0.3)' }}>
            Jubril<span style={{ color: 'rgba(255,255,255,0.15)' }}>.</span>
          </p>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>
            Product Manager · Available for relocation · {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </section>
  );
}
