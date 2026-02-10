import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "../redux/employeeSlice";
import { loadState, saveState } from "./storage";

const persistedState = loadState();

export const store = configureStore({
  reducer: {
    employees: employeeReducer,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState({
    employees: store.getState().employees,
  });
});
