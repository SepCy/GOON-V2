import React, { useState, useEffect } from 'react';
import { getData, getPagesData } from '@/lib/utils';
import Footer from 'src/components/Footer';
import HeroSection from 'src/components/HeroSection';
import NewsSection from 'src/components/NewsSection';
import { SecondServicesSection } from 'src/components/SecondServicesSection';
import ToggleWrapper from 'src/components/ToggleWrapper';
import { BACKEND_URL, URL_PAGE } from '@/lib/url';

export default function Home() {
  const [data, setData]: any = useState([]);
  const [homepageData, setHomepageData]: any = useState([]);
  const [loading, setLoading]: any = useState(true);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      const data = await getData();

      setData(data);
      const homepageData = await getPagesData(URL_PAGE);
      setHomepageData(homepageData);
    }

    fetchData();
    setLoading(false);
  }, [data, loading]);

  console.log(loading);
  return (
    <div>
      <HeroSection
        homeImageUrl={
          homepageData?.acf?.image_daccueil
            ? homepageData?.acf?.image_daccueil.toString().slice(39)
            : 'Loading'
        }
        data={data[0]}
      />
      <iframe
        src={`${BACKEND_URL}/pgc_simply_gallery/206/`}
        className="hidden w-0"
        height={0}
      />
      {/*  <PresentationComponent data={homepageData?.acf?.section_services} />*/}
      {/* FLoating Buttons */}
      <ToggleWrapper state={homepageData?.acf?.activer_le_module_sondage} />
      <NewsSection data={data} />
      <SecondServicesSection />
      <Footer />
    </div>
  );
}
