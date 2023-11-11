import { call, all, takeLatest, put } from "redux-saga/effects";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
  getCurrentUser,
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

import {
  signInSuccess,
  signInFailed,
  signUpSuccess,
  signUpFailed,
} from "./user.action";
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

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    if (email === "" && password === "") return;

    const { user } = yield call(
      signInAuthUserWithEmailAndPassword,
      email,
      password
    );

    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield call(signInWithGooglePopup);

    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* onSignUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );

    yield put(signUpSuccess(user, { displayName }));
  } catch (error) {
    yield put(signUpFailed(error));
  }
}

export function* signInAfterSignUp({ payload: { user, additionalDetails } }) {
  yield call(getSnapshotFromUserAuth, user, additionalDetails);
}

export function* onEmailSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onGoogleSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onSignUpStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, onSignUp);
}

export function* onSignUpSuccess() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* userSaga() {
  yield all([
    call(onCheckUserSession),
    call(onEmailSignInStart),
    call(onGoogleSignInStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
  ]);
}
