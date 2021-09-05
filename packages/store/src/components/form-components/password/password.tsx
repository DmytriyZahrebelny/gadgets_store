import { Form, Input, Typography } from 'antd';
import { useFormContext, Controller } from 'react-hook-form';

import { TextFieldProps, ControllerArgumentsType, EventType } from '../types';
import { labelStyles } from '../styles';

export const Password = ({
  name,
  label = '',
  labelPosition = 'top',
  required,
  onChange,
  defaultValue = '',
  className,
  placeholder = '',
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
        className={className}
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
      >
        <Input.Password placeholder={placeholder} onChange={handleChange} />
      </Form.Item>
    );
  };

  return <Controller control={control} name={name} render={getField} />;
};
