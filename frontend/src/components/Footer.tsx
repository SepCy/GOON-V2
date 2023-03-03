import Image from 'next/image';
import React from 'react';
import Logo from '../../public/images/Logof.svg';

const Footer = () => {
  return (
    <div className="z-10 mt-32 flex items-center justify-between bg-orange-600 p-4">
      <div className="text-white"> &#169; GOON Open source license</div>
      <div>
        <Image className="" width={100} src={Logo} alt="Logo" />
      </div>
    </div>
  );
};

export default Footer;
