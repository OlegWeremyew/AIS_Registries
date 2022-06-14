import React, { FC } from 'react';

import cross from '../../../../../../../assets/images/startPageComponnets/questionAndAnswer/standartCross.png';
import { ReturnComponentType } from '../../../../../../../types';

import styles from './QuestionItem.module.css';
import { QuestionItemPropsType } from './types';

export const QuestionItem: FC<QuestionItemPropsType> = ({
  title,
  status,
}): ReturnComponentType => {
  const imageStyle = status ? styles.item__img__active : styles.item__img;

  return (
    <div className={styles.itemWrapper}>
      <img className={imageStyle} src={cross} alt="symbol" />
      <p className={styles.item__text}>{title}</p>
    </div>
  );
};
