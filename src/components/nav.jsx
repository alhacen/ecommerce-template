import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
//is-active

const Nav = props => {
  const {location,username} = props 
  // console.log(location)
  const [navBurger, setNavBurger] = useState("");
  if(location=="home"){
    const tabs=[{name:"Login",url:"/login"},{name:"Cart",url:"/cart"}]
    function activeNav() {
        setNavBurger((navBurger=="")?"is-active":"")
    }
    return(
      <nav className="navbar is-transparent" >
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo3.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
          </a>
<div class="navbar-end is-hidden-desktop " style={{'width':'100%'}}>
  <div class="navbar-item  " style={{'float':'right'}}>
    {/*<input class="button" type="button" value="q" />*/}
    <Link to="/search"><button className="button"><i class="fa fa-search" aria-hidden="true"></i></button></Link>
  </div>
</div>
          <div className={`navbar-burger burger ${navBurger}`}  data-target="navbarExampleTransparentExample"
           onClick={activeNav}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="navbarExampleTransparentExample" className={`navbar-menu  ${navBurger}`}>
          <div className="navbar-end" style={{'marginRight':"100px"}}>
            <div className={`navbar-item  is-hidden-touch`}>
                <Link to='/search'><button className="button"><i class="fa fa-search" aria-hidden="true"></i></button></Link>
            </div>
            <div className={`navbar-item has-dropdown is-hoverable `}>
              <a className="navbar-link" href="home">
                {username}
              </a>
              <div className="navbar-dropdown is-boxed">
              {
                  //`<a className="navbar-item" href="${x.url}">                ${x.name}            </a>`
                  tabs.map((x)  =>  {
                      return(
                      <Link to={x.url}  key={x.name} ><a className="navbar-item" >{x.name}</a></Link>
                          )
                  })
              }
              </div>
            </div>
          </div>

          <div className="is-hidden-tablet" >
            <div className="navbar-item">
              <div className="field is-grouped center">
                <p className="control navButton">
                  <a className="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="https://bulma.io" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=https://bulma.io&amp;via=jgthms">
                    <span className="icon">
                      <i className="fas fa-bell"></i>
                    </span>
                    <span>
                      Notification
                    </span>
                  </a>
                </p>
                <p className="control y">
                  <a className="button is-primary">
                    <span className="icon">
                      <i className="fas fa-download"></i>
                    </span>
                    <span>Install</span>
                  </a>
                </p>
              </div>
            </div>
          </div>  
          <div style={{clear:"both "}}></div>
        </div>
      </nav>
    );
  }else if(location=="profile" || location=="setting" || location=="editProfile" || location=="search"){
    let pageName="asdf";
    let arr=[{a:"b",b:"c"}]
    let page={profile:{navName:"Profile",iconClass:"fas fa-edit",goTolocation:"edit-profile/",prevPage:"../"},setting:{navName:"Settings",prevPage:"/home"},editProfile:{navName:"Edit Profile",goTolocation:"edit-profile",prevPage:"../"},search:{navName:"Search",prevPage:"/home"}}
    let fun=() => {
      return 1213
    }
   return(
      <nav className="navbar is-transparent" >

        <div className="navbar-brand columns is-mobile paddingT25">
        <div className="column">
          <Link className=" x sqr50 rounded iconPressEffect gravityCenter" to={page[location].prevPage}>
            <span >
                <i className="xx fas fa-arrow-left " ></i>
            </span>
          </Link>        
        </div>
        <div className="column is-8">
          <h3 className="">
            <b>{page[location].navName}</b>
          </h3>
        </div>
        <div className="column is-hidden-desktop"  >
            {
              <div className={`navbar-item`} >
            {
                  (page[location].iconClass!=undefined)?(
                    <Link  className=" x sqr50 rounded iconPressEffect gravityCenter" to={page[location].goTolocation}>
                      <span >

                        <i className={page[location].iconClass}></i>
                      </span>
                    </Link>
                    ):""
                  }
              </div>  
                    
            }
          </div>
        </div>




        <div id="a" className={`navbar-menu  ${navBurger} is-hidden-touch`}>
          <div className="navbar-start">  
            
          </div>
          <div className="navbar-end">
          
            
            {
              <div className={`navbar-item`}>
            {
                  (page[location].iconClass!=undefined)?(
                    <Link  className=" x sqr50 rounded iconPressEffect gravityCenter" to={page[location].goTolocation}>
                      <span>

                        <i className={page[location].iconClass}></i>
                      </span>
                    </Link>
                    ):""
                  }
              </div>  
                    
            }
              
            
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav;
