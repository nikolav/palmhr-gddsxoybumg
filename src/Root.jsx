import React from "react";
import App from "./App";
import Login from "./components/Login";
import useLocalStorage from "./hooks/use-local-storage";

import { Routes, Route } from "react-router-dom";

const Root = () => {
  const [authData, setAuthData] = useLocalStorage();

  return (
    <Routes>
      <Route
        path="/"
        element={
          authData ? (
            <App logout={() => setAuthData(() => "")} />
          ) : (
            <Login login={() => setAuthData(() => new Date().toISOString())} />
          )
        }
      />
    </Routes>
  );
};

export default Root;
