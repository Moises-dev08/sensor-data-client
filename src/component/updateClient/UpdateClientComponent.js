import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControlComponent from "../formik/FormikControlComponent";
import { FORM_FIELDS_ERROR } from "../../const/const";
import clientsListIds from "../../formOptions/clientsListIds";
import UpdateClientFormComponent from "./UpdateClientFormComponent";
import "../../style/updateClient.css";

const UpdateClientComponent = () => {
  const [valuesForm, setFormValues] = useState();

  const clientsIds = clientsListIds;

  const initialValues = {
    id: "",
  };

  const validationSchema = Yup.object({
    id: Yup.string().required(FORM_FIELDS_ERROR),
  });

  const onSubmit = (values) => {
    setFormValues(values);
    console.log(values);
  };
  return (
    <div className="updateForm">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        {(formik) => (
          <Form>
            <div className="updateForm__formik"></div>
            <FormikControlComponent
              control="select"
              type="text"
              label="Marque el cliente que desea modificar:"
              name="id"
              options={clientsIds}
              style={{ width: "500px" }}
            />

            <div className="updateForm__buttonWrapper">
              <button className="update__button" type="submit">
                {" "}
                Seleccionar
              </button>
            </div>
          </Form>
        )}
      </Formik>
      {valuesForm && <UpdateClientFormComponent values={valuesForm} />}
    </div>
  );
};

export default UpdateClientComponent;
