import React from 'react';
import PodCast from './PodCast';
import Survey from './Survey';

type Props = {
  state: Boolean;
};

const ToggleWrapper: React.FC<Props> = ({ state }) => {
  return (
    <div className="fixed -top-4 right-0 z-10 flex h-full  sm:top-32 ">
      {state ? <Survey /> : ''}
      <PodCast />
    </div>
  );
};

export default ToggleWrapper;
