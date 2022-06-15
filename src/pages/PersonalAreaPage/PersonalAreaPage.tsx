import React from 'react';

import { PersonalContentBlock, PersonalTitle, Return } from '../../components';
import { ReturnComponentType } from '../../types';

import styles from './PersonalAreaPage.module.scss';

const PersonalAreaPage = (): ReturnComponentType => (
  <div className={styles.personalAreaWrapper}>
    <Return />
    <PersonalTitle />
    <PersonalContentBlock />
  </div>
);

export default PersonalAreaPage;
