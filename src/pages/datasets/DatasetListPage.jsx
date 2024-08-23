import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Pencil, Trash2 } from 'lucide-react';

// Constants
import {
  DATASET_LIST_TABLE_HEADER,
  DATASET_MODAL_TYPES,
} from '../../constants/datasetConstants';

// Components
import Button from '../../components/button/Button';
import DatasetDeleteModal from './DatasetDeleteModal';
import DataTable from '../../components/antd/table/DataTable';
import DatasetCreateEditModal from './DatasetCreateEditModal';

function Header({ setOpenModal = () => {} }) {
  return (
    <div className="w-100 d-flex justify-content-between my-4">
      <h2>{`Datasets List`}</h2>
      <Button
        className="btn-primary"
        onClick={() =>
          setOpenModal({ type: DATASET_MODAL_TYPES.DATA, state: true })
        }
      >
        New Dataset
      </Button>
    </div>
  );
}

function DatasetListTableActions({
  record = {},
  setOpenModal = () => {},
  setEditDatasetData = () => {},
  setDeleteDatasetData = () => {},
}) {
  function handleEdit() {
    setOpenModal({ type: DATASET_MODAL_TYPES.DATA, state: true });
    setEditDatasetData(record);
  }

  function handleDelete() {
    setOpenModal({ type: DATASET_MODAL_TYPES.DELETE, state: true });
    setDeleteDatasetData(record);
  }
  return (
    <div className="d-flex gap-4 align-items-center">
      <Pencil className="cursor-pointer" size={16} onClick={handleEdit}>
        <title>Edit</title>
      </Pencil>

      <Trash2 size={16} className="cursor-pointer" onClick={handleDelete}>
        <title>Delete</title>
      </Trash2>
    </div>
  );
}

export default function DatasetListPage() {
  // States
  const [openModal, setOpenModal] = useState({ type: '', state: false });
  const [editDatasetData, setEditDatasetData] = useState({});
  const [deleteDatasetData, setDeleteDatasetData] = useState({});

  // Selector State
  const rows = useSelector((state) => state.datasets.data);

  const actionsColumn = {
    title: 'Action',
    Key: 'action',
    render: (record) => {
      return (
        <DatasetListTableActions
          record={record}
          setOpenModal={setOpenModal}
          setEditDatasetData={setEditDatasetData}
          setDeleteDatasetData={setDeleteDatasetData}
        />
      );
    },
  };

  const columns = [...DATASET_LIST_TABLE_HEADER, actionsColumn];
  return (
    <div className="page-content">
      <Header setOpenModal={setOpenModal} />
      <DataTable rows={rows} columns={columns} applyOnlyTableBorder={true} />

      <DatasetCreateEditModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        editDatasetData={editDatasetData}
        setEditDatasetData={setEditDatasetData}
      />

      <DatasetDeleteModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        deleteDatasetData={deleteDatasetData}
        setDeleteDatasetData={setDeleteDatasetData}
      />
    </div>
  );
}
