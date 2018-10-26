import { all } from 'redux-saga/effects';

import HomeSaga from './home';
import ImageSaga from './image';




export default function* rootSaga() {
    yield all([
        HomeSaga(),
        ImageSaga()
    ])
}