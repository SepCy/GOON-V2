import Footer from '@/ui/Footer';
import Header from '@/ui/Header';
import ToggleWrapper from '@/ui/ToggleWrapper';
import React from 'react';

const Videos = () => {
  return (
    <div>
      <Header type="services" />

      <div className="relative bg-slate-400 pt-32 lg:h-full lg:w-full">
        <iframe
          height={700}
          src="http://localhost:9080/video-category/gallerie/"
          className="bottom-0 left-0 mt-16 w-full bg-slate-400"
        />
      </div>

      <Footer />
    </div>
  );
};

export default Videos;
