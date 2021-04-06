import React from "react";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import FormikControlComponent from "../formik/FormikControlComponent";
import {
  FORM_FIELDS_ERROR,
  DELETE_CLIENT_SERVER_ERRROR,
  DELETE_CLIENT_SERVER_SUCCESS,
} from "../../const/const";
import clientsListIds from "../../formOptions/clientsListIds";
import { deleteClientService } from "../../services/querys/clientService";
import "../../style/deleteClient.css";

const DeleteClientComponent = () => {
  const clientsIds = clientsListIds;

  const initialValues = {
    id: "",
  };

  const validationSchema = Yup.object({
    id: Yup.string().required(FORM_FIELDS_ERROR),
  });

  const onSubmit = async (values) => {
    const id = values.id.split("")[0];
    const response = await deleteClientService(id);

    if (response === true) {
      alert(DELETE_CLIENT_SERVER_SUCCESS);
      window.location.reload();
    } else alert(DELETE_CLIENT_SERVER_ERRROR);
  };

  return (
    <div>
      <div className="closeScreen">
        <Link to="/home">
          <img
            className="closeScreen__cross"
            src="https://cdn.imgbin.com/19/15/6/imgbin-computer-icons-error-computer-XVScfC5dQ1UJGyh7NvxkYtyEV.jpg"
            alt="closeImage"
          />
        </Link>
      </div>
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
    </div>
  );
};

export default DeleteClientComponent;
