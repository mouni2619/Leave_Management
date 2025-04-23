import { useEffect, useState } from 'react';
import { Table, Button, Card, Dropdown, Space, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { FilterOutlined, DownOutlined } from '@ant-design/icons';

// Actions
import { AbsenceActions } from '../../../store/redux-slices/absenceSlice';

// Helper Functions
import AbsenceHelper from '../../../helpers/absence/absenceHelper';
import { LeaveTypeConfig } from '../../../constants/myAbsenceConstant';

/**
 * Upcoming Absence Table
 * @returns
 */
export default function UpcomingAbsenceTable({
  setIsModalOpen,
  setIsViewModalOpen,
  setSelectedRow,
}) {
  // Dispatch
  const dispatch = useDispatch();

  // State
  const [selectedRowIds, setSelectedRowIds] = useState([]);
  const [selectedLeaveTypes, setSelectedLeaveTypes] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

    console.log(selectedLeaveTypes);
    

  // Selector State
  const absenceListMap = useSelector((state) => state.absence.absenceListMap);
  const absenceList = Object.values(absenceListMap);

  const absenceListStr = JSON.stringify(absenceList)
  

  const rowSelection = {
    selectedRowKeys: selectedRowIds,
    onChange: (newSelectedRowKeys) => {
      setSelectedRowIds(newSelectedRowKeys);
    },
  };

  const dropdownItems = Object.values(LeaveTypeConfig).map(
    ({ name = '', key = '' }) => ({ value:key, label: name }),
  );

  // Functions
  function handleMenuClick(menuKey, record = {}) {
    const { id = '' } = record;

    if (menuKey === '1') {
      setIsViewModalOpen(true);
      setSelectedRow(record);
    }

    if (menuKey === '2') {
      setIsModalOpen(true);
      setSelectedRow(record);
    }

    if (menuKey === '3') {
      dispatch(AbsenceActions.deleteAbsence({ id }));
    }
  }

  function selectFilter(value=""){
    if(!value){
      setSelectedLeaveTypes([])
      return
    }

    setSelectedLeaveTypes([value])
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
  }, [absenceListStr,selectedLeaveTypes]);

  return (
    <Card
      className="mt-3"
      title="Upcoming Absence"
      extra={
        <div className="d-flex align-items-center gap-2">
          <Select allowClear={true} onChange={selectFilter} options={dropdownItems} className='w-50' placeholder="Select Filter"/>

          <Button>
            Bulk Actions <DownOutlined />
          </Button>
        </div>
      }
    >
      <Table
        columns={AbsenceHelper.getColumns(handleMenuClick)}
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
