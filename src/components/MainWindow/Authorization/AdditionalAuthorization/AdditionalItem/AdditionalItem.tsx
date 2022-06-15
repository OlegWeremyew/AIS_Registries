import React, { FC } from 'react';

import { ReturnComponentType } from '../../../../../types';

import styles from './AdditionalItem.module.scss';
import { AdditionalItemPropsType } from './types';

export const AdditionalItem: FC<AdditionalItemPropsType> = ({
  text,
}): ReturnComponentType => (
  <div className={styles.itemWrapper}>
    <p className={styles.text}>{text}</p>
  </div>
);
