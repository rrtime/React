import React from 'react'
import Header from './component/header'
import Footer from './component/footer'
import LeftSlice from './component/leftslice'
import LoginForm from './component/loginForm'
import {Modal} from 'antd'

import styles from "./login.less"

/*
需求：
1、录入用户名密码，显示账套。
2、选账套、登录日期，点登录。


*/

export default class LoginComponent extends React.Component{
	constructor(props) {
    super(props);
    this.state = {
			visible: false,
			message: '',
			errorType:''
    }
 }

	onLoginErrorHandler(result,user,accNum){
		this.state.message = result.error.Message;
		this.state.errorType = result.error.Type;
		this.state.user = user;
		this.state.accNum = accNum;
		this.state.visible = true;
		this.setState(this.state);
	}
	handleOk(){
		this.state.visible = false;
		this.setState(this.state);
		if(this.state.errorType=="Ufida.T.SM.Login.DTO.LoginedException"){
			this.props.reLogin(this.state.user,this.state.accNum,this.props.onLoginSuccess);
		}else{
			this.props.onLoginSuccess();
		}
	}
	handleCancel(){
		this.state.visible = false;
		this.setState(this.state);
	}

	render(){
    return (
      <div className='login'>
        <Header version={this.props.version} />
        <main>
           <LeftSlice />
           <LoginForm {...this.props} onLoginError={this.onLoginErrorHandler.bind(this)}/>
        </main>
        <Footer />
				<Modal title="" visible={this.state.visible}
         onOk={this.handleOk.bind(this)} onCancel={this.handleCancel.bind(this)}
         okText="确定" cancelText="取消">
				 {this.state.message}
       </Modal>
      </div>
    )
	}
}
