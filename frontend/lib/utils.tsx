import { BACKEND_URL } from './url';

export const formatDate = (date: any) => {
  return (
    (date.getMonth() > 8 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1)) +
    '/' +
    (date.getDate() > 9 ? date.getDate() : '0' + date.getDate()) +
    '/' +
    date.getFullYear()
  );
};

export async function getData() {
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

export async function getPagesData(url: string) {
  const res = await fetch(url, { next: { revalidate: 10 } });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
