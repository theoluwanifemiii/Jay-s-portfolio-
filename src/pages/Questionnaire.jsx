import { useState } from 'react';
import Navbar from '../components/Navbar';

const PROJECT_TYPES = ['Website Design', 'Operation Dashboard', 'Mobile App Design', 'Other'];

const QUESTIONS = {
  'Website Design': [
    { id: 'business', label: 'Business or project name', type: 'text', placeholder: 'e.g. Acme Co.' },
    { id: 'goal', label: 'What is the primary goal of the website?', type: 'select', options: ['Portfolio / personal brand', 'SaaS or web app', 'E-commerce', 'Landing page', 'Informational / blog', 'Other'] },
    { id: 'existing', label: 'Do you have an existing website? Share the URL if so.', type: 'text', placeholder: 'https://... or leave blank' },
    { id: 'audience', label: 'Who is your target audience?', type: 'textarea', placeholder: "Describe who you're building this for" },
    { id: 'features', label: 'What pages or features do you need?', type: 'textarea', placeholder: 'e.g. homepage, about, contact form, blog, payments...' },
    { id: 'style', label: 'How would you describe your design style preference?', type: 'select', options: ['Minimal & clean', 'Bold & expressive', 'Corporate & professional', 'Playful & creative', 'Not sure yet'] },
    { id: 'inspiration', label: 'Any websites you admire? Share links or describe the vibe.', type: 'textarea', placeholder: 'https://... or describe what draws you to them' },
    { id: 'assets', label: 'Do you have existing brand assets?', type: 'select', options: ['Yes: logo, colours, fonts', 'Partial (logo only)', 'No (starting from scratch)'] },
    { id: 'budget', label: 'Approximate budget range', type: 'select', options: ['Under $500', '$500 – $1,500', '$1,500 – $5,000', '$5,000+', 'Not sure yet'] },
    { id: 'timeline', label: 'Target launch date or timeline', type: 'text', placeholder: 'e.g. end of August, 6 weeks from start' },
  ],
  'Operation Dashboard': [
    { id: 'business', label: 'Business or project name', type: 'text', placeholder: 'e.g. Acme Co.' },
    { id: 'purpose', label: 'What is this dashboard for?', type: 'textarea', placeholder: 'e.g. tracking sales KPIs, monitoring field team activity, visualising data...' },
    { id: 'users', label: 'Who are the primary users?', type: 'text', placeholder: 'e.g. operations managers, analysts, executives' },
    { id: 'data', label: 'Where does the data come from?', type: 'textarea', placeholder: 'e.g. Google Sheets, internal API, database, CSV exports...' },
    { id: 'metrics', label: 'What key metrics or KPIs need to be visible?', type: 'textarea', placeholder: 'List the most important things users need to see at a glance' },
    { id: 'auth', label: 'Does it need user login or role-based access?', type: 'select', options: ['Yes: multiple roles', 'Yes: single login', 'No (open / internal only)'] },
    { id: 'realtime', label: 'Does the data need to update in real-time?', type: 'select', options: ['Yes, real-time or near real-time', 'Daily refresh is fine', 'Manual refresh / static'] },
    { id: 'existing', label: 'Do you have existing designs, wireframes, or examples?', type: 'textarea', placeholder: 'Share links or describe what you have in mind' },
    { id: 'budget', label: 'Approximate budget range', type: 'select', options: ['Under $500', '$500 – $1,500', '$1,500 – $5,000', '$5,000+', 'Not sure yet'] },
    { id: 'timeline', label: 'Target delivery date or timeline', type: 'text', placeholder: 'e.g. end of August, 6 weeks from start' },
  ],
  'Mobile App Design': [
    { id: 'business', label: 'App or business name', type: 'text', placeholder: 'e.g. HealthTrack' },
    { id: 'platform', label: 'What platform?', type: 'select', options: ['iOS only', 'Android only', 'Both iOS and Android'] },
    { id: 'purpose', label: 'What is the core purpose of the app?', type: 'textarea', placeholder: 'What problem does it solve? What does the user do in the app?' },
    { id: 'audience', label: 'Who is your target user?', type: 'textarea', placeholder: 'Describe who will use this app day to day' },
    { id: 'screens', label: 'What are the key screens or features needed?', type: 'textarea', placeholder: 'e.g. onboarding, feed, profile, notifications, payments...' },
    { id: 'assets', label: 'Do you have existing branding or a design system?', type: 'select', options: ['Yes: full brand guidelines', 'Partial (logo / colours only)', 'No (starting from scratch)'] },
    { id: 'scope', label: 'Are you looking for design only, or full development too?', type: 'select', options: ['Design files only (Figma)', 'Design + front-end development', 'Full product (design + build)'] },
    { id: 'backend', label: 'Is there an existing backend or API?', type: 'select', options: ['Yes, already built', 'Partially built', 'No (needs to be scoped)'] },
    { id: 'budget', label: 'Approximate budget range', type: 'select', options: ['Under $1,000', '$1,000 – $3,000', '$3,000 – $10,000', '$10,000+', 'Not sure yet'] },
    { id: 'timeline', label: 'Target launch date or timeline', type: 'text', placeholder: 'e.g. end of August, Q4 2026' },
  ],
  'Other': [
    { id: 'business', label: 'Business or project name', type: 'text', placeholder: 'e.g. Acme Co.' },
    { id: 'description', label: 'Tell me about your project', type: 'textarea', placeholder: 'What are you building or trying to achieve?' },
    { id: 'problem', label: 'What problem are you trying to solve?', type: 'textarea', placeholder: "What's broken, missing, or painful right now?" },
    { id: 'audience', label: 'Who is your target audience or end user?', type: 'textarea', placeholder: 'Who will use or benefit from this?' },
    { id: 'assets', label: 'Do you have any existing assets?', type: 'text', placeholder: 'Brand, designs, code, docs, whatever you have' },
    { id: 'budget', label: 'Approximate budget range', type: 'select', options: ['Under $500', '$500 – $1,500', '$1,500 – $5,000', '$5,000+', 'Not sure yet'] },
    { id: 'timeline', label: 'When do you need this done?', type: 'text', placeholder: 'e.g. end of August, flexible' },
  ],
};

const labelStyle = {
  display: 'block',
  fontSize: 13,
  fontWeight: 500,
  color: 'var(--ink)',
  marginBottom: 8,
};

const inputStyle = {
  width: '100%',
  padding: '12px 16px',
  fontSize: 15,
  fontFamily: 'inherit',
  border: '1px solid var(--border)',
  borderRadius: 10,
  background: 'var(--white)',
  color: 'var(--ink)',
  outline: 'none',
  transition: 'border-color 0.15s',
  boxSizing: 'border-box',
};

const sectionLabelStyle = {
  fontSize: 11,
  fontWeight: 600,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: 'var(--ink-faint)',
  marginBottom: 20,
};

export default function Questionnaire() {
  const [projectType, setProjectType] = useState('');
  const [form, setForm] = useState({ name: '', email: '' });
  const [answers, setAnswers] = useState({});
  const [status, setStatus] = useState('idle');

  const questions = projectType ? QUESTIONS[projectType] : [];

  const handleTypeChange = (type) => {
    setProjectType(type);
    setAnswers({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    const formattedAnswers = {};
    questions.forEach((q) => {
      if (answers[q.id]) formattedAnswers[q.label] = answers[q.id];
    });

    try {
      const res = await fetch('/api/questionnaire', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, projectType, answers: formattedAnswers }),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div>
        <Navbar />
        <main style={{ paddingTop: 140, paddingBottom: 'var(--gap)' }}>
          <div className="container" style={{ maxWidth: 600 }}>
            <div style={{
              width: 56, height: 56, borderRadius: '50%',
              background: '#E6FFFA', display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 22, marginBottom: 28,
            }}>✓</div>
            <h1 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: 16 }}>
              Brief received, {form.name.split(' ')[0]}.
            </h1>
            <p style={{ fontSize: 17, color: 'var(--ink-muted)', lineHeight: 1.7, fontWeight: 300 }}>
              A copy of your answers is on its way to {form.email}. I'll review everything and be in touch within 1–2 business days.
            </p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <main style={{ paddingTop: 100, paddingBottom: 'calc(var(--gap) * 2)' }}>
        <div className="container" style={{ maxWidth: 680 }}>
          <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-faint)', marginBottom: 16 }}>
            Client Brief
          </p>
          <h1 style={{ fontSize: 'clamp(30px, 5vw, 52px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: 14 }}>
            Tell me about your project.
          </h1>
          <p style={{ fontSize: 17, color: 'var(--ink-muted)', lineHeight: 1.7, fontWeight: 300, maxWidth: 520, marginBottom: 64 }}>
            Fill this in before we talk. The more detail you share, the faster I can give you a clear scope and quote.
          </p>

          <form onSubmit={handleSubmit}>
            {/* About you */}
            <div style={{ marginBottom: 56 }}>
              <p style={sectionLabelStyle}>About you</p>
              <div className="q-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                <div>
                  <label style={labelStyle}>Full name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--ink)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Email address *</label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--ink)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                  />
                </div>
              </div>
            </div>

            {/* Project type */}
            <div style={{ marginBottom: 56 }}>
              <p style={sectionLabelStyle}>What are you building? *</p>
              <div className="q-two-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
                {PROJECT_TYPES.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => handleTypeChange(type)}
                    style={{
                      padding: '16px 20px',
                      borderRadius: 12,
                      border: `1.5px solid ${projectType === type ? 'var(--ink)' : 'var(--border)'}`,
                      background: projectType === type ? 'var(--ink)' : 'transparent',
                      color: projectType === type ? 'var(--white)' : 'var(--ink)',
                      fontSize: 14,
                      fontWeight: 500,
                      cursor: 'pointer',
                      transition: 'all 0.15s',
                      textAlign: 'left',
                      fontFamily: 'inherit',
                    }}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Dynamic questions */}
            {questions.length > 0 && (
              <div style={{ marginBottom: 56 }}>
                <p style={sectionLabelStyle}>Your project</p>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {questions.map((q, i) => (
                    <div key={q.id} style={{
                      display: 'grid', gridTemplateColumns: '32px 1fr', gap: 16,
                      paddingTop: 24, paddingBottom: 24,
                      borderTop: '1px solid var(--border)',
                    }}>
                      <span style={{ fontSize: 12, color: 'var(--ink-faint)', fontWeight: 500, paddingTop: 2 }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <label style={labelStyle}>{q.label}</label>
                        {q.type === 'text' && (
                          <input
                            type="text"
                            placeholder={q.placeholder}
                            value={answers[q.id] || ''}
                            onChange={(e) => setAnswers((a) => ({ ...a, [q.id]: e.target.value }))}
                            style={inputStyle}
                            onFocus={(e) => (e.target.style.borderColor = 'var(--ink)')}
                            onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                          />
                        )}
                        {q.type === 'textarea' && (
                          <textarea
                            rows={4}
                            placeholder={q.placeholder}
                            value={answers[q.id] || ''}
                            onChange={(e) => setAnswers((a) => ({ ...a, [q.id]: e.target.value }))}
                            style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6 }}
                            onFocus={(e) => (e.target.style.borderColor = 'var(--ink)')}
                            onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                          />
                        )}
                        {q.type === 'select' && (
                          <select
                            value={answers[q.id] || ''}
                            onChange={(e) => setAnswers((a) => ({ ...a, [q.id]: e.target.value }))}
                            style={{ ...inputStyle, cursor: 'pointer' }}
                            onFocus={(e) => (e.target.style.borderColor = 'var(--ink)')}
                            onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                          >
                            <option value="">Select one</option>
                            {q.options.map((opt) => (
                              <option key={opt} value={opt}>{opt}</option>
                            ))}
                          </select>
                        )}
                      </div>
                    </div>
                  ))}
                  <div style={{ borderTop: '1px solid var(--border)' }} />
                </div>
              </div>
            )}

            {/* Submit */}
            {projectType && (
              <div>
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    padding: '16px 32px',
                    background: 'var(--ink)', color: 'var(--white)',
                    border: 'none', borderRadius: 40,
                    fontSize: 15, fontWeight: 600,
                    cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
                    opacity: status === 'submitting' ? 0.6 : 1,
                    transition: 'opacity 0.2s',
                    fontFamily: 'inherit',
                  }}
                >
                  {status === 'submitting' ? 'Sending...' : 'Submit brief →'}
                </button>
                {status === 'error' && (
                  <p style={{ fontSize: 14, color: '#c0392b', marginTop: 12 }}>
                    Something went wrong. Please try again or email Olu@olusworks.xyz directly.
                  </p>
                )}
              </div>
            )}
          </form>
        </div>
      </main>

      <style>{`
        @media (max-width: 580px) {
          .q-two-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
