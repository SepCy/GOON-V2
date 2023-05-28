import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import PostContent from 'src/components/PostContent';
import { useRouter } from 'next/router';

import React, { useEffect, useState } from 'react';
import { BACKEND_URL } from '@/lib/url';

async function getData(slug: any) {
  const res = await fetch(
    `${BACKEND_URL}/wp-json/wp/v2/posts?_embed&slug=${slug}`,
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

export default function Post() {
  const router = useRouter();
  const query = router.query;

  const slug = query?.slug?.toString();

  const [data, setData]: any = useState([]);
  useEffect(() => {
    async function fetch() {
      const data = await getData(slug);
      setData(data);
    }
    fetch();
  }, []);

  return (
    <div>
      <Header
        type="services"
        image={
          data[0]?._embedded['wp:featuredmedia']
            ? data[0]?._embedded['wp:featuredmedia'][0]?.source_url
                .toString()
                .slice(39)
            : ''
        }
      />

      <PostContent data={data[0]} />
      <Footer />
    </div>
  );
}
