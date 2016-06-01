import api from './api'

export function getFunctions(sysId, mId){
	return ({reduce})=>{
		api.getFunctions(sysId, mId, functions=>{
			reduce('getFunctionsSuccess', functions)
		})
	}
}

export function getData(sysId, mId){
	return ({reduce})=>{
		api.getData(sysId, mId, data=>{
			reduce('getDataSuccess', data)
		})
	}
}