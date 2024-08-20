import { createSlice } from '@reduxjs/toolkit';

// Constants
import { DATASET_LIST_TABLE_ROWS } from '../../constants/datasetConstants';

const initialState = {
  datasets: DATASET_LIST_TABLE_ROWS,
};

const datasetSlice = createSlice({
  name: 'datasets',
  initialState,
  reducers: {
    createDataset: (state, action) => {
      state.datasets.push({
        key: state.datasets.length + 1,
        ...action.payload,
      });
    },

    updateDataset: (state, action) => {
      const { datasetId, data } = action.payload;
      const index = state.datasets.findIndex(
        (dataset) => dataset.key === datasetId,
      );
      if (index !== -1) {
        state.datasets[index] = { ...data, key: datasetId };
      }
    },

    deleteDataset: (state, action) => {
      const { datasetId } = action.payload;
      const index = state.datasets.findIndex(
        (dataset) => dataset.key === datasetId,
      );
      if (index !== -1) {
        state.datasets.splice(index, 1);
      }
    },
  },
});

export const DatasetReducer = datasetSlice.reducer;

export const DatasetActions = datasetSlice.actions;
