import DashboardService from '@/ui/DashboardService';
import React from 'react';
import Goon from '../../public/images/goon.svg';
import Kolibri from '../../public/images/kolibri.svg';
import RocketChat from '../../public/images/rocketchat.png';
import Radio from '../../public/images/Radio.png';
import Logo from '../../public/images/Logo.svg';
import Bubble from '../../public/images/bubble.svg';
import Image from 'next/image';
import Footer from '@/ui/Footer';

const Dashboard = () => {
  return (
    <>
      <Image src={Bubble} alt="Logo" className=" absolute z-0 " />
      <Image
        src={Bubble}
        alt="Logo"
        className=" absolute bottom-0 right-0 z-0 "
      />
      <div
        className="flex w-full flex-col
     items-center"
      >
        <Image src={Logo} alt="Logo" className="h-64" />
        <div className="mt-4 text-xl font-semibold text-orange-900">
          Panel d'administration
        </div>

        <div className="z-10 mx-2 mt-12 flex justify-between">
          <DashboardService
            link={`${process.env.GOON_ADMIN}`}
            logo={Goon}
            title="Admin Principal (Blog, Vidéos et Survey)"
          />
          <DashboardService
            link={`${process.env.AZURECAST_ADMIN}`}
            logo={Radio}
            title="Admin Radio"
          />

          <DashboardService
            link={`${process.env.KOLIBRI_ADMIN}`}
            logo={Kolibri}
            title="Admin Kolibri"
          />

          <DashboardService
            link={`${process.env.ROCKETCHAT_ADMIN}`}
            logo={RocketChat}
            title="Admin Messagerie"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
