import React, { FC } from 'react';

import { ReturnComponentType } from '../../../../../../types';

import { UpperArrowsPropsType } from './types';
import styles from './UpperArrows.module.scss';

export const UpperArrows: FC<UpperArrowsPropsType> = ({
  content,
}): ReturnComponentType => (
  <div className={styles.upperArrowsWrapper}>
    <img src={content} alt="arrow" />
  </div>
);
