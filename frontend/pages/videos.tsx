import { getPagesData } from '@/lib/utils';
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import React, { useEffect, useState } from 'react';

export default function Page() {
  const [data, setData]: any = useState([]);

  useEffect(() => {
    async function fetch() {
      const data = await getPagesData(
        `http://api.goon.tcp/wp-json/wp/v2/pages/?slug=video-category`,
      );
      setData(data);
    }
    fetch();
  }, []);

  return (
    <div>
      <Header type="services" />

      <iframe
        allowFullScreen
        src={`http://api.goon.tcp/pgc_simply_gallery/206/`}
        className="bottom-0 left-0 right-0 mx-4 my-2 block w-full overflow-x-hidden pr-4 pt-64 sm:mx-0 sm:px-16"
        height={2000}
      />

      <Footer />
    </div>
  );
}
