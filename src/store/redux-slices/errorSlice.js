import { createSlice } from '@reduxjs/toolkit';

// initial state
const initialState = {
  errorInfo: {},
  showToaster: false,
  showPageError: false,
  errorPageUrl: '',
};

const errorSlice = createSlice({
  name: 'Error',
  initialState,
  reducers: {
    //----Action to Set Error Details-----//
    setError: (state, action) => {
      const { errorInfo, showToaster, showPageError, errorPageUrl } =
        action.payload;
      state.errorInfo = errorInfo;
      state.showToaster = showToaster;
      state.showPageError = showPageError;
      state.errorPageUrl = errorPageUrl;
    },

    //---- clear Error Details -----//
    clearError: () => initialState,
  },
});

// Reducer
export const ErrorReducer = errorSlice.reducer;

// Actions
export const ErrorActions = errorSlice.actions;
