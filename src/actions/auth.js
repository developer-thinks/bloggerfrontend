import {SIGNIN, SIGNUP} from '../constants/actionTypes'
import * as api from '../api'


export const signUp = (form, nevigate)=> async (dispatch) =>{
    try {
        //after sign up nevigate to home
        nevigate('/')
    } catch (error) {
        console.log(error);
    }
}

export const signIn = (form, nevigate)=> async (dispatch) =>{
    try {
        //after sign in nevigate to home
        nevigate('/')
    } catch (error) {
        console.log(error);
    }
}