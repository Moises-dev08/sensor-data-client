import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControlComponent from "../formik/FormikControlComponent";
import { FORM_FIELDS_ERROR } from "../../const/const";
import countriesList from "../../formOptions/countriesList";
import zoneList from "../../formOptions/zoneList";
import assuranceList1 from "../../formOptions/assuranceList1";
import assuranceList2 from "../../formOptions/assuranceList2";
import activeOptions from "../../formOptions/activeOptions";
import "../../style/updateClientForm.css";

const UpdateClientFormComponent = ({ values }) => {
  const clientId = values.id.slice(0, 2);
  const client = values.id;
  const countriesDropdownOptions = countriesList;
  const zoneDropdownOptions = zoneList;
  const assuranceOptions1 = assuranceList1;
  const assuranceOptions2 = assuranceList2;

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
    selectAssuranceOption1: [],
    selectAssuranceOption2: [],
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
    selectAssuranceOption1: Yup.array().required(FORM_FIELDS_ERROR),
    selectAssuranceOption2: Yup.array().required(FORM_FIELDS_ERROR),
    activo: Yup.boolean().required(FORM_FIELDS_ERROR),
  });

  const onSubmit = (values) => {
    alert("Cliente modificado exitosamente!");
    window.location.reload();
  };
  return (
    <div className="updateClientForm">
      <div className="form__title">
        <h4> Usted esta modificando los datos del cliente: {client}</h4>
      </div>
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
                label="Razon Social:"
                name="razonSocial"
              />{" "}
              <FormikControlComponent
                control="input"
                type="text"
                name="nroDeRuc"
                label="Nro. de Ruc:"
                style={{ width: "200px" }}
              />
              <FormikControlComponent
                control="input"
                type="text"
                label="Dirección:"
                name="direccion"
              />
              <FormikControlComponent
                control="select"
                type="text"
                label="País:"
                name="selectCountryOption"
                options={countriesDropdownOptions}
                style={{ width: "300px" }}
              />
              <FormikControlComponent
                control="input"
                type="text"
                label="Ciudad:"
                name="ciudad"
              />
              <FormikControlComponent
                control="input"
                type="text"
                label="Código Postal:"
                name="codigoPostal"
              />
              <FormikControlComponent
                control="select"
                type="text"
                label="Zona:"
                name="selectZoneOption"
                options={zoneDropdownOptions}
                style={{ width: "300px" }}
              />
              <FormikControlComponent
                control="input"
                type="text"
                label="Telefono:"
                name="telefono"
                style={{ width: "200px" }}
              />{" "}
              <FormikControlComponent
                control="input"
                type="text"
                label="Fax:"
                name="fax"
                style={{ width: "200px" }}
              />{" "}
              <FormikControlComponent
                control="input"
                type="text"
                label="Email:"
                name="email"
              />{" "}
              <FormikControlComponent
                control="input"
                type="text"
                label="Web:"
                name="web"
              />
              <div className="formAssurance__wrapper">
                <p>Seguro</p>
                <div className="formAssurance__titles">
                  <p className="formAssurance__title1">Descripción</p>
                  <div className="formAssurance__optionsTitle">
                    <p>Si</p>
                    <p className="formAssurance__options">No</p>
                    <p>Opcional</p>
                  </div>
                </div>
                <div className="formAssurance__option">
                  <div className="formAssurance__tittle">
                    Uruguay – Tránsitos
                  </div>
                  <div className="formAssurance__checkboxOptions">
                    <FormikControlComponent
                      control="checkbox"
                      name="selectAssuranceOption1"
                      options={assuranceOptions1}
                      style={{ width: "300px", display: "flex" }}
                    />
                  </div>
                </div>
                <div className="formAssurance__option">
                  <div className="formAssurance__tittle">
                    Uruguay – Tránsitos Carga Suelta
                  </div>
                  <div className="formAssurance__checkboxOptions">
                    <FormikControlComponent
                      control="checkbox"
                      name="selectAssuranceOption2"
                      options={assuranceOptions2}
                      style={{ width: "300px" }}
                    />
                  </div>
                </div>
              </div>
              <div className="formActive">
                <FormikControlComponent
                  control="checkbox"
                  type="text"
                  label="Activo"
                  name="activo"
                  options={activeOptions}
                />
              </div>
              <div className="form__buttonComtainer">
                <button className="form__button" type="submit">
                  {" "}
                  Modificar cliente
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default UpdateClientFormComponent;
