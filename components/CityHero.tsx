'use client';

import { useWeather } from '@/lib/useWeather';

const cityImages: Record<string, string> = {
  marrakech: 'https://res.cloudinary.com/drstfu5yr/image/upload/v1772311844/Marrakech_medina_rooftops_at_dusk_qdoyej.png',
  casablanca: 'https://res.cloudinary.com/drstfu5yr/image/upload/v1772312493/Hassan_II_Mosque_Casablanca_f2wasz.png',
  rabat: 'https://res.cloudinary.com/drstfu5yr/image/upload/v1772314226/Kasbah_of_the_Udayas_Rabat_y8rd2i.png',
  tangier: 'https://res.cloudinary.com/drstfu5yr/image/upload/v1772314478/View_from_Caf_Hafa_Tangier_huuuyh.png',
  fes: 'https://res.cloudinary.com/drstfu5yr/image/upload/v1772314702/Fes_el-Bali_medina_lx6wib.png',
  agadir: 'https://res.cloudinary.com/drstfu5yr/image/upload/v1772315001/Agadir_beach_at_dusk_zn4kj4.png',
};

interface Props {
  id: string;
  name: string;
  tagline: string;
  lat: number;
  lng: number;
}

export default function CityHero({ id, name, tagline, lat, lng }: Props) {
  const w = useWeather(lat, lng);

  return (
    <div style={{ position: 'relative', width: '100%', height: '55vh', minHeight: 380, overflow: 'hidden' }}>
      <img src={cityImages[id]} alt={name}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(0,0,0,.6) 0%, rgba(0,0,0,.05) 50%)' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0 clamp(20px,5vw,64px) 36px' }}>
        <p className="mono" style={{ fontSize: 10, letterSpacing: '.18em', color: 'rgba(255,255,255,.35)', marginBottom: 8 }}>
          Morocco 2030 · Host City Guide
        </p>
        <h1 className="display" style={{ fontSize: 'clamp(56px,12vw,110px)', lineHeight: .85, fontWeight: 300, color: '#fff', letterSpacing: '-0.04em' }}>
          {name}
        </h1>
        <div style={{ display: 'flex', gap: 20, alignItems: 'baseline', marginTop: 8 }}>
          <p className="display" style={{ fontSize: 'clamp(16px,2.5vw,22px)', fontStyle: 'italic', fontWeight: 300, color: 'rgba(255,255,255,.55)' }}>
            {tagline}
          </p>
          {w && <span style={{ fontSize: 13, color: 'rgba(255,255,255,.4)' }}>{w.icon} {w.t}°</span>}
        </div>
      </div>
    </div>
  );
}
