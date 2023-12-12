import appSlices from "./app/slices";
import gamesSlices from "./games/slices";
import sortingSlices from "./sorting/slices";

const rootReducers = {
  app: appSlices,
  games: gamesSlices,
  sorting: sortingSlices,
};

export default rootReducers;
