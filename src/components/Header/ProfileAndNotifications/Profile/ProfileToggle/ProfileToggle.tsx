import React, { FC } from 'react';

import { useNavigate } from 'react-router-dom';

import userPhoto from '../../../../../assets/images/header/userPhoto.svg';
import { PATH } from '../../../../../constants/router';
import { ReturnComponentType } from '../../../../../types';
import { Menu } from '../Menu';

import styles from './ProfileToggle.module.scss';
import { ProfileTogglePropsType } from './types';

export const ProfileToggle: FC<ProfileTogglePropsType> = ({
  setStatus,
  status,
}): ReturnComponentType => {
  const navigate = useNavigate();

  const redirectHandler = (): void => {
    navigate(PATH.PERSONAL_AREA_PAGE);
    setStatus(false);
  };

  return (
    <div className={styles.profileWrapper}>
      <img
        onClick={redirectHandler}
        className={styles.profile__img}
        src={userPhoto}
        alt="user avatar"
      />
      <span onClick={redirectHandler} className={styles.profile__name}>
        Захар Палазник
      </span>
      <Menu setStatus={setStatus} status={status} />
    </div>
  );
};
