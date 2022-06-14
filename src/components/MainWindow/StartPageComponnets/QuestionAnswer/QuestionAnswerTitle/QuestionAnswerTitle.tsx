import React from 'react';

import { ReturnComponentType } from '../../../../../types';

import styles from './QuestionAnswerTitle.module.css';

export const QuestionAnswerTitle = (): ReturnComponentType => (
  <h2 className={styles.titleWrapper}>Вопрос-ответ</h2>
);
