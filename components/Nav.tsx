'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cities } from '@/lib/cities';

export default function Nav() {
  const path = usePathname();

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: 'rgba(255,255,255,.95)', backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      borderBottom: '1px solid #f0f0f0',
      display: 'flex', alignItems: 'center', gap: 0,
      padding: '0 clamp(16px,3vw,40px)', overflowX: 'auto',
    }}>
      <Link href="/" style={{
        background: 'none', border: 'none', cursor: 'pointer',
        padding: '16px 20px 16px 0', marginRight: 8, borderRight: '1px solid #f0f0f0',
        textDecoration: 'none', flexShrink: 0,
      }}>
        <span className="display" style={{
          fontSize: 16, fontWeight: 500, letterSpacing: '-0.02em',
          color: path === '/' ? '#1a1a1a' : '#bbb',
        }}>
          Morocco 2030
        </span>
      </Link>

      {cities.map(c => {
        const href = `/city/${c.id}`;
        const active = path === href;
        return (
          <Link key={c.id} href={href} style={{
            textDecoration: 'none',
            padding: '16px clamp(10px,1.5vw,18px)',
            borderBottom: active ? '2px solid #1a1a1a' : '2px solid transparent',
            flexShrink: 0, transition: 'border-color .2s',
          }}>
            <span style={{
              fontSize: 13, fontWeight: active ? 500 : 400,
              color: active ? '#1a1a1a' : '#aaa',
              whiteSpace: 'nowrap',
            }}>
              {c.name}
            </span>
          </Link>
        );
      })}

      <Link href="/essentials" style={{
        textDecoration: 'none',
        padding: '16px clamp(10px,1.5vw,18px)',
        borderBottom: path === '/essentials' ? '2px solid #1a1a1a' : '2px solid transparent',
        flexShrink: 0, transition: 'border-color .2s',
      }}>
        <span style={{
          fontSize: 13, fontWeight: path === '/essentials' ? 500 : 400,
          color: path === '/essentials' ? '#1a1a1a' : '#aaa',
          whiteSpace: 'nowrap',
        }}>
          Essentials
        </span>
      </Link>
    </nav>
  );
}
