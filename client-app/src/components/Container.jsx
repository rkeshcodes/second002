import React, { useState, useEffect } from "react";
import FormContainer from "./FormContainer";
import DataContainer from "./DataContainer";
import { serverUrl } from "../helpers/Constants";
import axios from "axios";

const Container = () => {
  const [data, setData] = useState([]);

  async function fetchData() {
    const response = await axios.get(`${serverUrl}/shortUrl`);

    setData(response.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <FormContainer fetchData={fetchData} />
      <DataContainer fetchData={fetchData} data={data} />
    </>
  );
};

export default Container;
