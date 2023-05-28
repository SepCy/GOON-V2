'use client';

import { customLoader } from '@/lib/loader';
import Image from 'next/image';
import React from 'react';
import Header from './Header';
import HeroSectionText from './HeroSectionText';
import InternetForm from './InternetForm';

type Props = {
  data: any;
  homeImageUrl: string;
};

const HeroSection: React.FC<Props> = ({ data, homeImageUrl }) => {
  return (
    <div className=" w-full lg:relative lg:left-0 lg:top-0 lg:h-2/4  lg:w-full lg:bg-cover">
      <Header type="none" />
      <Image
        className="hero relative left-0 top-0 z-0  w-full "
        src={homeImageUrl}
        style={{ objectFit: 'cover' }}
        alt="Home Image"
        width={1500}
        height={500}
        loader={customLoader}
      />
      <HeroSectionText data={data} />
    </div>
  );
};

export default HeroSection;
