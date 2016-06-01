import React,{ Component,PropTypes } from 'react'
import Header from './component/header'
import Footer from './component/footer'
import Left from './component/left'
import Main from './component/main'
import Banner from './component/banner'
import styles from "./loginNew.less"
import {MessageBox} from '../dynamicUI/MessageBox'

export default class LoginNewComponent extends Component {
	
	static defaultProps = {
      	prefixCls: 'login'
  	}

  	constructor(props){
  		super(props)
	}

  	componentDidMount() {
  		this.props.initView()
  	}

  	render() {
  		if(!this.props.payload || !this.props.payload.get('utils') ) 
           return (<div></div>)

       	let message = this.props.payload.getIn(['global', 'message'])

	    return (
	    	<div className={this.props.prefixCls}>
	 			<Header  {...this.props}/>
	        	<main>
	           		<Left  {...this.props}/>
	           		<Main  {...this.props}/>
	        	</main>
	        	<Footer  {...this.props}/>

	        	{MessageBox(message)}
	        	
	     	</div>
	    )
	 }
}
/*
<MessageModal {...this.props} onOk={this.props.clearMessage} />
<Main  {...this.props}/>
 */