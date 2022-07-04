import { createStore } from "redux"

const initialState = {isButtonPressed: false, 
    timeAllotedForQuestions: 0,
    recordedTimes: 0,
    recordedTimes1: 0,
    registerName: "",
//
    calculatingAge: null,
    showAdminNav:false,
};

const reducer = (state = initialState, action) => {
    if(action.type === "BUTTON_CLICKED") {
        
        return {
            isButtonPressed: !state.isButtonPressed,
            timeAllotedForQuestions: state.timeAllotedForQuestions,
            recordedTimes: state.recordedTimes,
            recordedTimes1: state.recordedTimes1,
            registerName: state.registerName,
            calculatingAge: state.calculatingAge,
            showAdminNav:state.showAdminNav
        }
    }
    if(action.type === "SENDING_QUESTION_TIME") {
        
        return {
            isButtonPressed: state.isButtonPressed,
            timeAllotedForQuestions: action.val,
            recordedTimes: state.recordedTimes,
            recordedTimes1: state.recordedTimes1,
            registerName: state.registerName,
            calculatingAge: state.calculatingAge,
            showAdminNav:state.showAdminNav
        }
    }
    if(action.type === "SENDING_CODE_READING_TIME") {

        return {
            isButtonPressed: state.isButtonPressed,
            timeAllotedForQuestions: state.timeAllotedForQuestions,
            recordedTimes: action.val,
            recordedTimes1: state.recordedTimes1,
            registerName: state.registerName,
            calculatingAge: state.calculatingAge,
            showAdminNav:state.showAdminNav
        }
    }
    if(action.type === "SENDING_QUESTION_ANSWERING_TIME") {
        
        return {
            isButtonPressed: state.isButtonPressed,
            timeAllotedForQuestions: state.timeAllotedForQuestions,
            recordedTimes: state.recordedTimes,
            recordedTimes1: action.val,
            registerName: state.registerName,
            calculatingAge: state.calculatingAge,
            showAdminNav:state.showAdminNav
        }
    }
    if(action.type === "SETTING_REGISTERED_NAME") {
        
        return {
            isButtonPressed: state.isButtonPressed,
            timeAllotedForQuestions: state.timeAllotedForQuestions,
            recordedTimes: state.recordedTimes,
            recordedTimes1: state.recordedTimes1,
            registerName: action.val ,
            calculatingAge: state.calculatingAge,
            showAdminNav:state.showAdminNav
        }
    }
    if(action.type === "SETTING_AGE") {
        
        return {
            isButtonPressed: state.isButtonPressed,
            timeAllotedForQuestions: state.timeAllotedForQuestions,
            recordedTimes: state.recordedTimes,
            recordedTimes1: state.recordedTimes1,
            registerName: state.registerName,
            calculatingAge: action.val,
            showAdminNav:state.showAdminNav
        }
    }

   
    if(action.type === "ADMIN_NAVBAR") {
        
        return {
            isButtonPressed: state.isButtonPressed,
            timeAllotedForQuestions: state.timeAllotedForQuestions,
            recordedTimes: state.recordedTimes,
            recordedTimes1: state.recordedTimes1,
            registerName: state.registerName,
            calculatingAge: action.val,
            showAdminNav:!state.showAdminNav
        }
    }
   

    return state;
}

const store = createStore(reducer);

export default store;