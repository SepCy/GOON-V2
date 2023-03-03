import React from 'react';
import Card from './Card';

type Props = {
  data: any;
};

const CardList: React.FC<Props> = ({ data }) => {
  return (
    <div className=" sm:mx-32 sm:flex sm:flex-wrap sm:justify-between lg:mx-48 lg:flex lg:flex-grow lg:flex-wrap lg:justify-between ">
      {data.map(
        (post: {
          _embedded: any;
          slug: string;
          link: string;
          id: number | null;
          author: string;
          title: { rendered: string };
          date: string;
        }) => (
          <Card
            key={post.id}
            title={post.title.rendered}
            excerpt={post.title.rendered}
            alt={post.title.rendered}
            date={post.date}
            link={post.link}
            featured_media={post._embedded['wp:featuredmedia']}
            slug={post.slug}
            author={post._embedded.author[0].name}
          />
        ),
      )}
    </div>
  );
};

export default CardList;
