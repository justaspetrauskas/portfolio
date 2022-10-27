import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Profile } from "../../types/types.profile";

interface ProfileSlice {
  loading: "idle" | "pending" | "succeeded" | "failed";
  profile: Profile | null;
  error: string;
}
const initialState: ProfileSlice = {
  loading: "idle",
  profile: null,
  error: "",
};

const profileSlice = createSlice({
  name: "profileStatus",
  initialState,
  reducers: {
    setProfileData: (state, action: PayloadAction<Profile>) => {
      console.log(action.payload);
      state.profile = action.payload;
    },
  },
});
export const { setProfileData } = profileSlice.actions;
export default profileSlice.reducer;
