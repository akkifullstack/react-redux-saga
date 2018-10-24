import { all } from 'redux-saga/effects';

import HomeSaga from './home';





export default function* rootSaga() {
    yield all([
        HomeSaga()
    ])
}