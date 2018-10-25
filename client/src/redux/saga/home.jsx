import { apiSagaHandleError } from './common';

import { LOAD_IMAGES } from '../actions/home';
import service from '../../services';
import { all } from 'redux-saga/effects';


const loadImages = apiSagaHandleError(service.getImages, LOAD_IMAGES);

export default function* () {
    yield all([
        loadImages
    ])
}