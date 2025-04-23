import { CheckCircle2, CornerUpLeft, X } from 'lucide-react';

// Components
import Button from '../../../components/button/Button';

/**
 * Toaster
 */
export default function Toaster({ showToast, setShowToast }) {
  if (!showToast) {
    return null;
  }

  return (
    <div
      className="position-absolute bottom-0 start-50 translate-middle-x bg-secondary border-0 border-secondary rounded w-100"
    >
      <div className="progress" style={{ height: '2px' }}>
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: '25%', height: '2px', background: 'green' }}
        ></div>
      </div>
      <div className="d-flex justify-content-between px-4 py-2">
        <div className="d-flex gap-2 align-items-center">
          <CheckCircle2 className="text-success" color="white" fill="green" />
          <span className="text-success">Success -</span>
          <span>your absence has been requested</span>
        </div>
        <div className="d-flex gap-2">
          <Button>
            Undo action
            <CornerUpLeft size={18} />
          </Button>
          <Button onClick={() => setShowToast(false)}>
            Close
            <X size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
}
