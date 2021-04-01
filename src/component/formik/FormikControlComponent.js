import React from "react";
import InputComponent from "./InputComponent";
import SelectComponent from "./SelectComponent";
import CheckboxComponent from "./CheckboxComponent";

const FormikControlComponent = ({ control, ...rest }) => {
  switch (control) {
    case "input":
      return <InputComponent {...rest} />;
    case "select":
      return <SelectComponent {...rest} />;
    case "checkbox":
      return <CheckboxComponent {...rest} />;
    default:
      return null;
  }
};

export default FormikControlComponent;
