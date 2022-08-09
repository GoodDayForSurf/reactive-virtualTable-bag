import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import {
  Grid,
  Table,
  VirtualTable,
  TableBandHeader,
  TableHeaderRow
} from "@devexpress/dx-react-grid-material-ui";
import { countries } from "../../../demo-data/countries";

export default () => {
  const [columns] = useState([
    { name: "Country", title: "Country" },
    { name: "Area", title: "Area, sq. km." },
    { name: "Population_Total", title: "Total" },
    { name: "Population_Urban", title: "Urban" },
    { name: "GDP_Total", title: "Total, min $" },
    { name: "GDP_Industry", title: "Industry" },
    { name: "GDP_Services", title: "Services" },
    { name: "GDP_Agriculture", title: "Agriculture" }
  ]);
  const [columnBands] = useState([
    {
      title: "Population",
      children: [
        { columnName: "Population_Total" },
        { columnName: "Population_Urban" }
      ]
    },
    {
      title: "Nominal GDP",
      children: [
        { columnName: "GDP_Total" },
        {
          title: "By Sector",
          children: [
            {
              title: "Test",
              children: [
                {
                  title: "Test2",
                  children: [
                    {
                      title: "Test3",
                      children: [
                        { columnName: "GDP_Agriculture" },
                        { columnName: "GDP_Industry" },
                        { columnName: "GDP_Services" }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]);

  return (
    <Paper>
      <Grid rows={countries} columns={columns}>
        <Table />
        <TableHeaderRow />
        <TableBandHeader columnBands={columnBands} />
      </Grid>
    </Paper>
  );
};
