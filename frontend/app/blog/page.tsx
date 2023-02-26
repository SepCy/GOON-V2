import { getPagesData } from '@/lib/utils';
import CardList from '@/ui/CardList';
import Footer from '@/ui/Footer';
import Header from '@/ui/Header';
import React from 'react';
import BlogLayout from './layout';

async function getData() {
  const res = await fetch(
    ' http://goon.test/wp-json/wp/v2/posts?_embed&order=desc&per_page=100&status=publish',
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();
  const homepageData = await getPagesData(
    'http://goon.test/wp-json/wp/v2/pages/164?acf_format=standard',
  );
  const dataArr = data;
  return (
    <BlogLayout>
      <Header type="services" image={homepageData?.acf?.image_page_blog} />
      <div className="mx-8 pt-72 text-xl text-orange-500 md:mx-48 lg:pt-72 lg:text-3xl">
        Blog de GOON
      </div>
      <div className="flex justify-center sm:justify-between lg:flex">
        <div className="lg:w-12/12 mt-12 h-fit overflow-x-hidden lg:mt-12 ">
          <CardList data={dataArr} />
        </div>
      </div>

      <Footer />
    </BlogLayout>
  );
};

export default Blog;
