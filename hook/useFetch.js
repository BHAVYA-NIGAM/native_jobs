import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (endpont, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpont}`,
    headers: {
      'X-RapidAPI-Key': '794fad6ed5mshd4f80af267f35cdp1631bbjsn400d82449565',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
    },
    params: {
      ...query,
    },
  };
  const fetchData = async () => {
    setisLoading(true);

    try {
      const response = await axios.request(options);

      setData(response.data.data);
      setisLoading(false);
    } catch (error) {
      setError(error);
      alert('There is an error');
    } finally {
      setisLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setisLoading(true);
    fetchData();
  };
  console.log(data);
  return { data, isLoading, error, refetch };
};

export default useFetch;
