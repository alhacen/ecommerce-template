import React,{useState,useEffect} from 'react';

import axios from 'axios';
import {myLocalData,addUserData,getProducts,getContacts,addProducts,getToken} from '../redux'
/* Reducer */


const host="http://127.0.0.1"

export const searchRequest = (q) => {
	return axios.request({
	     url: host+"{apiurl}",
	     method: "Post",
	     data:`csrf=${getToken()}&q=${q}`,
	     headers:{
	         "Content-Type":"application/x-www-form-urlencoded"
	     },withCredentials:true

	}).then(res=>{
		// console.log(res.data)
		return res.data;
	}).catch(() => {
		return false;
	})
}
export const getUserStatus = () => {
	// console.log(myLocalData.getState()['token']['data']['xcsrf'])
	return axios.request({
	     url: host+"{apiurl}",
	     method: "Post",
	     data:`csrf=${getToken()}`,
	     headers:{
	         "Content-Type":"application/x-www-form-urlencoded"
	     },withCredentials:true

	}).then(res=>{
		// console.log(res.data)
		myLocalData.dispatch(addUserData(res.data))
		// console.log(getContacts());
		return res.data.status;
	})
}
export const login=(args) =>{
	if(args['username']===undefined || args['password']===undefined || getToken()===undefined){
	}
	return axios.request({
	     url: host+"{apiurl}",
	     method: "Post",
	     data:`username=${args['username']['value']}&password=${args['password']['value']}&csrf=${getToken()}`,
	     headers:{
	         "CSRF": "123",
	         "Content-Type":"application/x-www-form-urlencoded"
	     },withCredentials:true

	}).then(res=>{
		// console.log(res.data)
		myLocalData.dispatch(addUserData(res.data))
		return res.data;
	}).catch((x)=>{
		return false;
	}
	)
}
export const handShake = () => {
  	return axios.request({
	     url: "https://raw.githubusercontent.com/alhaqhassan/ecommerce-fake-api/master/example.json",
	     method: "get",
	}).then(res=>{
		myLocalData.dispatch(addProducts({ data: res.data}))
		return res.data;
		// alert(res)
	}).catch(
		(x)=>{
			return false
		}
	)
}
