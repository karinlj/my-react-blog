import { useState, useEffect } from "react";

const useFetch = (url) => {
  //reusable fetch data component
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    //stop the fetch when component using it unmounts
    const abortContrl = new AbortController();

    setTimeout(() => {
      //signal property
      fetch(url, { signal: abortContrl.signal })
        //get res obj
        .then((res) => {
          if (!res.ok) {
            //throw and catch it further down
            throw Error("Endpoint error - Could not fetch data...");
          }
          //make js object
          return res.json();
        })
        //get data
        .then((data) => {
          //console.log("useFetch data", data);
          setData(data);
          setIsLoading(false);
          setError(null);
        })
        //aborting a fetch, throw an error and update the state again
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setIsLoading(false);
            setError("Network error", err.message);
          }
        });
    }, 1000);

    //clean up
    return () => {
      abortContrl.abort();
    };
  }, [url]);
  return { data, isLoading, error };
};

export default useFetch;
