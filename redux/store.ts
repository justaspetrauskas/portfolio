import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import navigationReducer from "./slices/navigationSlice";
import smoothScrollReducer from "./slices/scrollSlice";
import sectionStateReducer from "./slices/sectionSlice";
import profileReducer from "./slices/profileSlice";

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    smoothScroll: smoothScrollReducer,
    sectionState: sectionStateReducer,
    profile: profileReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const selectSidebarState = (state: RootState) =>
  state.navigation.sidebarIsOpen;

export const selectActiveLink = (state: RootState) =>
  state.navigation.activeLink;

export const selectScrollState = (state: RootState) => state.smoothScroll;
export const selectSectionState = (state: RootState) => state.sectionState;
export const selectProfileState = (state: RootState) => state.profile.profile;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
