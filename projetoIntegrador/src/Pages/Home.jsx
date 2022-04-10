import React, { useEffect, useState } from "react";
import { Bar } from "../Components/Charts/Bar";
import { Donut } from "../Components/Charts/Donut";
import { Line } from "../Components/Charts/Line";
import { Table } from "../Components/Charts/Table";
import { Navbar } from "../Components/NavBar";
import api from "../services/Api";
import api2 from "../services/Api2";
import api3 from "../services/Api3";



import './Styles.css';


export function Home() {

  const [enrolledStudents, setEnrolledStudents] = useState();
  const [isLoading, setIsLoading] = useState(true)


  const [enrolledSchool, setEnrolledSchool] = useState();
  const [isLoad, setIsLoad] = useState(true);

  const [enrolledClass, setEnrolledClass] = useState();
  const [isLoadClass, setLoadClass] = useState(true);

  const objectToList = (enrolledStudents) => {
    var lista = [["Ano", "Alunos Matriculados"]]
    enrolledStudents.map(it => lista.push([it.year.toString(), it.total]))
    setIsLoading(false)
    return lista
  }

  useEffect(() => {
    api.get()
      .then((response) => setEnrolledStudents(objectToList(response.data.result)))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, [enrolledStudents]);


  const schoolList = (enrolledSchool) => {
    var lista2 = [["Ano", "Numero de Escolas"]]
    enrolledSchool.map(it => lista2.push([it.year.toString(), it.total]))
    setIsLoad(false)
    return lista2
  }

  useEffect(() => {
    api2.get()
      .then((response) => setEnrolledSchool(schoolList(response.data.result)))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, [enrolledStudents]);


  const classList = (enrolledClass) => {
    var lista3 = [["Ano", "Numero de Turmas"]]
    enrolledClass.map(it => lista3.push([it.year.toString(), it.total]))
    setLoadClass(false)
    return lista3
  }

  useEffect(() => {
    api3.get()
      .then((response) => setEnrolledClass(classList(response.data.result)))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, [enrolledClass]);


  return (
    <>

      <Navbar/>
      <Line enrolledSchool={enrolledSchool} />

      <div className="inicio">
        <Bar enrolledClass={enrolledClass}/>
        <Donut enrolledStudents={enrolledStudents} />
      </div>

      <Table />

    </>
  );
}
