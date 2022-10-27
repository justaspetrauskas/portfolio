import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Link {
  id: number;
  label: string;
  url: string;
}

const links: Link[] = [
  { label: "hello", url: "hello", id: 1 },
  { label: "me", url: "me", id: 2 },
  { label: "skills", url: "skills", id: 3 },
  { label: "projects", url: "projects", id: 4 },
  { label: "contact", url: "contact", id: 5 },
];

interface NavigationSlice {
  links: Link[];
  sidebarIsOpen: boolean;
  activeLink: string;
  activeSection: string;
}
const initialState: NavigationSlice = {
  links: links,
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

      state.activeSection = section;
    },
  },
});

export const { toggleNavigationStatus, setActiveLink, setActiveSection } =
  navigationStateSlice.actions;

export default navigationStateSlice.reducer;
