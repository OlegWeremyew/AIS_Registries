import React, { FC } from 'react';

import { ReturnComponentType } from 'types';

import styles from './QuestionData.module.scss';
import { QuestionDataPropsType } from './types';

export const QuestionData: FC<QuestionDataPropsType> = ({
  question,
}): ReturnComponentType => (
  <div className={styles.dataWrapper}>
    <p className={styles.data__answer}>1. {question.data1}</p>
    <p className={styles.data__answer}>2. {question.data2}</p>
    <p className={styles.data__answer}>3. {question.data3}</p>
    <p className={styles.data__answer}>4. {question.data4}</p>
  </div>
);
