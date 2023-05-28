import Header from '@/ui/Header';
import React, { useEffect, useState } from 'react';
import Footer from '@/ui/Footer';
import { SecondServicesSection } from '@/ui/SecondServicesSection';
import BgParticles from '@/ui/BgParticles';
import { getPagesData } from '@/lib/utils';
import { URL_PAGE } from '@/lib/url';

const Services = () => {
  const [homepageData, setHomepageData]: any = useState([]);

  useEffect(() => {
    async function fetch() {
      const homepageData = await getPagesData(URL_PAGE);
      setHomepageData(homepageData);
    }
    fetch();
  }, []);

  return (
    <div>
      <Header
        type="services"
        image={homepageData?.acf?.image_page_services.toString().slice(39)}
      />
      <BgParticles />
      <div className="z-10 pt-64">
        <div className="lg:w-11/12">
          <SecondServicesSection />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
