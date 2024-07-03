import { createSlice } from '@reduxjs/toolkit';

// initial state
const initialState = {
  errorInfo: {},
  showToaster: false,
  showPageError: false,
};

const errorSlice = createSlice({
  name: 'Error',
  initialState,
  reducers: {
    //----Action to Set Error Details-----//
    setError: (state, action) => {
      const { errorInfo, showToaster, showPageError } = action.payload;
      state.errorInfo = errorInfo;
      state.showToaster = showToaster;
      state.showPageError = showPageError;
    },

    //---- clear Error Details -----//
    clearError: () => initialState,
  },
});

// Reducer
export const ErrorReducer = errorSlice.reducer;

// Actions
export const ErrorActions = errorSlice.actions;
