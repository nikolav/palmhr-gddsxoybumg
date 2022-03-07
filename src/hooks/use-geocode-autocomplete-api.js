import useHttpGet from "./use-http-get";

const useGeocodeAutocompleteAPI = (INPUT = "") => {

  const url =
    "" +
    // local @3031
    "http://localhost:3031" +
    "/api/geocode_autocomplete/" +
    encodeURIComponent(INPUT) +
    "";

  return useHttpGet({ url });
};

export default useGeocodeAutocompleteAPI;
