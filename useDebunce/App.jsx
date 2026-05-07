import { useDebounce } from "./hooks/useDebuncing";
import { useState } from "react";
export default function App() {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 1000);

  useEffect(() => {
    //Prevents useless API requests for empty values.
    if (!debouncedValue.trim()) return;
    if (debouncedValue) {
      console.log("API Call:", debouncedValue);
      // fetch API here
   
      };
  }, [debouncedValue]);


  return <>
    <input type="text" placeholder="Type something..." value={value} onChange={(e) => setValue(e.target.value)} />
    <div>
      <p>Actual Value:{value}</p>
      <p>Debounced Value:{debouncedValue}</p>
    </div>
  </>

}
