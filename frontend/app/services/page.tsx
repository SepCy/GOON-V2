import Header from '@/ui/Header';
import IframeContainer from '@/ui/IframeContainer';
import React from 'react';
import ServicesLayout from './layout';
import Footer from '@/ui/Footer';
import { SecondServicesSection } from '@/ui/SecondServicesSection';
import ToggleWrapper from '@/ui/ToggleWrapper';
import BgParticles from '@/ui/BgParticles';
import { getPagesData } from '@/lib/utils';

const Services = async () => {
  const homepageData = await getPagesData(
    ' http://localhost:9080/wp-json/wp/v2/pages/164?acf_format=standard',
  );

  return (
    <ServicesLayout>
      <Header type="services" image={homepageData?.acf?.image_page_services} />
      <BgParticles />
      <div className="z-10 pt-64">
        <div className="lg:w-11/12">
          <SecondServicesSection />
        </div>
      </div>
      <Footer />
    </ServicesLayout>
  );
};

export default Services;
