export const testAction = {
    TEST_ACTION_FIRST : 'TEST_ACTION_FIRS'
}

export const hitApiSuccess = (data) =>{
    return{
        type: testAction.TEST_ACTION_FIRST,
        data,
    }
}

