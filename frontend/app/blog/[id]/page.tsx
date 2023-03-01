import Footer from '@/ui/Footer';
import Header from '@/ui/Header';
import PostContent from '@/ui/PostContent';
import { useRouter } from 'next/navigation';

import React from 'react';

async function getData(slug: string) {
  const res = await fetch(
    `${process.env.BACKEND_URL}/wp-json/wp/v2/posts?_embed&slug=${slug}`,
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

const Post = async ({ params }: any) => {
  const data = await getData(params?.id);

  return (
    <div>
      <Header
        type="services"
        image={
          data[0]?._embedded['wp:featuredmedia']
            ? data[0]?._embedded['wp:featuredmedia'][0]?.source_url
                .toString()
                .slice(27)
            : ''
        }
      />

      <PostContent data={data[0]} />
      <Footer />
    </div>
  );
};

export default Post;
