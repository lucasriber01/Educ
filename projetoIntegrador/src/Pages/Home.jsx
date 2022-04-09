import React from "react";
import { Donut } from "../Components/Donut";
import { Line } from "../Components/Line";
import { Table } from "../Components/Table";

import './Styles.css';


export function Home() {
  return (
<>

   <div className="inicio">
      <Line/>
      <Donut/>
   </div>

<Table/>


</>
  );
}
