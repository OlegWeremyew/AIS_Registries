import { CHANGE_ANSWER_STATUS } from '../constants';

export const questionsAction = {
  changeAnswerStatus(id: string, status: boolean) {
    return {
      type: CHANGE_ANSWER_STATUS,
      payload: {
        id,
        status,
      },
    } as const;
  },
};
