import { sortStatusType } from '../../../components/MainWindow/StartPageComponnets/Registers/Elements/Category/SoftwareName/types';
import {
  CHANGE_SORT_BY_REGISTRATION_NAMES_SOFTWARE,
  CHANGE_SORT_BY_REGISTRATION_NUMBERS,
  SET_REGISTRATION_SEARCH,
} from '../constants';

export const RegisteredAction = {
  changeSortByRegistrationNumbers() {
    return {
      type: CHANGE_SORT_BY_REGISTRATION_NUMBERS,
    } as const;
  },
  changeSortByRegistrationNamesSoftware(sortStatus: sortStatusType) {
    return {
      type: CHANGE_SORT_BY_REGISTRATION_NAMES_SOFTWARE,
      payload: {
        sortStatus,
      },
    } as const;
  },
  setRegistrationSearch(search: string) {
    return {
      type: SET_REGISTRATION_SEARCH,
      payload: {
        search,
      },
    } as const;
  },
};
