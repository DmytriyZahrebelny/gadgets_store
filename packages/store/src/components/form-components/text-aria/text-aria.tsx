import { Form, Input } from 'antd';
import { useFormContext, Controller } from 'react-hook-form';

import { TextAreaFieldProps, ControllerArgumentsType, EventType } from '../types';
import 'antd/dist/antd.css';

export const TextAria = ({
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

  const getField = ({ field }: ControllerArgumentsType) => {
    const handleChange = (evt: EventType) => {
      if (onChange) {
        onChange(evt);
        field.onChange(evt);
      }
      field.onChange(evt);
    };

    return (
      <Form.Item
        name={name}
        label={label}
        labelCol={{ span: labelPosition === 'top' ? 24 : 0 }}
        rules={[{ required, message: `${name} is required` }]}
        initialValue={defaultValue}
      >
        <Input.TextArea name={name} onChange={handleChange} showCount={showCount} {...rest} />
      </Form.Item>
    );
  };

  return <Controller control={control} name={name} render={getField} />;
};
