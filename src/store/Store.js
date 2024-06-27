// import { compose, configureStore } from "@reduxjs/toolkit";
// import createSagaMiddleware from "redux-saga";
// import { RootReducer } from "../reducers/RootReducer";
// import RootSaga from "../saga/RootSaga";

// const sagaMiddleware = createSagaMiddleware();
// const middleware = [sagaMiddleware];

// const composeEnhancers = (typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// const Store = configureStore({
//   reducer: RootReducer,
//   composeEnhancers,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }).concat(middleware),
// });

// sagaMiddleware.run(RootSaga);

// export default Store;
