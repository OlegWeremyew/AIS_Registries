import React from 'react';

import { ReturnComponentType } from 'types';

import styles from './DocumentsInner.module.scss';

export const DocumentsInner = (): ReturnComponentType => (
  <div className={styles.innerWrapper}>
    <h2 className={styles.inner__title}>Документы</h2>
    <p className={styles.inner__text}>
      Всего документов: <span className={styles.inner__text__num}>5</span>
    </p>
  </div>
);
