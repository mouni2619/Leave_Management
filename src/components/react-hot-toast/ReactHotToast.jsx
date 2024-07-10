import { Toaster } from 'react-hot-toast';

// Constants
import { ToastPositions } from '../../constants/generalConstants';

/**
 * React Hot Toast Component
 * Documentation :: @https://react-hot-toast.com
 * @https://react-hot-toast.com/docs/toast
 * "reverseOrder" = false ==> first in first out
 * "reverseOrder" = true ==> first in last out
 */
export default function ReactHotToast({
  position = ToastPositions.topCenter,
  reverseOrder = false,
}) {
  // Page level container for Toasts
  return <Toaster position={position} reverseOrder={reverseOrder} />;
}
