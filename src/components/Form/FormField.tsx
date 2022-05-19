import React, { ForwardedRef } from 'react';
import { FormItem, Input, Label, FormItemBar } from './FormField.styles';

interface FormFieldProps {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string | number;
  label: string;
  name: string;
  id: string;
  placeholder?: string;
  step?: string;
  type?: string;
}

const FormField = React.forwardRef(
  (
    {
      onChange,
      value,
      label,
      name,
      id,
      placeholder,
      step,
      type = 'text',
      ...props
    }: FormFieldProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <FormItem>
        <Input
          name={name}
          id={id}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          step={step}
          {...props}
          ref={ref}
        />
        <Label htmlFor={id}>{label} </Label>
        <FormItemBar />
      </FormItem>
    );
  }
);

export default FormField;
