export const DATASET_LIST_TABLE_HEADER = [
  {
    title: 'S.No',
    dataIndex: 'sno',
    render: (text, record, index) => index + 1,
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Description',
    dataIndex: 'description',
  },
];

export const DATASET_LIST_TABLE_ROWS = [
  { key: 1, name: 'Sample Dataset', description: 'Testing Dataset' },
  {
    key: 2,
    name: 'Employees Dataset',
    description: 'Sample Dataset with employees data',
  },
];

export const DATASET_MODAL_TYPES = { DATA: 'Data', DELETE: 'Delete' };
