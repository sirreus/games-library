// import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";

import rootReducers from "./rootReduser";
// import rootSaga from "./rootSagas";

// const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducers,
  // middleware: [sagaMiddleware],
});

// sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
