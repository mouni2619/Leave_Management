import { createSlice } from '@reduxjs/toolkit';

// Constants
import { MULTIPLE_POINTS } from '../../constants/pointsMapConstant';
import { HEAT_MAP_POINTS } from '../../constants/heatMapConstants';
import { BOUNDARY_POINTS } from '../../constants/boundaryMapConstants';

const initialState = {
  multiplePoints: [],
  heatMapPoints: [],
  boundaryPoints: {},
};

const mapSlice = createSlice({
  name: 'maps',
  initialState,
  reducers: {
    getMultiplePoints: (state) => {
      state.multiplePoints = MULTIPLE_POINTS;
    },

    getHeatMapPoints: (state) => {
      state.heatMapPoints = HEAT_MAP_POINTS;
    },

    getBoundaryPoints: (state) => {
      state.boundaryPoints = BOUNDARY_POINTS;
    },
  },
});

export const MapReducer = mapSlice.reducer;

export const MapActions = mapSlice.actions;
