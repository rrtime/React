import * as api from './api'

export function login (user,pwd,accNum,loginDate,cb){
	return ({reduce, post})=>{

		api.CheckPassword(post,user,pwd,accNum,loginDate)
		.then(result=>{
			 cb&&cb(result);
		})
		.catch(err=>{

		})
	}
}

export function reLogin(user,accNum,cb){
	return ({reduce, post})=>{

		api.ReLogin(post,user,accNum)
		.then(result=>{
			 cb&&cb(result);
		})
		.catch(err=>{

		})
	}
}


export function loadAccounts (user,pwd){
	return ({reduce, post})=>{

		api.GetAccountsByUser(post,user,pwd).then(result=>{
			var accounts = [];
			if(result.value)result.value.map(v=>{
				if(v.length<3)return;
				accounts.push({id:v[0],code:v[1],text:v[2]})
			})
			reduce("set","accountList",accounts);
			reduce("set","curAccount",accounts[0]);
		})
		.catch(err=>{
			reduce("set","accountList",[]);
		})

	}
}

export function set(field,value){
	return ({reduce})=>{
		reduce("set",field,value);
	}
}
