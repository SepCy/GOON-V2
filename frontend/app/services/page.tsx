import Header from '@/ui/Header';
import React from 'react';
import ServicesLayout from './layout';
import Footer from '@/ui/Footer';
import { SecondServicesSection } from '@/ui/SecondServicesSection';
import BgParticles from '@/ui/BgParticles';
import { getPagesData } from '@/lib/utils';

const Services = async () => {
  const homepageData = await getPagesData(
    `${process.env.BACKEND_URL}/wp-json/wp/v2/pages/164?acf_format=standard`,
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
