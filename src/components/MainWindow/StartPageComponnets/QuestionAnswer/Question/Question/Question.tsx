import React, { FC } from 'react';

import { useDispatch } from 'react-redux';

import { questionsAction } from 'reduxStore/questionReducer';
import { ReturnComponentType } from 'types';

import styles from './Question.module.scss';
import { QuestionData } from './QuestionData';
import { QuestionItem } from './QuestionItem';
import { QuestionPropsType } from './types';

export const Question: FC<QuestionPropsType> = ({ question }): ReturnComponentType => {
  const dispatch = useDispatch();

  const changeStatus = (id: string, status: boolean): void => {
    dispatch(questionsAction.changeAnswerStatus(id, !status));
  };

  return (
    <div className={styles.questionWrapper}>
      <QuestionItem
        changeStatus={changeStatus}
        title={question.title}
        status={question.status}
        id={question.id}
      />
      {question.status ? <QuestionData question={question} /> : null}
    </div>
  );
};
