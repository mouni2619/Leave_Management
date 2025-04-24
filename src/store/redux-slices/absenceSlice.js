import { createSlice } from '@reduxjs/toolkit';

// Constants
import { LeaveStatusConfigMap } from '../../constants/myAbsenceConstant';

// Initial state
const initialState = {
  absenceListMap: {},
};

const absenceSlice = createSlice({
  name: 'Absence',
  initialState,
  reducers: {
    // Add Absence
    addAbsence: (state, action) => {
      const { absenceData = {} } = action.payload;
      const id = Math.floor(Math.random() * 100);
      state.absenceListMap[id] = { key: id, id, ...absenceData };
    },

    // Edit Absence
    editAbsence: (state, action) => {
      const { id = '', absenceData = {} } = action.payload;
      state.absenceListMap[id] = { key: id, id, ...absenceData };
    },

    // Delete Absence
    deleteAbsence: (state, action) => {
      const { id = '' } = action.payload;
      delete state.absenceListMap[id];
    },

    // Approve Leave Request
    approveLeaveRequest: (state, action) => {
      const { id = '' } = action.payload;
      state.absenceListMap[id].status = LeaveStatusConfigMap.approved.key;
    },

    // Reject Leave Request
    rejectLeaveRequest: (state, action) => {
      const { id = '', rejectReason = '' } = action.payload;
      state.absenceListMap[id].status = LeaveStatusConfigMap.rejected.key;
      state.absenceListMap[id].rejectReason = rejectReason;
    },
  },
});

// Reducer
export const AbsenceReducer = absenceSlice.reducer;

// Actions
export const AbsenceActions = absenceSlice.actions;
