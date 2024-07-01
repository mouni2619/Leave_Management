import { useSearchParams } from 'react-router-dom';

/**
 * useDeleteQueryParams
 * @params : params array : ["pn", "ps", "search"]
 */
export function useDeleteQueryParams() {
  // Search params
  const [searchParams, setSearchParams] = useSearchParams();

  // function
  function deleteQueryParams(params = []) {
    // if no no params to be deleted then return same searchParams
    if (params.length === 0) {
      return searchParams;
    }

    // loop over params to be deleted and delete them
    params.forEach((param) => {
      // if "param" which needs to be deleted is present in "searchParams",
      // then only delete it.
      if (searchParams.has(param)) {
        // delete
        searchParams.delete(param);

        // update searchParams
        setSearchParams(searchParams);
      }
    });
  }

  return [searchParams, deleteQueryParams];
}
