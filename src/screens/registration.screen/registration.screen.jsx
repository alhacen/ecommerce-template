import React,{useState,useEffect} from 'react';
import {Link,} from "react-router-dom";

// import {Spin} from 'antd';


const RegistrationScreen = () => {

const [err,setErr]=useState([]);
const form1=useForm(setErr);
useEffect(() =>{
  console.log(err)
})
  return(
  <div>
    <div class="column padingT25">
        <h3 class="title has-text-centered">Register</h3>
      </div>
    <div id="input" class="column x is-10-desktop is-offset-1-desktop is-12-mobile has-text-centered is-11-tablet">      
      <div class="column">
        <input class="input is-rounded" type="text" name="username"  {...form1}  placeholder="Username" />
      </div>
      <div class="column">
        <input class="input is-rounded" name="email" type="text" {...form1} placeholder="Email" />
      </div>
      <div class="column">
        <input class="input is-rounded" name="password" {...form1} type="password" placeholder="Password" />
      </div>
      <ul>
      {

        [...err].map((x) =>{
          let errDescription;
          switch(x.name){
            case "username":errDescription="Username Should be 3 to 16 character long and contain only Alphabet and Digit"
              break;
            case "email": errDescription="Invalid Email";
              break;
            case "password":  errDescription="Password Should be 6 to 16 character long and contain only Alphabet and atleast one Digit"
              break;

          }
          return(
            <li class="err ">
              <span  >{
errDescription
              }</span>
            </li>
          )
        })

      }
      </ul>
      <div class="column">
        <p>Already have account. <Link to="login" class="tag is-warning is-light">Login</Link></p>
      </div>
      
      <div class="column">
        <button class="button is-warning">Register</button>
      </div>
    </div>
  </div>   ) 
};
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
  const [err,setErr]=useState({});
  let tmp
  const handleChange=(e) =>{
    
    tmp=value[e.target.name]
    value[e.target.name]={}
    value[e.target.name]['value']=e.target.value
    console.log(value)
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
    tmp,
    onChange:handleChange,

  }
}

export default RegistrationScreen;
