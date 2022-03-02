import useHttpGet from "./use-http-get";

const useGeocodeAutocompleteAPI = (INPUT = "") =>
  useHttpGet({
    url: `/api/geocode_autocomplete/${encodeURIComponent(INPUT)}`,
  });

export default useGeocodeAutocompleteAPI;
