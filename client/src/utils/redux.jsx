import { call, put, takeEvery, all } from 'redux-saga/effects';
import isEqual from 'lodash/isEqual';



export const actionCreator = type => (payload, options) => ({
    ...options,
    type,
    payload
});


export const successType = type => type + '_SUCCESS';
export const failType = type => type + '_FAIL';
export const reloadType = type => type + '_RELOAD';
export const clearType = type => type + '_CLEAR';



export const apiReducers = (type, otherReducers = {}, initialState = { result: null, error: null, loading: false }) => {
    const getReducers = type => ({
        [type]: state => ({
            ...state,

            error: null,
            loading: true
        }),
        [reloadType(type)]: state => ({
            ...state,

            error: null,
            loading: true
        }),
        [successType(type)]: (state, action) => ({
            ...state,

            result: (typeof action.result !== 'undefined') ? action.result : state.result,
            loading: false
        }),
        [failType(type)]: (state, action) => ({
            ...state,

            error: action.error,
            loading: false
        }),
        [clearInterval(type)]: state => ({
            ...state,

            error: null,
            result: null
        })
    });

    const types = (typeof type === 'string') ? [type] : type;
    const reducers = Object.assign({}, ...types.map(t => getReducers(t)));
    
    
    return (state = initialState, action) => {
        let actionReducers = [];

        if(reducers[action.type])
            actionReducers.push(reducers[action.type]);
        if(otherReducers[action.type])
            actionReducers.push(otherReducers[action.type]);

        return actionReducers.reduce((state, current) => current(state, action), state);
    };

};


export const apiSaga = (method, type, {alwaysFetch, errorType} = {}) => {
    let lastPayload;
    let loaded = false;
    let triggered = false;


    function* handleLoad({payload, forceFetch, transformError}) {
        if(loaded && !forceFetch && !alwaysFetch && isEqual(payload, lastPayload)) {
            const putSuccess = put({type: successType(type)});

            yield putSuccess;

        }
        else {
            try {
                triggered = true;

                const result = yield call(method, payload);

                lastPayload = payload;
                loaded = true;

                const putSuccess = put({type: successType(type), result, payload});

                yield putSuccess;
            }
            catch (error) {
                let err = error;

                if(transformError)
                    err = transformError(error);
                
                yield put({type: failType(type), error: err});
            }
        }
    }

    function* handleReload(){
        if(triggered) {
            try {
                const result = yield call(method, lastPayload);

                const putSuccess = put({type: successType(type), result});

                yield putSuccess;
            }
            catch(error) {
                yield put({type: failType(type), error});
            }
        }
    }

    function* handleError({error}) {
        if(errorType)
            yield put({type: errorType, error});
    }

    return all([
        takeEvery(type, handleLoad),
        takeEvery(reloadType(type), handleReload),
        takeEvery(failType(type), handleError)
    ]);

};