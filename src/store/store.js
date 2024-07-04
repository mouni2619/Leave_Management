import { compose, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

// Root Reducer
import { RootReducer } from './reducer/rootReducer';

// Root Saga
import RootSaga from './sagas/rootSaga';

// Middleware
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

// Enhancers
const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

/**
 * Configuring Store
 */
const Store = configureStore({
  reducer: RootReducer,
  composeEnhancers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middleware),
});

sagaMiddleware.run(RootSaga);

// Export Default
export default Store;
