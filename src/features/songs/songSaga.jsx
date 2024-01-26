import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { getSongsSuccess } from "./songSlice";

function* workGetSongsFetch() {
  const data = yield call(() =>
    axios.get("https://65b23d339bfb12f6eafd3f30.mockapi.io/api/v1/songs")
  );
  const songs = data.data;
  yield put(getSongsSuccess(songs));
}

function* songSaga() {
  yield takeEvery("songs/getSongsFetch", workGetSongsFetch);
}

export default songSaga;
