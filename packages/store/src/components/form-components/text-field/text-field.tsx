import { Form, Input, Typography } from 'antd';
import { useFormContext, Controller } from 'react-hook-form';
import { cx } from '@emotion/css';

import { TextFieldProps, ControllerArgumentsType, EventType } from '../types';
import { styles } from './text-field.styles';
import { labelStyles } from '../styles';
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
        label={
          <Typography.Text strong className={labelStyles}>
            {label}
          </Typography.Text>
        }
        labelCol={{ span: labelPosition === 'top' ? 24 : 0 }}
        name={name}
        required={required}
        initialValue={defaultValue}
        validateStatus={fieldState.error?.message ? 'error' : ''}
        help={fieldState.error?.message ? fieldState.error?.message : ''}
        className={cx(styles, className)}
      >
        <Input type={type} {...field} onChange={handleChange} />
      </Form.Item>
    );
  };

  return <Controller control={control} name={name} render={getField} />;
};
