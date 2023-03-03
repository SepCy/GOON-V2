import React from 'react';
import ToggleContainer from './ToggleContainer';
import Stylo from '../../public/images/writing.png';

const Survey = () => {
  return (
    <div>
      <ToggleContainer
        iconSrc={Stylo}
        iframeUrl={`${process.env.SURVEY_LINK}`}
      />
    </div>
  );
};

export default Survey;
