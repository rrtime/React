import Immutable,{Map, List} from 'immutable'
import * as util from './util'

export function initView(payload, utils){
	return ({reduce})=>{
		reduce('initView', 
			payload, 
			utils
		)
	}
}

export function getUtils(injectFuns, exps){
	return {
		getter: exps.getter(injectFuns)
	}
}


export function getter({getState}){
	return (path, propertys) =>{
		return util.getter(getState(), path, propertys)
	}
}

export function getterByField({getState}){
	return (fieldPath) =>{
		return util.getterByField(getState(), fieldPath)
	}	
}

export function lazyLoad(path, property){
	return ({reduce}) =>{
		//reduce('setter',  path, property, List())
	}
}

export function getSelectedRows(state, path){
	return util.getSelectedRows(state, path)
}


export function onFieldChange(path, oldValue, newValue){
	console.log(path + '-' + oldValue + '-' + newValue)
	return({reduce}) =>{
		reduce('onFieldChange', path, oldValue, newValue)
	}
}

export function onFieldFocus(path){
	return ({reduce}) =>{
		reduce('onFieldFocus', path)
	}
}

export function onEvent(eventName, option){
	return ({reduce, getState}) =>{
		//getChangeset(getState)
		reduce('onEvent', eventName, option)
	}	
}

export function clearMessage(){
	return ({reduce, getState}) =>{
		reduce('clearMessage')
	}	
}

export function validate(injectFuns, path){
	injectFuns.reduce('clearValidateResult', path)
	let oldState = injectFuns.getState()
	injectFuns.reduce('validate', path)
	let newState = injectFuns.getState()
	return oldState === newState
}

export function getJson(state, path){
	return util.getJson(state, path)
}

/*
function getChangeset(getState, path){
	let v = getState().getIn(['data','saleDelivery']),
		status = getState().getIn(['data','saleDelivery_runtime', 'status'])
	if(isChanged(status)){
		let result = getChangesetJson( v, status)
		alert(JSON.stringify(result))
	}
	else{
		alert('没更改')
	}

}

function getChangesetJson(value, status){
	if(value instanceof Map){
		let result = {id: value.get('id'), status}
		value.keySeq().forEach(k => {
			let rv = value.get(k+"_runtime"),
				s = calcStatus(status, rv? rv.get('status') : null),
				c = isChanged(s),
				v = rv? (rv.get('value')||value.get(k)) : null
			if(c) {
				result[k] = getChangesetJson(v, s)
			}
		})
		return result
	}
	else if(value instanceof List){
		let result = []
		value.forEach(v=>{
			let rv = v.get('_runtime'),
				s = calcStatus(status, rv ? rv.get('status') : null),
				c = isChanged(s)
			if(c){
				result.push(getChangesetJson(v, s))
			}
		})
		return result
	}
	else{
		return value
	}
}

function calcStatus(oldStatus, newStatus){
	if(oldStatus === 'deleted' || oldStatus === 'added') return oldStatus
	return newStatus
}

function isChanged(status){
	return !(!status || status === 'nochanged' || status === 'empty')
}

*/



