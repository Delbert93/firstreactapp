import React from 'react';
import { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/core */
import { css, jsx } from '@emotion/core';
import { PrimaryButton } from './Styles';
import { QuestionList } from './QuestionList';
import { getUnansweredQuestions, QuestionData  } from './QuestionData';
import { Page } from './Page';
import { PageTitle } from './PageTitle';


export const HomePage = () => {
  const [questions, setQuestions] = useState<QuestionData[] | null>(null);
  const [questionsLoading, setQuestionsLoading] = useState(true);
  useEffect(() => {
    const doGetUnansweredQuestions = async () => {
      const unansweredQuestions = await getUnansweredQuestions();
      setQuestions(unansweredQuestions);
      setQuestionsLoading(false);
    };
    doGetUnansweredQuestions();
  });
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
          <PrimaryButton>Ask a question</PrimaryButton>
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