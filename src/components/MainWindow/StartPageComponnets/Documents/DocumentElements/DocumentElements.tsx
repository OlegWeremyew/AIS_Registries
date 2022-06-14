import React from 'react';

import { ReturnComponentType } from '../../../../../types';

import { DocumentBlock } from './DocumentBlock';
import styles from './DocumentElements.module.scss';
import { DocumentsСategories } from './DocumentsСategories';

export const DocumentElements = (): ReturnComponentType => (
  <div className={styles.elementsWrapper}>
    <DocumentsСategories />
    <DocumentBlock />
  </div>
);
