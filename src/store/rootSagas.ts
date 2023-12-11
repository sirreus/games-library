import { all, fork } from "redux-saga/effects";
import { watchApp } from "./app/sagas";
import { watchGames } from "./games/sagas";
import { watchSortingGames } from "./sorting/sagas";

const rootSaga = function* () {
  yield all([
    fork(watchApp),
    fork(watchGames),
    fork(watchSortingGames),
    // Other forks
  ]);
};

export default rootSaga;
