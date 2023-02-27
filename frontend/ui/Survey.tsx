import React from 'react';
import ToggleContainer from './ToggleContainer';
import Stylo from '../public/images/writing.png';

const Survey = () => {
  return (
    <div>
      <ToggleContainer
        iconSrc={Stylo}
        iframeUrl="http://127.0.0.1:9080/survey/"
      />
    </div>
  );
};

export default Survey;
