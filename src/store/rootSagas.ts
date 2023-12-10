import { all, fork } from "redux-saga/effects";
import { watchApp } from "./app/sagas";
import { watchGames } from "./games/sagas";

const rootSaga = function* () {
  yield all([
    fork(watchApp),
    fork(watchGames),
    // Other forks
  ]);
};

export default rootSaga;
