import { combineReducers } from 'redux';
import {reducer as form} from 'redux-form';
import home from './home';



export default combineReducers({
    home,
    form
})