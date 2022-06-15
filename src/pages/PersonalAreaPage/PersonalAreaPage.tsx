import React from 'react';

import { PersonalContentBlock, PersonalTitle } from '../../components';
import { ReturnComponentType } from '../../types';

import styles from './PersonalAreaPage.module.scss';

const PersonalAreaPage = (): ReturnComponentType => (
  <div className={styles.personalAreaWrapper}>
    <PersonalTitle />
    <PersonalContentBlock />
  </div>
);

export default PersonalAreaPage;
