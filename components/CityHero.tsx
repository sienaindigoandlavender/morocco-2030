'use client';

import { useWeather } from '@/lib/useWeather';

const cityImages: Record<string, string> = {
  marrakech: 'https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=1600&q=80',
  casablanca: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=1600&q=80',
  rabat: 'https://images.unsplash.com/photo-1570097769755-0b727edfa3f0?w=1600&q=80',
  tangier: 'https://images.unsplash.com/photo-1553899017-fbc62758e7b7?w=1600&q=80',
  fes: 'https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?w=1600&q=80',
  agadir: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=1600&q=80',
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
