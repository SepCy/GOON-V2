import React from 'react';
import ToggleContainer from './ToggleContainer';
import RadioIcon from '../public/images/Radio.png';

const PodCast = () => {
  return (
    <div>
      <ToggleContainer
        iframeUrl="http://localhost:8009/public/radio"
        iconSrc={RadioIcon}
      />
    </div>
  );
};

export default PodCast;
