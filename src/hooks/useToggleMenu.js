import { useEffect, useRef, useState } from 'react';

/**
 * custom hook for toggle menu (to show and hide)
 * @param {*} props { closeOnOutsideClick: true/false }
 * @returns array
 * 1. show = true/false,
 * 2. toggle = function,
 * 3. ref
 */
export function useToggle(props) {
  // State
  const [show, setShow] = useState(false);

  // Ref
  const ref = useRef(null);

  // props
  const { closeOnOutsideClick = true } = props || {};

  // function to show and hide dropdown menu
  function toggle() {
    setShow((prevState) => !prevState);
  }

  // close dropdown when you click outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!ref.current?.contains(event.target) && closeOnOutsideClick) {
        if (!show) return;
        setShow(false);
      }
    };
    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, [show, ref, closeOnOutsideClick]);

  // return
  return [show, toggle, ref];
}
