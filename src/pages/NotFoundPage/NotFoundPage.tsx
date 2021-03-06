import React from 'react';

import { ReturnComponentType } from 'types';

import styles from './NotFoundPage.module.scss';

const NotFoundPage = (): ReturnComponentType => (
  <div className={styles.notFoundWrapper}>Error 404. Page not found</div>
);

export default NotFoundPage;
