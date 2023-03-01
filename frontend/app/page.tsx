import { getData, getPagesData } from '@/lib/utils';
import Footer from '@/ui/Footer';
import HeroSection from '@/ui/HeroSection';
import NewsSection from '@/ui/NewsSection';
import PresentationComponent from '@/ui/PresentationComponent';
import { SecondServicesSection } from '@/ui/SecondServicesSection';
import SliderSection from '@/ui/SliderSection';
import ToggleWrapper from '@/ui/ToggleWrapper';
import RootLayout from './layout';

export default async function Page() {
  const data = await getData();

  const homepageData = await getPagesData(
    `${process.env.BACKEND_URL}/wp-json/wp/v2/pages/164?acf_format=standard`,
  );

  return (
    <RootLayout>
      <HeroSection
        homeImageUrl={homepageData?.acf?.image_daccueil.toString().slice(41)}
        data={data[0]}
      />
      <iframe
        src={`${process.env.BACKEND_URL}/pgc_simply_gallery/206/`}
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
    </RootLayout>
  );
}
