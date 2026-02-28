import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { cities } from '@/lib/cities';

const cityImages: Record<string, string> = {
  marrakech: 'https://res.cloudinary.com/drstfu5yr/image/upload/v1772311844/Marrakech_medina_rooftops_at_dusk_qdoyej.png',
  casablanca: 'https://res.cloudinary.com/drstfu5yr/image/upload/v1772312493/Hassan_II_Mosque_Casablanca_f2wasz.png',
  rabat: 'https://res.cloudinary.com/drstfu5yr/image/upload/v1772314226/Kasbah_of_the_Udayas_Rabat_y8rd2i.png',
  tangier: 'https://res.cloudinary.com/drstfu5yr/image/upload/v1772314478/View_from_Caf_Hafa_Tangier_huuuyh.png',
  fes: 'https://res.cloudinary.com/drstfu5yr/image/upload/v1772314702/Fes_el-Bali_medina_lx6wib.png',
  agadir: 'https://res.cloudinary.com/drstfu5yr/image/upload/v1772315001/Agadir_beach_at_dusk_zn4kj4.png',
};

export default function HomePage() {
  return (
    <>
      <Nav />
      <header style={{ padding: 'clamp(48px,10vw,120px) clamp(20px,5vw,64px) clamp(48px,8vw,96px)' }}>
        <p className="mono" style={{ fontSize: 10, letterSpacing: '.2em', color: '#ccc', marginBottom: 24 }}>
          A Dancing with Lions Guide
        </p>
        <div style={{ maxWidth: 960 }}>
          <h1 className="display" style={{ fontSize: 'clamp(80px,18vw,180px)', lineHeight: .78, fontWeight: 300, letterSpacing: '-0.05em', color: '#1a1a1a' }}>
            Morocco
          </h1>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 'clamp(8px,1.5vw,16px)', marginTop: -4 }}>
            <span className="display" style={{ fontSize: 'clamp(80px,18vw,180px)', fontWeight: 300, letterSpacing: '-0.05em', color: '#e0e0e0', lineHeight: .78 }}>
              20
            </span>
            <span className="display" style={{ fontSize: 'clamp(80px,18vw,180px)', fontWeight: 600, letterSpacing: '-0.05em', color: '#1a1a1a', lineHeight: .78 }}>
              30
            </span>
          </div>
          <p className="display" style={{
            fontSize: 'clamp(24px,4vw,42px)', fontStyle: 'italic', fontWeight: 300,
            color: '#aaa', lineHeight: 1.25, marginTop: 'clamp(20px,4vw,40px)', maxWidth: 600,
          }}>
            Six cities. The first World Cup<br />on African soil.
          </p>
          <p style={{ fontSize: 'clamp(14px,1.8vw,18px)', fontWeight: 500, color: '#1a1a1a', marginTop: 12 }}>
            Everything beyond the stadiums.
          </p>
        </div>
      </header>

      {/* City grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
        gap: 1, background: '#eee',
      }}>
        {cities.map(city => (
          <Link key={city.id} href={`/city/${city.id}`} style={{
            position: 'relative', background: '#000', display: 'block',
            height: 'clamp(240px,35vw,360px)', overflow: 'hidden', textDecoration: 'none',
          }}>
            <img src={cityImages[city.id]} alt={city.name}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: .6, transition: 'opacity .3s, transform .4s' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(0,0,0,.5) 0%, rgba(0,0,0,.05) 50%)' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, padding: 'clamp(20px,3vw,32px)', zIndex: 2 }}>
              <h3 className="display" style={{ fontSize: 'clamp(32px,5vw,48px)', fontWeight: 300, color: '#fff', lineHeight: .9, letterSpacing: '-0.03em' }}>
                {city.name}
              </h3>
              <p className="display" style={{ fontSize: 15, fontStyle: 'italic', color: 'rgba(255,255,255,.55)', fontWeight: 300, marginTop: 6, maxWidth: 280 }}>
                {city.tagline}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <Footer />
    </>
  );
}
