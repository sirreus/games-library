import { appSlices } from "./app/slices";
import { gamesSlices } from "./games/slices";
import { sortingSlices } from "./sorting/slices";

const rootReducers = {
  app: appSlices.reducer,
  games: gamesSlices.reducer,
  sorting: sortingSlices.reducer,
};

export default rootReducers;
