

import React from "react";
import { BoxLoading } from 'react-loadingg';
import { LoadingWrapper } from "./LoadingElements";




const Loading = () => {
  return (
      <LoadingWrapper>
      <BoxLoading color="#e69340" speed="0.5" size="large"/>      
      </LoadingWrapper>

  );
};

export default Loading;

//app.js 에 컴포넌트 추가 

