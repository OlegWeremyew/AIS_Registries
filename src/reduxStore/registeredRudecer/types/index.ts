import { initialRegistered } from 'reduxStore/registeredRudecer/registeredRudecer/registeredRudecer';
import { InferActionTypes } from 'reduxStore/types';
import { RegisteredAction } from 'reduxStore/registeredRudecer';

export type RegistersType = {
  registers: RegisterItemType[];
};

export type RegisterItemType = {
  registrationNumbers: string;
  softwareName: string;
  classCode: string;
  softwareClass: string;
  registrationDate: string;
  websiteAddress: string;
};

export type registeredInitialType = typeof initialRegistered;
export type ActionRegisteredTypes = InferActionTypes<typeof RegisteredAction>;
