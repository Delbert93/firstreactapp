import { FC, useState } from 'react';
import { PrimaryButton, gray5, gray6 } from './Styles';
/** @jsxImportSource @emotion/core */
import { css, jsx } from '@emotion/core';

export interface Values {
    [key: string]: any;
}

interface Props {
    submitCaption?: string;
}

export const Form: FC<Props> = ({ submitCaption, children}) =>
    null;