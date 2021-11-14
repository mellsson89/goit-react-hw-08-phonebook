import {combineReducers} from "redux";
import {createReducer} from "@reduxjs/toolkit";
import {registerSuccess,registerError,loginSuccess,loginError,logoutSuccess,logoutError,getCurrentUserSuccess,getCurrentUserError} from './auth-actions'

const initState={name:null, email:null};

const user=createReducer(initState,{
[registerSuccess]:(_,{payload})=> payload.user,
    [loginSuccess]:(_,{payload}) =>payload.user,
    [logoutSuccess]:() => initState,
[getCurrentUserSuccess]:(_,{payload}) => payload
});

const token=createReducer(null,{
[registerSuccess]:(_, {payload}) => payload.token,
[loginSuccess]:(_,{payload}) => payload.token,
    [logoutSuccess]:() => null
});


const error=createReducer(null,{
[registerError]:(_,{payload}) => payload,
    [loginError]:(_,{payload}) => payload,
    [logoutError]:(_,{payload}) => payload,
[getCurrentUserError]:(_,{payload}) => payload,
});
const isAuthenticated=createReducer(false,{
    [loginSuccess]:() => true,
    [registerSuccess]:() => true,
    [getCurrentUserSuccess]:() => true,
    [logoutSuccess]:() => false,
    [registerError]:() => false,
    [loginError] : () => false,
    [getCurrentUserError]: () => false

})
export default combineReducers({
    user,token,isAuthenticated,error
})






