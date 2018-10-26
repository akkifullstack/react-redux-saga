import { combineReducers } from 'redux';
import {reducer as form} from 'redux-form';
import home from './home';
import image from './image';


export default combineReducers({
    home,
    form,
    image
})