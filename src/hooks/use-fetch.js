import { useEffect, useState, useCallback } from 'react';

const useFetch = (url) => {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cursor, setCursor] = useState(2);

  useEffect(() => {
    const getState = async () => {
      try {
        setLoading(true);
        const res = await fetch(url, {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        });

        const data = await res.json();

        setState(Object.values(data));
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(err);
      }
    };
    getState();
  }, [url]);

  const showMore = useCallback(() => {
    // fugazi loading since we actually fetch all data on mount
    setLoading(true);
    setTimeout(() => {
      setCursor((prevCursor) => prevCursor + 3);
      setLoading(false);
    }, 250);
  }, []);

  const showLess = useCallback(() => {
    setCursor((prevCursor) => prevCursor - 3);
  }, []);

  return { error, loading, data: state, cursor, showMore, showLess };
};

export default useFetch;
