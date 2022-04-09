import React, { useEffect, useState } from "react";
import { Donut } from "../Components/Donut";
import { Line } from "../Components/Line";
import { Table } from "../Components/Table";
import api from "../services/Api"

import './Styles.css';


export function Home() {

  const [enrolledStudents, setEnrolledStudents] = useState();
  const [isLoading, setIsLoading] = useState(true)

  const objectToList = (enrolledStudents) => {
    var lista = [["Year", "Enrolled Students"]]
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


  return (
    <>

      <div className="inicio">
        <Line />
        <Donut enrolledStudents={enrolledStudents} />
      </div>

      <Table />

    </>
  );
}
