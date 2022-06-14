import React from 'react';

import { ReturnComponentType } from '../../../../types';

import { Questions } from './Question';
import styles from './QuestionAnswer.module.css';
import { QuestionAnswerTitle } from './QuestionAnswerTitle';

export const QuestionAnswer = (): ReturnComponentType => (
  <div className={styles.wrapperContainer}>
    <QuestionAnswerTitle />
    <Questions />
  </div>
);
