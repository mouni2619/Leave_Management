import { Ellipsis } from 'lucide-react';
import { Dropdown, Tag } from 'antd';
import dayjs from 'dayjs';

// Constants
import {
  LeaveStatusConfigMap,
  LeaveTypeConfig,
  MenuOptionItems,
} from '../../constants/myAbsenceConstant';

// Components
import Button from '../../components/button/Button';


function getColumns(handleMenuClick) {
  return [
    {
      title: 'DURATION',
      dataIndex: 'duration',
      render: (_, record) => {
        const { startTimestamp, endTimestamp } = record;

        const startDate = dayjs(startTimestamp).format('MMM D');
        const endDate = dayjs(endTimestamp).format('MMM D, YYYY');

        if (startTimestamp === endTimestamp) {
          return endDate;
        }

        return `${startDate} -- ${endDate}`;
      },
    },
    {
      title: '# OF DAYS',
      dataIndex: 'daysOff',
      render: (_, record) => {
        const { startTimestamp, endTimestamp } = record;

        const dayDiff = dayjs(endTimestamp).diff(startTimestamp, 'day') + 1;

        if (dayDiff <= 1) {
          return `${dayDiff} Day`;
        }

        return `${dayDiff} Days`;
      },
    },

    {
      title: 'TYPE',
      dataIndex: 'leaveType',
      render: (type) => {
        const { icon = '', className = '', name = '' } = LeaveTypeConfig[type];

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
          name = '',
          icon = '',
          color = '',
        } = LeaveStatusConfigMap[status] || {};

        console.log(status);

        return (
          <span className="fs-6">
            {icon}
            <span className={`text-${color}`}>{name}</span>
          </span>
        );
      },
    },
    {
      title: 'PAID',
      dataIndex: 'paid',
    },
    {
      title: '',
      key: 'action',
      render: (_, record) => (
        <Dropdown
          menu={{
            items: MenuOptionItems,
            onClick: ({ key: menuKey }) => handleMenuClick(menuKey, record),
          }}
          placement="bottomRight"
          trigger={['click']}
        >
          <Button icon={<Ellipsis />} className="float-end" />
        </Dropdown>
      ),
    },
  ];
}

const AbsenceHelper = {
  getColumns,
};

export default AbsenceHelper;
