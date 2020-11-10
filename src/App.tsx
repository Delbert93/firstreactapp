/** @jsxImportSource @emotion/core */
import React, { lazy, Suspense } from 'react';
import { css, jsx } from '@emotion/core';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { SearchPage } from './SearchPage';
import { SignInPage } from './SignInPage';
import { Header } from './Header';
import { HomePage } from './HomePage';
import { NotFoundPage } from './NotFoundPage';
import { QuestionPage } from './QuestionPage';
import { fontFamily, fontSize, gray2 } from './Styles';
const AskPage = lazy(() => import('./AskPage'));

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
        {/* Order in the switch matters. It will display what it finds first */}
        <Switch>
          <Redirect from="/home" to="/" />
          <Route exact path="/" component={HomePage} />
          <Route path="/search" component={SearchPage}/>
          <Route path="/ask">
            <Suspense
              fallback={
                <div
                  css={css`
                    margin-top: 100px;
                    text-align: center;
                  `}
                >
                  Loading...
                </div>
              }
            >
                <AskPage />
              </Suspense>
          </Route>
          <Route path="/questions/:questionId" component={QuestionPage} />
          <Route path="/signin" component={SignInPage}/>
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
