import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextErrorComponent";
import "../../style/selectComponent.css";

const SelectComponent = ({ label, name, options, ...rest }) => {
  return (
    <div className="form__control">
      <div className="form__controlLeft">
        <label htmlFor={name}>{label}</label>
      </div>
      <div className="form__controlRight">
        <Field
          as="select"
          className="form__field"
          id={name}
          name={name}
          {...rest}>
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
    </div>
  );
};

export default SelectComponent;
