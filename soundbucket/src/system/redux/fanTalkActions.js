import { put, takeEvery, call } from 'redux-saga/effects';
import apiConnector from '../apiConnector';
import NotificationServie from "../NotificationService";

// 
const GET_FAN_TALK_LIST = 'GET_FAN_TALK_LIST';
const GET_FAN_TALK_LIST_SUCCESS = 'GET_FAN_TALK_LIST_SUCCESS';
const GET_FAN_TALK_LIST_FAIL = 'GET_FAN_TALK_LIST_FAIL';
const UPLOAD_FAN_TALK = 'UPLOAD_FAN_TALK';
const UPLOAD_FAN_TALK_SUCCESS = 'UPLOAD_FAN_TALK_SUCCESS';
const UPLOAD_FAN_TALK_FAIL = 'UPLOAD_FAN_TALK_FAIL';
const DELETE_FAN_TALK = 'DELETE_FAN_TALK';
const DELETE_FAN_TALK_SUCCESS = 'DELETE_FAN_TALK_SUCCESS';
const DELETE_FAN_TALK_FAIL = 'DELETE_FAN_TALK_FAIL';

export const getFanTalkList = (props) => ({ type: GET_FAN_TALK_LIST, payload:props});
export const uploadFanTalk = (props) => ({ type: UPLOAD_FAN_TALK, payload:props});
export const deleteFanTalk = (props) => ({ type: DELETE_FAN_TALK, payload:props});

//
function* getFanTalkListSaga(action) {
  try {
    const response = yield call(() => apiConnector.apiPost('/get_fan_talk_list'));
    if (response.result === true) {
      yield put({ type: GET_FAN_TALK_LIST_SUCCESS, fanTalkList: response.data.talk_list });
    } else {
      NotificationServie.alert("데이터 가져오기에 실패했습니다.");
      yield put({ type: GET_FAN_TALK_LIST_FAIL });
    }
  } catch (e) {
    yield put({ type: GET_FAN_TALK_LIST_FAIL });
  }
}

//
function* uploadFanTalkListSaga(action) {
  const { talk } = action.payload;
  try {
    const response = yield call(() => apiConnector.apiPost('/upload_fan_talk', {talk, talk}));
    if (response.result === true) {
      yield put({ type: UPLOAD_FAN_TALK_SUCCESS });
      yield put({ type: GET_FAN_TALK_LIST });
    } else {
      NotificationServie.alert("데이터 업로드에 실패했습니다.");
      yield put({ type: UPLOAD_FAN_TALK_FAIL });
    }
  } catch (e) {
    yield put({ type: UPLOAD_FAN_TALK_FAIL });
  }
}

//
function* deleteFanTalkListSaga(action) {
  const { talk_id } = action.payload;
  try {
    const response = yield call(() => apiConnector.apiPost('/delete_fan_talk', {talk_id : talk_id}));
    if (response.result === true) {
      yield put({ type: DELETE_FAN_TALK_SUCCESS });
      yield put({ type: GET_FAN_TALK_LIST });
    } else {
      NotificationServie.alert("데이터 삭제가 실패했습니다.");
      yield put({ type: DELETE_FAN_TALK_FAIL });
    }
  } catch (e) {
    yield put({ type: DELETE_FAN_TALK_FAIL });
  }
}

export function* fanTalkSaga() {
  yield takeEvery(GET_FAN_TALK_LIST, getFanTalkListSaga);
  yield takeEvery(UPLOAD_FAN_TALK, uploadFanTalkListSaga);
  yield takeEvery(DELETE_FAN_TALK, deleteFanTalkListSaga);
}

const initialState = {
  fanTalkList: [],
};

export default function fanTalkReducer(state = initialState, action) {
  switch (action.type) {
    case GET_FAN_TALK_LIST:
      return {
        ...state,
        fanTalkList: [],
      };
    case GET_FAN_TALK_LIST_SUCCESS:
      return {
        ...state,
        fanTalkList: action.fanTalkList,
      };
    case GET_FAN_TALK_LIST_FAIL:
      return {
        ...state,
        fanTalkList: [],      
      };
    default:
      return state;
  }
}