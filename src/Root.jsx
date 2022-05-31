
import React             from "react";
import { Routes, Route } from "react-router-dom";

import App   from "./App";
// import Login from "./components/Login";

// import useLocalStorage from "./hooks/use-local-storage";


const Root = () => {

  // const [authData, setAuthData] = useLocalStorage();

  return (
    <Routes>
      <Route
        // intercept all routes
        path="*"
        element={
          <App logout={() => null} />
        }
        // element={
        //   // watch `authData` for updates
        //   //   render components accordingly
        //   //   pass login/logout functoins to childreb
        //   authData ? (
        //     <App logout={() => setAuthData(() => "")} />
        //   ) : (
        //     <Login login={() => setAuthData(() => new Date().toISOString())} />
        //   )
        // }
      />
    </Routes>
  );
};

export default Root;
