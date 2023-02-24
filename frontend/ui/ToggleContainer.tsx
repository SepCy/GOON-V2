'use client';
import Image from 'next/image';
import React, { useState } from 'react';

type Props = {
  iframeUrl: any;
  iconSrc: any;
};

const ToggleContainer: React.FC<Props> = ({ iframeUrl, iconSrc }) => {
  const [click, setOnclick] = useState(true);

  return (
    <div className={click ? `mr-2 w-32 ` : `mr-2  `}>
      <div
        className={
          click
            ? `w-fit opacity-0`
            : ` rounded-md bg-white opacity-100 shadow-2xl`
        }
      >
        <iframe
          className=" my-2 w-fit "
          src={iframeUrl}
          allow="autoplay;"
          height={430}
          title="Iframe Example"
        />
      </div>
      <div
        onClick={() => setOnclick(!click)}
        className={`relative -bottom-2 left-0 right-0 m-auto h-16 w-16 cursor-pointer rounded-full  bg-orange-400 p-2 shadow-2xl transition duration-100 hover:scale-110 hover:transition hover:duration-100  sm:h-24 sm:w-24 sm:p-6`}
      >
        <span className="absolute right-6 top-0 h-3 w-3 animate-ping rounded-full bg-orange-400"></span>
        <Image className=" " width={100} src={iconSrc} alt="Icon" />
      </div>
    </div>
  );
};

export default ToggleContainer;
