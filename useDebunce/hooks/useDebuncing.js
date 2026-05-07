import { useState, useEffect } from "react";

export function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // create a timer before updating
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);


    //cleanup function clear the timer if value chnages before the delay time
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}