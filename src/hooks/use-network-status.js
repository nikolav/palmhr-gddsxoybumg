
import { useState, useEffect } from "react";



// evt type check
const ONLINE = "online";

// hooks into native .online/offlie events
const useNetworkStatus = () => {
  const [online, setOnline] = 
    useState(() => window.navigator.onLine || false);

  useEffect(() => {
    window.addEventListener("online",  network_);
    window.addEventListener("offline", network_);

    return () => {
      window.removeEventListener("online",  network_);
      window.removeEventListener("offline", network_);
    };
  }, []);

  return { online };

  //
  function network_(evt) {
    if (ONLINE === evt.type) {
      setOnline(true);
    } else {
      setOnline(false);
    }
  }
};

export default useNetworkStatus;
