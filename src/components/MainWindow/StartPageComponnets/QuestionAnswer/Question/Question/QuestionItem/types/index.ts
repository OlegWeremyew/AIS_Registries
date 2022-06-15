export type QuestionItemPropsType = {
  title: string;
  status: boolean;
  changeStatus: (id: string, status: boolean) => void;
  id: string;
};
