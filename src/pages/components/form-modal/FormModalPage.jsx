import { useState } from 'react';

// Components
import Button from '../../../components/button/Button';

// Page Components
import AntDFormModal from './AntDFormModal';

export default function FormModalPage() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="page-content">
      <Button className="btn-primary" onClick={() => setOpenModal(true)}>
        Open Modal
      </Button>

      {/* Form Modal */}
      <AntDFormModal openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  );
}
