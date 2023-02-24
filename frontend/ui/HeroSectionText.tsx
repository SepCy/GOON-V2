import { formatDate } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineFieldTime } from 'react-icons/ai';

type Props = {
  data: any;
};

const HeroSectionText: React.FC<Props> = ({ data }) => {
  console.log(data);

  let newDate = new Date(data?.date);
  return (
    <div className="absolute top-32 left-8 md:left-1/4 lg:absolute lg:left-1/4 lg:top-64">
      <div className="flex flex-col text-white lg:flex lg:flex-col">
        <div className="w-min bg-red-600 py-2 px-2 lg:w-min lg:py-2 lg:px-3">
          Actualité
        </div>
        <Link href={`/blog/${data.slug}`}>
          <div
            dangerouslySetInnerHTML={{ __html: data.excerpt.rendered }}
            className="py-4 text-normal md:text-xl lg:w-full lg:py-4 lg:text-3xl lg:font-bold"
          ></div>
        </Link>

        <div className="flex lg:flex">
          <div className="flex items-center lg:flex lg:items-center">
            <span>
              <AiOutlineUser />
            </span>
            <div className="ml-2 lg:ml-2">{data._embedded?.author[0].name}</div>
          </div>

          <div className="ml-8 flex items-center lg:ml-12 lg:flex lg:items-center">
            <span>
              <AiOutlineFieldTime />
            </span>
            <div className="ml-2 lg:ml-2">{formatDate(newDate)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionText;
