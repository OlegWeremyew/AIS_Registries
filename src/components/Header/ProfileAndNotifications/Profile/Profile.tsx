import React from 'react';

import userPhoto from '../../../../assets/images/header/userPhoto.png';
import { ReturnComponentType } from '../../../../types';

import { Menu } from './Menu';
import styles from './Profile.module.css';

export const Profile = (): ReturnComponentType => (
  <div className={styles.profileWrapper}>
    <img className={styles.profile__img} src={userPhoto} alt="user avatar" />
    <span className={styles.profile__name}>Захар Палазник</span>
    <Menu />
  </div>
);
