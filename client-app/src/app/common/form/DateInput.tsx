import React from "react";
import { FieldRenderProps } from "react-final-form";
import { FormFieldProps, Form, Label } from "semantic-ui-react";
import { DateTimePicker } from "react-widgets";

interface IProps extends FieldRenderProps<Date, HTMLElement>, FormFieldProps {
  id?: string;
}

const DateInput: React.FC<IProps> = ({
  input,
  width,
  type,
  placeholder,
  date = false,
  time = false,
  meta: { touched, error },
  ...rest
}) => {
  return (
    <Form.Field error={touched && !!error} type={type} width={width}>
      <DateTimePicker
        placeholder={placeholder}
        onBlur={input.onBlur}
        value={input.value || null}
        onChange={input.onChange}
        onKeyDown={(e) => e.preventDefault()}
        date={date}
        time={time}
        {...rest}
      />
      {touched && error && <Label basic color="red">{error}</Label>}
    </Form.Field>
  );
};

export default DateInput;
