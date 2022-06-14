import React, { FC } from 'react';

import { ReturnComponentType } from '../../../../../../types';

import { UpperArrowsDoublePropsType } from './types';
import styles from './UpperDoubleArrows.module.scss';

export const UpperDoubleArrows: FC<UpperArrowsDoublePropsType> = ({
  contentFirst,
  contentSecond,
}): ReturnComponentType => (
  <div className={styles.upperDoubleArrowsWrapper}>
    <img src={contentFirst} alt="arrow" />
    <img src={contentSecond} alt="arrow" />
  </div>
);
