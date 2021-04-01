import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextErrorComponent";

const SelectComponent = ({ label, name, options, ...rest }) => {
  return (
    <div className="form__control">
      <label htmlFor={name}>{label}</label>
      <Field as="select" id={name} name={name} {...rest}>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.value}
            </option>
          );
        })}
      </Field>

      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default SelectComponent;
