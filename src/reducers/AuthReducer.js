import {
    LOGIN_EMAIL_CHANGE,
    LOGIN_PASSWORD_CHANGE,
    LOGIN_USER_SUCESS
} from '../actions/types'

const INITIAL_STATE = {
    email: '',
    password: '',
    user: null
};

export default (state = INITIAL_STATE, action) => {
console.log(action);
console.log(state);
    switch (action.type){
        case LOGIN_EMAIL_CHANGE:

           return {...state, email: action.payload};
        
        case LOGIN_PASSWORD_CHANGE:
           
            return {...state, password: action.payload};

        case LOGIN_USER_SUCESS:

            return {...state, ...INITIAL_STATE, user: action.payload}

        default:
            return state;
    }
}