import React from 'react';

import { ReturnComponentType } from '../../../../types';

import styles from './Developer.module.css';

export const Developer = (): ReturnComponentType => (
  <div className={styles.developerWrapper}>
    <h3 className={styles.developer__title}>Разработчик</h3>
    <p className={styles.developer__name}>ОАО «Агентство сервисизации и реинжиниринга»</p>
    <address className={styles.developer__address}>Минск, улица Клары Цеткин, 24</address>
  </div>
);
