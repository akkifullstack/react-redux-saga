import { apiSagaHandleError } from './common';
import service from '../../services/index';
import { SUBMIT_IMAGE_FORM } from '../actions/image';
import { all } from 'redux-saga/effects'

const submitImageForm = apiSagaHandleError(service.submitImageForm, SUBMIT_IMAGE_FORM);

export default function* (){
    yield all([
        submitImageForm
    ])
}