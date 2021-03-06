import React from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";

const ClientsListComponent = () => {
  const clientList = [
    {
      id: "1",
      Razon_Social: "Social.sa",
      Nro_de_Ruc: "123456789",
      Dirección: "Av Montevideo 123",
      País: "Uruguay",
      Ciudad: "Montevideo",
      Código_Postal: "456",
      Zona: "Norte",
      Teléfono: "351-155-22578",
      Fax: "fax-8",
      Email: "social.sa@gmail.com",
      Web: "www.social.sa.com",
      Seguro: "Uruguay Tansito",
      Activo: "si",
    },
    {
      id: "2",
      Razon_Social: "Barcos.sa",
      Nro_de_Ruc: "123456789",
      Dirección: "Av Montevideo 123",
      País: "Argentina",
      Ciudad: "Montevideo",
      Código_Postal: "456",
      Zona: "Norte",
      Teléfono: "351-155-22578",
      Fax: "fax-8",
      Email: "social.sa@gmail.com",
      Web: "www.social.sa.com",
      Seguro: "Uruguay Tansito",
      Activo: "si",
    },
  ];

  const columns = [
    {
      name: "ID",
      selector: "id",
      sortable: true,
      ignoreRowClick: true,
      button: true,
    },
    { name: "Razon_Social", selector: "Razon_Social", sortable: true },
    { name: "Nro_de_Ruc", selector: "Nro_de_Ruc", sortable: true },
    {
      name: "Dirección",
      selector: "Dirección",
      sortable: true,
      width: "200px",
    },
    { name: "País", selector: "País", sortable: true, width: "150px" },
    { name: "Ciudad", selector: "Ciudad", sortable: true },
    { name: "Código_Postal", selector: "Código_Postal", sortable: true },
    { name: "Zona", selector: "Zona", sortable: true },
    { name: "Teléfono", selector: "Teléfono", sortable: true, width: "200px" },
    { name: "Fax", selector: "Fax", sortable: true },
    {
      name: "Email",
      selector: "Email",
      sortable: true,
      width: "150px",
    },
    { name: "Web", selector: "Web", sortable: true, width: "150px" },
    {
      name: "Seguro",
      selector: "Seguro",
      sortable: true,
      width: "150px",
    },
    { name: "Activo", selector: "Activo", sortable: true },
  ];

  const paginationsOptions = {
    rowsPerPageText: "Filas por Pagina",
    rangeSeparatorText: "de",
    selectAllRowsItem: true,
    selectAllRowsItemText: "Todos",
  };
  return (
    <div className="clientList">
      <div className="closeScreen">
        <Link to="/home">
          <img
            className="closeScreen__cross"
            src="https://cdn.imgbin.com/19/15/6/imgbin-computer-icons-error-computer-XVScfC5dQ1UJGyh7NvxkYtyEV.jpg"
            alt="closeImage"
          />
        </Link>
      </div>
      <DataTable
        columns={columns}
        data={clientList}
        pagination
        paginationComponentOptions={paginationsOptions}
        fixedHeader
        fixedHeaderScrollHeight="600px"
        highlightOnHover
        title="Listado de clientes"
      />
    </div>
  );
};

export default ClientsListComponent;
