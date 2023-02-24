import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

type Props = {
  title: string;
  link: string;
  description: string;
  icon?: any;
};

const ServiceCard: React.FC<Props> = ({ title, link, icon, description }) => {
  return (
    <Link
      className=" mr-4 flex flex-col items-center p-4 lg:mr-4 lg:flex lg:flex-col lg:items-center lg:p-4"
      href={link}
    >
      <div className="my-2 flex lg:my-2 lg:flex">
        <Image
          className="h-24 w-24 rounded-full bg-orange-200 p-2 lg:h-24 lg:w-24"
          src={icon}
          alt="Icon"
        />

        <div className="ml-6 flex w-48 flex-col lg:ml-6 lg:flex lg:w-48 lg:flex-col">
          <div className="my-2 font-medium text-orange-500 lg:font-medium">
            {title}
          </div>
          <div>{description}</div>
          <BsArrowRight className="mt-4 text-3xl text-orange-500 transition duration-300 hover:translate-x-4 hover:transition hover:duration-300" />
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
