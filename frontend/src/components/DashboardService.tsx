import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  logo: any;
  title: string;
  link: string;
};
const DashboardService: React.FC<Props> = ({ logo, title, link }) => {
  return (
    <div className="mx-4 w-64 cursor-pointer border border-gray-100 bg-white p-8 shadow-md transition duration-200 ease-in-out hover:-translate-y-2 hover:transition hover:duration-200 hover:ease-in-out">
      <Link className="flex flex-col items-center" href={link}>
        <div>
          <Image className="h-24 w-24" src={logo} alt="Service Component" />
        </div>
        <div className="mt-8 text-center font-semibold text-orange-500">
          {title}
        </div>
      </Link>
    </div>
  );
};

export default DashboardService;
