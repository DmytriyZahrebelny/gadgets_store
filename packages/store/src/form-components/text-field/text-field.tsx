import { Form, Input } from 'antd';
import { useFormContext, Controller } from 'react-hook-form';
import c from 'classnames';

import { TextFieldProps, ControllerArgumentsType, EventType } from '../types';
import { styles } from './text-field.styles';
import 'antd/dist/antd.css';

export const TextField = ({
  type,
  name,
  label = '',
  labelPosition = 'top',
  required,
  onChange,
  defaultValue = '',
  className,
}: TextFieldProps) => {
  const { control } = useFormContext();

  const getField = ({ field, fieldState }: ControllerArgumentsType) => {
    const handleChange = (evt: EventType) => {
      if (onChange) {
        onChange(evt);
        field.onChange(evt);
      }
      field.onChange(evt);
    };

    return (
      <Form.Item
        label={label}
        labelCol={{ span: labelPosition === 'top' ? 24 : 0 }}
        name={name}
        rules={[{ required, message: fieldState.error?.message }]}
        extra={fieldState.error?.message}
      >
        <Input
          className={c(styles, className)}
          type={type}
          defaultValue={defaultValue}
          {...field}
          onChange={handleChange}
        />
      </Form.Item>
    );
  };

  return <Controller control={control} name={name} render={getField} />;
};
