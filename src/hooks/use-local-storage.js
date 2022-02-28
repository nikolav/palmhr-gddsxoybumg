import { useState, useEffect } from "react";

export const APPDATA = ".APPDATA";

// manage simple key-value pairs
const useLocalStorage = (name = APPDATA, initialValue = "") => {
  const [value, setValue] = useState(() => {
    return localStorage.getItem(name) || initialValue;
  });

  // hook react engine into storage lifecycle
  useEffect(() => {
    localStorage.setItem(name, value);

    // release resource
    return () => {
      localStorage.removeItem(name);
    };
  }, [value, name]);

  return [value, setValue];
};

export default useLocalStorage;
