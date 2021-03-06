import React from 'react';
import { useEffect, useState, FC } from 'react';
/** @jsxImportSource @emotion/core */
import { css, jsx } from '@emotion/core';
import { PrimaryButton } from './Styles';
import { QuestionList } from './QuestionList';
import { QuestionData } from './QuestionData';
import { Page } from './Page';
import { PageTitle } from './PageTitle';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import {
  getUnansweredQuestionsActionCreator,
  AppState
} from './Store';


interface Props extends RouteComponentProps {
  getUnansweredQuestions: () => Promise<void>;
  questions: QuestionData[] | null;
  questionsLoading: boolean;
 }


const mapStateToProps = (store: AppState) => {
  return {
    questions: store.questions.unanswered,
    questionsLoading: store.questions.loading
  };
};


const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AnyAction>,
) => {
  return {
    getUnansweredQuestions: () =>
      dispatch(getUnansweredQuestionsActionCreator()),
  };
};


const HomePage:FC<Props> = ({
  history,
  questions,
  questionsLoading,
  getUnansweredQuestions
}) => {
  useEffect(() => {
    if (questions === null) {
      getUnansweredQuestions();
    }
  }, [questions, getUnansweredQuestions]);

  const handleAskQuestionClick = () => {
    history.push('/ask')
  };
  return (
    <Page>
      <div
        css=
        {
          css`
          margin: 50px auto 20px auto;
          padding: 30px 20px;
          max-width: 600px;`
        }
      >
        <div
          css=
          {
            css`
            display: flex;
            align-items: center;
            justify-content: space-between;` 
          }
        >
          <h2
            css=
            {
              css`
              font-size: 15px;
              font-weight: bold;
              margin: 10px 0px 5px;
              text-align: center;
              text-transform: uppercase;`
            }
          > 
            <PageTitle>Unanswered Questions</PageTitle>
          </h2>
          <PrimaryButton onClick={handleAskQuestionClick}>
            Ask a question
          </PrimaryButton>
        </div>
        {questionsLoading ? (
          <div
            css={css`
              font-size: 16px;
              font-style: italic;
            `}
          >
            Loading...
          </div>
        ) : (
          <QuestionList data={questions || []} />
        )}
      </div>
    </Page>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);