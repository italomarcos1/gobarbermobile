import { all, call, put, takeLatest } from 'redux-saga/effects';
import { updateProfileSuccess, updateProfileFailure } from './actions';

import api from '~/services/api';

export function* updateProfile({ payload }) {
  try {
    const { name, email, ...rest } = payload.data;

    const profile = {
      name,
      email,
      ...(rest.oldPassword ? rest : {}),
    };

    const response = yield call(api.put, 'users', profile);

    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
