import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControlComponent from "../formik/FormikControlComponent";
import { FORM_FIELDS_ERROR } from "../../const/const";
import countriesList from "../../formOptions/countriesList";
import zoneList from "../../formOptions/zoneList";
import assuranceList from "../../formOptions/assuranceList";

const UpdateClientFormComponent = ({ values }) => {
  const clientId = values.id.slice(0, 2);
  const client = values.id;
  const countriesDropdownOptions = countriesList;
  const zoneDropdownOptions = zoneList;
  const assuranceOptions = assuranceList;

  const initialValues = {
    razonSocial: "",
    nroDeRuc: "",
    direccion: "",
    selectCountryOption: "",
    ciudad: "",
    codigoPostal: "",
    selectZoneOption: "",
    telefono: "",
    fax: "",
    email: "",
    web: "",
    selectAssuranceOption: [],
    activo: "",
  };

  const validationSchema = Yup.object({
    razonSocial: Yup.string().required(FORM_FIELDS_ERROR),
    nroDeRuc: Yup.number().integer().required(FORM_FIELDS_ERROR),
    direccion: Yup.string().required(FORM_FIELDS_ERROR),
    selectCountryOption: Yup.string().required(FORM_FIELDS_ERROR),
    ciudad: Yup.string().required(FORM_FIELDS_ERROR),
    codigoPostal: Yup.number().integer().required(FORM_FIELDS_ERROR),
    selectZoneOption: Yup.string().required(FORM_FIELDS_ERROR),
    telefono: Yup.string().required(FORM_FIELDS_ERROR),
    fax: Yup.string().required(FORM_FIELDS_ERROR),
    email: Yup.string().required(FORM_FIELDS_ERROR),
    web: Yup.string().required(FORM_FIELDS_ERROR),
    selectAssuranceOption: Yup.array().required(FORM_FIELDS_ERROR),
    activo: Yup.boolean().required(FORM_FIELDS_ERROR),
  });

  const onSubmit = (values) => {
    alert("Cliente modificado exitosamente!");
    window.location.reload();
  };
  return (
    <div className="updateClientForm">
      <h4> Usted esta modificando los datos del cliente: {client}</h4>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        {(formik) => (
          <Form>
            <FormikControlComponent
              control="input"
              type="text"
              label="Razon Social"
              name="razonSocial"
            />
            <FormikControlComponent
              control="input"
              type="text"
              label="Nro. de Ruc"
              name="nroDeRuc"
            />
            <FormikControlComponent
              control="input"
              type="text"
              label="Dirección"
              name="direccion"
            />
            <FormikControlComponent
              control="select"
              type="text"
              label="País"
              name="selectCountryOption"
              options={countriesDropdownOptions}
            />
            <FormikControlComponent
              control="input"
              type="text"
              label="Ciudad"
              name="ciudad"
            />
            <FormikControlComponent
              control="input"
              type="text"
              label="Código Postal"
              name="codigoPostal"
            />
            <FormikControlComponent
              control="select"
              type="text"
              label="Zona"
              name="selectZoneOption"
              options={zoneDropdownOptions}
            />
            <FormikControlComponent
              control="input"
              type="text"
              label="Telefono"
              name="telefono"
            />{" "}
            <FormikControlComponent
              control="input"
              type="text"
              label="Fax"
              name="fax"
            />{" "}
            <FormikControlComponent
              control="input"
              type="text"
              label="Email"
              name="email"
            />{" "}
            <FormikControlComponent
              control="input"
              type="text"
              label="Web"
              name="web"
            />
            <FormikControlComponent
              control="checkbox"
              label="Seguro"
              name="selectAssuranceOption"
              options={assuranceOptions}
            />
            <FormikControlComponent
              control="input"
              type="text"
              label="Activo"
              name="activo"
            />
            <button type="submit"> Modificar cliente</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UpdateClientFormComponent;
