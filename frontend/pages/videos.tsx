import { getPagesData } from '@/lib/utils';
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import React, { useEffect, useState } from 'react';
import { BACKEND_URL, URL_PAGE } from '@/lib/url';

export default function Page() {
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
        image={homepageData?.acf?.image_page_services.toString().slice(39)}
        type="services"
      />

      <iframe
        allowFullScreen={true}
        src={`${BACKEND_URL}/pgc_simply_gallery/206/`}
        className="relative bottom-0 left-0 right-0 mx-0 my-2 mt-64 block h-screen w-full overflow-x-hidden pr-4 sm:mx-0 sm:h-screen sm:px-2"
      />

      <Footer />
    </div>
  );
}
