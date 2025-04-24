import { useEffect, useState } from 'react';
import { Table, Button, Card, Select } from 'antd';
import { useSelector } from 'react-redux';
import { DownOutlined } from '@ant-design/icons';

// Constants
import { LeaveTypeConfig } from '../../constants/myAbsenceConstant';

/**
 * Upcoming Absence Table
 * @param {*} title : String
 * @param {*} columns : Array
 */
export default function UpcomingAbsenceTable({ title, columns = [] }) {
  // State
  const [selectedRowIds, setSelectedRowIds] = useState([]);
  const [selectedLeaveTypes, setSelectedLeaveTypes] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  // Selector State
  const absenceListMap = useSelector((state) => state.absence.absenceListMap);
  const absenceList = Object.values(absenceListMap);

  const absenceListStr = JSON.stringify(absenceList);

  const rowSelection = {
    selectedRowKeys: selectedRowIds,
    onChange: (newSelectedRowKeys) => {
      setSelectedRowIds(newSelectedRowKeys);
    },
  };

  const dropdownItems = Object.values(LeaveTypeConfig).map(
    ({ name = '', key = '' }) => ({ value: key, label: name }),
  );

  // Function
  function selectFilter(value = '') {
    if (!value) {
      setSelectedLeaveTypes([]);
      return;
    }

    setSelectedLeaveTypes([value]);
  }

  // useEffect
  useEffect(() => {
    if (selectedLeaveTypes.length > 0) {
      const result = absenceList.filter(({ leaveType }) =>
        selectedLeaveTypes.includes(leaveType),
      );
      setFilteredList(result);
    } else {
      setFilteredList(absenceList);
    }
  }, [absenceListStr, selectedLeaveTypes]);

  return (
    <Card
      className="mt-3"
      title={title}
      extra={
        <div className="d-flex align-items-center gap-2">
          <Select
            allowClear={true}
            onChange={selectFilter}
            options={dropdownItems}
            className="w-50"
            placeholder="Select Filter"
          />

          <Button>
            Bulk Actions <DownOutlined />
          </Button>
        </div>
      }
    >
      <Table
        columns={columns}
        dataSource={filteredList}
        className="p-3"
        rowSelection={{
          type: 'checkbox',
          ...rowSelection,
        }}
      />
    </Card>
  );
}
