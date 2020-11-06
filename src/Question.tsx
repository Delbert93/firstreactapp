import { FC } from 'react';
import React from 'react';
/** @jsxImportSource @emotion/core */
import { css, jsx } from '@emotion/core';
import { QuestionData } from './QuestionData';
import { gray3 } from './Styles';

interface Props {
    data: QuestionData;
}


export const Question: FC<Props> = ({ data }) => (
<div
    css=
    {
        css`
        padding: 10px 0px;
    `}
>
    <div
    css=
    {
        css`
        padding: 10px 0px;
        font-size: 19px;
    `}
    >
    {data.title}
    </div>
    <div
    css=
    {
        css`
        font-size: 12px;
        font-style: italic;
        color: ${gray3};
    `}
    >
    {`Asked by ${data.userName} on
        ${data.created.toLocaleDateString()} ${data.created.toLocaleTimeString()}`}
    </div>
</div>
);