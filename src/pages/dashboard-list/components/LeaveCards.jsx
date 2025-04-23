import React from 'react';
import { Card } from 'antd';
import { useSelector } from 'react-redux';

// Constants
import { LeaveTypeConfig } from '../../../constants/myAbsenceConstant';

// CSS
import './LeaveCards.css';

/**
 * Leave Cards
 */
export default function LeaveCards() {
  // Selector State
  const absenceListMap = useSelector((state) => state.absence.absenceListMap);
  const absenceList = Object.values(absenceListMap);

  return (
    <div className="mt-4 d-flex gap-3">
      {Object.values(LeaveTypeConfig).map((leave, index) => {
        const {
          className = '',
          name = '',
          key = '',
          icon = '',
          totalLeave = 0,
        } = leave;

        const usedLeave = absenceList.reduce(
          (acc, absence) => (key === absence.leaveType ? acc + 1 : acc),
          0,
        );

        return (
          <Card key={index} className="w-50">
            <div
              className={`card-header ${className} d-flex justify-content-between align-items-center py-2 px-2 `}
            >
              <span className="leave-title">{name}</span>
              <span className="leave-icon">{icon}</span>
            </div>
            <div className=" py-2 px-2">
              <p className="leave-days mb-0">
                {usedLeave} / {totalLeave} Days Used
              </p>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
