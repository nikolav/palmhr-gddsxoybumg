import useHttpGet from "./use-http-get";

const useGeocodeAutocompleteAPI = (INPUT = "") =>
  useHttpGet({
    // local port @3031
    // url: `http://localhost:3031/api/geocode_autocomplete/${encodeURIComponent(INPUT)}`,
    url: `/api/geocode_autocomplete/${encodeURIComponent(INPUT)}`,
  });

export default useGeocodeAutocompleteAPI;
