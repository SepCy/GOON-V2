import { getData, getPagesData } from '@/lib/utils';
import BgParticles from '@/ui/BgParticles';
import Footer from '@/ui/Footer';
import Header from '@/ui/Header';
import HeroSection from '@/ui/HeroSection';
import NewsSection from '@/ui/NewsSection';
import PodCast from '@/ui/PodCast';
import PresentationComponent from '@/ui/PresentationComponent';
import { SecondServicesSection } from '@/ui/SecondServicesSection';
import SliderSection from '@/ui/SliderSection';
import Survey from '@/ui/Survey';
import ToggleWrapper from '@/ui/ToggleWrapper';
import RootLayout from './layout';

export default async function Page() {
  const data = await getData();
  const homepageData = await getPagesData(
    'http://localhost:9080/wp-json/wp/v2/pages/164?acf_format=standard',
  );

  return (
    <RootLayout>
      <HeroSection
        homeImageUrl={homepageData?.acf?.image_daccueil}
        data={data[0]}
      />
      <SliderSection data={homepageData?.acf?.slider} />
      <PresentationComponent data={homepageData?.acf?.section_services} />
      {/* FLoating Buttons */}
      <ToggleWrapper state={homepageData?.acf?.activer_le_module_sondage} />
      <NewsSection data={data} />
      <SecondServicesSection />
      <Footer />
    </RootLayout>
  );
}
