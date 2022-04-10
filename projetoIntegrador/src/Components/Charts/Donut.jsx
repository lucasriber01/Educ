import { Chart } from "react-google-charts";



export const options = {
  title: "Alunos Matriculados",
  subtitle:"2007 a 2020",
  pieHole: 0.4,
  is3D: false,
};

export function Donut(enrolledStudents) {
  
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={enrolledStudents.enrolledStudents}
      options={options}
    />
  );
}
