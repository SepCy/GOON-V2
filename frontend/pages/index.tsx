import React, { useState, useEffect } from 'react';
import { getData, getPagesData } from '@/lib/utils';
import Footer from 'src/components/Footer';
import HeroSection from 'src/components/HeroSection';
import NewsSection from 'src/components/NewsSection';
import PresentationComponent from 'src/components/PresentationComponent';
import { SecondServicesSection } from 'src/components/SecondServicesSection';
import SliderSection from 'src/components/SliderSection';
import ToggleWrapper from 'src/components/ToggleWrapper';

export default function Home() {
  const [data, setData]: any = useState([]);
  const [homepageData, setHomepageData]: any = useState([]);
  const [loading, setLoading]: any = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const data = await getData();

      setData(data);
      const homepageData = await getPagesData(
        `http://api.goon.tcp/wp-json/wp/v2/pages/164?acf_format=standard`,
      );
      setHomepageData(homepageData);
    }

    fetchData();
  }, [data]);
  return (
    <div>
      <HeroSection
        homeImageUrl={homepageData?.acf?.image_daccueil.toString().slice(39)}
        data={data[0]}
      />
      <iframe
        src={`http://api.goon.tcp/pgc_simply_gallery/206/`}
        className="hidden w-0"
        height={0}
      />
      <SliderSection data={homepageData?.acf?.slider} />
      <PresentationComponent data={homepageData?.acf?.section_services} />
      {/* FLoating Buttons */}
      <ToggleWrapper state={homepageData?.acf?.activer_le_module_sondage} />
      <NewsSection data={data} />
      <SecondServicesSection />
      <Footer />
    </div>
  );
}
