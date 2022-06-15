import React, { FC } from 'react';

import { useNavigate } from 'react-router-dom';

import user from '../../../../../assets/images/header/user.svg';
import userPhoto from '../../../../../assets/images/header/userPhoto.svg';
import { PATH } from '../../../../../constants/router';
import { ReturnComponentType } from '../../../../../types';
import { Menu } from '../Menu';

import styles from './ProfileOpen.module.scss';
import { ProfileOpenPropsType } from './types';

export const ProfileOpen: FC<ProfileOpenPropsType> = ({
  setStatus,
  status,
}): ReturnComponentType => {
  const navigate = useNavigate();

  const redirectToUserProfileHandler = (): void => {
    navigate(PATH.PERSONAL_AREA_PAGE);
    setStatus(false);
  };

  const redirectToAuthorizationHandler = (): void => {
    navigate(PATH.AUTHORIZATION_PAGE);
    setStatus(false);
  };

  return (
    <div className={styles.profileOpenWrapper}>
      <div className={styles.profile__block}>
        <img
          onClick={redirectToUserProfileHandler}
          className={styles.profile__img}
          src={userPhoto}
          alt="user avatar"
        />
        <span onClick={redirectToUserProfileHandler} className={styles.profile__name}>
          Захар Палазник
        </span>
        <Menu setStatus={setStatus} status={status} />
      </div>
      <div className={styles.profile__block}>
        <img
          onClick={redirectToAuthorizationHandler}
          className={styles.profile__img}
          src={user}
          alt="user avatar"
        />
        <span onClick={redirectToAuthorizationHandler} className={styles.profile__name}>
          Вход в аккаунт
        </span>
        <Menu setStatus={setStatus} status={status} />
      </div>
    </div>
  );
};
