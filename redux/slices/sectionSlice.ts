import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SectionSlice {
  background: string;
}

const initialState: SectionSlice = {
  background: "",
};

export const sectionSlice = createSlice({
  name: "sectionSlice",
  initialState,
  reducers: {
    setCurrentBackgroundColor: (state, action: PayloadAction<string>) => {
      state.background = action.payload;
    },
  },
});

export const { setCurrentBackgroundColor } = sectionSlice.actions;

export default sectionSlice.reducer;
