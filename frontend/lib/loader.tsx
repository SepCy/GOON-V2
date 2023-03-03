export const customLoader = ({ src, width, quality }: any) => {
  return `http://api.goon.tcp/wp-content/uploads/${src}?w=${width}&q=${
    quality || 75
  }`;
};
