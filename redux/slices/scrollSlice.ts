import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SmoothScrollSlice {
  velocityVal: number;
}

const initialState: SmoothScrollSlice = {
  velocityVal: 0,
};

export const smoothScrollStateSlice = createSlice({
  name: "smoothScrollSlice",
  initialState,
  reducers: {
    setVelocityValue: (state, action: PayloadAction<number>) => {
      state.velocityVal = action.payload;
    },
  },
});

export const { setVelocityValue } = smoothScrollStateSlice.actions;

export default smoothScrollStateSlice.reducer;
