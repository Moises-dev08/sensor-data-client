import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControlComponent from "../formik/FormikControlComponent";
import { FORM_FIELDS_ERROR } from "../../const/const";
import clientsListIds from "../../formOptions/clientsListIds";
import "../../style/deleteClient.css";

const DeleteClientComponent = () => {
  const clientsIds = clientsListIds;

  const initialValues = {
    id: "",
  };

  const validationSchema = Yup.object({
    id: Yup.string().required(FORM_FIELDS_ERROR),
  });

  const onSubmit = (values) => {
    alert("Cliente eliminado exitosamente!");
    window.location.reload();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      {(formik) => (
        <Form>
          <FormikControlComponent
            control="select"
            type="text"
            label="Seleccione el cliente que desea eliminar:"
            name="id"
            options={clientsIds}
            style={{ width: "500px" }}
          />

          <div className="deleteForm__buttonWrapper">
            <button className="delete__button" type="submit">
              {" "}
              Eliminar cliente
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default DeleteClientComponent;
