export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid #f0f0f0', padding: '36px clamp(20px,5vw,64px)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
      <div>
        <p className="display" style={{ fontSize: 16, fontWeight: 300, color: '#ccc' }}>A Slow Morocco project</p>
        <p style={{ fontSize: 11, color: '#ddd', marginTop: 2 }}>Powered by Dancing with Lions</p>
      </div>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
        {['slowmorocco.com', 'dharija.space', 'cuisinesofmorocco.com', 'dancingwiththelions.com'].map(s => (
          <a key={s} href={`https://${s}`} target="_blank" rel="noopener noreferrer"
            style={{ fontSize: 11, color: '#ccc', textDecoration: 'none' }}>{s}</a>
        ))}
      </div>
    </footer>
  );
}
