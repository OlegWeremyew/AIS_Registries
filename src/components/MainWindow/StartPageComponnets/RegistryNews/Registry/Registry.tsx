import React, { FC } from 'react';

import calendar from '../../../../../assets/images/startPageComponnets/registryNews/calendar.png';
import { ReturnComponentType } from '../../../../../types';

import styles from './Registry.module.css';
import { RegistryPropsType } from './types';

export const Registry: FC<RegistryPropsType> = ({
  title,
  addedTime,
  description,
  img,
}): ReturnComponentType => (
  <div className={styles.registryWrapper}>
    <img className={styles.registry__img} src={img} alt="news" />
    <h3 className={styles.registry__title}>{title}</h3>
    <div className={styles.registry__timeBlock}>
      <img className={styles.registry__timeBlock__img} src={calendar} alt="calendar" />
      <time className={styles.registry__timeBlock__time}>{addedTime}</time>
    </div>
    <p className={styles.registry__description}>{description}</p>
  </div>
);
