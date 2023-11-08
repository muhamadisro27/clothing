import { call, all, takeLatest, put } from "redux-saga/effects";
import {
  createUserDocFromAuth,
  getCurrentUser,
} from "../../utils/firebase/firebase.utils";

import { signInSuccess, signInFailed } from "./user.action";
import USER_ACTION_TYPES from "./user.types";

export function* getSnapshotFromUserAuth(userAuth, additionalDetails) {
  try {
    const userSnapshot = yield call(
      createUserDocFromAuth,
      userAuth,
      additionalDetails
    );

    yield put(
      signInSuccess({
        id: userSnapshot.id,
        ...userSnapshot.data(),
      })
    );
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);

    if (!userAuth) return;

    yield call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* userSaga() {
  yield all([call(onCheckUserSession)]);
}