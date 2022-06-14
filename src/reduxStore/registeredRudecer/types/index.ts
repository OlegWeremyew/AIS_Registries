import { InferActionTypes } from '../../types';
import { RegisteredAction } from '../RegisteredAction';
import { initialRegistered } from '../registeredRudecer/registeredRudecer';

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
