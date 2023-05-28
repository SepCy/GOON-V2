import React from 'react';
import NewsCard from './NewsCard';
import Earth from '../../public/images/Earth.png';
import Link from 'next/link';
import BgParticles from './BgParticles';

type Props = {
  data: any;
};

const NewsSection: React.FC<Props> = ({ data }) => {
  let news1 = data[0];
  let news2 = data[1];
  let news3 = data[2];
  let news4 = data[3];

  console.log(data);
  return (
    <div className="mx-8 lg:mx-32 ">
      <BgParticles />
      <p className="mb-2 ml-2 mt-8 w-4/5 text-xl font-semibold text-orange-500 md:ml-12 lg:w-2/3 lg:text-3xl lg:font-semibold">
        Retrouvez vos actualités locales et internationales
      </p>
      <div className="flex flex-wrap items-center justify-center  md:justify-between lg:flex lg:justify-around">
        <Link href={`/blog/${news1?.slug}`}>
          <NewsCard
            newsType=""
            tag="Economie"
            excerpt={news1?.title?.rendered}
            icon={news1?._embedded['wp:featuredmedia'][0]?.source_url
              .toString()
              .slice(39)}
            color="#48B988"
          />
        </Link>
        <Link href={`/blog/${news2?.slug}`}>
          <NewsCard
            newsType="local"
            tag="Economie"
            excerpt={news2?.title?.rendered}
            icon={news2?._embedded['wp:featuredmedia'][0]?.source_url
              .toString()
              .slice(39)}
            color="#F38971"
          />
        </Link>
        <Link href={`/blog/${news3?.slug}`}>
          <NewsCard
            newsType="local"
            tag="Economie"
            excerpt={news3?.title?.rendered}
            icon={news3?._embedded['wp:featuredmedia'][0]?.source_url
              .toString()
              .slice(39)}
            color="#5FB1C2"
          />
        </Link>
        <Link href={`/blog/${news4?.slug}`}>
          <NewsCard
            newsType="local"
            tag="Economie"
            excerpt={news4?.title?.rendered}
            icon={news4?._embedded['wp:featuredmedia'][0]?.source_url
              .toString()
              .slice(39)}
            color="#5FB1C2"
          />
        </Link>
      </div>
    </div>
  );
};

export default NewsSection;
