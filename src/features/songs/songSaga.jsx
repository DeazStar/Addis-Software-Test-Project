import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { getSongsSuccess, deleteSongsSuccess } from "./songSlice";

function* workGetSongsFetch() {
  try {
    const data = yield call(() =>
      axios.get("https://65b23d339bfb12f6eafd3f30.mockapi.io/api/v1/songs")
    );

    const songs = data.data;
    yield put(getSongsSuccess(songs));
  } catch (err) {
    console.error(err);
  }
}

function* workDeleteSongs(action) {
  const songId = action.payload;

  try {
    const response = yield call(() =>
      axios.delete(
        `https://65b23d339bfb12f6eafd3f30.mockapi.io/api/v1/songs/${songId}`
      )
    );
    console.log(response);
    yield put(deleteSongsSuccess(songId));
  } catch (err) {
    console.error(err);
  }
}

function* songSaga() {
  yield takeEvery("songs/getSongsFetch", workGetSongsFetch);
  yield takeEvery("songs/deleteSongsCall", workDeleteSongs);
}

export default songSaga;
