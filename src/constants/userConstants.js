import { Input } from 'antd';

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
    password: 'admin',
  },
  {
    key: 2,
    firstName: 'John',
    lastName: 'Doe',
    emailId: 'john@hotmail.com',
    phoneNum: '',
    designation: '',
    isActive: false,
    role: 'VIEWER',
    password: 'admin',
  },
];

export const USER_FORM_INPUT_DATA = [
  [
    {
      label: 'First Name :',
      name: 'firstName',
      rules: [{ required: 'true', message: 'First Name is required' }],
      help: '',
      input: <Input />,
    },
    {
      label: 'Last Name :',
      name: 'lastName',
      input: <Input />,
    },
  ],
  [
    {
      label: 'Email ID :',
      name: 'emailId',
      rules: [{ required: 'true', message: 'Email ID is required' }],
      help: '',
      input: <Input />,
    },
    {
      label: 'Phone Number :',
      name: 'phoneNum',
      input: <Input />,
    },
  ],
  [
    {
      label: 'Password :',
      name: 'password',
      rules: [{ required: 'true', message: 'Password is required' }],
      help: '',
      input: <Input />,
    },
    {
      label: 'Designation :',
      name: 'designation',
      input: <Input />,
    },
  ],
];

export const USER_CHANGE_PASSWORD_INPUT_DATA = [
  {
    label: 'Old Password : ',
    name: 'oldPassword',
    rules: [{ required: 'true', message: 'Old Password is required' }],
    help: '',
    input: <Input />,
  },
  {
    label: 'New Password : ',
    name: 'newPassword',
    rules: [{ required: 'true', message: 'New Password is required' }],
    help: '',
    input: <Input />,
  },
  {
    label: 'Confirm Password : ',
    name: 'confirmPassword',
    rules: [{ required: 'true', message: 'Confirm Password is required' }],
    help: '',
    input: <Input />,
  },
];

export const USER_MODAL_TYPES = {
  USER_DATA: 'UserData',
  CHANGE_PASSWORD: 'ChangePassword',
  USER_ROLE: 'UserRole',
};

export const USER_ROLES = {
  SUPER_ADMIN: 'SUPER_ADMIN',
  ADMIN: 'ADMIN',
  EDITOR: 'EDITOR',
  VIEWER: 'VIEWER',
};

export const USER_STATUS = {
  ACTIVE: 'Active',
  IN_ACTIVE: 'InActive',
};

export const USER_TAG_COLOR = {
  GREEN: 'green',
  RED: 'red',
};
