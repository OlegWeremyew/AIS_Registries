import React, { FC } from 'react';

import { ReturnComponentType } from 'types';

import styles from './PaginatorButton.module.scss';
import { PaginatorButtonPropsType } from './types';

export const PaginatorButton: FC<PaginatorButtonPropsType> = ({
  content,
  setStyle,
}): ReturnComponentType => {
  const styled = setStyle
    ? `${styles.buttonWrapper} ${styles.active}`
    : `${styles.buttonWrapper}`;

  return (
    <button className={styled} type="button">
      {content}
    </button>
  );
};
