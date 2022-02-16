import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import authReducer, { authSaga } from "./authActions";
import artistMediaReducer, { artistMediaSaga } from "./artistMediaActions";
import faqReducer, { faqSaga } from "./qnaActions";
import fanTalkReducer, { fanTalkSaga } from "./fanTalkActions";
import artistTalkReducer, { artistTalkSaga } from "./artistTalkActions";
import artistReducer, { artistSaga } from "./artistActions"
import { all } from 'redux-saga/effects';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ authReducer, artistMediaReducer, faqReducer, fanTalkReducer, artistTalkReducer, artistReducer });
function* rootSaga() {
  yield all([authSaga(), artistMediaSaga(), faqSaga(), fanTalkSaga(), artistTalkSaga(), artistSaga()]); 
}

const myLogger = store => next => action => {
  const result = next(action); 
  return result; 
};

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  applyMiddleware(
    sagaMiddleware, // 사가 미들웨어를 적용하고
    myLogger
  )
); // 여러개의 미들웨어를 적용 할 수 있습니다.
sagaMiddleware.run(rootSaga);

export default store;