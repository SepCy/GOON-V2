import { getPagesData } from '@/lib/utils';
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import React, { useEffect, useState } from 'react';

export default function Page() {
  const [homepageData, setHomepageData]: any = useState([]);

  useEffect(() => {
    async function fetch() {
      const homepageData = await getPagesData(
        `http://api.goon.tcp/wp-json/wp/v2/pages/164?acf_format=standard`,
      );
      setHomepageData(homepageData);
    }
    fetch();
  }, []);

  return (
    <div>
      <Header
        image={homepageData?.acf?.image_page_services.toString().slice(39)}
        type="services"
      />

      <iframe
        allowFullScreen
        src={`http://api.goon.tcp/pgc_simply_gallery/206/`}
        className="absolute bottom-0 left-0 right-0 mx-4 my-2 mt-64 block w-full overflow-x-hidden pr-4 sm:mx-0 sm:h-screen sm:px-16"
      />

      <Footer />
    </div>
  );
}
