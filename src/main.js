import React, {Suspense,useState,useEffect } from 'react';
import {Route, Switch, withRouter,useHistory} from 'react-router-dom';
import LoadingScreen from './screens/loading.screen';
import HomeScreen from './screens/home.screen';

import Screen from './components/screen';
import Footer from './components/footer';
import Nav from './components/nav';
import NotFoundScreen from './screens/404.screen';
import {COMMON_ROUTES} from './constants/routes/main.routes.constant';
import {handShake} from "./helpers/api"
const Main = () => {
	const history=useHistory();
	const [loading,setLoading]=useState(0);
	const [LoadingScreenMsg,setLoadingScreenMsg]=useState();
	const createHandShakeRequest = () => {	
    	setLoading(1);
    	handShake().then(
    		(res) => {
    			// console.log(res)
    			if(res){
    				setLoading(0);
    			}else{
    				// setTimeout(function(){ createHandShakeRequest();setLoadingScreenMsg("Its Taking More Than Usual..."); }, 3000);
    				
    			}
    		}
    	)
	}
	useEffect(() => {
		createHandShakeRequest();
	}, []);
  return (
  	<div id="body">

  	<section id="main">
  		<Nav location="home"/>
  		<div className="margin15">
  		<div id="mainCard" className="column is-12-desktop is-12-mobile is-12-tablet card " style={{padding:"0px"}}>
  		{
  			(loading)?<LoadingScreen msg={LoadingScreenMsg}/>:""
  		}
		    <Suspense fallback={<LoadingScreen />}>
		      <main>
			      <Switch>
			        {COMMON_ROUTES.map((route, index) => (
			          <Route
			            exact={route.exact === undefined ? true : route.exact}
			            path={route.path}
			            component={(props) => <Screen title={route.title} screen={route.screen}  {...props} />}
			            key={index.toString()}
			          />
			        ))}
			        <Route component={NotFoundScreen} />
			      </Switch>
		      </main>
		      {/* <Footer /> */}
		    </Suspense>
		    </div>
		</div>
    </section>
<Footer />
    </div>
    
  );
};

export default Main;




