import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NavigationSlice {
  sidebarIsOpen: boolean;
  activeLink: string;
}
const initialState: NavigationSlice = {
  sidebarIsOpen: false,
  activeLink: "",
};

export const navigationStateSlice = createSlice({
  name: "navigationStatus",
  initialState,
  reducers: {
    toggleNavigationStatus: (state) => {
      state.sidebarIsOpen = !state.sidebarIsOpen;
    },
    setActiveLink: (state, action: PayloadAction<string>) => {
      const link = action.payload.toLocaleLowerCase();

      state.activeLink = link;
    },
  },
});

export const { toggleNavigationStatus, setActiveLink } =
  navigationStateSlice.actions;

export default navigationStateSlice.reducer;
