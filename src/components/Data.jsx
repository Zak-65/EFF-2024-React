import {useEffect } from "react";

  let expertsData = [];
  useEffect(() => {
  
    fetch("http://localhost:3000/experts")
      .then((result) => {
        let data = result.json();
        return data;
      })
      .then((data) => {
        expertsData = data;
      })
      .catch((err) => console.log(err));
    console.log(expertsData);
  }, []);

  export default expertsData;