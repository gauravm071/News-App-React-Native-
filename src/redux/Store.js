import {createStore,combineReducers} from 'redux';

import ApiReducer from './reducer/TestReducer';

const combineReducer = combineReducers({
    ApiReducer
});

const rootReducer = (state,action) => {
    return combineReducer(state,action);
}

const store = createStore(rootReducer);

export default store;