import React from 'react';

import { ReturnComponentType } from '../../../types';

import styles from './Information.module.scss';

export const Information = (): ReturnComponentType => (
  <div className={styles.informationWrapper}>
    <h2 className={styles.information__title}>Информация</h2>
    <div className={styles.information__chapterBlock}>
      <p className={styles.information__chapter}>Реестры</p>
      <p className={styles.information__chapter}>Новости</p>
      <p className={styles.information__chapter}>Документы</p>
      <p className={styles.information__chapter}>Вопросы</p>
    </div>
  </div>
);
