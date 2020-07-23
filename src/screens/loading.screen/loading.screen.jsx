import React from 'react';
// import {Spin} from 'antd';


const LoadingScreen = (prop) => (
   <div id="LoadingScreen">
   		<div className="loader"></div>
   		<div className="LoadingScreenText"><p style={{'textAlign':'center'}}>{prop.msg}</p></div>
   </div>
);

export default LoadingScreen;
