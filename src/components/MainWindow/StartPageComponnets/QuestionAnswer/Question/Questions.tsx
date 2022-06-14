import React from 'react';

import { useSelector } from 'react-redux';

import { getQuestionList } from '../../../../../selectors';
import { ReturnComponentType } from '../../../../../types';

import { Question } from './Question';
import styles from './Questions.module.scss';

export const Questions = (): ReturnComponentType => {
  const questionsList = useSelector(getQuestionList);
  return (
    <div className={styles.questionsWrapper}>
      {questionsList.map(question => (
        <Question key={question.id} question={question} />
      ))}
    </div>
  );
};
