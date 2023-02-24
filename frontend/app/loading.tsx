import Image from 'next/image';
import React from 'react';
import Goon from '../public/images/Logo.svg';

const Loading = () => {
  return (
    <div>
      <Image
        src={Goon}
        width={150}
        className="w-15 top-0 left-auto right-0 bottom-0 flex  animate-ping items-center justify-center"
        alt="Logo de chargement"
      />
    </div>
  );
};

export default Loading;
