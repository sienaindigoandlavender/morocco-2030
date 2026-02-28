import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import CityHero from '@/components/CityHero';
import CityTabs from '@/components/CityTabs';
import { getCityById, getAllCityIds } from '@/lib/cities';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllCityIds().map(id => ({ slug: id }));
}

export function generateMetadata({ params }: Props): Metadata {
  const city = getCityById(params.slug);
  if (!city) return {};
  return {
    title: `${city.name} — Morocco 2030 Cultural Guide`,
    description: `${city.tagline} Everything you need beyond the stadium: history, food, where to stay, how to get there.`,
    openGraph: {
      title: `${city.name} — Morocco 2030`,
      description: city.tagline,
    },
  };
}

export default function CityPage({ params }: Props) {
  const city = getCityById(params.slug);
  if (!city) notFound();

  return (
    <>
      <Nav />
      <CityHero id={city.id} name={city.name} tagline={city.tagline} lat={city.lat} lng={city.lng} />
      <CityTabs city={city} />
      <Footer />
    </>
  );
}
