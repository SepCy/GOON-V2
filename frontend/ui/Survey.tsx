import React from 'react';
import ToggleContainer from './ToggleContainer';
import Stylo from '../public/images/writing.png';

const Survey = () => {
  return (
    <div>
      <ToggleContainer
        iconSrc={Stylo}
        iframeUrl="http://localhost:9080/survey/"
      />
    </div>
  );
};

export default Survey;
