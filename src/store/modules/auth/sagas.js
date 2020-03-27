import { Alert, Keyboard } from 'react-native';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import api from '~/services/api';
import { signInSuccess, signFailure } from '~/store/modules/auth/actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', { email, password });

    const { token, user } = response.data;

    Keyboard.dismiss();

    yield put(signInSuccess(token, user));
  } catch (err) {
    Alert.alert('Falha no login', 'Confira seus dados e tente novamente.');
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;
    yield call(api.post, 'users', { name, email, password });

    Keyboard.dismiss();
    Alert.prompt('Sucesso no cadastro', 'Você foi cadastrado.');
  } catch (err) {
    Alert.alert('Falha no cadastro', 'Confira seus dados e tente novamente.');
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  // yield put(ToastActionsCreators.displayWarning('Você deslogou da aplicação.'));
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
