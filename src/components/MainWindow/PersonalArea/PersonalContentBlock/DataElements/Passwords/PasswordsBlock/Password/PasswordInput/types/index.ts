export type PasswordInputPropsType = {
  id: string;
  placeholder?: string;
  imgEye: any;
  changePasswordStatus: (status: boolean) => void;
  changePasswordVisibility: () => void;
  type: string;
};
