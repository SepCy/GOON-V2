import { formatDate } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineFieldTime } from 'react-icons/ai';

type Props = {
  data: any;
};

const HeroSectionText: React.FC<Props> = ({ data }) => {
  let newDate = new Date(data?.date);
  return (
    <div className="absolute top-64 left-2 mx-4 shadow-xl md:left-1/4 lg:absolute lg:left-72 lg:top-64">
      <div className="flex flex-col text-white lg:flex lg:flex-col">
        <Link
          className="rounded-md bg-orange-400 shadow-lg transition-all duration-200  hover:translate-y-1 hover:bg-orange-500 hover:transition-all hover:duration-200"
          href={`/blog/${data?.slug}`}
        >
          <div
            dangerouslySetInnerHTML={{ __html: data?.excerpt.rendered }}
            className="px-8 py-4 text-normal md:text-xl lg:w-full lg:py-4 lg:text-3xl lg:font-bold"
          ></div>
        </Link>

        <div className="mt-4 flex lg:flex">
          <div className="flex items-center lg:flex lg:items-center">
            <span>
              <AiOutlineUser />
            </span>
            <div className="ml-2 lg:ml-2">
              {data?._embedded?.author[0].name}
            </div>
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
