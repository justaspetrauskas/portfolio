import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import groq from "groq";
import sanityClient from "../../client";

interface ProfileSlice {
  loading: "idle" | "pending" | "succeeded" | "failed";
  profile: any;
  error: string;
}
const initialState: ProfileSlice = {
  loading: "idle",
  profile: null,
  error: "",
};

export const fetchProfile = createAsyncThunk("fetchProfile", async () => {
  const params = { profileId: process.env.NEXT_PUBLIC_SANITY_PROFILEID };
  const sanityURL =
    "https://9d1xnwcb.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22profile%22%5D";
  const query = groq`*[_type == "profile" && _id == $profileId]{"hello":greeting[0],firstName,lastName,currentLocation,socialLinks,"profileImageURL":profileImage.asset->url,"cvURL":cv.asset->url,education[]->{title,description,university},experience[]->{jobTitle,company,description,startDate,endDate,tag[]->{skillTitle}},education[]->{title,description,university,startDate,endDate},skills[]->{_id,skillTitle,skillIcon,category,skillIcon{secure_url}}}`;
  const query2 = groq`*[_type == "profile"]`;

  const response = await sanityClient.fetch(query, params);

  //   console.log("Response from sanity", response);
  const resp = await fetch(sanityURL);
  const data = await resp.json();
  console.log(data);

  return response;
});

const profileSlice = createSlice({
  name: "profileStatus",
  initialState,
  reducers: {
    setProfileData: (state, action) => {
      state.profile = action.payload[0];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProfile.pending, (state, action) => {
      state.loading = "pending";
      console.log("loading");
    });
    builder.addCase(fetchProfile.fulfilled, (state, action) => {
      console.log("loading data", action);
      state.loading = "succeeded";
      state.profile = action.payload;
    });
    builder.addCase(fetchProfile.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.error.message!;
    });
  },
});
export const { setProfileData } = profileSlice.actions;
export default profileSlice.reducer;
// dispatching the thunk
//dispatch(fetchProfile());
