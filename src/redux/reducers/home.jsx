import { apiReducers, successType } from '../../utils/redux';
import {
    LOAD_IMAGES
} from '../actions/home';
import { combineReducers } from 'redux'



const images = apiReducers(LOAD_IMAGES)





export default combineReducers({
    images
})