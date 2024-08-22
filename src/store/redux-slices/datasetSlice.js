import { createSlice } from '@reduxjs/toolkit';

// Constants
import { DATASET_LIST_TABLE_ROWS } from '../../constants/datasetConstants';

const initialState = {
  datas: DATASET_LIST_TABLE_ROWS,
};

const datasetSlice = createSlice({
  name: 'datasets',
  initialState,
  reducers: {
    createDataset: (state, action) => {
      state.datas.push({
        key: state.datas.length + 1,
        ...action.payload,
      });
    },

    updateDataset: (state, action) => {
      const { datasetId, data } = action.payload;
      const index = state.datas.findIndex(
        (dataset) => dataset.key === datasetId,
      );
      if (index !== -1) {
        state.datas[index] = { ...data, key: datasetId };
      }
    },

    deleteDataset: (state, action) => {
      const { datasetId } = action.payload;
      const index = state.datas.findIndex(
        (dataset) => dataset.key === datasetId,
      );
      if (index !== -1) {
        state.datas.splice(index, 1);
      }
    },
  },
});

export const DatasetReducer = datasetSlice.reducer;

export const DatasetActions = datasetSlice.actions;
