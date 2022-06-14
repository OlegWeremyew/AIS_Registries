import React, { FC } from 'react';

import { ReturnComponentType } from '../../../../../../types';

import styles from './Question.module.css';
import { QuestionData } from './QuestionData';
import { QuestionItem } from './QuestionItem';
import { QuestionPropsType } from './types';

export const Question: FC<QuestionPropsType> = ({ question }): ReturnComponentType => (
  <div className={styles.questionWrapper}>
    <QuestionItem title={question.title} status={question.status} />
    {question.status ? <QuestionData question={question} /> : null}
  </div>
);
