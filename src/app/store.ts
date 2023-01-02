import { configureStore } from "@reduxjs/toolkit";
//wrapper around basic redux store function
//automatically adds Thunk middleware
//automatically checks dev miostake : accidental mutation

import counterReducer from "../features/counter/counter-slice";

export const store = configureStore({
  //configureStore will automatically configure combine the reducers for us if we pass them as object
  reducer: {
    counter: counterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
