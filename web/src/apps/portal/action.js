import * as api from './api'
import Immutable from 'immutable'

export function addTab(name, href){
	return ( {reduce}) => {
		reduce('addTab', name, href)
	}
}

export function selectTab(href){
	return ( {reduce} ) =>{
		reduce('selectTab', href)
	}
}

export function removeTab(href){
	return ({reduce}) =>{
		reduce('removeTab', href)
	}
}


export function loadPortalData(){
	return ({reduce,post}) => {
		api.LoadPortalData(post).then(result=>{
			var menuitems = api.menus.concat(result.value.GetMenuTable);
			reduce('setMenus',  Immutable.fromJS(menuitems));
		});
	}
}
