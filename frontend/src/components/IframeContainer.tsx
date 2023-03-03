import React from 'react';

type Props = {
  iframe: any;
};

const IframeContainer: React.FC<Props> = ({ iframe }) => {
  return <div className="py-12">{iframe}</div>;
};

export default IframeContainer;
