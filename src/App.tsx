/** @jsxImportSource @emotion/core */
import React from 'react';
import { css, jsx } from '@emotion/core';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { AskPage } from './AskPage';
import { SearchPage } from './SearchPage';
import { SignInPage } from './SignInPage';
import { Header } from './Header';
import { HomePage } from './HomePage';
import { fontFamily, fontSize, gray2 } from './Styles';

const App = () => {
  return (
    <BrowserRouter>
      <div
        css={css`
          font-family: ${fontFamily};    
          font-size: ${fontSize};    
          color: ${gray2};
        `}
      >
        <Header />
        <Switch>
          <Redirect from="/home" to="/" />
          <Route exact path="/" component={HomePage} />
          <Route path="/search" component={SearchPage}/>
          <Route path="/ask" component={AskPage}/>
          <Route path="/signin" component={SignInPage}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
