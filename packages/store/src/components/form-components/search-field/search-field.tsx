import { Form, Input, Typography } from 'antd';
import { useFormContext, Controller } from 'react-hook-form';

import { SearchFieldProps, ControllerArgumentsType } from '../types';
import { labelStyles } from '../styles';
import 'antd/dist/antd.css';

export const SearchField = ({
  type,
  name,
  label = '',
  labelPosition = 'top',
  required,
  onSearch,
  defaultValue = '',
  className,
  ...props
}: SearchFieldProps) => {
  const { control } = useFormContext();

  const getField = ({ field, fieldState }: ControllerArgumentsType) => {
    const handleChange = (value: string) => {
      if (onSearch) {
        onSearch(value);
      }
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
        className={className}
      >
        <Input.Search type={type} {...field} onSearch={handleChange} {...props} />
      </Form.Item>
    );
  };

  return <Controller control={control} name={name} render={getField} />;
};
