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
    addSongsCall: (state) => {
      state.isLoading = true;
    },
    addSongsSuccess: (state, action) => {
      state.songs.push(action.payload);
      state.isLoading = false;
    },
    patchSongsCall: (state) => {
      state.isLoading = true;
    },
    patchSongsSuccess: (state, action) => {
      const songId = action.payload.id;
      const index = state.songs.findIndex((song) => song.id === songId);

      state.songs[index] = action.payload;

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
  addSongsCall,
  addSongsSuccess,
  patchSongsCall,
  patchSongsSuccess,
} = songSlice.actions;

export default songSlice.reducer;
