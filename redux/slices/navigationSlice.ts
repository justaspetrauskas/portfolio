import { createSlice, PayloadAction } from "@reduxjs/toolkit";




interface NavigationSlice {
  sidebarIsOpen: boolean;
  activeLink: string;
  activeSection: string;
}
const initialState: NavigationSlice = {
  sidebarIsOpen: false,
  activeLink: "",
  activeSection: "",
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
    setActiveSection: (state, action: PayloadAction<string>) => {
      const section = action.payload.toLocaleLowerCase();

      state.activeLink = section;
    },
  },
});

export const { toggleNavigationStatus, setActiveLink, setActiveSection } =
  navigationStateSlice.actions;

export default navigationStateSlice.reducer;
