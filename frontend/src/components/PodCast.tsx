import React from 'react';
import ToggleContainer from './ToggleContainer';
import RadioIcon from '../../public/images/Radio.png';
import { RADIO_LINK } from '@/lib/url';

const PodCast = () => {
  const podcast = (
    <iframe
      className="sm:y-2 z-50 mt-32 mb-2 h-64 w-64 sm:w-fit "
      src={RADIO_LINK}
      allow="autoplay;"
      height={430}
      title="Iframe Example"
    />
  );
  return (
    <div>
      <ToggleContainer
        iframe={podcast}
        iframeUrl={`${RADIO_LINK}`}
        iconSrc={RadioIcon}
      />
    </div>
  );
};

export default PodCast;
