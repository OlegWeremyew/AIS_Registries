import { RegisterItemType } from '../../reduxStore/registeredRudecer/types';
import { AppRootStateType } from '../../reduxStore/types';

export const getRegisteredList = (state: AppRootStateType): RegisterItemType[] =>
  state.registered.registers;
