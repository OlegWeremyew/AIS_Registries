import React from 'react';

import { ReturnComponentType } from '../../types';

import { Contacts } from './Contacts';
import styled from './Footer.module.scss';
import { Information } from './Information';
import { LogoAndGeneralInformation } from './LogoAndGeneralInformation';
import { LowerLevel } from './LowerLevel';
import { TechnicalSupport } from './TechnicalSupport';

export const Footer = (): ReturnComponentType => (
  <footer className={styled.footerWrapper}>
    <div className={styled.footer__upper}>
      <LogoAndGeneralInformation />
      <Information />
      <TechnicalSupport />
      <Contacts />
    </div>
    <LowerLevel />
  </footer>
);
