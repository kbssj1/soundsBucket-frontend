import { put, takeEvery, call } from 'redux-saga/effects';
import apiConnector from '../apiConnector';
import NotificationServie from "../NotificationService";

// 
const GET_ARTIST_TALK_LIST = 'GET_ARTIST_TALK_LIST';
const GET_ARTIST_TALK_LIST_SUCCESS = 'GET_ARTIST_TALK_LIST_SUCCESS';
const GET_ARTIST_TALK_LIST_FAIL = 'GET_ARTIST_TALK_LIST_FAIL';
const UPLOAD_ARTIST_TALK = 'UPLOAD_ARTIST_TALK';
const UPLOAD_ARTIST_TALK_SUCCESS = 'UPLOAD_ARTIST_TALK_SUCCESS';
const UPLOAD_ARTIST_TALK_FAIL = 'UPLOAD_ARTIST_TALK_FAIL';
const DELETE_ARTIST_TALK = 'DELETE_ARTIST_TALK';
const DELETE_ARTIST_TALK_SUCCESS = 'DELETE_ARTIST_TALK_SUCCESS';
const DELETE_ARTIST_TALK_FAIL = 'DELETE_ARTIST_TALK_FAIL';

export const getArtistTalkList = (props) => ({ type: GET_ARTIST_TALK_LIST, payload:props});
export const uploadArtistTalk = (props) => ({ type: UPLOAD_ARTIST_TALK, payload:props});
export const deleteArtistTalk = (props) => ({ type: DELETE_ARTIST_TALK, payload:props});

//
function* getArtistTalkListSaga(action) {
  try {
    const response = yield call(() => apiConnector.apiPost('/get_artist_talk_list', {artist_id: 0}));
    if (response.result === true) {
      yield put({ type: GET_ARTIST_TALK_LIST_SUCCESS, artistTalkList: response.data.talk_list });
    } else {
      NotificationServie.alert("데이터 가져오기에 실패했습니다.");
      yield put({ type: GET_ARTIST_TALK_LIST_FAIL });
    }
  } catch (e) {
    yield put({ type: GET_ARTIST_TALK_LIST_FAIL });
  }
}

//
function* uploadArtistTalkListSaga(action) {
  const { talk } = action.payload;
  try {
    const response = yield call(() => apiConnector.apiPost('/upload_artist_talk', {talk: talk}));
    if (response.result === true) {
      yield put({ type: UPLOAD_ARTIST_TALK_SUCCESS });
      yield put({ type: GET_ARTIST_TALK_LIST });
    } else {
      NotificationServie.alert("데이터 업로드에 실패했습니다.");
      yield put({ type: UPLOAD_ARTIST_TALK_FAIL });
    }
  } catch (e) {
    yield put({ type: UPLOAD_ARTIST_TALK_FAIL });
  }
}

//
function* deleteArtistTalkListSaga(action) {
  const { talk_id } = action.payload;
  try {
    const response = yield call(() => apiConnector.apiPost('/delete_artist_talk', {talk_id : talk_id}));
    if (response.result === true) {
      yield put({ type: DELETE_ARTIST_TALK_SUCCESS });
      yield put({ type: GET_ARTIST_TALK_LIST });
    } else {
      NotificationServie.alert("데이터 삭제가 실패했습니다.");
      yield put({ type: DELETE_ARTIST_TALK_FAIL });
    }
  } catch (e) {
    yield put({ type: DELETE_ARTIST_TALK_FAIL });
  }
}

export function* artistTalkSaga() {
  yield takeEvery(GET_ARTIST_TALK_LIST, getArtistTalkListSaga);
  yield takeEvery(UPLOAD_ARTIST_TALK, uploadArtistTalkListSaga);
  yield takeEvery(DELETE_ARTIST_TALK, deleteArtistTalkListSaga);
}

const initialState = {
  artistTalkList: [],
};

export default function artistTalkReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ARTIST_TALK_LIST:
      return {
        ...state,
        artistTalkList: [],
      };
    case GET_ARTIST_TALK_LIST_SUCCESS:
      return {
        ...state,
        artistTalkList: action.artistTalkList,
      };
    case GET_ARTIST_TALK_LIST_FAIL:
      return {
        ...state,
        artistTalkList: [],      
      };
    default:
      return state;
  }
}