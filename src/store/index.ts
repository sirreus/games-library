import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import createSagaMiddleware from "@redux-saga/core";
import storage from "redux-persist/lib/storage";

import rootReducers from "./rootReduser";
import rootSaga from "./rootSagas";

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: "root",
  storage,
};

const persistedRootGame = persistReducer(persistConfig, rootReducers.games);

export const store = configureStore({
  reducer: {
    app: rootReducers.app,
    games: persistedRootGame,
    sorting: rootReducers.sorting,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export const persistor = persistStore(store);
