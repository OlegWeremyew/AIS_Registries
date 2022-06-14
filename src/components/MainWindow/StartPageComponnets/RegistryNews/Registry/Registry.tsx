import React, { FC } from 'react';

import calendar from '../../../../../assets/images/startPageComponnets/registryNews/calendar.png';
import { ReturnComponentType } from '../../../../../types';

import styles from './Registry.module.scss';
import { RegistryPropsType } from './types';

export const Registry: FC<RegistryPropsType> = ({ mewsItem }): ReturnComponentType => (
  <div className={styles.registryWrapper}>
    <img className={styles.registry__img} src={mewsItem.img} alt="news" />
    <h3 className={styles.registry__title}>{mewsItem.title}</h3>
    <div className={styles.registry__timeBlock}>
      <img className={styles.registry__timeBlock__img} src={calendar} alt="calendar" />
      <time className={styles.registry__timeBlock__time}>{mewsItem.addedTime}</time>
    </div>
    <p className={styles.registry__description}>{mewsItem.description}</p>
  </div>
);
