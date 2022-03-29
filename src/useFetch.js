import { useState, useEffect } from "react";

const useFetch = (url) => {
  //dynamic reusable fetch data component
  //name need to start with use...

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    //cannot have async in useEffect()
    //stop the fetch when component using it unmounts
    const abortContrl = new AbortController();

    setTimeout(() => {
      //signal property
      fetch(url, { signal: abortContrl.signal })
        //  fetch(url)
        //get res obj
        .then((res) => {
          // console.log("useFetch res", res);
          if (!res.ok) {
            //throw and catch it further down
            throw Error("Endpoint error - Could not fetch data...");
          }
          //make js object
          return res.json();
        })
        //get data
        .then((data) => {
          console.log("useFetch data", data);
          setData(data);
          setIsLoading(false);
          setError(null);
        })
        //when we abort a fetch, it throws an error and we update the state again...
        //if AbortError, just console.log
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setIsLoading(false);
            //Failed to fetch
            setError("Network error", err.message);
          }
        });
    }, 1000);

    //clean up
    //abort() method
    return () => {
      // console.log("cleanup");
      abortContrl.abort();
    };
  }, [url]);
  //return an object with the states
  return { data, isLoading, error };
};

export default useFetch;
