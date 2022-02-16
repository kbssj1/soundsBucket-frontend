import { put, takeEvery, call } from 'redux-saga/effects';
import ApiConnector from "../apiConnector";
import NotificationServie from "../NotificationService";

// 
const GET_ARTIST_MEMBER_LIST = 'GET_ARTIST_MEMBER_LIST';
const GET_ARTIST_MEMBER_LIST_SUCCESS = 'GET_ARTIST_MEMBER_LIST_SUCCESS';
const GET_ARTIST_MEMBER_LIST_FAIL = 'GET_ARTIST_MEMBER_LIST_FAIL';
const GET_ARTIST_MEMBER_DETAIL = 'GET_ARTIST_MEMBER_DETAIL';
const GET_ARTIST_MEMBER_DETAIL_SUCCESS = 'GET_ARTIST_MEMBER_DETAIL_SUCCESS';
const GET_ARTIST_MEMBER_DETAIL_FAIL = 'GET_ARTIST_MEMBER_DETAIL_FAIL';
const UPDATE_ARTIST_MEMBER = 'UPDATE_ARTIST_MEMBER';
const UPDATE_ARTIST_MEMBER_SUCCESS = 'UPDATE_ARTIST_MEMBER_SUCCESS';
const UPDATE_ARTIST_MEMBER_FAIL = 'UPDATE_ARTIST_MEMBER_FAIL';
const DELETE_ARTIST_MEMBER = 'DELETE_ARTIST_MEMBER';
const DELETE_ARTIST_MEMBER_SUCCESS = 'DELETE_ARTIST_MEMBER_SUCCESS';
const DELETE_ARTIST_MEMBER_FAIL = 'DELETE_ARTIST_MEMBER_FAIL';

export const getArtistMemberList = (props) => ({ type: GET_ARTIST_MEMBER_LIST, payload:props});
export const getArtistMemberDetail = (props) => ({ type: GET_ARTIST_MEMBER_DETAIL, payload:props});
export const updateArtistMember = (props) => ({ type: UPDATE_ARTIST_MEMBER, payload:props});
export const deleteArtistMember = (props) => ({ type: DELETE_ARTIST_MEMBER, payload:props});

//
function* getArtistMemberListSaga(action) {
  try {
    const response = yield call(() => ApiConnector.apiGet('/get_artist_member_list'));
    if (response.result === true) {
      yield put({ type: GET_ARTIST_MEMBER_LIST_SUCCESS });
    } else {
      NotificationServie.alert("데이터 가져오기에 실패했습니다.");
      yield put({ type: GET_ARTIST_MEMBER_LIST_FAIL });
    }
  } catch (e) {
    yield put({ type: GET_ARTIST_MEMBER_LIST_FAIL });
  }
}

function* getArtistMemberDetailSaga(action) {
  try {
    const response = yield call(() => ApiConnector.apiPost('/get_artist_member_detail'));
    if (response.result === true) {
      yield put({ type: GET_ARTIST_MEMBER_DETAIL_SUCCESS });
    } else {
      NotificationServie.alert("데이터 가져오기에 실패했습니다.");
      yield put({ type: GET_ARTIST_MEMBER_DETAIL_FAIL });
    }
  } catch (e) {
    yield put({ type: GET_ARTIST_MEMBER_DETAIL_FAIL });
  }
}

function* updateArtistMemberSaga(action) {
  // const { media_id, key, value } = action.payload;
  try {
    const response = yield call(() => ApiConnector.apiPost('/update_artist_member'));
    if (response.result === true) {
      yield put({ type: UPDATE_ARTIST_MEMBER_SUCCESS });
    } else {
      NotificationServie.alert("데이터 업데이트에 실패했습니다.");
      yield put({ type: UPDATE_ARTIST_MEMBER_FAIL });
    }
  } catch (e) {
    yield put({ type: UPDATE_ARTIST_MEMBER_FAIL });
  }
}

function* deleteArtistMemberSaga(action) {
  const { media_id, file } = action.payload;
  try {
    const response = yield call(() => ApiConnector.apiPost('/delete_artist_member'));
    if (response.result === true) {
      yield put({ type: DELETE_ARTIST_MEMBER_SUCCESS });
      NotificationServie.alert("파일 업로드에 성공했습니다.");
    } else {
      yield put({ type: DELETE_ARTIST_MEMBER_FAIL });
      NotificationServie.alert("파일 업로드에 실패했습니다.");
    }
  } catch (e) {
    yield put({ type: DELETE_ARTIST_MEMBER_FAIL });
  }
}

export function* artistMediaSaga() {
  yield takeEvery(GET_ARTIST_MEMBER_LIST, getArtistMemberListSaga);
  yield takeEvery(GET_ARTIST_MEMBER_DETAIL, getArtistMemberDetailSaga);
  yield takeEvery(UPDATE_ARTIST_MEMBER, updateArtistMemberSaga);
  yield takeEvery(DELETE_ARTIST_MEMBER, deleteArtistMemberSaga);
}

const initialState = {
  artistMemberLoading: false,
  artistMemberList: [],
};

export default function artistMediaReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ARTIST_MEMBER_LIST:
      return {
        ...state,
        artistMemberLoading: true,
        artistMemberList: []
      };
    case GET_ARTIST_MEMBER_LIST_SUCCESS:
      return {
        ...state,
        artistMemberLoading: false,
        artistMemberList: []
      };
    case GET_ARTIST_MEMBER_LIST_FAIL:
      return {
        ...state,
        artistMemberLoading: false,
        artistMemberList: []
      };
    default:
      return state;
  }
}