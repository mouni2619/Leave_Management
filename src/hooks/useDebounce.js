import { useEffect, useState } from 'react';

/**
 * @param {*} search => string
 * @param {*} delay => time in millisecond
 * @returns array
 * 1. debouncedValue : debounced Value
 * 2. searchedText : searched text value
 * 3. setSearchedText : set function
 */
export function useDebounce(search = '', delay = 1000) {
  // searched text
  const [searchedText, setSearchedText] = useState(search);

  // debounced value
  const [debouncedValue, setDebouncedValue] = useState('');

  // useEffect
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(searchedText), delay);

    // return function is triggered when unmount the component
    return () => clearTimeout(timer);
  }, [delay, searchedText]);

  // updating values for initial page render with query param "search"
  useEffect(() => {
    setSearchedText(search);
  }, [search]);

  // return
  // debouncedValue : delayed searched value
  // searchedText : searched text
  // setSearchedText : function which update the searched value
  return [debouncedValue, searchedText, setSearchedText];
}
