import React from 'react'
import {AppLoader} from '../../appLoader'

export default class RootComponent extends React.Component{
	constructor(props){
		super(props)
		if(sessionStorage["root/logined"]=="1"){
			this.handleLoginSuccess();
		}
	}

	handleLoginSuccess(){
		this.props.auth(true)
		sessionStorage["root/logined"] = "1";
	}
	handleLogoutSucess(){
		this.props.auth(false)
		sessionStorage["root/logined"] = "0";
	}

	render(){
		let isLogined = this.props.payload.get('isLogined') || false
		return (isLogined ?
			<AppLoader path='apps/portalNew'
				onLogoutSucess = { ::this.handleLogoutSucess } />:

			<AppLoader path='apps/loginNew'
				ref='login'
				version='pro'
				onLoginSuccess= { ::this.handleLoginSuccess } />
	 	)
	}
}
