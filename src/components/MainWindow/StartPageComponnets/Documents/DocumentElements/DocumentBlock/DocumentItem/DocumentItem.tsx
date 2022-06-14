import React, { FC } from 'react';

import downloadButton from '../../../../../../../assets/images/startPageComponnets/documents/downloadButton.png';
import { ReturnComponentType } from '../../../../../../../types';

import styles from './DocumentItem.module.css';
import { DocumentItemPropsType } from './types';

export const DocumentItem: FC<DocumentItemPropsType> = ({
  document,
}): ReturnComponentType => (
  <div className={styles.documentItemWrapper}>
    <p className={styles.documentItem__category}>{document.category}</p>
    <p className={styles.documentItem__name}>{document.name}</p>
    <time className={styles.documentItem__date}>{document.date}</time>
    <p className={styles.documentItem__number}>{document.number}</p>
    <div className={styles.download}>
      <img className={styles.download__img} src={downloadButton} alt="Download button" />
      <div className={styles.download__block}>
        <p className={styles.download__block__text}>Скачать</p>
        <p className={styles.download__block__button}>({document.weight})</p>
      </div>
    </div>
  </div>
);
