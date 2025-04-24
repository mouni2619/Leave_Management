import { Ellipsis } from 'lucide-react';
import { Dropdown, Tag } from 'antd';
import { Avatar } from 'antd';
import dayjs from 'dayjs';

// Constants
import {
  LeaveStatusConfigMap,
  LeaveTypeConfig,
} from '../../constants/myAbsenceConstant';

// Components
import Button from '../../components/button/Button';

function getAbsenceColumns(handleMenuClick,menuOptionItems) {
  return [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => (
        <span style={{ display: 'flex', alignItems: 'center' }}>
          <Avatar
            className="bg-primary"
          >
            {text.charAt(0).toUpperCase()}
          </Avatar>
          {text}
        </span>
      ),
    },
    {
      title: 'DURATION',
      dataIndex: 'duration',
      render: (_, record) => {
        const { startTimestamp, endTimestamp } = record;
        const startDate = dayjs(startTimestamp).format('MMM D');
        const endDate = dayjs(endTimestamp).format('MMM D, YYYY');
        return startTimestamp === endTimestamp
          ? endDate
          : `${startDate} -- ${endDate}`;
      },
    },
    {
      title: '# OF DAYS',
      dataIndex: 'daysOff',
      render: (_, record) => {
        const dayDiff =
          dayjs(record.endTimestamp).diff(record.startTimestamp, 'day') + 1;
        return `${dayDiff} ${dayDiff === 1 ? 'Day' : 'Days'}`;
      },
    },
    {
      title: 'TYPE',
      dataIndex: 'leaveType',
      render: (type) => {
        const {
          icon = '',
          className = '',
          name = '',
        } = LeaveTypeConfig[type] || {};
        return (
          <Tag className={`rounded-pill ${className}`} bordered={false}>
            {icon} <span className="text-dark">{name}</span>
          </Tag>
        );
      },
    },
    {
      title: 'STATUS',
      dataIndex: 'status',
      render: (status) => {
        const {
          icon = '',
          name = '',
          color = '',
        } = LeaveStatusConfigMap[status] || {};
        return (
          <span className="fs-6">
            {icon} <span className={`text-${color}`}>{name}</span>
          </span>
        );
      },
    },
    {
      title: 'PAID',
      dataIndex: 'paid',
    }, {
      title: '',
      key: 'action',
      render: (_, record) => (
        <Dropdown
          menu={{
            items: menuOptionItems,
            onClick: (menuObj) => handleMenuClick(menuObj, record),
          }}
          placement="bottomRight"
          trigger={['click']}
        >
          <Button icon={<Ellipsis />} className="float-end" />
        </Dropdown>
      ),
    },
  ]
}

const AbsenceHelper = {
  getAbsenceColumns,
};

export default AbsenceHelper;
