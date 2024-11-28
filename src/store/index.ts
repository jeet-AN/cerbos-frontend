
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "src/store/features/counterSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import authSlice  from "./features/authSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    auth: authSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain "useDispatch" and "useSelector"
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
