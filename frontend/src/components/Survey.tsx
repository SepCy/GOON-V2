import React from 'react';
import ToggleContainer from './ToggleContainer';
import Stylo from '../../public/images/writing.png';
import { SURVEY_LINK } from '@/lib/url';

const Survey = () => {
  const survey = (
    <iframe
      className="sm:y-2 z-100 -mt-16 mb-2 p-10  "
      src={SURVEY_LINK}
      allow="autoplay;"
      height={455}
      width={1000}
      title="Iframe Example"
    />
  );
  return (
    <div>
      <ToggleContainer
        iframe={survey}
        iconSrc={Stylo}
        iframeUrl={`${SURVEY_LINK}`}
      />
    </div>
  );
};

export default Survey;
