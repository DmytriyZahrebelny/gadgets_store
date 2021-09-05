import { ReactNode } from 'react';
import { Form as AntdForm } from 'antd';
import { FormProvider, useForm, UseFormReturn, FieldValues, UseFormProps } from 'react-hook-form';

export type FormProps = {
  onSubmit: (values: Record<string, unknown>, event: unknown, methods?: UseFormReturn<FieldValues>) => void;
  children: ReactNode;
  className?: string;
  formConfig?: UseFormProps<FieldValues, any>;
  name?: string;
};

export const Form = ({ children, onSubmit, formConfig, name = '', className = '' }: FormProps) => {
  const methods = useForm(formConfig);

  return (
    <FormProvider {...methods}>
      <AntdForm
        className={className}
        name={name}
        onFinish={methods.handleSubmit((payload, event) => {
          onSubmit(payload, event);
        })}
      >
        {children}
      </AntdForm>
    </FormProvider>
  );
};
