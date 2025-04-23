import { createSlice } from '@reduxjs/toolkit';

// initial state
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
  },
});

// Reducer
export const AbsenceReducer = absenceSlice.reducer;

// Actions
export const AbsenceActions = absenceSlice.actions;
