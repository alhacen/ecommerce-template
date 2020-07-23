import React,{useState,useEffect} from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';
import {Link,useHistory} from "react-router-dom";

import {handShake,login} from "../../helpers/api"
// import {Spin} from 'antd';


const LoginScreen = () => {
  let history = useHistory();
  const [err,setErr]=useState([]);
  const [loadingBtn,setLoadingBtn]=useState();
  const loginForm=useForm(setErr);
  useEffect(() =>{
    // console.log(err)
  })
  const isEmpty = (obj) => {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
  }
  const loginHandler = (args) => {
    if((isEmpty(args.data.username))||(isEmpty(args.data.password))){
      setErr([{'name':"empty_credentials"}])
    }
    if((isEmpty(args.data.username))||(isEmpty(args.data.password))||(err.length!=0)){
      return;
    }
    setLoadingBtn("is-loading")
    login(args['data']).then(
        (x) => {
          setLoadingBtn()
          // console.log(x )
            if(x.status){
                history.push('/home')
            }else{
              setErr([{'name':"invalid_credentials"}])
            }
        }
    )

  }
  return(
  <div>
    <div className="column padingT25">
        <h3 className="title has-text-centered">Login</h3>
      </div>
    <div id="input" className="column x is-10-desktop is-offset-1-desktop is-12-mobile has-text-centered is-11-tablet">      
      <div className="column">
        <input className="input is-rounded" type="text" name="username" {...loginForm} placeholder="Username" />
      </div>
      <div className="column">
        <input className="input is-rounded" type="password" name="password" {...loginForm} placeholder="Password" />
      </div>

      <div className="column">
        <p>Don't have account <Link to="register" className="tag is-warning is-light">Register</Link></p>
      </div>
      <ul>
      {

        [...err].map((x) =>{
          let errDescription;
          switch(x.name){
            case "username":errDescription="Invalid Username"
              break;
            case "email": errDescription="Invalid Email";
              break;
            case "password":  errDescription="Invalid Password"
              break;
            case "empty_credentials": errDescription="Enter Credentials"
              break;
            case "invalid_credentials": errDescription="Invalid Credentials"
              break;

          }
          return(
            <li className="err ">
              <span  >{
errDescription
              }</span>
            </li>
          )
        })

      }
      </ul>
      <div className="column">
        <button className={"button is-warning "+loadingBtn} onClick={() => {loginHandler(loginForm)}} >Login</button>
      </div>
    </div>
  </div>  
  )  
}

const validate=(value,rule,arg=null) =>{
  let isValid=true;
  let emailReg= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  switch(rule){
    case "minLength": isValid=(value.length>=arg); break;
    case "username" : isValid=(/^[a-zA-Z0-9]{3,16}$/.test(value)); break;
    case "email" : isValid=emailReg.test(value);break;
    case "password": isValid=validatePassword(value);break;
  }
  return isValid;
}
const validatePassword = (value) =>{
  return true//remove this its just tesing
  if(value.length<=5 || value.length>=16){
    return false;
  }else if(value.search(/[a-z]/i)<0){
    return false;
  }else if(value.search(/[0-9]/) < 0){
    return false;
  }
  return true;
}
const useForm=(x) => {
  const [value,setValue]=useState({});
  let tmp
  const handleChange=(e) =>{
    tmp=value[e.target.name]
    value[e.target.name]={}
    value[e.target.name]['value']=e.target.value
    // console.log(value)
    setValue(value)   
    e.target.setAttribute("data-touched", "true");
    if(validate(e.target.value,e.target.name)){
      e.target.setAttribute("data-valid", "true");
    }else{
      e.target.setAttribute("data-valid", "false");
    }
    x(document.querySelectorAll('[data-valid="false"]'))  
  }

  return{
      onChange:handleChange,
      data:value      
  }
}
export default LoginScreen;
