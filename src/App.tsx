/** @jsxImportSource @emotion/core */
import React from 'react';
import { css, jsx } from '@emotion/core';
import { Header } from './Header';
import { HomePage } from './HomePage';
import { fontFamily, fontSize, gray2 } from './Styles';

const App = () => {
  return (
    <div
      css={css`
        font-family: ${fontFamily};    
        font-size: ${fontSize};    
        color: ${gray2};
      `}
    >
      <Header />
      <HomePage />
    </div>
  );
};

export default App;
