import React from 'react';

import { Return } from '../../components';
import { AuthorizationElements } from '../../components/common';
import { ReturnComponentType } from '../../types';

import styles from './AuthorizationPage.module.scss';

const AuthorizationPage = (): ReturnComponentType => (
  <div className={styles.authorizationPageWrapper}>
    <Return />
    <AuthorizationElements />
  </div>
);

export default AuthorizationPage;
