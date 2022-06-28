import React from 'react';

import calendar from 'assets/images/header/calendar.svg';
import { ReturnComponentType } from 'types';

import styles from './Calendar.module.scss';

export const Calendar = (): ReturnComponentType => (
  <div className={styles.calendarWrapper}>
    <img src={calendar} alt="calendar" title="calendar" />
  </div>
);
