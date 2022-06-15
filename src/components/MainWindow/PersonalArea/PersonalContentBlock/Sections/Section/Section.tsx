import React, { FC } from 'react';

import { ReturnComponentType } from '../../../../../../types';

import styles from './Section.module.scss';
import { SectionPropsType } from './types';

export const Section: FC<SectionPropsType> = ({ dataItem }): ReturnComponentType => {
  const blockStyle =
    // eslint-disable-next-line no-nested-ternary
    dataItem.style === 'active'
      ? styles.active
      : dataItem.style === 'logout'
      ? styles.logout
      : styles.none;

  return (
    <div className={styles.wrapper}>
      <div className={blockStyle}>
        <img src={dataItem.img} alt="action" />
        <p>{dataItem.text}</p>
      </div>
    </div>
  );
};
