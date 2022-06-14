import React from 'react';

import { useSelector } from 'react-redux';

import { getDocumentsList } from '../../../../../../selectors/documentSelector/documentSelector';
import { ReturnComponentType } from '../../../../../../types';

import styles from './DocumentBlock.module.css';
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
