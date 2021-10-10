import {testAction} from '../action/TestAction';

const ApiReducer = ( state = {apiData:[]},action) => {
switch (action.type) {
    case testAction.TEST_ACTION_FIRST:
       
        return {
            ...state,
            apiData:action.data
        }
        break;
    default:
        return state;
        break;
}
}

export default ApiReducer;