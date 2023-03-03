import React from 'react';
import ToggleContainer from './ToggleContainer';
import RadioIcon from '../../public/images/Radio.png';

const PodCast = () => {
  return (
    <div>
      <ToggleContainer
        iframeUrl={`${process.env.RADIO_LINK}`}
        iconSrc={RadioIcon}
      />
    </div>
  );
};

export default PodCast;
