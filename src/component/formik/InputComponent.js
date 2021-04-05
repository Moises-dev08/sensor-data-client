import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextErrorComponent";
import "../../style/inputComponent.css";

const InputComponent = ({ label, name, ...rest }) => {
  return (
    <div className="form__control">
      <div className="form__controlLeft">
        <label htmlFor={name} className="form__controlLabel">
          {label}
        </label>
      </div>
      <div className="form__controlRight">
        <Field id={name} name={name} {...rest} />
        <ErrorMessage
          className="form__controlError"
          name={name}
          component={TextError}
        />
      </div>
    </div>
  );
};

export default InputComponent;
