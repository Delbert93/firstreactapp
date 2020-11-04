import React from 'react';
import { Header } from './Header';
import { HomePage } from './HomePage';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const App = () => {
  return (
    <div
      css={css`
        font-family: 'Segoe UI', 'Helvetica Neue', sans-serif;
        font-size: 16px;
        color: #5c5a5a;
      `}
    >
      <Header />
      <HomePage />
    </div>
  );
};

export default App;
