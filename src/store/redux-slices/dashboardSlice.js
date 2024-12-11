import { createSlice } from '@reduxjs/toolkit';

// Constants
import { DASHBOARD_LIST_TABLE_DATA } from '../../constants/dashboardConstants';

const initialState = {
  dashboardsMap: DASHBOARD_LIST_TABLE_DATA,
};

const dashboardSlice = createSlice({
  name: 'dashboards',
  initialState,
  reducers: {
    createDashboard: (state, action) => {
      const { dashboardObj = {} } = action.payload;
      const newId = Object.keys(state.dashboardsMap).length + 1;
      state.dashboardsMap[newId] = {
        ...dashboardObj,
        key: newId,
        isActive: true,
      };
    },

    updateDashboard: (state, action) => {
      const { dashboardId = '', dashboardObj } = action.payload;
      state.dashboardsMap[dashboardId] = {
        ...state.dashboardsMap[dashboardId],
        ...dashboardObj,
      };
    },

    updateDashboardStatus: (state, action) => {
      const { dashboardId = '', status = false } = action.payload;
      state.dashboardsMap[dashboardId].isActive = status;
    },
  },
});

export const DashboardReducer = dashboardSlice.reducer;

export const DashboardActions = dashboardSlice.actions;
