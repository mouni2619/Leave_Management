import { useSearchParams } from 'react-router-dom';

/**
 * useUpdateQueryParams
 * @params : params object
 */
export function useUpdateQueryParams() {
  // Search params
  const [searchParams, setSearchParams] = useSearchParams();

  // function
  function updateQueryParams({ params }) {
    // Updating
    const updatedQueryParams = Object.keys(params)?.reduce((acc, key) => {
      if (params[key]) {
        // Creates a new key value pair
        acc[key] = params[key];
        return acc;
      }

      // If there is no value present, it will return previous object, which means it will not add key with empty value
      return acc;
    }, {});

    return setSearchParams(updatedQueryParams);
  }

  return [searchParams, updateQueryParams];
}
