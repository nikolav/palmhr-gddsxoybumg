import { useState, useEffect } from "react";

const useRemoteStorage = ({ entry, size }) => {

    return {
    payload: null, // limit(size)
    loading: null, // 
    error: null,   // 
  };
};

export default useRemoteStorage;
