import React, { FC } from 'react';

import { ReturnComponentType } from '../../../../../../types';

import { UpperArrowsDoublePropsType } from './types';
import styles from './UpperDoubleArrows.module.css';

export const UpperDoubleArrows: FC<UpperArrowsDoublePropsType> = ({
  contentFirst,
  contentSecond,
}): ReturnComponentType => (
  <div className={styles.upperArrowsWrapper}>
    <img src={contentFirst} alt="arrow" />
    <img src={contentSecond} alt="arrow" />
  </div>
);
