import { useWindowSize } from "./hooks/useWindowSize";
export default function App() {
  const wid = useWindowSize();


  return <>
    <h1> Windo Size</h1>
    <p>width: {wid.width}</p>
    <p> height {wid.height}</p>
  </>

}
