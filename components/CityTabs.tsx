'use client';

import { useState } from 'react';
import type { CityData } from '@/lib/cities';

const tabs = [
  { id: 'story', label: 'The City' },
  { id: 'see', label: 'See' },
  { id: 'eat', label: 'Eat & Drink' },
  { id: 'navigate', label: 'Navigate' },
  { id: 'stay', label: 'Stay' },
  { id: 'match', label: 'Match Day' },
];

function TheCity({ city }: { city: CityData }) {
  return (
    <div className="fade-in">
      <p className="lede">{city.lede}</p>
      {city.sections.map((s, i) => (
        <div key={i}>
          <h3 className="section-head">{s.title}</h3>
          {s.paragraphs.map((p, j) => (
            <p key={j} className="body-text">{p}</p>
          ))}
        </div>
      ))}
    </div>
  );
}

function SeeSection({ city }: { city: CityData }) {
  return (
    <div className="fade-in">
      <p className="lede">The obvious places are obvious for a reason. Go to them. But go at the right time, with the right context.</p>
      <div style={{ marginTop: 32 }}>
        {city.places.map(p => (
          <div key={p.name} style={{ padding: '24px 0', borderBottom: '1px solid #f0f0f0' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, flexWrap: 'wrap', marginBottom: 6 }}>
              <h4 className="display" style={{ fontSize: 'clamp(22px,3vw,30px)', fontWeight: 400, letterSpacing: '-0.02em' }}>{p.name}</h4>
              <span className="mono" style={{ fontSize: 9, letterSpacing: '.1em', color: '#bbb', flexShrink: 0 }}>{p.tag}</span>
            </div>
            <p className="body-text" style={{ marginBottom: 0, marginTop: 0 }}>{p.d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function EatSection({ city }: { city: CityData }) {
  return (
    <div className="fade-in">
      <p className="lede">{city.eat.intro}</p>
      <h3 className="section-head">Restaurants</h3>
      {city.eat.entries.map(e => (
        <div key={e.name} style={{ padding: '14px 0', borderBottom: '1px solid #f0f0f0' }}>
          <span style={{ fontWeight: 600, fontSize: 14 }}>{e.name}</span>
          <span style={{ color: '#888', fontSize: 14 }}> — {e.d}</span>
        </div>
      ))}
      <h3 className="section-head">Street food</h3>
      <p className="body-text">{city.eat.street}</p>
      <h3 className="section-head">Drinking</h3>
      <p className="body-text">{city.eat.drink}</p>
    </div>
  );
}

function NavigateSection({ city }: { city: CityData }) {
  return (
    <div className="fade-in">
      <p className="lede">{city.name} is connected to every other host city. The question is how fast and how comfortably.</p>
      <h3 className="section-head">Getting here</h3>
      <p className="body-text">{city.navigateIntro}</p>
      <h3 className="section-head">From other host cities</h3>
      <div style={{ marginTop: 16 }}>
        {city.routes.map(route => (
          <div key={route.from} style={{ marginBottom: 20 }}>
            <p style={{ fontSize: 13, fontWeight: 600, marginBottom: 8 }}>From {route.from}</p>
            {route.opts.map((o, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '130px 70px 1fr', gap: 8, padding: '6px 0', borderBottom: '1px solid #f5f5f5', fontSize: 14, alignItems: 'baseline' }}>
                <span style={{ color: '#444' }}>{o.mode}</span>
                <span className="mono" style={{ fontSize: 11, color: '#999' }}>{o.time}</span>
                <span style={{ color: '#888', fontWeight: 300 }}>{o.note}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
      <h3 className="section-head">Inside the city</h3>
      {city.navigateLocal.map((p, i) => (
        <p key={i} className="body-text">{p}</p>
      ))}
    </div>
  );
}

function StaySection({ city }: { city: CityData }) {
  return (
    <div className="fade-in">
      <p className="lede">{city.stayIntro}</p>
      <h3 className="section-head">Where to sleep</h3>
      {city.stayOptions.map((o, i) => (
        <p key={i} className="body-text">{o}</p>
      ))}
      <h3 className="section-head">Before you book</h3>
      <p className="body-text">{city.stayBookingTip}</p>
      <p style={{ marginTop: 24, fontSize: 14 }}>
        <a href={`https://www.booking.com/searchresults.html?ss=${encodeURIComponent(city.name + '+Morocco')}`}
          target="_blank" rel="noopener noreferrer sponsored" className="quiet-link">
          Browse hotels in {city.name} →
        </a>
      </p>
    </div>
  );
}

function MatchDaySection({ city }: { city: CityData }) {
  return (
    <div className="fade-in">
      <div style={{ padding: '24px 0', borderBottom: '1px solid #f0f0f0' }}>
        <p className="mono" style={{ fontSize: 10, letterSpacing: '.12em', color: '#bbb', marginBottom: 6 }}>VENUE</p>
        <h3 className="display" style={{ fontSize: 28, fontWeight: 400, letterSpacing: '-0.02em' }}>{city.stadium.name}</h3>
        <p className="body-text" style={{ marginTop: 8 }}>
          Capacity {city.stadium.capacity}. {city.stadium.detail}
        </p>
      </div>
      <h3 className="section-head">The plan</h3>
      {city.matchDay.map((m, i) => (
        <p key={i} className="body-text"><strong>{m.split(' — ')[0]}</strong> — {m.split(' — ')[1]}</p>
      ))}
      <h3 className="section-head">What you need</h3>
      <p className="body-text"><strong>FAN ID</strong> — mandatory. Download the YALLA app and register before you arrive. Required for stadium entry and fan zones. Free.</p>
      <p className="body-text"><strong>Cash</strong> — carry small bills. Not every vendor takes cards. ATMs at banks and the airport.</p>
      <p className="body-text"><strong>Offline maps</strong> — download Google Maps for {city.name} before you arrive. Save pins for your hotel, the stadium, and the train station.</p>
    </div>
  );
}

export default function CityTabs({ city }: { city: CityData }) {
  const [tab, setTab] = useState('story');

  const renderSection = () => {
    switch (tab) {
      case 'story': return <TheCity city={city} />;
      case 'see': return <SeeSection city={city} />;
      case 'eat': return <EatSection city={city} />;
      case 'navigate': return <NavigateSection city={city} />;
      case 'stay': return <StaySection city={city} />;
      case 'match': return <MatchDaySection city={city} />;
      default: return <TheCity city={city} />;
    }
  };

  return (
    <>
      {/* Section tabs */}
      <div style={{
        position: 'sticky', top: 53, zIndex: 90,
        background: 'rgba(255,255,255,.95)', backdropFilter: 'blur(8px)',
        borderBottom: '1px solid #f0f0f0',
        display: 'flex', alignItems: 'center',
        padding: '0 clamp(16px,3vw,40px)', overflowX: 'auto',
      }}>
        {tabs.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)} style={{
            background: 'none', border: 'none', cursor: 'pointer',
            padding: '12px clamp(10px,1.8vw,20px)',
            borderBottom: tab === t.id ? '2px solid #1a1a1a' : '2px solid transparent',
            flexShrink: 0, transition: 'border-color .2s',
          }}>
            <span style={{
              fontSize: 12, fontWeight: tab === t.id ? 500 : 400,
              color: tab === t.id ? '#1a1a1a' : '#bbb',
              whiteSpace: 'nowrap',
            }}>
              {t.label}
            </span>
          </button>
        ))}
      </div>

      {/* Content */}
      <main style={{ maxWidth: 720, margin: '0 auto', padding: '40px clamp(20px,5vw,40px) 80px' }}>
        {renderSection()}
      </main>
    </>
  );
}
