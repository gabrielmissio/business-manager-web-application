import React from "react";
import MaterialTable, { MTableBodyRow } from "material-table";

export default function App() {
  return (
    <MaterialTable
      columns={[
        { title: "Adı", field: "name" },
        { title: "Soyadı", field: "surname" },
        { title: "Doğum Yılı", field: "birthYear", type: "numeric" },
        {
          title: "Doğum Yeri",
          field: "birthCity",
          lookup: { 34: "İstanbul", 63: "Şanlıurfa" }
        }
      ]}
      components={{
        Row: props => (
          <MTableBodyRow
            {...props}
            onDoubleClick={e => {
              console.log(props.actions);
              props.actions[1]().onClick(e, props.data);
              console.log(props.data.name)
              alert("Make row editable" + props.data.name);
            }}
          />
        )
      }}
      editable={{
        onRowAdd: newData =>
          new Promise((resolve, reject) => {
            resolve();
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            resolve();
          }),
        onRowDelete: oldData =>
          new Promise((resolve, reject) => {
            resolve();
          })
      }}
      data={[
        { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
        { name: "Mehmet 2", surname: "Baran", birthYear: 1987, birthCity: 63 },
        { name: "Mehmet 3", surname: "Baran", birthYear: 1987, birthCity: 63 }
      ]}
      title="Demo Title"
    />
  );
}
