import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  [
    "Nome da Escola",
    { type: "date", label: "Numero de Alunos" },
    { type: "date", label: "Nivel" },
    { type: "date", label: "Valor arrecadado" },
  ],
  [
    "Mike",
    new Date(2008, 1, 28, 0, 31, 26),
    new Date(2008, 1, 28, 0, 31, 26),
    new Date(2008, 1, 28, 0, 31, 26),
  ],
  [
    "Bob",
    new Date(2007, 5, 1, 0),
    new Date(2007, 5, 1, 0),
    new Date(2007, 5, 1, 0),
  ],
  [
    "Alice",
    new Date(2006, 7, 16),
    new Date(2006, 7, 16),
    new Date(2006, 7, 16),
  ],
];

export const options = {
  showRowNumber: true,
};

export const formatters = [
  {
    type: "DateFormat" ,
    column: 1,
    options: {
      formatType: "long",
    },
  },
  {
    type: "DateFormat" ,
    column: 2,
    options: {
      formatType: "medium",
    },
  },
  {
    type: "DateFormat",
    column: 3,
    options: {
      formatType: "short",
    },
  },
];

export function Table() {
  return (
    <Chart
      chartType="Table"
      width="100%"
      height="400px"
      data={data}
      options={options}
      formatters={formatters}
    />
  );
}
