import { useState } from 'react';
import { Input } from 'antd';

// Components
import Button from '../../../components/button/Button';

// Page Components
import AntDFormModal from '../../../components/antd/form/AntDFormModal';

// Page Constant
const FORM_INPUT = [
  {
    id: 1,
    label: 'Name :',
    name: 'name',
    className: 'fw-semibold',
    rules: [{ required: true, message: 'Please enter name' }],
    help: '',
    input: <Input />,
  },
  {
    id: 2,
    label: 'Description :',
    name: 'description',
    className: 'fw-semibold',
    input: <Input.TextArea rows={4} />,
  },
];

export default function FormModalPage() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="page-content">
      <Button className="btn-primary" onClick={() => setOpenModal(true)}>
        Open Modal
      </Button>

      {/* Form Modal */}
      <AntDFormModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        formLayout="vertical"
        formInput={FORM_INPUT}
      />
    </div>
  );
}
