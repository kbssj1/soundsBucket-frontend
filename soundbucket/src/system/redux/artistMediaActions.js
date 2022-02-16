import { put, takeEvery, call } from 'redux-saga/effects';
import ApiConnector from "../apiConnector";
import NotificationServie from "../NotificationService";

// 
const GET_MEDIA_LIST = 'GET_MEDIA_LIST';
const GET_MEDIA_LIST_SUCCESS = 'GET_MEDIA_LIST_SUCCESS';
const GET_MEDIA_LIST_FAIL = 'GET_MEDIA_LIST_FAIL';
const GET_MEDIA_DETAIL = 'GET_MEDIA_DETAIL';
const GET_MEDIA_DETAIL_SUCCESS = 'GET_MEDIA_DETAIL_SUCCESS';
const GET_MEDIA_DETAIL_FAIL = 'GET_MEDIA_DETAIL_FAIL';
const DELETE_MEDIA = 'DELETE_MEDIA';
const DELETE_MEDIA_SUCCESS = 'DELETE_MEDIA_SUCCESS';
const DELETE_MEDIA_FAIL = 'DELETE_MEDIA_FAIL';
const UPDATE_MEDIA_DATA = 'UPDATE_MEDIA_DATA';
const UPDATE_MEDIA_DATA_SUCCESS = 'UPDATE_MEDIA_DATA_SUCCESS';
const UPDATE_MEDIA_DATA_FAIL = 'UPDATE_MEDIA_DATA_FAIL';
const UPDATE_MEDIA_CONTENT = 'UPDATE_MEDIA_CONTENT';
const UPDATE_MEDIA_CONTENT_SUCCESS = 'UPDATE_MEDIA_CONTENT_SUCCESS';
const UPDATE_MEDIA_CONTENT_FAIL = 'UPDATE_MEDIA_CONTENT_FAIL';
const UPLOAD_MEDIA = 'UPLOAD_MEDIA';
const UPLOAD_MEDIA_SUCCESS = 'UPLOAD_MEDIA_SUCCESS';
const UPLOAD_MEDIA_FAIL = 'UPLOAD_MEDIA_FAIL';

export const getMediaList = (props) => ({ type: GET_MEDIA_LIST, payload:props});
export const getMediaDetail = (props) => ({ type: GET_MEDIA_DETAIL, payload:props});
export const updateMediaData = (props) => ({ type: UPDATE_MEDIA_DATA, payload:props});
export const updateMediaContent = (props) => ({ type: UPDATE_MEDIA_CONTENT, payload:props});
export const uploadMedia = (props) => ({ type: UPLOAD_MEDIA, payload:props});
export const deleteMedia = (props) => ({ type: DELETE_MEDIA, payload:props});

//
function* getMediaListSaga(action) {
  try {
    const response = yield call(() => ApiConnector.apiGet('/get_media_list'));
    if (response.result === true) {
      yield put({ type: GET_MEDIA_LIST_SUCCESS, media:response.data.media_list });
    } else {
      NotificationServie.alert("데이터 가져오기에 실패했습니다.");
      yield put({ type: GET_MEDIA_LIST_FAIL });
    }
  } catch (e) {
    yield put({ type: GET_MEDIA_LIST_FAIL });
  }
}

function* getMediaDetailSaga(action) {
  try {
    const response = yield call(() => ApiConnector.apiPost('/get_media_detail', {media_id: action.payload}));
    if (response.result === true) {
      yield put({ type: GET_MEDIA_DETAIL_SUCCESS, mediaDetail:response.data.media_detail });
    } else {
      NotificationServie.alert("데이터 가져오기에 실패했습니다.");
      yield put({ type: GET_MEDIA_DETAIL_FAIL });
    }
  } catch (e) {
    yield put({ type: GET_MEDIA_DETAIL_FAIL });
  }
}

function* updateMediaDataSaga(action) {
  const { media_id, key, value } = action.payload;
  try {
    const response = yield call(() => ApiConnector.apiPost('/update_media_data', {media_id: media_id, key: key, value: value}));
    if (response.result === true) {
      yield put({ type: UPDATE_MEDIA_DATA_SUCCESS });
      yield put({ type: GET_MEDIA_DETAIL, payload: media_id});
    } else {
      NotificationServie.alert("데이터 업데이트에 실패했습니다.");
      yield put({ type: UPDATE_MEDIA_DATA_FAIL });
    }
  } catch (e) {
    yield put({ type: UPDATE_MEDIA_DATA_FAIL });
  }
}

function* updateMediaContentSaga(action) {
  const { media_id, file } = action.payload;
  var frm = new FormData();
  frm.append("media_id", media_id);
  frm.append("media", file);
  //
  try {
    const response = yield call(() => ApiConnector.fileUpload('/update_media_content', frm));
    if (response.result === true) {
      yield put({ type: UPDATE_MEDIA_CONTENT_SUCCESS });
      NotificationServie.alert("파일 업로드에 성공했습니다.");
    } else {
      yield put({ type: UPDATE_MEDIA_CONTENT_FAIL });
      NotificationServie.alert("파일 업로드에 실패했습니다.");
    }
  } catch (e) {
    yield put({ type: UPDATE_MEDIA_CONTENT_FAIL });
  }
}

function* uploadMediaSaga(action) {
  const { title, description, file } = action.payload;
  var frm = new FormData();
  frm.append("media", file);
  frm.append("title", title);
  frm.append("description", description);
  //
  try {
    const response = yield call(() => ApiConnector.fileUpload('/upload_media', frm));
    console.log(response);
    if (response.result === true) {
      yield put({ type: UPLOAD_MEDIA_SUCCESS });
      NotificationServie.alert("파일 업로드에 성공했습니다.");
    } else {
      yield put({ type: UPLOAD_MEDIA_FAIL });
      NotificationServie.alert("파일 업로드에 실패했습니다.");
    }
  } catch (e) {
    yield put({ type: UPLOAD_MEDIA_FAIL });
  }
}

function* deleteMediaSaga(action) {
  const { media_id, history, setConfirmForm } = action.payload;
  try {
    const response = yield call(() => ApiConnector.apiPost('/delete_media', {media_id: media_id}));
    if (response.result === true) {
      yield put({ type: DELETE_MEDIA_SUCCESS });
      setConfirmForm(false);
      history.push("/kr/mypage/artist/works");
      NotificationServie.alert("파일이 성공적으로 삭제되었습니다.");
    } else {
      NotificationServie.alert("파일 삭제가 실패했습니다.");
      yield put({ type: DELETE_MEDIA_FAIL });
    }
  } catch (e) {
    yield put({ type: DELETE_MEDIA_FAIL });
  }
}

export function* artistMediaSaga() {
  yield takeEvery(GET_MEDIA_LIST, getMediaListSaga);
  yield takeEvery(GET_MEDIA_DETAIL, getMediaDetailSaga);
  yield takeEvery(UPDATE_MEDIA_DATA, updateMediaDataSaga);
  yield takeEvery(UPDATE_MEDIA_CONTENT, updateMediaContentSaga);
  yield takeEvery(UPLOAD_MEDIA, uploadMediaSaga);
  yield takeEvery(DELETE_MEDIA, deleteMediaSaga);
}

const initialState = {
  artistList: [],
  //
  media: [],
  mediaLoading: false,
  //
  mediaDetail: null,
  mediaDetailLoading: false,
  //
  deletingMediaLoading: false,
  //
  updateMediaLoading: false,
  //
  updateMediaContentLoading: false,
  //
  uploadMediaLoading: false
};

export default function artistMediaReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MEDIA_LIST:
      return {
        ...state,
        mediaLoading: true
      };
    case GET_MEDIA_LIST_SUCCESS:
      return {
        ...state,
        media: action.media,
        mediaLoading: false
      };
    case GET_MEDIA_LIST_FAIL:
      return {
        ...state,
        media: [],
        mediaLoading: false
      };
    case GET_MEDIA_DETAIL:
      return {
        ...state,
        mediaDetail: {},
        mediaDetailLoading: true
      };
    case GET_MEDIA_DETAIL_SUCCESS:
      return {
        ...state,
        mediaDetail: action.mediaDetail,
        mediaDetailLoading: false
      };
    case GET_MEDIA_DETAIL_FAIL:
      return {
        ...state,
        mediaDetail: null,
        mediaDetailLoading: false
      };
    case DELETE_MEDIA:
      return {
        ...state,
        deletingMediaLoading: true
      };
    case DELETE_MEDIA_SUCCESS:
      return {
        ...state,
        deletingMediaLoading: false
      };
    case DELETE_MEDIA_FAIL:
      return {
        ...state,
        deletingMediaLoading: false
      };
    case UPDATE_MEDIA_DATA:
      return {
        ...state,
        updateMediaLoading: true
      };
    case UPDATE_MEDIA_DATA_SUCCESS:
      return {
        ...state,
        updateMediaLoading: false
      };
    case UPDATE_MEDIA_DATA_FAIL:
      return {
        ...state,
        updateMediaLoading: false
      };
    case UPDATE_MEDIA_CONTENT:
      return {
        ...state,
        updateMediaContentLoading: true
      };
    case UPDATE_MEDIA_CONTENT_SUCCESS:
      return {
        ...state,
        updateMediaContentLoading: false
      };
    case UPDATE_MEDIA_CONTENT_FAIL:
      return {
        ...state,
        updateMediaContentLoading: false
      };
    case UPLOAD_MEDIA:
      return {
        ...state,
        uploadMediaLoading: true
      };
    case UPLOAD_MEDIA_SUCCESS:
      return {
        ...state,
        uploadMediaLoading: false
      };
    case UPLOAD_MEDIA_FAIL:
      return {
        ...state,
        uploadMediaLoading: false
      };
    default:
      return state;
  }
}