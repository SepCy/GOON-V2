import { getPagesData } from '@/lib/utils';
import Footer from '@/ui/Footer';
import Header from '@/ui/Header';
import React from 'react';

const Videos = async () => {
  const data = await getPagesData(
    `${process.env.BACKEND_URL}/wp-json/wp/v2/pages/?slug=video-category`,
  );

  return (
    <div>
      <Header type="services" />

      <iframe
        src="http://127.0.0.1/pgc_simply_gallery/206/"
        className="scrollbar-hide bottom-0 left-0 right-0 mx-4 w-full overflow-x-hidden px-4 pt-64 sm:mx-0 sm:px-16"
        height={2000}
      />

      <Footer />
    </div>
  );
};

export default Videos;
