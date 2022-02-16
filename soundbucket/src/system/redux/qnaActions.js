import { put, takeEvery, call } from 'redux-saga/effects';
import apiConnector from '../apiConnector';
import NotificationServie from "../NotificationService";

// 
const GET_QNA_LIST = 'GET_QNA_LIST';
const GET_QNA_LIST_SUCCESS = 'GET_QNA_LIST_SUCCESS';
const GET_QNA_LIST_FAIL = 'GET_QNA_LIST_FAIL';
// const GET_FAQ_DETAIL = 'GET_FAQ_DETAIL';
// const GET_FAQ_DETAIL_SUCCESS = 'GET_FAQ_DETAIL_SUCCESS';
// const GET_FAQ_DETAIL_FAIL = 'GET_FAQ_DETAIL_FAIL';

export const getFAQList = (props) => ({ type: GET_QNA_LIST, payload:props});
// export const getFAQDetail = (props) => ({ type: GET_FAQ_DETAIL, payload:props});

//
function* getFAQListSaga(action) {
  try {
    const response = yield call(() => apiConnector.apiGet('/get_faq_list'));
    if (response.result === true) {
      yield put({ type: GET_QNA_LIST_SUCCESS, qnaList:response.data.faq_list });
    } else {
      NotificationServie.alert("데이터 가져오기에 실패했습니다.");
      yield put({ type: GET_QNA_LIST_FAIL });
    }
  } catch (e) {
    yield put({ type: GET_QNA_LIST_FAIL });
  }
}

//
// function* getFAQDetailSaga(action) {
//   const { faq_id } = action.payload;
//   try {
//     const response = yield call(() => apiConnector.apiPost('/get_faq_detail', { faq_id: faq_id }));
//     if (response.result === true) {
//       yield put({ type: GET_FAQ_LIST_SUCCESS, faqDetail:response.data.faq_list });
//     } else {
//       NotificationServie.alert("FAQ 데이터 가져오기에 실패했습니다.");
//       yield put({ type: GET_FAQ_LIST_FAIL });
//     }
//   } catch (e) {
//     yield put({ type: GET_FAQ_LIST_FAIL });
//   }
// }

export function* faqSaga() {
  yield takeEvery(GET_QNA_LIST, getFAQListSaga);
}

const initialState = {
  // faqLoading: false,
  qnaList: [],
  // faqDetail: null
};

export default function faqReducer(state = initialState, action) {
  switch (action.type) {
    case GET_QNA_LIST:
      return {
        ...state,
        qnaList: [],
      };
    case GET_QNA_LIST_SUCCESS:
      return {
        ...state,
        qnaList: action.qnaList,
      };
    case GET_QNA_LIST_FAIL:
      return {
        ...state,
        qnaList: [],      
      };
    default:
      return state;
  }
}