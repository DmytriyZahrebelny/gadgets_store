import { FormEvent } from 'react';
import { ControllerRenderProps, FieldValues, ControllerFieldState } from 'react-hook-form';

export type FieldType = 'text' | 'textaria' | 'password' | 'search';
// | 'text'
// | 'password'
// | 'select'
// | 'date'
// | 'checkbox'
// | 'mask'
// | 'switch'
// | 'autocomplete';

export type EventType = FormEvent<HTMLInputElement | HTMLTextAreaElement>;

export type ControllerArgumentsType = {
  field: ControllerRenderProps<FieldValues, string>;
  fieldState: ControllerFieldState;
};

export type BaseFieldProps = {
  type: FieldType;
  name: string;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  placeholder?: string;
};

export type TextFieldProps = {
  labelPosition?: 'top' | 'left';
  defaultValue?: string;
  size?: 'large' | 'middle' | 'small';
  onChange?: (evt: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
} & BaseFieldProps;

export type TextAreaFieldProps = {
  showCount?: boolean;
  onChange?: (evt: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  defaultValue?: string;
  maxLength?: number;
  labelPosition?: 'top' | 'left';
} & BaseFieldProps;

export type SearchFieldProps = {
  enterButton?: string;
  allowClear?: boolean;
  labelPosition?: 'top' | 'left';
  onSearch?: (value: string) => void;
  defaultValue?: string;
} & BaseFieldProps;

export type FieldsProps = TextFieldProps | TextAreaFieldProps | SearchFieldProps;
