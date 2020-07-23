import React, { useState, useEffect } from 'react';
import {Link,} from "react-router-dom";
import Navbar from '../../components/nav';
import	{searchRequest} from '../../helpers/api'
// import {Spin} from 'antd';


const SearchScreen = props => {
	 const {params}=props;
	 const [q,setQ]=useState("");
	 useEffect(() => {    
		
	});
	 const [fetchResults, setResults]=useState([]);

	const handlerx = (e) => {
		setQ(e);
		if(e.length){
			searchRequest(e).then(
				(x) => {
					if(x.length){
						setResults(x)
					}else{
						setResults([]);
					}
				}
			)	
		}else{
			setResults([])
		}		
	}
	return(
	<div >
		{/*<Navbar location="search"  />*/}
		<div class="columns is-mobile">
			<div id="data" class="column is-10-desktop is-offset-1-desktop  has-text-centered is-10-tablet is-offset-1-tablet"> 
				<div class="columns mobilePaddingPatch is-mobile">
				  <p class=" column is-9-desktop is-8-mobile  ">
					<input class="input" type="text" placeholder="Search" onChange={e => handlerx(e.target.value)} />		
				  </p>
				  <p class=" column is-3">
				    <Link to="/home" class="button button is-warning is-rounded" style={{'marginRight':'0px'}}>
				      Cancel
				    </Link>
				  </p>
				</div>
				<div className="mobilePaddingPatch">
   				api is not connected
				</div>	
		    </div>

		</div>
	</div>
);}

export default SearchScreen;
