import { BACKEND_URL } from './url';

export const customLoader = ({ src, width, quality }: any) => {
  return `${BACKEND_URL}/wp-content/uploads/${src}?w=${width}&q=${
    quality || 75
  }`;
};
