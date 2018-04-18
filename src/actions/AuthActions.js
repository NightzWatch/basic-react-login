import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { Toast } from "native-base";
import {
    LOGIN_EMAIL_CHANGE,
    LOGIN_PASSWORD_CHANGE,
    // LOGIN_USER
    LOGIN_USER_SUCESS
} from './types'

export const emailChange = (txt) => {

    return {
        type: LOGIN_EMAIL_CHANGE,
        payload: txt
    }
};

export const passwordChange = (txt) => {
    
    return {
        type: LOGIN_PASSWORD_CHANGE,
        payload: txt
    }
};

export const loginUser = ({ email, password}) => {

    return (dispact) => {
        // dispact({
        //     // type: LOGIN_USER
        // })
        // firebase.auth().signInWithEmailAndPassword(email, password)
        firebase.auth().signInWithEmailAndPassword('test@jordan.com', 'password123')
            .then(user => loginUserSucess(dispact, user))
            .catch(error => loginUserFail(dispact, error))
    };
};

const loginUserSucess = (dispact, user) => {
    dispact({
        type: LOGIN_USER_SUCESS,
        payload: user
    })
    
    Toast.show({
        text: "Boom you're in",
        position: "bottom",
        buttonText: ""
    });

    Actions.main();
};

const loginUserFail = (dispact, {code, message}) => {

    Toast.show({
        text: message,
        position: "bottom",
        buttonText: ""
    })
};