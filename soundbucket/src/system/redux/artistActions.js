import { CollectionsBookmarkOutlined } from '@material-ui/icons';
import { put, call, takeLatest } from 'redux-saga/effects';
import apiConnector from '../apiConnector';
import NotificationServie from "../NotificationService";

// 
const GET_ARTIST_LIST = 'GET_ARTIST_LIST';
const GET_ARTIST_LIST_SUCCESS = 'GET_ARTIST_LIST_SUCCESS';
const GET_ARTIST_LIST_FAIL = 'GET_ARTIST_LIST_FAIL';
const GET_ARTIST_DETAIL = 'GET_ARTIST_DETAIL';
const GET_ARTIST_DETAIL_SUCCESS = 'GET_ARTIST_DETAIL_SUCCESS';
const GET_ARTIST_DETAIL_FAIL = 'GET_ARTIST_DETAIL_FAIL';

export const getArtistList = (props) => ({ type: GET_ARTIST_LIST, payload:props});
export const getArtistDetail = (props) => ({ type: GET_ARTIST_DETAIL, payload:props});

//
function* getArtistListSaga(action) {
  try {
    const response = yield call(() => apiConnector.apiGet('/get_artist_list'));
    if (response.result === true) {
      yield put({ type: GET_ARTIST_LIST_SUCCESS, artist_list:response.data.artist_list });
    } else {
      NotificationServie.alert("데이터 가져오기에 실패했습니다.");
      yield put({ type: GET_ARTIST_LIST_FAIL });
    }
  } catch (e) {
    yield put({ type: GET_ARTIST_LIST_FAIL });
  }
}

//
function* getArtistDetailSaga(action) {
  const { artist_id } = action.payload;
  try {
    const response = yield call(() => apiConnector.apiPost('/get_artist_detail', {artist_id : artist_id}));
    if (response.result === true) {
      yield put({ type: GET_ARTIST_DETAIL_SUCCESS, artist:response.data.artist });
    } else {
      NotificationServie.alert("데이터 가져오기에 실패했습니다.");
      yield put({ type: GET_ARTIST_DETAIL_FAIL });
    }
  } catch (e) {
    yield put({ type: GET_ARTIST_DETAIL_FAIL });
  }
}

export function* artistSaga() {
  yield takeLatest(GET_ARTIST_LIST, getArtistListSaga);
  yield takeLatest(GET_ARTIST_DETAIL, getArtistDetailSaga);
}

const initialState = {
  artist_list: [],
  artist: null
};

export default function artistReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ARTIST_LIST:
      return {
        ...state,
        artist_list: [],
      };
    case GET_ARTIST_LIST_SUCCESS:
      return {
        ...state,
        artist_list: action.artist_list,
      };
    case GET_ARTIST_LIST_FAIL:
      return {
        ...state,
        artist_list: [],      
      };
    case GET_ARTIST_DETAIL:
      return {
        ...state,
        artist: [],
      };
    case GET_ARTIST_DETAIL_SUCCESS:
      return {
        ...state,
        artist: action.artist,
      };
    case GET_ARTIST_DETAIL_FAIL:
      return {
        ...state,
        artist: [],      
      };
    default:
      return state;
  }
}