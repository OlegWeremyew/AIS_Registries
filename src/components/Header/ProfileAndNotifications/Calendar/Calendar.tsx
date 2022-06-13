import React from 'react';

import calendar from '../../../../assets/images/header/calendar.png';
import { ReturnComponentType } from '../../../../types';

import styles from './Calendar.module.css';

export const Calendar = (): ReturnComponentType => (
  <div className={styles.calendarWrapper}>
    <img src={calendar} alt="calendar" />
  </div>
);
