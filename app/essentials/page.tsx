import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Essentials — Morocco 2030 Cultural Guide',
  description: 'Food, language, and practical tips for the 2030 FIFA World Cup in Morocco.',
};

const foods = [
  { name: 'Tagine', d: 'The pot and what\'s inside share a name. Lamb with prunes in the mountains, chicken with preserved lemons on the coast. The conical lid creates a steam cycle that slow-cooks everything for hours.' },
  { name: 'Couscous', d: 'Friday only. Seven vegetables, meat falling apart, broth ladled from a communal bowl. If invited to a Moroccan home on Friday, cancel everything else. This is not the boxed couscous you know.' },
  { name: 'Pastilla', d: 'A Fes invention. Pigeon (or chicken) in warqa pastry, layered with almonds, cinnamon, and powdered sugar. Savoury and sweet in the same bite. Court cuisine that became street food.' },
  { name: 'Harira', d: 'Tomato, lentil, chickpea, broken vermicelli. Every family has a recipe. At Ramadan, the entire country breaks fast with it. At 2am after a match, nothing else will do. 5 MAD anywhere.' },
  { name: 'Mint Tea', d: 'Gunpowder green, a fistful of fresh mint, sugar poured with conviction. The pour — from height, creating foam — is ritual. Three glasses: one for thirst, two for pleasure, three for respect.' },
  { name: 'Msemen', d: 'Flaky semolina flatbread, folded and pan-fried. Breakfast with honey and butter. Available from every street corner from 7am. The thing you didn\'t know you needed.' },
  { name: 'Tangia', d: 'Marrakech\'s bachelor dish. Meat, spices, preserved lemon sealed in a clay urn and slow-cooked in hammam ashes overnight. You order it from a stall near the public baths. They cook it for you while you bathe.' },
];

const darija = [
  { word: 'Salam alaykum', meaning: 'Peace be upon you', note: 'The greeting. Always first.' },
  { word: 'Shukran', meaning: 'Thank you', note: 'Use it constantly.' },
  { word: 'La, shukran', meaning: 'No, thank you', note: 'For the medina touts. Firm, polite, final.' },
  { word: 'Bsh-hal?', meaning: 'How much?', note: 'The negotiation opener.' },
  { word: 'Bezzaf', meaning: 'Too much / a lot', note: 'The negotiation response.' },
  { word: 'Daba', meaning: 'Now (ish)', note: 'Moroccan time. "Now" means somewhere between now and an hour.' },
  { word: 'Mashi mushkil', meaning: 'No problem', note: 'The national philosophy.' },
  { word: 'Dima Maghrib!', meaning: 'Always Morocco!', note: 'The stadium chant. Learn it.' },
];

const tips = [
  { t: 'Money', b: 'Moroccan Dirham (MAD). ~10 MAD = €1. Cards accepted in hotels and some restaurants. Cash everywhere else. ATMs at every bank. Do not change money with men in the street.' },
  { t: 'Safety', b: 'One of the safest countries in Africa. Petty theft in crowded medinas — watch your bag. Agree taxi prices before you get in. Women travelling alone will be approached in Marrakech and Fes but physical danger is very low.' },
  { t: 'Dress', b: 'Morocco is moderate. Shorts and t-shirts fine in cities. Cover shoulders and knees near mosques and in conservative areas. Swimwear at the beach only.' },
  { t: 'Tipping', b: 'Expected everywhere. 10% at restaurants. 10–20 MAD for anyone who helped you — the man who showed you the tannery viewpoint, the kid who held your bag, the riad porter.' },
  { t: 'FAN ID', b: 'Mandatory for the tournament. Register on the YALLA app before departure. Required for stadium entry, fan zones, and some transport. Free. Don\'t arrive without it.' },
  { t: 'Maps', b: 'Download Google Maps offline for every city you\'re visiting. Save pins for: hotel, stadium, train station, airport. The medinas will eat your GPS signal.' },
  { t: 'Language', b: 'Darija (Moroccan Arabic) is the daily language. French is the business language. English is increasingly spoken in tourist areas. Spanish in the north. A few Darija words go further than perfect French.' },
  { t: 'Ramadan', b: 'The tournament is in June/July 2030. If it overlaps with Ramadan, most restaurants close during daylight. Hotels serve guests. After sunset, the streets come alive. Respect the fast — don\'t eat or drink publicly in the medina during daylight hours.' },
];

export default function EssentialsPage() {
  return (
    <>
      <Nav />
      <div style={{ padding: '48px clamp(20px,5vw,64px)', maxWidth: 800, margin: '0 auto' }}>

        {/* Food */}
        <div style={{ marginBottom: 72 }}>
          <h2 className="display" style={{ fontSize: 'clamp(40px,8vw,68px)', fontWeight: 300, lineHeight: .9, letterSpacing: '-0.03em', marginBottom: 36 }}>
            The coast eats <em>fish.</em><br />
            The mountains eat <strong style={{ fontWeight: 600 }}>lamb.</strong><br />
            <span style={{ color: '#ccc' }}>The south eats dates.</span>
          </h2>
          {foods.map(f => (
            <div key={f.name} style={{ padding: '18px 0', borderBottom: '1px solid #f0f0f0' }}>
              <span className="display" style={{ fontSize: 24, fontWeight: 400 }}>{f.name}</span>
              <p className="body-text" style={{ marginTop: 4, marginBottom: 0 }}>{f.d}</p>
            </div>
          ))}
          <p style={{ marginTop: 24, fontSize: 13 }}>
            <a href="https://cuisinesofmorocco.com" target="_blank" rel="noopener noreferrer" className="quiet-link">
              Full guide at Cuisines of Morocco →
            </a>
          </p>
        </div>

        {/* Darija */}
        <div style={{ marginBottom: 72 }}>
          <h2 className="display" style={{ fontSize: 'clamp(36px,7vw,56px)', fontWeight: 300, lineHeight: .92, letterSpacing: '-0.03em', marginBottom: 32 }}>
            Eight words,<br />a <em>different</em> trip.
          </h2>
          {darija.map(d => (
            <div key={d.word} style={{ padding: '14px 0', borderBottom: '1px solid #f0f0f0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 16, flexWrap: 'wrap' }}>
                <span className="display" style={{ fontSize: 22, fontWeight: 400 }}>{d.word}</span>
                <span style={{ fontSize: 13, color: '#aaa' }}>{d.meaning}</span>
              </div>
              <p style={{ fontSize: 13, color: '#888', fontWeight: 300, marginTop: 4 }}>{d.note}</p>
            </div>
          ))}
          <p style={{ marginTop: 20, fontSize: 13 }}>
            <a href="https://dharija.space" target="_blank" rel="noopener noreferrer" className="quiet-link">
              Full dictionary at Darija for Dummies →
            </a>
          </p>
        </div>

        {/* Practical */}
        <div>
          <h2 className="display" style={{ fontSize: 'clamp(36px,7vw,56px)', fontWeight: 300, lineHeight: .92, letterSpacing: '-0.03em', marginBottom: 32 }}>
            Before you <strong style={{ fontWeight: 600 }}>go.</strong>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,280px), 1fr))', gap: '0 40px' }}>
            {tips.map(item => (
              <div key={item.t} style={{ padding: '16px 0', borderBottom: '1px solid #f0f0f0' }}>
                <p className="mono" style={{ fontSize: 10, letterSpacing: '.1em', color: '#bbb', marginBottom: 4 }}>{item.t}</p>
                <p style={{ fontSize: 14, lineHeight: 1.75, color: '#444', fontWeight: 300 }}>{item.b}</p>
              </div>
            ))}
          </div>
          <a href="https://www.skyscanner.net/transport/flights-to/morocco/" target="_blank" rel="noopener noreferrer sponsored"
            style={{ fontSize: 13, display: 'inline-block', marginTop: 28 }} className="quiet-link">
            Flights to Morocco →
          </a>
        </div>

      </div>
      <Footer />
    </>
  );
}
