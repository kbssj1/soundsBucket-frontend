import { put, takeEvery, call } from 'redux-saga/effects';
import ApiConnector from "../apiConnector";
import NotificationServie from "../NotificationService";

// 
const SIGNIN = 'SIGNIN';
const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
const SIGNIN_FAIL = 'SIGNIN_FAIL';
const SIGNUP = 'SIGNUP';
const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
const SIGNUP_FAIL = 'SIGNUP_FAIL';
const LOGOUT = 'LOGOUT';
const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
const LOGOUT_FAIL = 'LOGOUT_FAIL';
const GETMYPROFILE = 'GETMYPROFILE';
const GETMYPROFILE_SUCCESS = 'GETMYPROFILE_SUCCESS';
const GETMYPROFILE_FAIL = 'GETMYPROFILE_FAIL';
const UPDATEMYPROFILE = 'UPDATEMYPROFILE';
const UPDATEMYPROFILE_SUCCESS = 'UPDATEMYPROFILE_SUCCESS';
const UPDATEMYPROFILE_FAIL = 'UPDATEMYPROFILE_FAIL';
const VALIDATE = 'VALIDATE';
const VALIDATE_SUCCESS = 'VALIDATE_SUCCESS';
const VALIDATE_FAIL = 'VALIDATE_FAIL';
const RESET_PASSWORD = 'RESET_PASSWORD';
const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
const RESET_PASSWORD_FAIL = 'RESET_PASSWORD_FAIL';

export const signIn = (props) => ({ type: SIGNIN, payload:props});
export const signUp = (props) => ({ type: SIGNUP, payload:props});
export const validate = (props) => ({ type: VALIDATE, payload:props});
export const logOut = (props) => ({ type: LOGOUT, payload:props});
export const getMyProfile = (props) => ({ type: GETMYPROFILE, payload:props});
export const updateMyProfile = (props) => ({ type: UPDATEMYPROFILE, payload:props });
export const resetPassword = (props) => ({ type: RESET_PASSWORD, payload:props});

//
function* signInSaga(action) {
  const { history, email, password } = action.payload;
  try {
    const response = yield call(() => ApiConnector.apiPost('/login', { email: email, password: password }));
    if (response.result === true) {
      yield put({ type: SIGNIN_SUCCESS });
      history.push("/kr");
    } else {
      NotificationServie.alert("가입하지 않은 아이디이거나, 잘못된 비밀번호입니다.");
      yield put({ type: SIGNIN_FAIL });
    }
  } catch (e) {
    yield put({ type: SIGNIN_FAIL });
  }
}

//
function* signUpSaga(action) {
  const { email, password, name, mobile_number } = action.payload;
  try {
    const response = yield call(() => ApiConnector.apiPost('/signup', { email: email, password: password, name: name, mobile_number:mobile_number }));
    if (response.result === true) {
      yield put({ type: SIGNUP_SUCCESS });
      // NotificationServie.alert("회원가입에 성공하셨습니다. 등록 확인용 이메일이 발송되었습니다.");
      // history.push("/kr");
    } else {
      NotificationServie.alert("회원가입에 실패하셨습니다.");
      yield put({ type: SIGNUP_FAIL });
    }
  } catch (e) {
    yield put({ type: SIGNUP_FAIL });
  }
}

//
function* validateSaga(action) {
  try {
    yield put({ type: VALIDATE_SUCCESS });
  } catch (e) {
    yield put({ type: VALIDATE_FAIL });
  }
}

//
function* getMyProfileSaga(action) {
  try {
    //
    // const fakeData = {
    //   "result": true,
    //   "data": {
    //       "email": "kbssj1@naver.com",
    //       "name": "sunjin",
    //       "mobile_number": "01041931589",
    //       "is_artist": 0,
    //       "created": "2021-04-19 12:06:18"
    //   }
    // }
    // yield delay(500);
    // if (fakeData.result === true) {
    //   yield put({ type: GETMYPROFILE_SUCCESS, profile:fakeData.data });
    // } else {
    //   NotificationServie.alert("회원데이터 가져오기에 실패했습니다.");
    //   throw errorMessage;
    // }
    
    const response = yield call(() => ApiConnector.apiGet('/get_my_profile'));
    if (response.result === true) {
      yield put({ type: GETMYPROFILE_SUCCESS, profile:response.data });
    } else {
      NotificationServie.alert("회원데이터 가져오기에 실패했습니다.");
      yield put({ type: GETMYPROFILE_FAIL });
    }
  } catch (e) {
    yield put({ type: GETMYPROFILE_FAIL });
  }
}

//
function* updateMyProfileSaga(action) {
  try {
    // const response = yield call(() => ApiConnector.apiPut('/update_user_profile'));
    yield put({ type: UPDATEMYPROFILE_SUCCESS });
  } catch (e) {
    yield put({ type: UPDATEMYPROFILE_FAIL });
  }
}

//
function* logOutSaga(action) {
  try {
    const response = yield call(() => ApiConnector.apiPost('/logout'));
    if (response.result === true) {
      yield put({ type: LOGOUT_SUCCESS });
      NotificationServie.alert("로그아웃에 성공하였습니다");
    } else {
      yield put({ type: LOGOUT_FAIL });
    }
  } catch (e) {
    yield put({ type: LOGOUT_FAIL });
  }
}

//
function* ResetPasswordSaga(action) {
  try {
    yield put({ type: RESET_PASSWORD_SUCCESS });
  } catch (e) {
    yield put({ type: RESET_PASSWORD_FAIL });
  }
}


export function* authSaga() {
  yield takeEvery(SIGNIN, signInSaga);
  yield takeEvery(SIGNUP, signUpSaga);
  yield takeEvery(GETMYPROFILE, getMyProfileSaga);
  yield takeEvery(UPDATEMYPROFILE, updateMyProfileSaga);
  yield takeEvery(VALIDATE, validateSaga);
  yield takeEvery(LOGOUT, logOutSaga);
  yield takeEvery(RESET_PASSWORD, ResetPasswordSaga);
}

const initialState = {
  signInSuccess: false,
  signInLoading: false,
  signUpLoading: false,
  profile: {
    email: "",
    name: "",
    mobile_number: "",
    is_artist: 0,
  },
  updateProfileLoading: false,
  getProfileLoading: false
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNIN:
      return {
        ...state,
        signInLoading: true,
        signInSuccess: false,
      };
    case SIGNIN_SUCCESS:
      return {
        ...state,
        signInLoading: false,
        signInSuccess: true,
      };
    case SIGNIN_FAIL:
      return {
        ...state,
        signInLoading: false
      };
    case SIGNUP:
      return {
        ...state,
        signUpLoading: true
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        signUpLoading: false
      };
    case SIGNUP_FAIL:
      return {
        ...state,
        signUpLoading: false
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        signInSuccess: false,
      };
    case GETMYPROFILE:
      return {
        ...state,
        getProfileLoading: true,
        profile: {email: "", name: "", mobile_number: ""}
      };
    case GETMYPROFILE_SUCCESS:
      return {
        ...state,
        getProfileLoading: false,
        profile: action.profile
      };
    case GETMYPROFILE_FAIL:
      return {
        ...state,
        getProfileLoading: false,
      };
    case UPDATEMYPROFILE:
      return {
        ...state,
        updateProfileLoading: true
      }
    case UPDATEMYPROFILE_SUCCESS:
      return {
        ...state,
        updateProfileLoading: false
      }
    case UPDATEMYPROFILE_FAIL:
      return {
        ...state,
        updateProfileLoading: false
      }
    case VALIDATE_SUCCESS:
      return {
        ...state
      }
    case VALIDATE_FAIL:
      return {
        ...state
      }
    default:
      return state;
  }
}