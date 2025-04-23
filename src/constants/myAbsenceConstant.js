import {
  CheckCircleFilled,
  CheckCircleOutlined,
  ClockCircleFilled,
  ClockCircleOutlined,
  CloseCircleFilled,
  CloseCircleOutlined,
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  FrownOutlined,
  HomeOutlined,
  ReadOutlined,
  RestOutlined,
  RocketOutlined,
  SyncOutlined,
} from '@ant-design/icons';

export const MyAbsenceBreadcrumbItems = [
  {
    title: (
      <>
        <HomeOutlined />
        <span>manage</span>
      </>
    ),
  },
  {
    title: <span>Absence & Leave</span>,
  },
  {
    title: <span>My Absence</span>,
  },
];

export const LeaveTypeOptions = [
  { value: 'sickLeave', label: 'Sick Leave' },
  { value: 'vacation', label: 'Vacation' },
  { value: 'education', label: 'Education' },
  { value: 'relocation', label: 'Relocation' },
  { value: 'sabbatical', label: 'Sabbatical' },
  { value: 'bereavement', label: 'Bereavement' },
];

export const LeaveTypeConfig = {
  sickLeave: {
    key:"sickLeave",
    name: 'Sick Leave',
    icon: <EditOutlined />,
    className: 'sick',
    totalLeave: 10,
  },
  vacation: {
    key:"vacation",
    name: 'Vacation',
    icon: <RestOutlined />,
    className: 'vacation',
    totalLeave: 25,
  },
  education: {
    key:"education",
    name: 'Education',
    icon: <ReadOutlined />,
    className: 'education',
    totalLeave: 2,
  },
  relocation: {
    key:"relocation",
    name: 'Relocation',
    icon: <SyncOutlined />,
    className: 'relocation',
    totalLeave: 2,
  },
  sabbatical: {
    key:"sabbatical",
    name: 'Sabbatical',
    icon: <RocketOutlined />,
    className: 'sabbatical',
    totalLeave: 5,
  },
  bereavement: {
    key:"bereavement",
    name: 'Bereavement',
    icon: <FrownOutlined />,
    className: 'bereavement',
    totalLeave: 2,
  },
};

export const LeaveStatusConfigMap = {
  requested: {
    key: 'requested',
    name: 'Requested',
    icon: <ClockCircleFilled className="text-primary me-2" />,
    color: 'primary',
  },
  approved: {
    key: 'approved',
    name: 'Approved',
    icon: <CheckCircleFilled className="text-success me-2" />,
    color: 'success',
  },
  rejected: {
    key: 'rejected',
    name: 'Rejected',
    icon: <CloseCircleFilled className="text-danger me-2" />,
    color: 'danger',
  },
};

export const MenuOptionItems = [
  {
    key: 1,
    label: (
      <>
        <EyeOutlined /> View
      </>
    ),
  },
  {
    key: 2,
    label: (
      <>
        <EditOutlined /> Edit
      </>
    ),
  },
  {
    key: 3,
    danger: true,
    label: (
      <>
        <DeleteOutlined /> Delete
      </>
    ),
  },
];
