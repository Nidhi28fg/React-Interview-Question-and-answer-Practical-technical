import { useEffect, useState } from "react";

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    const updateSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    //run first time
    updateSize();
    //addeventlister when window resize
    window.addEventListener("resize", updateSize);
    // cleanup function 
    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  return windowSize;
}
