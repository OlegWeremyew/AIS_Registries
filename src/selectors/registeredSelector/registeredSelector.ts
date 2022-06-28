import { AppRootStateType } from 'reduxStore/types';
import { RegisterItemType } from 'reduxStore/registeredRudecer/types';

export const getRegisteredList = (state: AppRootStateType): RegisterItemType[] =>
  state.registered.registers;
