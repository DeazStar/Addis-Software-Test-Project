import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  songs: [],
  isLoading: false,
};

const songSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    getSongsFetch: (state) => {
      state.isLoading = true;
    },
    getSongsSuccess: (state, action) => {
      state.songs = action.payload;
      state.isLoading = false;
    },
    getSongsFailure: (state) => {
      state.isLoading = false;
    },
    deleteSongsCall: (state) => {
      state.isLoading = true;
    },
    deleteSongsSuccess: (state, action) => {
      const songId = action.payload;
      state.songs.splice(
        state.songs.findIndex((song) => song.id === songId),
        1
      );
      state.isLoading = false;
    },
  },
});

export const {
  getSongsFetch,
  getSongsSuccess,
  getSongsFailure,
  deleteSongsCall,
  deleteSongsSuccess,
} = songSlice.actions;

export default songSlice.reducer;
