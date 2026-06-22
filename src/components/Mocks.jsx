export function ListMock({ scale = 1 }) {
  return (
    <div style={{
      width: `${78 * scale}%`, background: 'var(--white)', borderRadius: 14,
      padding: 16, display: 'flex', flexDirection: 'column', gap: 12,
      boxShadow: '0 16px 40px rgba(0,0,0,0.18)',
    }}>
      {[0.9, 0.65, 0.8].map((w, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 22, height: 22, borderRadius: '50%', background: '#1A4D3A', flexShrink: 0, opacity: 0.85 }} />
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 5 }}>
            <div style={{ height: 6, width: `${w * 100}%`, borderRadius: 4, background: '#E5E3DE' }} />
            <div style={{ height: 6, width: `${w * 60}%`, borderRadius: 4, background: '#EFEDE8' }} />
          </div>
        </div>
      ))}
    </div>
  );
}

export function BlobMock() {
  return (
    <div style={{ position: 'relative', width: 110, height: 110 }}>
      <div style={{ position: 'absolute', inset: 0, borderRadius: '42% 58% 60% 40% / 50% 45% 55% 50%', background: 'rgba(255,255,255,0.16)' }} />
      <div style={{ position: 'absolute', inset: 16, borderRadius: '50%', background: 'rgba(255,255,255,0.85)' }} />
      <div style={{ position: 'absolute', top: 10, right: 4, width: 28, height: 28, borderRadius: '50%', background: '#C4632A' }} />
    </div>
  );
}

export function WindowMock() {
  return (
    <div style={{
      width: '82%', background: 'var(--white)', borderRadius: 12,
      boxShadow: '0 16px 40px rgba(0,0,0,0.18)', overflow: 'hidden',
    }}>
      <div style={{ display: 'flex', gap: 5, padding: '10px 12px', borderBottom: '1px solid var(--border)' }}>
        {['#E5573F', '#E8B339', '#3FAE5C'].map(c => (
          <div key={c} style={{ width: 8, height: 8, borderRadius: '50%', background: c }} />
        ))}
      </div>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '30%', padding: 10, borderRight: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: 8 }}>
          {[1, 2, 3].map(i => (
            <div key={i} style={{ height: 6, width: '80%', borderRadius: 4, background: i === 1 ? '#C4632A' : '#E5E3DE' }} />
          ))}
        </div>
        <div style={{ flex: 1, padding: 10, display: 'flex', flexDirection: 'column', gap: 6 }}>
          <div style={{ height: 28, borderRadius: 6, background: '#FBEFE7' }} />
          <div style={{ height: 6, width: '70%', borderRadius: 4, background: '#E5E3DE' }} />
          <div style={{ height: 6, width: '50%', borderRadius: 4, background: '#EFEDE8' }} />
        </div>
      </div>
    </div>
  );
}

export const MOCKS = { list: ListMock, blob: BlobMock, window: WindowMock };
