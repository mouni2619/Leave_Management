import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Eye, Info, Pencil, Trash2 } from 'lucide-react';

// Constants
import { DATASET_LIST_TABLE_HEADER } from '../../constants/datasetConstants';

// Actions
import { DatasetActions } from '../../store/redux-slices/datasetSlice';

// Components
import Button from '../../components/button/Button';
import DatasetsTable from './components/DatasetsTable';
import DatasetCreateEditModal from './components/DatasetCreateEditModal';

function Header({ setOpenModal = () => {} }) {
  return (
    <div className="w-100 d-flex justify-content-between my-4">
      <h2>{`Datasets List`}</h2>
      <Button className="btn-primary" onClick={() => setOpenModal(true)}>
        New Dataset
      </Button>
    </div>
  );
}

function DatasetListTableActions({
  record = {},
  setOpenModal = () => {},
  setEditDatasetData = () => {},
}) {
  // Dispatch
  const dispatch = useDispatch();

  function editBtnClickFn() {
    setOpenModal(true);
    setEditDatasetData(record);
  }

  function handleDelete() {
    dispatch(DatasetActions.deleteDataset({ datasetId: record.key }));
  }
  return (
    <div className="d-flex gap-4 align-items-center">
      <Pencil className="cursor-pointer" size={16} onClick={editBtnClickFn}>
        <title>Edit</title>
      </Pencil>

      <Info size={16} className="cursor-pointer">
        <title>Info</title>
      </Info>

      <Eye size={16} className="cursor-pointer">
        <title>View</title>
      </Eye>

      <Trash2 size={16} className="cursor-pointer" onClick={handleDelete}>
        <title>Delete</title>
      </Trash2>
    </div>
  );
}

export default function DatasetListPage() {
  // States
  const [openModal, setOpenModal] = useState(false);
  const [columns, setColumns] = useState([]);
  const [editDatasetData, setEditDatasetData] = useState({});

  // Selector State
  const rows = useSelector((state) => state.datasets.datasets);

  const actionsColumn = {
    title: 'Action',
    Key: 'action',
    render: (record) => {
      return (
        <DatasetListTableActions
          record={record}
          setOpenModal={setOpenModal}
          setEditDatasetData={setEditDatasetData}
        />
      );
    },
  };

  useEffect(() => {
    setColumns([...DATASET_LIST_TABLE_HEADER, actionsColumn]);
  }, []);
  return (
    <div className="page-content">
      <Header setOpenModal={setOpenModal} />
      <DatasetsTable rows={rows} columns={columns} />

      <DatasetCreateEditModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        editDatasetData={editDatasetData}
        setEditDatasetData={setEditDatasetData}
      />
    </div>
  );
}
