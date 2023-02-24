import React from 'react';
import NewsCard from './NewsCard';
import Earth from '../public/images/Earth.png';
import Link from 'next/link';
import BgParticles from './BgParticles';

type Props = {
  data: any;
};

const NewsSection: React.FC<Props> = ({ data }) => {
  let news1 = data[0];
  let news2 = data[1];
  let news3 = data[2];
  return (
    <div className="mx-8 lg:mx-32 ">
      <BgParticles />
      <p className="mb-4 mt-16 w-4/5 text-xl font-semibold text-orange-500 lg:w-2/3 lg:text-3xl lg:font-semibold">
        Retrouvez vos actualités locales et internationales
      </p>
      <div className="flex flex-wrap items-center justify-center md:justify-between lg:flex lg:justify-between">
        <Link href={`/blog/${news1.slug}`}>
          <NewsCard
            newsType=""
            tag="Economie"
            excerpt={news1.title.rendered}
            icon={Earth}
            color="#48B988"
          />
        </Link>
        <Link href={`/blog/${news2.slug}`}>
          <NewsCard
            newsType="local"
            tag="Economie"
            excerpt={news2.title.rendered}
            icon={Earth}
            color="#F38971"
          />
        </Link>
        <Link href={`/blog/${news3.slug}`}>
          <NewsCard
            newsType="local"
            tag="Economie"
            excerpt={news3.title.rendered}
            icon={Earth}
            color="#5FB1C2"
          />
        </Link>
      </div>
    </div>
  );
};

export default NewsSection;
