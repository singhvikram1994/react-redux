
import axios from 'axios';
import $ from 'jquery';

export const UPDATE_USER = "UPDATE_USER";

export const FETCH_USER_ERROR = "FETCH_USER_ERROR";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_PROGRESS= "FETCH_USER_PROGRESS";


export function apiRequest() {
    console.log("In API Request");
    return (disatch)=>{
        disatch(fetchUserProgress())
        $.ajax({
            url:"http://google.com",
            success: function(response){
                console.log("response:",response);
                disatch(fetchUserSuccess(response.newUser))
            },
            error : function(error) {
                console.log("Error:",error);
                disatch(fetchUserError())
            }
        })
    }
}

export function fetchUserError() {
 return {
     type:FETCH_USER_ERROR,
     payload:{user: "ERROR!!!!!"}
 }
}

export function fetchUserProgress() {
    return {
        type:FETCH_USER_PROGRESS,
        payload:{user: "In Progress", fetching:true}
    }
   }
  

export function fetchUserSuccess(user) {
    return {
        type:FETCH_USER_SUCCESS,
        payload:{user: user}
    }
   }

export function updateUser (newUser) {
    return {
        type:UPDATE_USER,
        payload:{
        user:newUser
        }
    }
}