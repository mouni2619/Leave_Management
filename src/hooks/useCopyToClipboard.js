import { useEffect, useRef, useState } from 'react';

/**
 * @param {*} props => duration
 * @returns array
 * 1. copied = true / false,
 * 2. ref,
 * 3. onCopy = function
 */
export function useCopyToClipboard(props) {
  // state
  const [copied, setCopied] = useState(false);

  const ref = useRef();

  const resetCopy = useRef();

  // default duration
  const { duration = 3000 } = props || {};

  function onCopy() {
    navigator.clipboard
      .writeText(ref.current?.innerText)
      .then(() => setCopied(true));
  }

  useEffect(() => {
    if (copied) {
      resetCopy.current = setTimeout(() => setCopied(false), duration);
    }

    return () => clearTimeout(resetCopy.current);
  }, [copied, duration]);

  return [copied, onCopy, ref];
}
