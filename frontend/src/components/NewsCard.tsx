import Image from 'next/image';
import React from 'react';
import Local from '../../public/images/Tag.svg';
import Ndom from '../../public/images/ndom.jpg';
import { customLoader } from '@/lib/loader';

type Props = {
  tag: string;
  excerpt: string;
  icon: any;
  color: string;
  newsType?: string;
};

const NewsCard: React.FC<Props> = ({ tag, excerpt, icon, color, newsType }) => {
  return (
    <div
      className=" h-8/10 md:w-90 relative  mx-0 mt-12 flex w-80 flex-col rounded-md px-8  pb-10  pt-12 text-white transition ease-in-out hover:-translate-y-2 hover:shadow-lg hover:transition hover:ease-in-out sm:mr-0 sm:w-72 md:mx-8 lg:relative lg:flex lg:h-80 lg:w-80 lg:flex-col lg:rounded-md lg:px-8 lg:pt-12 lg:pb-10 lg:shadow-md"
      style={{ backgroundColor: color }}
    >
      <h6 className="z-10 opacity-80 lg:opacity-80">{}</h6>
      <div
        dangerouslySetInnerHTML={{ __html: excerpt }}
        className="z-10 my-8 text-normal font-bold lg:my-10 lg:font-bold"
      >
        {}
      </div>
      <span>
        {newsType == 'local' ? (
          <Image
            height={0}
            width={0}
            className="absolute left-0 top-0 right-0 bottom-0 h-full w-fit object-cover opacity-80 lg:absolute lg:right-0 lg:bottom-0 lg:opacity-50"
            src={icon}
            loader={customLoader}
            alt="Icon"
          />
        ) : (
          <Image
            height={50}
            className="absolute right-2 bottom-4 opacity-80 lg:absolute lg:right-2 lg:bottom-4 lg:opacity-80"
            width={150}
            src={icon}
            alt="Icon"
            loader={customLoader}
          />
        )}
      </span>
      {newsType == 'local' ? (
        <span>
          {
            <Image
              height={50}
              width={50}
              className="lg:float-center float-center absolute left-0 right-0 -bottom-8 m-auto lg:absolute lg:left-0 lg:right-0 lg:-bottom-8 lg:m-auto"
              src={Local}
              alt="Type of News"
            />
          }
        </span>
      ) : (
        ''
      )}
    </div>
  );
};

export default NewsCard;
