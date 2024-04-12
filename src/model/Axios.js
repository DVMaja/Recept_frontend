import axios from "axios";
import { useState, useEffect } from "react";

const baseURL = "http://localhost:8000/api/";

export function useGet(endpoint) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(baseURL + endpoint);
        setData(response.data);
      } catch (error) {
        console.error("HIBA adatlekérés közben:", error);
      }
    };
    fetchData();
  }, [endpoint]);
  return data;
}

export function usePost(endpoint, requestData) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const postData = async () => {
      try {
        const response = await axios.post(baseURL + endpoint, requestData);
        setData(response.data);
      } catch (error) {
        console.error("HIBA új adat felvitele közben:", error);
      }
    };
    postData();
  }, [endpoint, requestData]);
  return data;
}

export function useDelete(endpoint) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const deleteData = async () => {
      try {
        const response = await axios.delete(baseURL + endpoint);
        setData(response.data);
      } catch (error) {
        console.error("HIBA törlés közben:", error);
      }
    };
    deleteData();
  }, [endpoint]);
  return data;
}
