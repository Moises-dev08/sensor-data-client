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
      <div className="updateForm__leftColumn">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}>
          {(formik) => (
            <Form>
              <FormikControlComponent
                control="select"
                type="text"
                label="Marque el cliente que desea modificar:"
                name="id"
                options={clientsIds}
              />

              <button className="update__button" type="submit">
                {" "}
                Seleccionar
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <div className="updateForm__rightColumn">
        {valuesForm && <UpdateClientFormComponent values={valuesForm} />}
      </div>
    </div>
  );
};

export default UpdateClientComponent;
