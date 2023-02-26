import Image from 'next/image';
import React from 'react';
import Header from './Header';
import HeroSectionText from './HeroSectionText';

type Props = {
  data: any;
  homeImageUrl: string;
};

const HeroSection: React.FC<Props> = ({ data, homeImageUrl }) => {
  return (
    <div className=" lg:relative lg:left-0 lg:top-0 lg:h-fit  lg:w-full lg:bg-cover">
      <Header type="none" />
      <Image
        className="left-0 top-0 z-0 h-96 w-full md:h-2/3 "
        src={homeImageUrl}
        alt="Home Image"
        width={1500}
        height={200}
      />
      <HeroSectionText data={data} />
    </div>
  );
};

export default HeroSection;
