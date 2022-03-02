import { useState, useEffect } from "react";

export const APPDATA = ".APPDATA";

// simple key-value pairs
const useLocalStorage = (name = APPDATA, initialValue = "") => {
  const [value, setValue] = useState(() => {
    return localStorage.getItem(name) || initialValue;
  });

  // hook storage lifecycle
  useEffect(() => {
    localStorage.setItem(name, value);

    // release
    return () => {
      localStorage.removeItem(name);
    };
  }, [value, name]);

  return [value, setValue];
};

export default useLocalStorage;
