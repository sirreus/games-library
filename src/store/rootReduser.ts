import { appSlices } from "./app/slices";
import { gamesSlices } from "./games/slices";

const rootReducers = {
  app: appSlices.reducer,
  games: gamesSlices.reducer,
};

export default rootReducers;
