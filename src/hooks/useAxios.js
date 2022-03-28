import { useState } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/recipes';

const useAxios = (params, callback) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async (params) => {
    setLoading(true);
    try {
      const res = await axios.request(params);
      setResponse(res.data);
      setError(null);
      setLoading(false);
      callback(res.data, null);
    } catch (err) {
      setError(err);
      setLoading(false);
      callback(null, err);
    }
  };

  function dispatch() {
    fetchData(params);
  };

  return { dispatch, response, error, loading };
};

export default useAxios;
