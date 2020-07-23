import { createStore } from "redux";
const initialState = {
  
};
const ADD_ARTICLE = "ADD_ARTICLE";
function rootReducer(state = initialState, action) {

  // if (action.type === 'token') {
  	if(action.type==='cart'){
  		let tmp=[]
  		if(state['cart']!=undefined)
  			tmp=[...state['cart']];
  		tmp.push(action.payload)
  		state[action.type]=tmp;
  		return state;
  	}
    state[action.type]=action.payload;
  // }
  return state;
}

export const myLocalData = createStore(rootReducer);
export function addProducts(payload) {
  return { type: 'products', payload };
}
export function addUserData(payload){
	return { type: 'userData', payload };	
}
export function getToken(){

}
export function addToCart(payload){
	return { type: 'cart', payload }; 
}
export function getCartProducts(){
	if((myLocalData.getState() && myLocalData.getState()['cart'])){
		return myLocalData.getState()['cart'];
	}else{
		return [];
	}
}
export const getProducts = () => {
	if((myLocalData.getState() && myLocalData.getState()['products'] && myLocalData.getState()['products']['data'])){
		return myLocalData.getState()['products']['data'];
	}else{
		return [];
	}
}
