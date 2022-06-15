import React from 'react';

import filter from '../../../../../assets/images/startPageComponnets/registers/filter/filter.svg';
import threeDotsVertical from '../../../../../assets/images/startPageComponnets/registers/filter/threeDotsVertical.svg';
import { ReturnComponentType } from '../../../../../types';

import styles from './TitleAndFilter.module.scss';

export const TitleAndFilter = (): ReturnComponentType => (
  <div className={styles.titleAndFilterWrapper}>
    <h2 className={styles.titleAndFilterWrapper__title}>Реестры</h2>
    <div className={styles.titleAndFilterWrapper__images}>
      <img
        className={styles.titleAndFilterWrapper__images_item}
        src={filter}
        alt="filter"
      />
      <img
        className={styles.titleAndFilterWrapper__images_item}
        src={threeDotsVertical}
        alt="three dots vertical"
      />
    </div>
  </div>
);
