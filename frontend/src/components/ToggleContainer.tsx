'use client';
import Image from 'next/image';
import React, { useState } from 'react';

type Props = {
  iframeUrl: any;
  iconSrc: any;
  iframe: any;
};

const ToggleContainer: React.FC<Props> = ({ iframeUrl, iconSrc, iframe }) => {
  const [click, setOnclick] = useState(true);

  return (
    <div className={click ? `mr-2 h-32 w-16 sm:w-32 ` : `mr-2  `}>
      <div
        className={
          click
            ? `w-fit opacity-0`
            : ` rounded-md bg-white opacity-100 shadow-2xl`
        }
      >
        {iframe}
      </div>
      <div
        onClick={() => setOnclick(!click)}
        className={`relative top-44 -bottom-2 left-0 right-0 m-auto h-16 w-16 cursor-pointer rounded-full bg-orange-400  p-2 shadow-2xl transition duration-100 hover:scale-110 hover:transition hover:duration-100 sm:h-24  sm:w-24 sm:p-4 md:top-0`}
      >
        <span className="absolute right-6 top-0 h-3 w-3 animate-ping rounded-full bg-orange-400"></span>
        <Image className="" width={200} src={iconSrc} alt="Icon" />
      </div>
    </div>
  );
};

export default ToggleContainer;
