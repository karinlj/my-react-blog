import { useState, useEffect } from "react";

//T = generics: specified later and instantiated when needed
export const useFetch = <T>(url: string) => {
  //reusable fetch data component
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    //stop the fetch when component using it unmounts
    const abortContrl = new AbortController();

    const getApiData = async () => {
      setIsLoading(true);
      try {
        const apiResponse = await fetch(url, { signal: abortContrl.signal });
        const json = await apiResponse.json();
        setData(json);
      } catch (err: any) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    setTimeout(() => {
      getApiData();
    }, 1000);

    //clean up
    return () => {
      abortContrl.abort();
    };
  }, [url]);

  return { data, isLoading, isError };
};
