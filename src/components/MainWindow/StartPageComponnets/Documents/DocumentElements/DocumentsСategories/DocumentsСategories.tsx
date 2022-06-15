import React from 'react';

import download from '../../../../../../assets/images/startPageComponnets/documents/download.svg';
import { ReturnComponentType } from '../../../../../../types';

import styles from './DocumentsСategories.module.scss';

export const DocumentsСategories = (): ReturnComponentType => (
  <div className={styles.categoryWrapper}>
    <p className={styles.category__category}>Категория</p>
    <p className={styles.category__name}>Наименование</p>
    <p className={styles.category__date}>Дата</p>
    <p className={styles.category__number}>Номер</p>
    <div className={styles.category__content}>
      <img className={styles.category__content__img} src={download} alt="download" />
      <p className={styles.category__content__text}>Содержание</p>
    </div>
  </div>
);
