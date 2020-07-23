import React,{useState,useEffect} from 'react';
import {Link,} from "react-router-dom";
import {myLocalData,addToCart,getProducts,getCartProducts} from "../../helpers/redux"
const cartScreen = (props) => {
	const getProductById = (id) =>{
		let products=getProducts();
		for(let i=0;i<products.length;i++){
			if(products[i]['id']==id){
				return products[i]
			}
		}
	}
	return(

	<div>
	<p className="title padding50" >Cart</p>
	{

//getCartProducts()
	getCartProducts().map((x) => {
		let y=getProductById(x)
	return(
		<Link to={`product/${y.id}/${y.name}`}>
		    <div class="columns padding50" key={y.id}>
		      <div class="column is-1">
		        <figure class="image is-4by3">
		         <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
		       </figure>
		      </div>
		      <div class="column is-center">
		        <p class="title">{y.name}</p>
		      </div>
	      </div>
	      </Link>
	      )
	      })
		}
	}
		  
	</div>
	)
}
export default cartScreen