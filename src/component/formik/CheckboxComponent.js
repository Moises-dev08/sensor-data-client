import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextErrorComponent";

const CheckboxComponent = ({ label, name, options, ...rest }) => {
  return (
    <div className="form__control">
      <label>{label}</label>
      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <React.Fragment key={option.key}>
                <input
                  type="checkbox"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value.includes(option.value)}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </React.Fragment>
            );
          });
        }}
      </Field>

      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default CheckboxComponent;
