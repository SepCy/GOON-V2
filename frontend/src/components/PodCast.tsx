import React from 'react';
import ToggleContainer from './ToggleContainer';
import RadioIcon from '../../public/images/Radio.png';
import { RADIO_LINK } from '@/lib/url';

const PodCast = () => {
  return (
    <div>
      <ToggleContainer iframeUrl={`${RADIO_LINK}`} iconSrc={RadioIcon} />
    </div>
  );
};

export default PodCast;
