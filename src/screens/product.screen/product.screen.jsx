import React,{useState,useEffect} from 'react';
import {Link,} from "react-router-dom";
import {myLocalData,addToCart} from "../../helpers/redux"

const Product = (props) => {
	const {params}=props;
	const [isCart,setCart]=useState("hide");
	const addToCartRequest =(x) => {
		myLocalData.dispatch(addToCart(x))
		console.log(myLocalData.getState()['cart'])
	}
return(
	<div>
	    <div class="columns padding50">
	      <div class="column ">
	        <figure class="image is-4by3">
	         <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
	       </figure>
	      </div>
	      <div class="column is-center">
	        <p class="title">{params.productName}</p>
	        <p>No Details Available</p>
	        <div class="is-center">
		        <button class="button is-small">Buy Now</button>
				<button class="button is-small" onClick={() => {addToCartRequest(params.productId);setCart("")}}>Add To Cart <span className={isCart}> <i className={`fas fa-check `}></i></span></button>
		      </div>
		    </div>
	      </div>
	}
	}
		  
	</div>
	)
}
export default Product;