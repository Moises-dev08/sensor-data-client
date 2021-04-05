import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControlComponent from "../formik/FormikControlComponent";
import countriesList from "../../formOptions/countriesList";
import zoneList from "../../formOptions/zoneList";
import assuranceList from "../../formOptions/assuranceList";
import activeOptions from "../../formOptions/activeOptions";
import { FORM_FIELDS_ERROR } from "../../const/const";
import "../../style/newClient.css";

const FormikContainerComponent = () => {
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
  });

  const onSubmit = (values) => {
    alert("Cliente creado exitosamente!");
    window.location.reload();
  };
  return (
    <div className="formWraper">
      <div className="form__title">Nuevo</div>
      <div className="form">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}>
          {(formik) => (
            <Form className="form__wraper">
              <FormikControlComponent
                control="input"
                type="text"
                label="Razon Social"
                name="razonSocial"
              />
              <div className="form__nrodeRuc">
                <FormikControlComponent
                  control="input"
                  type="text"
                  label="Nro. de Ruc"
                  name="nroDeRuc"
                />
              </div>
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
                control="checkbox"
                type="text"
                label="Activo"
                name="activo"
                options={activeOptions}
              />
              <button className="newClient__button" type="submit">
                {" "}
                Nuevo cliente
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default FormikContainerComponent;
