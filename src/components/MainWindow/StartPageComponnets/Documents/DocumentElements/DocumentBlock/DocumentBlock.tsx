import React from 'react';

import { useSelector } from 'react-redux';

import { getDocumentsList } from '../../../../../../selectors';
import { ReturnComponentType } from '../../../../../../types';

import styles from './DocumentBlock.module.scss';
import { DocumentItem } from './DocumentItem';

export const DocumentBlock = (): ReturnComponentType => {
  const documentsList = useSelector(getDocumentsList);

  return (
    <div className={styles.documentBlockWrapper}>
      {documentsList.map(document => (
        <DocumentItem key={document.id} document={document} />
      ))}
    </div>
  );
};
