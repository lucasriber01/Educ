import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Sales", "Expenses", "Profit"],
  ["2014", 1000, 400, 200],
  ["2015", 1170, 460, 250],
  ["2016", 660, 1120, 300],
  ["2017", 1030, 540, 350],
];

export const options = {
  chart: {
    title: "Numero de Turmas com 30 ou mais alunos",
    subtitle: "Gráfico de 2007 a 2020 ",
  },
};

export function Bar(enrolledClass) {
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={enrolledClass.enrolledClass}
      options={options}
    />
  );
}
