import { put, takeLeading, delay } from 'redux-saga/effects';

// 
const GET_BEGINNERSARTISTLIST = 'GET_BEGINNERSARTISTLIST';
const GET_BEGINNERSARTISTLIST_SUCCESS = 'GET_BEGINNERSARTISTLIST_SUCCESS';
const GET_BEGINNERSARTISTLIST_FAIL = 'GET_BEGINNERSARTISTLIST_FAIL';

export const getBeginnersArtistList = (props) => ({ type: GET_BEGINNERSARTISTLIST, payload:props});

//
function* getBeginnersArtistListSaga(action) {
  try {
    yield delay(3000);
    yield put({ type: GET_BEGINNERSARTISTLIST_SUCCESS });
  } catch (e) {
    yield put({ type: GET_BEGINNERSARTISTLIST_FAIL });
  }
}

export function* artistSaga() {
  yield takeLeading(GET_BEGINNERSARTISTLIST, getBeginnersArtistListSaga);
}

const initialState = {
  beginnersArtistLoading: false,
  artistList: [],
};

export default function soundBucketArtistReducer(state = initialState, action) {
  switch (action.type) {
    case GET_BEGINNERSARTISTLIST:
      return {
        ...state,
        beginnersArtistLoading: true,
      };
    case GET_BEGINNERSARTISTLIST_SUCCESS:
      return {
        ...state,
        beginnersArtistLoading: false,
      };
    case GET_BEGINNERSARTISTLIST_FAIL:
      return {
        ...state,
        beginnersArtistLoading: false,      
      };
    default:
      return state;
  }
}