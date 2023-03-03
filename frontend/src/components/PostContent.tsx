'use client';
import { formatDate } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { customLoader } from '../../lib/loader';
import sanitizeHtml from 'sanitize-html';
import { AiOutlineArrowLeft } from 'react-icons/ai';

type Props = {
  data: any;
};

const PostContent: React.FC<Props> = ({ data }: any) => {
  let newDate = new Date(data?.date);
  return (
    <div className="mx-6 flex-col items-center pt-64 pb-24 sm:mx-48 lg:mx-96 lg:flex lg:flex-col lg:items-center lg:pb-24 lg:pt-64">
      <div>
        <span className="absolute left-8 mb-8 flex items-center  pt-8 text-orange-500 md:left-32">
          <AiOutlineArrowLeft className="mr-1" />
          <Link href="/blog">Retour</Link>
        </span>
      </div>

      <div className="mt-32 md:mt-32">
        <div className="my-4 flex items-center justify-between lg:my-4 lg:flex lg:items-center lg:justify-between">
          <div className="mb-4 flex items-center">
            <div className="mr-4 h-12 w-12 rounded-full border border-orange-200 bg-gray-100 shadow-md"></div>
            <div className="text-orange-900 ">
              {data?._embedded?.author[0]?.name}
            </div>
          </div>
          <div>
            <i className="lg:text-small">{formatDate(newDate)}</i>
          </div>
        </div>
        <div className="my-8 text-xl font-medium text-orange-900 lg:my-8 lg:text-xl">
          {data?.title?.rendered}
        </div>

        {data?._embedded['wp:featuredmedia'] ? (
          <div className="my-12 lg:my-8">
            <Image
              className="h-fit"
              src={data?._embedded['wp:featuredmedia'][0]?.source_url
                .toString()
                .slice(39)}
              height={500}
              alt={data?.title.rendered}
              width={1000}
              loader={customLoader}
            />
          </div>
        ) : (
          ''
        )}

        <div
          dangerouslySetInnerHTML={{
            __html: sanitizeHtml(data?.content?.rendered, {
              allowedTags: ['*'],
              allowedAttributes: { '*': ['*'] },
              allowedIframeHostnames: ['*'],
            }),
          }}
        />
      </div>
    </div>
  );
};

export default PostContent;
