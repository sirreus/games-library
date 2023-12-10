import { IApp } from "./app/types";
import { appSlices } from "./app/slices";

// export type RootState = {
//   app: IApp;
// };

const rootReducers = {
  app: appSlices.reducer,
};

export default rootReducers;
