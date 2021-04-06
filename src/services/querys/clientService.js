import axios from "axios";
import {
  NEW_CLIENT_SERVER_URL,
  MODIFY_CLIENT_SERVER_URL,
  DELETE_CLIENT_SERVER_URL,
  MAIN_SERVER_URL,
} from "../../const/const";

const newClientService = async (data) => {
  try {
    const response = await axios.post(MAIN_SERVER_URL + NEW_CLIENT_SERVER_URL, {
      razonSocial: data.razonSocial,
      nroDeRuc: data.nroDeRuc,
      direccion: data.direccion,
      pais: data.pais,
      ciudad: data.ciudad,
      codigoPostal: data.codigoPostal,
      zona: data.zona,
      telefono: data.telefono,
      fax: data.fax,
      email: data.email,
      web: data.web,
      seguroTransitos: data.seguroTransitos,
      segurosTransitosCargaSuelta: data.segurosTransitosCargaSuelta,
      activo: data.activo,
    });
    return response.data;
  } catch (err) {
    return err;
  }
};

const modifyClientService = async (data) => {
  try {
    const response = await axios.put(
      MAIN_SERVER_URL + MODIFY_CLIENT_SERVER_URL + data.id,
      {
        razonSocial: data.razonSocial,
        nroDeRuc: data.nroDeRuc,
        direccion: data.direccion,
        pais: data.pais,
        ciudad: data.ciudad,
        codigoPostal: data.codigoPostal,
        zona: data.zona,
        telefono: data.telefono,
        fax: data.fax,
        email: data.email,
        web: data.web,
        seguroTransitos: data.seguroTransitos,
        segurosTransitosCargaSuelta: data.segurosTransitosCargaSuelta,
        activo: data.activo,
      }
    );
    return response.data;
  } catch (err) {
    return err;
  }
};

const deleteClientService = async (id) => {
  try {
    const response = await axios.delete(
      MAIN_SERVER_URL + DELETE_CLIENT_SERVER_URL + id
    );
    return response.data;
  } catch (err) {
    return err;
  }
};

export { newClientService, modifyClientService, deleteClientService };
