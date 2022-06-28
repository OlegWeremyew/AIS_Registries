import React from 'react';

import userAvatar from 'assets/images/personalArea/dataElement/userPhoto.svg';
import { ReturnComponentType } from 'types';

import styles from './Greetings.module.scss';

export const Greetings = (): ReturnComponentType => (
  <div className={styles.greetingWrapper}>
    <img className={styles.greeting_img} src={userAvatar} alt="user avatar" />
    <p className={styles.greeting_text}>Здравствуй, Захар!</p>
  </div>
);
