import { DetailedHTMLProps, SelectHTMLAttributes } from 'react';

export type DataSelectPropsType = DefaultSelectPropsType & {
  id: string;
  label: string;
  name: string;
  list: any[];
};

export type DefaultSelectPropsType = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;
