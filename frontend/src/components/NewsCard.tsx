import Image from 'next/image';
import React from 'react';
import Local from '../../public/images/Tag.svg';
import Radio from '../../public/images/Radio.png';

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
      className=" h-8/10 lg:h-8/10 relative mx-4 mt-12 flex w-72 flex-col rounded-md  px-8 pb-60 pt-12 text-white transition ease-in-out hover:-translate-y-2 hover:shadow-lg hover:transition hover:ease-in-out sm:w-72 md:w-80 lg:relative lg:flex lg:w-96 lg:flex-col lg:rounded-md lg:px-8 lg:pt-12 lg:pb-60 lg:shadow-md"
      style={{ backgroundColor: color }}
    >
      <h6 className="opacity-80 lg:opacity-80">{tag}</h6>
      <div
        dangerouslySetInnerHTML={{ __html: excerpt }}
        className="my-8 font-bold lg:my-10 lg:font-bold"
      >
        {}
      </div>
      <span>
        {newsType == 'local' ? (
          <Image
            className="absolute  right-5 bottom-4 opacity-80 lg:absolute lg:right-5 lg:bottom-4 lg:opacity-80"
            width={150}
            src={Radio}
            alt="Icon"
          />
        ) : (
          <Image
            className="absolute right-2 bottom-4 opacity-80 lg:absolute lg:right-2 lg:bottom-4 lg:opacity-80"
            width={150}
            src={icon}
            alt="Icon"
          />
        )}
      </span>
      {newsType == 'local' ? (
        <span>
          {
            <Image
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
