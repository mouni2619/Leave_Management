import { useSearchParams } from 'react-router-dom';

/**
 * useGetQueryParams :
 * this hook is created to get all the query params as a map from "searchParams"
 * with this we don't have to do "searchParams.get(keyName)" every time to get any param value
 * @returns map of all query params
 * { search : "some", pn: 1, ps: 10 }
 */
export function useGetQueryParams() {
  // search params
  const [searchParams, setSearchParams] = useSearchParams();

  // params object
  const queryParams = {};

  // storing all query params into a object
  searchParams.forEach((value, key) => {
    queryParams[key] = value;
  });

  // return the object
  return queryParams;
}
