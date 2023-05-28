import { getPagesData } from '@/lib/utils';
import CardList from 'src/components/CardList';
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import React, { useEffect, useState } from 'react';
import { BACKEND_URL, URL_PAGE } from '@/lib/url';

async function getData() {
  const res = await fetch(
    `${BACKEND_URL}/wp-json/wp/v2/posts?_embed&order=desc&per_page=100&status=publish`,
    { next: { revalidate: 10 } },
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

export default function Posts() {
  const [data, setData]: any = useState([]);
  const [homepageData, setHomepageData]: any = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getData();
      setData(data);
      const homepageData = await getPagesData(URL_PAGE);
      setHomepageData(homepageData);
    }
    fetchData();
  }, []);

  const dataArr = data;
  return (
    <div>
      <Header
        type="services"
        image={homepageData?.acf?.image_page_blog.toString().slice(39)}
      />
      <div className="mx-8 h-full pt-72 text-xl text-orange-500 md:mx-48 lg:pt-72 lg:text-3xl">
        Informations de GOON
      </div>
      <div className="flex justify-center sm:justify-between lg:flex">
        <div className="lg:w-12/12 mt-12 h-fit overflow-x-hidden lg:mt-12 ">
          <CardList data={dataArr} />
        </div>
      </div>

      <Footer />
    </div>
  );
}
