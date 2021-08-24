import { Form, Input } from 'antd';
import { useFormContext, Controller } from 'react-hook-form';

import { TextAreaFieldProps, ControllerArgumentsType, EventType } from '../types';
import 'antd/dist/antd.css';

export const TextAriaField = ({
  name,
  label,
  onChange,
  required,
  defaultValue = '',
  labelPosition = 'top',
  showCount = false,
  ...rest
}: TextAreaFieldProps) => {
  const { control } = useFormContext();

  const getField = ({ field, fieldState }: ControllerArgumentsType) => {
    const handleChange = (evt: EventType) => {
      if (onChange) {
        onChange(evt);
        field.onChange(evt);
      }
      field.onChange(evt);
    };
    console.log(fieldState);
    return (
      <Form.Item
        name={name}
        label={label}
        labelCol={{ span: labelPosition === 'top' ? 24 : 0 }}
        rules={[{ required, message: fieldState.error?.message }]}
      >
        <Input.TextArea
          name={name}
          onChange={handleChange}
          defaultValue={defaultValue}
          showCount={showCount}
          {...rest}
        />
      </Form.Item>
    );
  };

  return <Controller control={control} name={name} render={getField} />;
};
