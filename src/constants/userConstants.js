export const USER_LIST_TABLE_HEADER = [
  {
    title: 'S.No',
    dataIndex: 'sno',
    render: (text, record, index) => index + 1,
  },
  { title: 'First Name', dataIndex: 'firstName' },
  { title: 'Last Name', dataIndex: 'lastName' },
  { title: 'Email Id', dataIndex: 'emailId' },
  { title: 'Phone Number', dataIndex: 'phoneNum' },
  { title: 'Designation', dataIndex: 'designation' },
  { title: 'Role', dataIndex: 'role' },
  { title: 'Status', dataIndex: 'status' },
];

export const USER_LIST_TABLE_ROWS = [
  {
    key: 1,
    firstName: 'Admin',
    lastName: '',
    emailId: 'datum@timeleap.io',
    phoneNum: '9986654345',
    designation: 'App Administrator',
    isActive: true,
    role: 'SUPER_ADMIN',
    status: {
      key: null,
      ref: null,
      props: {
        id: 1,
      },
      _owner: null,
      _store: {},
    },
  },
  {
    key: 2,
    firstName: 'John',
    lastName: 'Doe',
    emailId: 'john@hotmail.com',
    phoneNum: '',
    designation: '',
    isActive: true,
    role: 'VIEWER',
    status: {
      key: null,
      ref: null,
      props: {
        id: 2,
      },
      _owner: null,
      _store: {},
    },
  },
];

export const USER_MODAL_TYPES = {
  USER_DATA: 'UserData',
  CHANGE_PASSWORD: 'ChangePassword',
  USER_ROLE: 'UserRole',
};
