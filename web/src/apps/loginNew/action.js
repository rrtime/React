import * as da from '../dynamicUI/action'
import Immutable,{Map} from 'immutable'
import * as api from './api'

export function initView() {
	return injectFuns => {
		let meta = {
			name: 'login',
			childrens: [{
				name: 'user',
				title: '用户名',
				type: 'string',
				showLabel:'false',
				bindField: 'user',
				validate:{
					rules:[{
						required:true,
						message:'不能为空'
					}]
				}
			}, {
				name: 'password',
				title: '密码',
				type: 'string',
				component: 'Password',
				showLabel:'false',
				bindField: 'password'
			}]
		}

		let data = {
			user: '',
			password: ''
		}

		let utils = da.getUtils(injectFuns, exports)
		da.initView({meta, data}, utils)(injectFuns)
	}
}

export function login(callback){
	return injectFuns => {
		let validateSuccess = da.validate(injectFuns, 'login')
		if(!validateSuccess)
			return

		let user = da.getter(injectFuns)('login.user', 'value'),
			password = da.getter(injectFuns)('login.password', 'value')

		api.CheckPassword(injectFuns.post,user,password,'000001','2016-5-24')
		.then(result=>{
			if(result && result.error){
				let onOk = ()=>{
					da.clearMessage()(injectFuns)
					api.ReLogin(injectFuns.post, user, '000001').then(r=>{
						callback({result:true})
					}).catch(e=>{})

				}

				let clearMsg = ()=>{
					da.clearMessage()(injectFuns)
				}

				
				if(result.error.Type === 'Ufida.T.SM.Login.DTO.OneBrowserOneProductException' || result.error.Type === 'Ufida.T.SM.Login.DTO.LoginedException')
					injectFuns.reduce('setMessage', 'confirm', '登录', result.error.Message, onOk, clearMsg)
				else
					injectFuns.reduce('setMessage', 'error', '登录', result.error.Message, clearMsg)
			}
			else{
				callback({result:true})
			}
			
		})
		.catch(err=>{
		})

/*
		if(user === '1' && password === '1'){
			callback({result:true})
		}
		else
			injectFuns.reduce('setMessage', 'error', '登录错误', '用户名密码不正确（1，1）')
*/
	}
}


export function getter(injectFuns){
	return (path, property) =>{
		return da.getter(injectFuns)(path, property)
	}
}

export function onFieldChange(path, oldValue, newValue){
	return injectFuns=>{
		/*
		if(path === 'login.user'){
			if(newValue !== '1' && typeof newValue !== undefined && newValue !== null && newValue !== ''){
				injectFuns.reduce('setValidateResult',  path, '用户名不存在')
			}
			else
				injectFuns.reduce('clearValidateResult',  path)
		}*/
		da.onFieldChange(path, oldValue, newValue)(injectFuns)
	}
}

Object.assign(exports, {...da, ...exports})