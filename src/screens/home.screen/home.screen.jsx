import React,{ useState, useEffect } from 'react';
import {myLocalData,getProducts} from '../../helpers/redux'

import {Link,} from "react-router-dom";
// import {Spin} from 'antd';


const HomeScreen = () => {
  const arr=[0,0,0]
  return(
  <div>
      <div class="columns is-mobile is-multiline padding15">
        {
          getProducts().map((x) =>{
            return(
          <Link to={`product/${x.id}/${x.name}`} class="column is-3-desktop is-6-mobile">
          <div>
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">{x.name} <span class="tag  is-info is-light">{x.price} $</span></p>

                </div>
              </div>
            </div>
          </div>
        </div>
        </Link>
              )
          })
        }
      </div>
  </div>
  )
};

export default HomeScreen;
