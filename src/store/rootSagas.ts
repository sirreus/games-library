import { all, fork } from "redux-saga/effects";
import { watchApp } from "./app/sagas";

const rootSaga = function* () {
  yield all([
    fork(watchApp),
    // Other forks
  ]);
};

export default rootSaga;
