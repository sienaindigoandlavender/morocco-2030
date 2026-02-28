'use client';

import { useState, useEffect } from 'react';

export function useWeather(lat: number, lng: number) {
  const [data, setData] = useState<{ t: number; icon: string } | null>(null);

  useEffect(() => {
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m,weather_code&timezone=Africa/Casablanca`)
      .then(r => r.json())
      .then(j => {
        const c = j.current?.weather_code ?? -1;
        const icon = c === 0 ? '☀' : c <= 3 ? '⛅' : c <= 48 ? '🌫' : c <= 67 ? '🌧' : '⛈';
        setData({ t: Math.round(j.current?.temperature_2m), icon });
      })
      .catch(() => {});
  }, [lat, lng]);

  return data;
}
