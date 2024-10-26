import { useState } from "react";
import Experts1 from "./components/Experts1";
import Formulaire from "./components/Formulaire";
export default function App() {
  const [expertsData,setExpertsData] = useState([]);
  fetch("http://localhost:3000/experts")
    .then((result) => {
      let data = result.json();
      return data;
    })
    .then((data) => {
      setExpertsData(data);
    })
    .catch((err) => console.log(err));
  return (
    <>
      <Formulaire/>
      <Experts1 expertsData={expertsData} />
    </>
  );
}
