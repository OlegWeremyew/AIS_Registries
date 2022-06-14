import React from 'react';

import { Route, Routes, Navigate } from 'react-router-dom';

import { PATH } from '../../constants/router';
import { ReturnComponentType } from '../../types';

const StartPage = React.lazy(() => import('../../pages/StartPage/StartPage'));
const NotFoundPage = React.lazy(() => import('../../pages/NotFoundPage/NotFoundPage'));
const AuthorizationPage = React.lazy(
  () => import('../../pages/AuthorizationPage/AuthorizationPage'),
);
const PersonalAreaPage = React.lazy(
  () => import('../../pages/PersonalAreaPage/PersonalAreaPage'),
);

export const Routers = (): ReturnComponentType => (
  <Routes>
    <Route path={PATH.PERSONAL_AREA_PAGE} element={<PersonalAreaPage />} />
    <Route path={PATH.AUTHORIZATION_PAGE} element={<AuthorizationPage />} />
    <Route path={PATH.ERROR_PAGE_ROUTE} element={<NotFoundPage />} />
    <Route path={PATH.MAIN_PAGE} element={<StartPage />} />
    <Route path={PATH.START_PAGE} element={<Navigate to={PATH.MAIN_PAGE} />} />
  </Routes>
);
