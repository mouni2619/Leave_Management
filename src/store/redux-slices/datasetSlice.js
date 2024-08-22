import { createSlice } from '@reduxjs/toolkit';

// Constants
import { DATASET_LIST_TABLE_ROWS } from '../../constants/datasetConstants';

const initialState = {
  data: DATASET_LIST_TABLE_ROWS,
};

const datasetSlice = createSlice({
  name: 'datasets',
  initialState,
  reducers: {
    createDataset: (state, action) => {
      state.data.push({
        key: state.data.length + 1,
        ...action.payload,
      });
    },

    updateDataset: (state, action) => {
      const { datasetId, data } = action.payload;
      const index = state.data.findIndex(
        (dataset) => dataset.key === datasetId,
      );
      if (index !== -1) {
        state.data[index] = { ...data, key: datasetId };
      }
    },

    deleteDataset: (state, action) => {
      const { datasetId } = action.payload;
      const index = state.data.findIndex(
        (dataset) => dataset.key === datasetId,
      );
      if (index !== -1) {
        state.data.splice(index, 1);
      }
    },
  },
});

export const DatasetReducer = datasetSlice.reducer;

export const DatasetActions = datasetSlice.actions;
