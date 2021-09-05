import { Fields } from './constants';
import { FieldsProps } from '../types';

export const Field = ({ type, ...rest }: FieldsProps) => {
  const FieldComponent = Fields[type];

  return <FieldComponent type={type} {...rest} />;
};
