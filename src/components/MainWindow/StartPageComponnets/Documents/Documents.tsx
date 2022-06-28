import React from 'react';

import { ReturnComponentType } from 'types';

import { DocumentElements } from './DocumentElements';
import styles from './Documents.module.scss';
import { DocumentsInner } from './DocumentsInner';

export const Documents = (): ReturnComponentType => (
  <div className={styles.documentsWrapper}>
    <DocumentsInner />
    <DocumentElements />
  </div>
);
