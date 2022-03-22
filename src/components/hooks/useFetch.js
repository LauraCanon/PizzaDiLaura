import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // To have reusable fetch and multiple endopoints
    fetch(url)
      .then((res) => {
        //If I have an error with a nonexistent endpont
        if (!res.ok) {
          throw Error("Could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
        setError(null);
      })
      // catch any kind of network error (connecting to the server)
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
    //Whenever the url changes, its going to re-run this function to get the data for that endpoint
  }, [url]);

  // I need return some values from this function to use it as properties in other components
  return { data, error, isLoading };
};

export default useFetch;
