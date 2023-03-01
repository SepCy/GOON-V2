'use client';
import { customLoader } from '@/lib/loader';
import { formatDate } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  id?: Number;
  date: string;
  slug: string;
  link?: string;
  alt: string;
  title?: string;
  excerpt: string;
  author: string;
  featured_media?: any;
};

const Card: React.FC<Props> = ({
  date,
  slug,
  title,
  alt,
  excerpt,
  author,
  featured_media,
}) => {
  let newDate = new Date(date.toString());
  let datePost = newDate.toDateString();
  return (
    <div className="relative mt-8 w-72 cursor-pointer rounded-md border bg-white p-6 transition duration-200  hover:-translate-y-1 hover:transition hover:duration-200 lg:mt-8 lg:w-64 lg:p-6 ">
      <Link href={`/blog/${slug}`}>
        <div>
          {featured_media ? (
            <Image
              src={featured_media[0].source_url.toString().slice(34)}
              alt={alt}
              width={400}
              height={100}
              loader={customLoader}
            />
          ) : (
            ''
          )}
        </div>
        <div className="mt-4 font-bold text-orange-500">{title}</div>
        <div className="my-4 pb-4 opacity-90">{excerpt}</div>
        <div className="absolute right-8 left-8 bottom-2 flex justify-between pt-4 opacity-70  lg:justify-between lg:text-small">
          <div className="">{author}</div>
          <div>
            <i>{formatDate(newDate)}</i>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
