export const DASHBOARD_TABLE_HEADER = [
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

export const DASHBOARD_LIST_TABLE_DATA = {
  1: {
    key: 1,
    name: 'Demo Dashboard',
    description: 'Dashboard for Testing',
    isActive: true,
  },
  2: {
    key: 2,
    name: 'Employees Dashboard',
    description: 'Dashboard for Employee Management',
    isActive: false,
  },
};
